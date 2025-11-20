import BrandsPage from "@/components/features/brands/brands-grid";
import Footer from "@/components/features/landing/footer";
import { BackLink } from "@/components/features/shared/back-link";
import { BRANDS } from "@/constants/brands.constant";
import { generatePageMetadata } from "@/lib/metadata";
import { SectionLayout } from "@/components/ui/section-layout";
import { IconLayoutGrid } from "@tabler/icons-react";
import type { Metadata } from "next";
import { createTranslator } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
	params: Promise<{ locale: string }>;
};

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "BrandsPage.meta" });

	return generatePageMetadata({
		title: t("title"),
		description: t("description"),
		keywords: t("keywords").split(", "),
		url: `/${locale}/our-brands`,
		locale: locale === "tr" ? "tr_TR" : "en_US",
		image: {
			url: "/web-app-manifest-512x512.png",
			width: 1200,
			height: 630,
			alt: t("title"),
		},
	});
}

export default async function OurBrandsPage({ params }: Props) {
	const { locale } = await params;
	const messages = await getMessages({ locale });
	const t = createTranslator({ locale, messages, namespace: "BrandsPage" });

	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10 selection:text-primary">
			{}
			<header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
				<div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
					{}
					<div className="flex items-center gap-4 sm:gap-6">
						<BackLink />
						<div className="hidden sm:block h-4 w-[1px] bg-border" />
						<h1 className="text-sm font-semibold tracking-tight text-foreground">
							{t("meta.title")}
						</h1>
					</div>

					{}
					{}
				</div>
			</header>

			{}
			{}
			<main className="flex-1 w-full">
				<SectionLayout
					className="py-4 sm:py-8"
					containerClassName="px-4 sm:px-6 lg:px-8"
				>
					{}
					<div className="mb-8 sm:mb-12 max-w-2xl">
						<p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
							{t("meta.description")}
						</p>
					</div>
					{}
					<BrandsPage />
				</SectionLayout>
			</main>

			{}
			<div className="border-t border-border">
				<Footer />
			</div>
		</div>
	);
}
