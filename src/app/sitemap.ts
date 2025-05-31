import { getBaseUrl } from "@/lib/utils"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	const locales = ["en", "tr"] as const

	return [
		{
			url: getBaseUrl(),
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		...locales.map((locale) => ({
			url: `${getBaseUrl()}/${locale}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	]
}
