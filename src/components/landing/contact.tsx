"use client";

import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "@/components/ui/globe";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionLayout } from "@/components/ui/section-layout";
import { Textarea } from "@/components/ui/textarea";
import { ATIK_OFFICE_LOCATIONS } from "@/constants/contact.constant";
import {
  IconHeadset,
  IconMapPin,
  IconMessageCircle,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import type { FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactUs() {
  const t = useTranslations("Contact");
  const [loading, setLoading] = useState(false);
  const [lastFormData, setLastFormData] = useState<FormData | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

  const offices = ATIK_OFFICE_LOCATIONS.map((office) => ({
    ...office,
    name: t(`officeLocations.${office.id}.name`),
    address: t(`officeLocations.${office.id}.addressLines`),
  }));

  return (
    <SectionLayout className="py-16" id="contact-us">
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <IconHeadset className="w-7 h-7 text-primary" /> {t("letsConnect")}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
        <div className="md:col-span-1 flex flex-col gap-4">
          <Card className="h-full p-6 border border-border bg-background/90 shadow-md flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <IconMapPin className="w-6 h-6 text-primary" />
              <span className="font-semibold text-lg text-foreground">
                {t("ourGlobalPresence")}
              </span>
            </div>
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.id} className="flex items-start gap-3">
                  <IconMapPin
                    className={`w-5 h-5 mt-1 ${office.isHub ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">
                      {office.name}
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-pre-line">
                      {office.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div className="relative w-full aspect-square max-w-xs mx-auto flex items-center justify-center">
            <Globe />
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col">
          <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
}
