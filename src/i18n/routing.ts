import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "tr"],
	defaultLocale: "tr",
	localeDetection: true,
	localePrefix: "as-needed",
	pathnames: {
		"/": "/",
		"/about-us": {
			en: "/about-us",
			tr: "/hakkimizda",
		},
		"/services": {
			en: "/services",
			tr: "/hizmetler",
		},
		"/our-brands": {
			en: "/our-brands",
			tr: "/markalarimiz",
		},
		"/contact-us": {
			en: "/contact-us",
			tr: "/iletisim",
		},
	},
});
