import { URL } from "node:url";
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
  };
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
