import { URL } from "node:url";
import AboutUs from "@/components/landing/about-us";
import ContactUs from "@/components/landing/contact";
import FeatureAccordion from "@/components/landing/feature-accordion";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import LogoCloud from "@/components/landing/logo-cloud";
import Services from "@/components/landing/services";
import Stats from "@/components/landing/stats";
import Summary from "@/components/landing/summary";
import TeamMembers from "@/components/landing/team";
import Tesimonials from "@/components/landing/testimonial";
import { getBaseUrl } from "@/lib/utils";
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
  const t = (key: string) =>
    messages.Metadata?.[key] || messages.Metadata?.[key] || "";
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL(getBaseUrl()),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: getBaseUrl(),
      images: [
        {
          url: "/apple-icon.png",
          width: 180,
          height: 180,
          alt: t("title"),
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/apple-icon.png"],
    },
  };
}

export default function HomePage() {
  return (
    <main>
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
