import { ContactForm } from "@/components/features/contact/contact-form";
import Footer from "@/components/features/landing/footer";
import { BackLink } from "@/components/features/shared/back-link";
import { ATIK_OFFICE_LOCATIONS } from "@/constants/contact.constant";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconPhoneCall,
} from "@tabler/icons-react";
import type { Metadata, ResolvingMetadata } from "next";
import { createTranslator, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = createTranslator({ locale, messages, namespace: "ContactPage" });
  return {
    title: t("meta.title", { default: "Contact Us" }),
    description: t("meta.description", {
      default: "Contact us for any questions or inquiries.",
    }),
  };
}

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="w-full h-full">
      <div className="w-full h-full py-10">
        <BackLink />
        <div className="px-4 max-w-7xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              <IconPhoneCall className="h-4 w-4 sm:h-5 sm:w-5" />
              {t("contact")}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto px-4">
              {t("description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl font-semibold mb-8">
                {t("sendUsAMessage")}
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8">
                {t("ourGlobalPresence")}
              </h2>
              <div className="space-y-8 mb-12">
                {ATIK_OFFICE_LOCATIONS.map((office, index) => (
                  <div key={office.id}>
                    <h3 className="font-semibold text-lg mb-3">
                      {t(`officeLocations.${office.id}.name`)}
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <IconMapPin className="w-4 h-4" />
                        <span className="text-sm">
                          {t(`officeLocations.${office.id}.addressLines`)}
                        </span>
                      </div>
                      {office.phone && (
                        <div className="flex items-center gap-2">
                          <IconPhone className="w-4 h-4" />
                          <span className="text-sm">{office.phone}</span>
                        </div>
                      )}
                      {office.email && (
                        <div className="flex items-center gap-2">
                          <IconMail className="w-4 h-4" />
                          <span className="text-sm">{office.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
