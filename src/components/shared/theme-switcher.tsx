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
import { cn } from "@/lib/utils";
import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

interface ThemeSwitcherProps {
	isScrolled: boolean;
}

export function ThemeSwitcher({ isScrolled }: ThemeSwitcherProps) {
	const { setTheme, theme, resolvedTheme } = useTheme();
	const t = useTranslations("ThemeSwitcher");

	const getTextColor = () => {
		if (resolvedTheme === "dark") return "text-white";
		return isScrolled ? "text-black" : "text-white";
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className={cn(
						"h-8 w-8 sm:h-9 sm:w-9",
						"hover:bg-accent/80 hover:text-accent-foreground",
						"focus:bg-accent/80 focus:text-accent-foreground",
						"transition-colors duration-150",
						getTextColor(),
					)}
					aria-label={t("ariaLabel")}
					aria-description={t("ariaDescription")}
				>
					<IconSun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
					<IconMoon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
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
				<DropdownMenuItem
					onClick={() => setTheme("light")}
					className={cn(
						"flex items-center gap-2.5 px-2 py-2 text-sm rounded-md cursor-pointer",
						"hover:bg-accent/90 hover:text-accent-foreground",
						"focus:bg-accent/90 focus:text-accent-foreground",
						"transition-colors duration-150",
						theme === "light" &&
							"bg-accent/80 text-accent-foreground font-medium",
					)}
				>
					<IconSun className="h-4 w-4 sm:h-5 sm:w-5" />
					<span>{t("light")}</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="my-1 bg-border/50" />
				<DropdownMenuItem
					onClick={() => setTheme("dark")}
					className={cn(
						"flex items-center gap-2.5 px-2 py-2 text-sm rounded-md cursor-pointer",
						"hover:bg-accent/90 hover:text-accent-foreground",
						"focus:bg-accent/90 focus:text-accent-foreground",
						"transition-colors duration-150",
						theme === "dark" &&
							"bg-accent/80 text-accent-foreground font-medium",
					)}
				>
					<IconMoon className="h-4 w-4 sm:h-5 sm:w-5" />
					<span>{t("dark")}</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="my-1 bg-border/50" />
				<DropdownMenuItem
					onClick={() => setTheme("system")}
					className={cn(
						"flex items-center gap-2.5 px-2 py-2 text-sm rounded-md cursor-pointer",
						"hover:bg-accent/90 hover:text-accent-foreground",
						"focus:bg-accent/90 focus:text-accent-foreground",
						"transition-colors duration-150",
						theme === "system" &&
							"bg-accent/80 text-accent-foreground font-medium",
					)}
				>
					<IconDeviceDesktop className="h-4 w-4 sm:h-5 sm:w-5" />
					<span>{t("system")}</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
