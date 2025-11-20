import AboutUs from "@/components/features/landing/about-us";
import ContactUs from "@/components/features/landing/contact";
import Distributor from "@/components/features/landing/distributor";
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

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "HomePage.meta" });
	const tMetadata = await getTranslations({ locale, namespace: "Metadata" });

	return generatePageMetadata({
		title: t("title"),
		description: t("description"),
		keywords: tMetadata("keywords")
			? tMetadata("keywords")
					.split(",")
					.map((k: string) => k.trim())
			: [],
		url: `/${locale}`,
		locale: locale === "tr" ? "tr_TR" : "en_US",
		image: {
			url: "/web-app-manifest-512x512.png",
			width: 1200,
			height: 630,
			alt: t("title"),
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
			<Distributor />
			<AboutUs />
			<Tesimonials />
			<Stats />
			<TeamMembers />
			<ContactUs />
			<Footer />
		</main>
	);
}
