"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { IconWorld } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";

const languages = [
	{ code: "en", flag: "🇬🇧", name: "English" },
	{ code: "tr", flag: "🇹🇷", name: "Türkçe" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

interface LanguageSwitcherProps {
	isScrolled: boolean;
}

export const LanguageSwitcher = ({ isScrolled }: LanguageSwitcherProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();
	const { resolvedTheme } = useTheme();
	const [currentLocale, setCurrentLocale] = useState<LanguageCode>(
		locale as LanguageCode,
	);
	const t = useTranslations("LanguageSwitcher");

	const getTextColor = () => {
		if (resolvedTheme === "dark") return "text-white";
		return isScrolled ? "text-black" : "text-white";
	};

	useEffect(() => {
		setCurrentLocale(locale as LanguageCode);
	}, [locale]);

	const switchLanguage = async (newLocale: LanguageCode) => {
		if (newLocale === currentLocale) return;

		try {
			document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

			setCurrentLocale(newLocale);

			await router.replace(pathname as any, { locale: newLocale });
		} catch (error) {
			console.error("Failed to switch language:", error);
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className={cn(
						"h-8 w-8 sm:h-9 sm:w-9 gap-1.5 px-2 sm:px-2.5",
						"hover:bg-accent/80 hover:text-accent-foreground",
						"focus:bg-accent/80 focus:text-accent-foreground",
						"transition-colors duration-150",
						getTextColor(),
					)}
					aria-label={t("ariaLabel")}
					aria-description={t("ariaDescription")}
				>
					<IconWorld className="h-4 w-4 sm:h-5 sm:w-5" />
					<span className="sr-only">{t("ariaLabel")}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="w-[180px] bg-background/95 backdrop-blur-md border border-border/50 shadow-lg dark:shadow-none dark:border-border/80"
			>
				<DropdownMenuLabel className="px-2 py-1.5 text-xs font-semibold text-foreground/90">
					{t("title")}
				</DropdownMenuLabel>
				<DropdownMenuSeparator className="my-1.5 bg-border/50" />
				{languages.map(({ code, flag, name }, index) => (
					<React.Fragment key={code}>
						<DropdownMenuItem
							onClick={() => switchLanguage(code)}
							className={cn(
								"flex items-center gap-2.5 px-2 py-2 text-sm rounded-md cursor-pointer",
								"hover:bg-accent/90 hover:text-accent-foreground",
								"focus:bg-accent/90 focus:text-accent-foreground",
								"transition-colors duration-150",
								currentLocale === code &&
									"bg-accent/80 text-accent-foreground font-medium",
							)}
						>
							<span className="text-base">{flag}</span>
							<span>{name}</span>
						</DropdownMenuItem>
						{index < languages.length - 1 && (
							<DropdownMenuSeparator className="my-1 bg-border/50" />
						)}
					</React.Fragment>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
