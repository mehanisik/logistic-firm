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

export function ContactForm({ className }: { className?: string }) {
  const t = useTranslations("Contact");
  const [loading, setLoading] = useState(false);
  const [lastFormData, setLastFormData] = useState<FormData | null>(null);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [fields, setFields] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!fields.name.trim()) newErrors.name = t("validation.nameRequired");
    else if (fields.name.trim().length < 2)
      newErrors.name = t("validation.nameMin");

    if (!fields.email.trim()) newErrors.email = t("validation.emailRequired");
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email.trim()))
      newErrors.email = t("validation.emailInvalid");

    if (!fields.message.trim())
      newErrors.message = t("validation.messageRequired");
    else if (fields.message.trim().length < 10)
      newErrors.message = t("validation.messageMin");

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const formData = new FormData(event.currentTarget);
    setLastFormData(formData);
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to send message");
      toast.success(
        t("Thank you for contacting us! We will get back to you soon."),
      );
      event.currentTarget.reset();
      setFields({ name: "", email: "", company: "", message: "" });
    } catch {
      toast.error(
        t("There was an error submitting the form. Please try again."),
        {
          action: {
            label: t("Resend"),
            onClick: handleResend,
          },
        },
      );
    }
    setLoading(false);
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
    }
    setLoading(false);
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
              value={fields.name}
              onChange={handleChange}
              placeholder={t("namePlaceholder")}
              required
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
              value={fields.email}
              onChange={handleChange}
              placeholder={t("emailPlaceholder")}
              required
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
              value={fields.company}
              onChange={handleChange}
              placeholder={t("companyPlaceholder")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">{t("yourMessage")}</Label>
            <Textarea
              id="message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              rows={4}
              placeholder={t("messagePlaceholder")}
              required
            />
            {errors.message && (
              <span className="text-destructive text-xs mt-1">
                {errors.message}
              </span>
            )}
          </div>
          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? t("Sending...") : t("submitYourInquiry")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
