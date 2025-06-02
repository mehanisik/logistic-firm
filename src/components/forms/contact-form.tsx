"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IconMessageCircle } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm({ className }: { className?: string }) {
  const t = useTranslations("Contact");
  const [loading, setLoading] = useState(false);
  const [lastFormData, setLastFormData] = useState<FormData | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      contactFormSchema.shape[field].parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors[0]?.message;
        setErrors((prev) => ({ ...prev, [field]: fieldError }));
        return false;
      }
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormData, value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const newErrors: typeof errors = {};
      for (const err of validationResult.error.errors) {
        const field = err.path[0] as keyof ContactFormData;
        newErrors[field] = err.message;
      }
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const formDataToSend = new FormData(event.currentTarget);
    setLastFormData(formDataToSend);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      toast.success(
        t("Thank you for contacting us! We will get back to you soon."),
      );
      event.currentTarget.reset();
      setFormData({ name: "", email: "", company: "", message: "" });
      setErrors({});
    } catch (error) {
      toast.error(
        t("There was an error submitting the form. Please try again."),
        {
          action: {
            label: t("Resend"),
            onClick: handleResend,
          },
        },
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!lastFormData) return;
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: lastFormData,
      });
      if (!res.ok) throw new Error("Failed to send message");
      toast.success(
        t("Thank you for contacting us! We will get back to you soon."),
      );
    } catch {
      toast.error(
        t("There was an error submitting the form. Please try again."),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      className={
        className
          ? className
          : "w-full p-8 border border-border bg-background/90 shadow-lg"
      }
    >
      <CardHeader className="p-0 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <IconMessageCircle className="w-6 h-6 text-primary" />
          <span className="font-semibold text-xl text-foreground">
            {t("sendUsAMessage")}
          </span>
        </div>
        <CardTitle className="text-base font-medium text-muted-foreground">
          {t("quickContact")}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          noValidate
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">{t("fullName")}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={(e) => validateField("name", e.target.value)}
              placeholder={t("namePlaceholder")}
              aria-invalid={!!errors.name}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <span className="text-destructive text-xs mt-1">
                {errors.name}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">{t("emailAddress")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={(e) => validateField("email", e.target.value)}
              placeholder={t("emailPlaceholder")}
              aria-invalid={!!errors.email}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <span className="text-destructive text-xs mt-1">
                {errors.email}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="company">{t("companyNameOptional")}</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onBlur={(e) => validateField("company", e.target.value)}
              placeholder={t("companyPlaceholder")}
              aria-invalid={!!errors.company}
              className={errors.company ? "border-destructive" : ""}
            />
            {errors.company && (
              <span className="text-destructive text-xs mt-1">
                {errors.company}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">{t("yourMessage")}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={(e) => validateField("message", e.target.value)}
              rows={4}
              placeholder={t("messagePlaceholder")}
              aria-invalid={!!errors.message}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <span className="text-destructive text-xs mt-1">
                {errors.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            className="w-full mt-2"
            disabled={loading || Object.keys(errors).length > 0}
          >
            {loading ? t("Sending...") : t("submitYourInquiry")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
