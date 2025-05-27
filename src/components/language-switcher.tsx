"use client"

import { Check } from "lucide-react"
import { useEffect, useState } from "react"

import { usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

const languageDetails = [
	{
		code: "en",
		label: "English",
		icon: <span className="font-bold text-sm">EN</span>,
	},
	{
		code: "tr",
		label: "Türkçe",
		icon: <span className="font-bold text-sm">TR</span>,
	},
] as const

type Locale = (typeof languageDetails)[number]["code"]

const LanguageSwitcher = () => {
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

	const changeLanguage = (newLocale: Locale) => {
		if (newLocale === currentLocale) return

		setCurrentLocale(newLocale)
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
		router.push(pathname, { locale: newLocale })
	}

	const selectedLanguageDetail = languageDetails.find((lang) => lang.code === currentLocale) || languageDetails[0]

	return (
		<DropdownMenu dir="ltr">
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="sm" className="flex items-center gap-2">
					{selectedLanguageDetail.icon}
					<span className="hidden sm:inline">{selectedLanguageDetail.label}</span>
					<span className="sr-only">Change language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="min-w-[180px]">
				{languageDetails.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => changeLanguage(lang.code)}
						className={cn(
							"flex items-center justify-between cursor-pointer",
							currentLocale === lang.code && "bg-accent text-accent-foreground",
						)}
					>
						<div className="flex items-center gap-2">
							{lang.icon}
							<span>{lang.label}</span>
						</div>
						{currentLocale === lang.code && <Check className="h-4 w-4" />}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageSwitcher
