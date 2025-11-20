import { ThemeProvider } from "@/components/layouts/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { halenoir } from "@/fonts";
import { routing } from "@/i18n/routing";
import { cn, getBaseUrl } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../../styles/globals.css";
import { PreloaderWrapper } from "@/components/ui/preloader-wrapper";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "Metadata" });

	return {
		title: {
			default: t("title"),
			template: `%s | ${t("brandName")}`,
		},
		description: t("description"),
		keywords: t("keywords").split(", "),
		authors: [{ name: "Atik Import Export" }],
		creator: "Atik Import Export",
		publisher: "Atik Import Export",
		formatDetection: {
			email: false,
			telephone: false,
			address: false,
		},
		metadataBase: new URL(getBaseUrl()),
		alternates: {
			canonical: getBaseUrl(),
			languages: {
				en: `${getBaseUrl()}/en`,
				tr: `${getBaseUrl()}/tr`,
			},
		},
		openGraph: {
			title: t("title"),
			description: t("description"),
			url: getBaseUrl(),
			siteName: "Atik Import Export",
			images: [
				{
					url: "/web-app-manifest-512x512.png",
					width: 1200,
					height: 630,
					alt: t("title"),
				},
			],
			locale: locale === "tr" ? "tr_TR" : "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: [
				{
					url: "/web-app-manifest-512x512.png",
					width: 1200,
					height: 630,
					alt: t("title"),
				},
			],
		},
		icons: {
			icon: [
				{
					url: "/web-app-manifest-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					url: "/web-app-manifest-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
			],
			apple: [
				{
					url: "/apple-icon.png",
					sizes: "180x180",
					type: "image/png",
				},
			],
			other: [
				{
					rel: "shortcut icon",
					url: "/favicon.ico",
				},
			],
		},
		manifest: "/manifest.json",
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		category: "Logistics",
		other: {
			"og:logo": "/web-app-manifest-512x512.png",
		},
		verification: {
			google:
				"google-site-verification=ZVuwP6pq2K2iuqdUqTbpXW-Zb800mT40ViR0YRP0ZDE",
		},
	};
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

type RootLayoutProperties = {
	readonly children: ReactNode;
	readonly params: Promise<{
		locale: string;
	}>;
};

export default async function RootLayout({
	children,
	params,
}: RootLayoutProperties) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages();
	const t = await getTranslations({ locale, namespace: "Metadata" });

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#f24405" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="apple-mobile-web-app-title" content="Atik Import Export" />
				<link rel="apple-touch-icon" href="/apple-icon.png" />
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:image" content="/web-app-manifest-512x512.png" />
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />
				<meta
					property="twitter:image"
					content="/web-app-manifest-512x512.png"
				/>
			</head>
			<body className={cn(halenoir.className, "scroll-smooth antialiased")}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<NextIntlClientProvider messages={messages}>
						<PreloaderWrapper>
							<Toaster />
							{children}
						</PreloaderWrapper>
					</NextIntlClientProvider>
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
