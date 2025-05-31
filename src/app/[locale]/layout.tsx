import { ThemeProvider } from "@/components/theme-provider"
import { routing } from "@/i18n/routing"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, ResolvingMetadata } from "next"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { jsonLdScriptProps } from "react-schemaorg"
import type { WebSite } from "schema-dts"
import "../globals.css"
import { Toaster } from "@/components/ui/sonner"
import { getBaseUrl } from "@/lib/utils"
import localFont from "next/font/local"
import type { ReactNode } from "react"

const halenoirCompactFont = localFont({
	src: "../../fonts/halenoir-compact.woff2",
})

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	setRequestLocale(locale)

	const t = await getTranslations({ locale, namespace: "Metadata" })
	return (
		<html lang={locale} dir="ltr" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" type="image/svg+xml" href="/icon0.svg" />
				<link rel="icon" type="image/png" href="/icon1.png" />
				<link rel="apple-touch-icon" href="/apple-icon.png" />
				<meta name="theme-color" content="#f24405" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="canonical" href={getBaseUrl()} />
				<link rel="alternate" hrefLang="x-default" href={getBaseUrl()} />
				<link rel="alternate" hrefLang="en" href={`${getBaseUrl()}/en`} />
				<meta name="keywords" content={t("keywords")} />
				<meta name="author" content="Atik Import Export" />
				<meta name="robots" content="index, follow" />
				<script
					{...jsonLdScriptProps<WebSite>({
						"@context": "https://schema.org",
						"@type": "WebSite",
						name: t("title"),
						description: t("description"),
						url: getBaseUrl(),
						inLanguage: locale,
					})}
				/>
			</head>
			<body className={`${halenoirCompactFont.className} antialiased scroll-smooth`} suppressHydrationWarning>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<NextIntlClientProvider>
						<Toaster />
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}

const locales = ["en", "tr"] as const

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }))
}

type Props = {
	params: Promise<{ locale: string }>
}
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "Metadata" })

	return {
		title: t("title"),
		description: t("description"),
		keywords: t("keywords"),
		openGraph: {
			title: t("title"),
			description: t("description"),
			url: getBaseUrl(),
			siteName: "Atik Import Export",
			images: [
				{
					url: "/apple-touch-icon.png",
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
			images: ["/apple-touch-icon.png"],
			creator: "@atikimportexport",
		},
		alternates: {
			canonical: getBaseUrl(),
			languages: {
				en: `${getBaseUrl()}/en`,
				tr: `${getBaseUrl()}/tr`,
			},
		},
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
	}
}
