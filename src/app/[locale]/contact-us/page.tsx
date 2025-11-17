import { ContactForm } from "@/components/features/contact/contact-form";
import Footer from "@/components/features/landing/footer";
import { BackLink } from "@/components/features/shared/back-link";
import { ATIK_OFFICE_LOCATIONS } from "@/constants/contact.constant";
import { generatePageMetadata } from "@/lib/metadata";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconPhoneCall,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import { createTranslator, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = createTranslator({ locale, messages, namespace: "ContactPage" });
  const localeCode = locale === "tr" ? "tr_TR" : "en_US";

  const defaultTitle = locale === "tr" ? "İletişim" : "Contact Us";
  const defaultDescription =
    locale === "tr"
      ? "Atik İthalat İhracat ile iletişime geçin. Uluslararası taşımacılık, kamyon bazlı çözümler veya temizlik ve bakım ürünlerimiz hakkında bilgi alın."
      : "Get in touch with Atik Import Export. Contact us for international transportation, truck-based solutions, or information about our cleaning and care products.";
  const defaultKeywords =
    locale === "tr"
      ? [
          "Atik İthalat İhracat iletişim",
          "lojistik iletişim",
          "İstanbul lojistik",
          "Varşova lojistik",
          "Tahran lojistik",
          "uluslararası ticaret iletişim",
          "taşımacılık sorgulama",
        ]
      : [
          "contact Atik Import Export",
          "logistics contact",
          "Istanbul logistics",
          "Warsaw logistics",
          "Tehran logistics",
          "international trade contact",
          "transportation inquiry",
        ];

  return generatePageMetadata({
    title: t("meta.title", { default: defaultTitle }),
    description: t("meta.description", { default: defaultDescription }),
    keywords: defaultKeywords,
    url: `/${locale}/contact-us`,
    locale: localeCode,
    image: {
      url: "/web-app-manifest-512x512.png",
      width: 1200,
      height: 630,
      alt:
        locale === "tr"
          ? "Atik İthalat İhracat İletişim"
          : "Contact Atik Import Export",
    },
  });
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
