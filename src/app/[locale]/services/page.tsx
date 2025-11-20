import ServicesPage from "@/components/features/services/services-page";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { createTranslator } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
	params: Promise<{ locale: string }>;
};

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "ServicesPage.meta" });
	const tMetadata = await getTranslations({ locale, namespace: "Metadata" });

	return generatePageMetadata({
		title: t("title"),
		description: t("description"),
		keywords: tMetadata("keywords")
			? tMetadata("keywords")
					.split(",")
					.map((k: string) => k.trim())
			: [],
		url: `/${locale}/services`,
		locale: locale === "tr" ? "tr_TR" : "en_US",
		image: {
			url: "/web-app-manifest-512x512.png",
			width: 1200,
			height: 630,
			alt: t("title"),
		},
	});
}

export default function Page() {
	return <ServicesPage />;
}
