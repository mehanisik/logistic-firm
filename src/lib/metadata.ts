import type { Metadata } from "next";
import { getBaseUrl } from "./utils";

interface GenerateMetadataOptions {
	title?: string;
	description?: string;
	keywords?: string | string[];
	image?: {
		url?: string;
		width?: number;
		height?: number;
		alt?: string;
	};
	url?: string;
	siteName?: string;
	noIndex?: boolean;
	type?: "website" | "article";
	publishedTime?: string;
	modifiedTime?: string;
	authors?: string[];
	locale?: string;
}

export function generatePageMetadata(
	options: GenerateMetadataOptions,
): Metadata {
	const {
		title,
		description,
		keywords,
		image,
		url,
		siteName = "Atik Import Export",
		noIndex = false,
		type = "website",
		publishedTime,
		modifiedTime,
		authors,
		locale = "en_US",
	} = options;

	const baseUrl = getBaseUrl();
	const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
	const imageUrl = image?.url || `${baseUrl}/web-app-manifest-512x512.png`;
	const imageWidth = image?.width || 1200;
	const imageHeight = image?.height || 630;
	const imageAlt = image?.alt || title || siteName;

	const keywordsArray = Array.isArray(keywords)
		? keywords
		: keywords
			? keywords.split(",").map((k) => k.trim())
			: undefined;

	const metadata: Metadata = {
		metadataBase: new URL(baseUrl),
		title: title
			? {
					default: title,
					template: "%s | Atik Import Export",
				}
			: undefined,
		description,
		keywords: keywordsArray,
		alternates: {
			canonical: url || "/",
			languages: {
				en: `${baseUrl}/en${url || ""}`,
				tr: `${baseUrl}/tr${url || ""}`,
			},
		},
		openGraph: {
			title: title || siteName,
			description,
			url: fullUrl,
			siteName,
			locale,
			type,
			images: [
				{
					url: imageUrl,
					width: imageWidth,
					height: imageHeight,
					alt: imageAlt,
				},
			],
			...(publishedTime && { publishedTime }),
			...(modifiedTime && { modifiedTime }),
			...(authors && { authors: authors.map((name) => ({ name })) }),
		},
		twitter: {
			card: "summary_large_image",
			title: title || siteName,
			description,
			images: [
				{
					url: imageUrl,
					width: imageWidth,
					height: imageHeight,
					alt: imageAlt,
				},
			],
		},
		robots: noIndex
			? {
					index: false,
					follow: false,
				}
			: {
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
		other: {
			"fb:app_id": process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "",
		},
	};

	return metadata;
}
