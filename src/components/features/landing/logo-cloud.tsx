"use client";

import { SectionLayout } from "@/components/ui/section-layout";
import { type LogoInfo, PARTNER_LOGOS } from "@/constants/logos.constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { IconArrowRight } from "@tabler/icons-react";

export default function LogoCloud() {
	const t = useTranslations("LogoCloud");
	return (
		<SectionLayout
			id="logo-cloud"
			className="py-6 sm:py-8 md:py-10 lg:py-16 px-4 sm:px-6 lg:px-8"
			badge={t("partners")}
		>
			<div className="group relative m-auto max-w-7xl">
				<div className="flex flex-col items-center md:flex-row md:gap-6 lg:gap-8">
					<div className="md:max-w-[280px] lg:max-w-xs text-center md:text-end mb-4 sm:mb-6 md:mb-0 md:border-r md:pr-6 lg:pr-8 flex flex-col items-center md:items-end">
						<p className="text-sm sm:text-base font-medium text-foreground">
							{t("title")}
						</p>
						<p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
							{t("description")}
						</p>

						<Link
							href="/our-brands"
							className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-primary hover:underline underline-offset-4"
						>
							{t("viewAll")}
							<IconArrowRight className="w-3 h-3" />
						</Link>
					</div>
					<div className="relative w-full flex-1 overflow-hidden">
						<div className="group flex overflow-hidden p-1 sm:p-2 [--gap:1.5rem] sm:[--gap:2rem] md:[--gap:2.5rem] lg:[--gap:3rem] [gap:var(--gap)] flex-row [--duration:100s]">
							<div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
								{[...Array(4)].map((_, setIndex) =>
									PARTNER_LOGOS.map((logo: LogoInfo, index: number) => (
										<div
											className="h-8 sm:h-10 w-auto relative"
											key={`${logo.alt}-${index}`}
										>
											<Image
												className={`h-full w-auto object-contain transition-all duration-300 ${
													logo.invertDark !== false ? "dark:brightness-0 dark:invert" : ""
												}`}
												src={logo.src}
												alt={logo.alt}
												height={36}
												width={36}
												sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, 40px"
												priority={index < 7}
											/>
										</div>
									)),
								)}
							</div>
						</div>

						<div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
						<div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
					</div>
				</div>
			</div>
		</SectionLayout>
	);
}
