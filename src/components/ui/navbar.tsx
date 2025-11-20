"use client";

import { Link } from "@/i18n/navigation";
import { useState, useEffect, useEffectEvent, Activity } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/shared/theme-switcher";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Logo } from "./logo";
import { MENU_ITEMS } from "@/constants/navigation";

export default function Navbar() {
	const t = useTranslations("Navbar");
	const [menuOpen, setMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const onScroll = useEffectEvent(() => setIsScrolled(window.scrollY > 50));
	const onResize = useEffectEvent(() => {
		if (window.innerWidth >= 1024) setMenuOpen(false);
	});

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		window.addEventListener("resize", onResize);
		onScroll();
		onResize();

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
		};
	}, []);

	const menuItems = MENU_ITEMS.map((item) => ({
		...item,
		label: t(item.id as any),
	}));

	return (
		<header className="fixed z-50 w-full px-4 sm:px-6 md:px-8">
			<nav className="mx-auto max-w-6xl">
				<div
					className={cn(
						"mt-2 transition-all duration-300",
						isScrolled
							? "bg-background/80 backdrop-blur-md px-4 rounded-xl border border-border shadow-sm lg:mt-2"
							: "lg:mt-4 border-none rounded-xl",
					)}
				>
					<div className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
						<Logo
							isScrolled={isScrolled}
							className="w-[80px] sm:w-[90px] md:w-[100px] h-auto"
							withLink={true}
						/>

						<div className="hidden lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8">
							{menuItems.map(({ id, href, label }) => (
								<Link
									key={id}
									href={href}
									onClick={() => setMenuOpen(false)}
									className={cn(
										"block rounded-md px-3 py-2 text-sm sm:text-base font-medium transition-colors",
										"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
										"hover:bg-accent hover:text-accent-foreground",
										isScrolled ? "text-foreground" : "text-white",
									)}
								>
									{label}
								</Link>
							))}
						</div>

						<div className="flex items-center gap-x-2 sm:gap-x-3">
							<ThemeSwitcher isScrolled={isScrolled} />
							<LanguageSwitcher isScrolled={isScrolled} />

							<div className="lg:hidden">
								<Button
									variant="ghost"
									size="icon"
									onClick={() => setMenuOpen((open) => !open)}
									aria-label={menuOpen ? t("closeMenuAria") : t("openMenuAria")}
									aria-expanded={menuOpen}
									className={cn(
										"h-8 w-8 sm:h-9 sm:w-9 hover:bg-accent hover:text-accent-foreground",
										isScrolled ? "text-foreground" : "text-white",
									)}
								>
									{menuOpen ? (
										<IconX className="h-5 w-5 sm:h-6 sm:w-6" />
									) : (
										<IconMenu2 className="h-5 w-5 sm:h-6 sm:w-6" />
									)}
								</Button>
							</div>
						</div>
					</div>
				</div>

				<Activity mode={menuOpen ? "visible" : "hidden"}>
					<div
						className={cn(
							"lg:hidden absolute top-full left-0 right-0 z-40 mt-2",
							"origin-top scale-95 opacity-0 transition-all duration-200 ease-out",
							"bg-background border border-border rounded-2xl p-4 sm:p-6 shadow-xl",
							"invisible pointer-events-none",
							menuOpen &&
								"visible pointer-events-auto transform-none scale-100 opacity-100",
						)}
					>
						<ul className="space-y-2 sm:space-y-3">
							{menuItems.map(({ id, href, label }) => (
								<li key={id}>
									<Link
										href={href}
										onClick={() => setMenuOpen(false)}
										className={cn(
											"block rounded-md px-3 py-2 text-sm sm:text-base font-medium",
											"transition-colors hover:bg-accent hover:text-accent-foreground",
											"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
											"text-foreground",
										)}
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</Activity>
			</nav>
		</header>
	);
}
