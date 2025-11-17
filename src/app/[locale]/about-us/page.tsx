import AboutUs from "@/components/features/about/about-page";
import Footer from "@/components/features/landing/footer";
import { BackLink } from "@/components/features/shared/back-link";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { createTranslator, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = createTranslator({ locale, messages, namespace: "AboutUsPage" });
  const localeCode = locale === "tr" ? "tr_TR" : "en_US";

  const defaultTitle = locale === "tr" ? "Hakkımızda" : "About Us";
  const defaultDescription =
    locale === "tr"
      ? "Şirketimiz, misyonumuz ve değerlerimiz hakkında daha fazla bilgi edinin."
      : "Learn more about our company, mission, and values.";
  const defaultKeywords =
    locale === "tr"
      ? [
          "Atik İthalat İhracat",
          "hakkımızda",
          "lojistik şirketi",
          "uluslararası ticaret",
          "İstanbul lojistik",
          "küresel taşımacılık",
          "temizlik ürünleri",
          "bakım ürünleri",
        ]
      : [
          "Atik Import Export",
          "about us",
          "logistics company",
          "international trade",
          "Istanbul logistics",
          "global transportation",
          "cleaning products",
          "care products",
        ];

  return generatePageMetadata({
    title: t("meta.title", { default: defaultTitle }),
    description: t("meta.description", { default: defaultDescription }),
    keywords: defaultKeywords,
    url: `/${locale}/about-us`,
    locale: localeCode,
    image: {
      url: "/web-app-manifest-512x512.png",
      width: 1200,
      height: 630,
      alt:
        locale === "tr"
          ? "Atik İthalat İhracat Hakkında"
          : "About Atik Import Export",
    },
  });
}

export default function AboutUsPage() {
  const t = useTranslations("AboutUsPage");

  return (
    <div className="w-full h-full">
      <div className="w-full h-full py-10">
        <BackLink />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}
