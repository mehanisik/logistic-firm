import AboutUs from "@/components/features/landing/about-us";
import ContactUs from "@/components/features/landing/contact";
import FeatureAccordion from "@/components/features/landing/feature-accordion";
import Footer from "@/components/features/landing/footer";
import Hero from "@/components/features/landing/hero";
import LogoCloud from "@/components/features/landing/logo-cloud";
import Services from "@/components/features/landing/services";
import Stats from "@/components/features/landing/stats";
import Summary from "@/components/features/landing/summary";
import TeamMembers from "@/components/features/landing/team";
import Tesimonials from "@/components/features/landing/testimonial";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (
    await import(`../../../dictionary/${locale}.json`).catch(
      () => import("../../../dictionary/en.json"),
    )
  ).default;
  const metadata = messages.Metadata || {};
  const localeCode = locale === "tr" ? "tr_TR" : "en_US";

  const defaultTitle =
    locale === "tr"
      ? "Atik İthalat İhracat – Global Ticaret ve Taşımacılık"
      : "Atik Import Export – Global Trade & Transportation";
  const defaultDescription =
    locale === "tr"
      ? "Atik İthalat İhracat, güvenilir uluslararası taşımacılık ve temizlik ve bakım ürünleri için özel çözümlerle küresel pazarları birbirine bağlıyor. Global ticaret için güvenilir ortağınız."
      : "Atik Import Export connects global markets through reliable international transportation and specialized solutions for cleaning and care products. Your partner for global trade.";
  const defaultKeywords =
    locale === "tr"
      ? [
          "Atik İthalat İhracat",
          "uluslararası ticaret",
          "uluslararası taşımacılık",
          "temizlik ürünleri",
          "bakım ürünleri",
          "ithalat ihracat",
          "kamyon taşımacılığı",
          "global tedarik zinciri",
          "İstanbul ticaret",
          "Varşova ticaret",
          "Tahran ticaret",
        ]
      : [
          "Atik Import Export",
          "international trade",
          "international transportation",
          "cleaning products",
          "care products",
          "import export",
          "truck transportation",
          "global supply chain",
          "Istanbul trade",
          "Warsaw trade",
          "Tehran trade",
        ];

  return generatePageMetadata({
    title: metadata.title || defaultTitle,
    description: metadata.description || defaultDescription,
    keywords: metadata.keywords
      ? metadata.keywords.split(",").map((k: string) => k.trim())
      : defaultKeywords,
    url: `/${locale}`,
    locale: localeCode,
    image: {
      url: "/web-app-manifest-512x512.png",
      width: 1200,
      height: 630,
      alt:
        locale === "tr"
          ? "Atik İthalat İhracat - Global Ticaret ve Taşımacılık"
          : "Atik Import Export - Global Trade & Transportation",
    },
  });
}

export default async function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <LogoCloud />
      <Summary />
      <FeatureAccordion />
      <Services />
      <AboutUs />
      <Tesimonials />
      <Stats />
      <TeamMembers />
      <ContactUs />
      <Footer />
    </main>
  );
}
