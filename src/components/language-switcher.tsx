"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

const languageDetails = [
	{
		code: "en",
		label: "EN",
		icon: <Image src="/images/us.svg" alt="English" width={18} height={18} />,
	},
	{
		code: "tr",
		label: "TR",
		icon: <Image src="/images/tr.svg" alt="Turkish" width={18} height={18} />,
	},
] as const

interface Language {
	code: string
	label: string
	icon: React.ReactNode
}

type Locale = (typeof languageDetails)[number]["code"]

export function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()
	const [currentLocale, setCurrentLocale] = useState<Locale>("en")

	useEffect(() => {
		const cookieLocale = document.cookie
			.split("; ")
			.find((row) => row.startsWith("NEXT_LOCALE="))
			?.split("=")[1] as Locale | undefined

		const urlLocale = pathname.split("/")[1] as Locale
		const validUrlLocale = languageDetails.find((lang) => lang.code === urlLocale)

		if (validUrlLocale) {
			setCurrentLocale(urlLocale)
		} else if (cookieLocale && languageDetails.find((lang) => lang.code === cookieLocale)) {
			setCurrentLocale(cookieLocale)
		} else {
			setCurrentLocale("en")
		}
	}, [pathname])

	const handleChangeLanguage = (newLocale: Locale) => {
		if (newLocale === currentLocale) return
		setCurrentLocale(newLocale)
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
		router.push(pathname, { locale: newLocale })
	}

	return (
		<div className="flex gap-2 items-center">
			{languageDetails.map((lang) => {
				const isActive = currentLocale === lang.code
				return (
					<Button
						key={lang.code}
						type="button"
						variant={isActive ? "secondary" : "ghost"}
						size="sm"
						onClick={() => handleChangeLanguage(lang.code)}
						aria-current={isActive ? "true" : undefined}
						aria-label={`Switch to ${lang.label}`}
						className={cn(
							"flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-semibold border border-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors",
							isActive ? "bg-accent text-primary dark:text-white" : "text-muted-foreground hover:bg-accent hover:text-primary",
						)}
					>
						{lang.icon}
						<span>{lang.label}</span>
					</Button>
				)
			})}
		</div>
	)
}
