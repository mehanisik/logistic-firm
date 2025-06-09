"use client";

import { Card } from "@/components/ui/card";
import { Globe } from "@/components/ui/globe";
import { SectionLayout } from "@/components/ui/section-layout";
import { ATIK_OFFICE_LOCATIONS } from "@/constants/contact.constant";
import { IconMapPin } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { ContactForm } from "../contact/contact-form";

export default function ContactUs() {
  const t = useTranslations("Contact");

  const offices = ATIK_OFFICE_LOCATIONS.map((office) => ({
    ...office,
    name: t(`officeLocations.${office.id}.name`),
    address: t(`officeLocations.${office.id}.addressLines`),
  }));

  return (
    <SectionLayout
      id="contact"
      className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      badge={t("contact")}
    >
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 text-center">
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
        <div className="md:col-span-1 flex flex-col gap-4 sm:gap-6">
          <Card className="h-full p-4 sm:p-5 md:p-6 border border-border bg-background/90 shadow-md flex flex-col">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <IconMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="font-semibold text-base sm:text-lg text-foreground">
                {t("ourGlobalPresence")}
              </span>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <IconMapPin
                    className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 ${office.isHub ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-foreground mb-0.5 sm:mb-1">
                      {office.name}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground whitespace-pre-line">
                      {office.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-xs mx-auto flex items-center justify-center">
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
