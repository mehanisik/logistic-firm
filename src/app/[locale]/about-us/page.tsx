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

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "AboutUsPage.meta" });
	const tMetadata = await getTranslations({ locale, namespace: "Metadata" });

	return generatePageMetadata({
		title: t("title"),
		description: t("description"),
		keywords: tMetadata("keywords")
			? tMetadata("keywords")
					.split(",")
					.map((k: string) => k.trim())
			: [],
		url: `/${locale}/about-us`,
		locale: locale === "tr" ? "tr_TR" : "en_US",
		image: {
			url: "/web-app-manifest-512x512.png",
			width: 1200,
			height: 630,
			alt: t("title"),
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
