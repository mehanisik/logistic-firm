"use client";

import { SectionLayout } from "@/components/ui/section-layout";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Distributor() {
	const t = useTranslations("Distributor");

	return (
		<SectionLayout
			id="distributor"
			className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
			aria-label={t("title")}
			badge={t("badge")}
		>
			<div className="border border-border border-b-0 bg-background">
				<div className="grid lg:grid-cols-2">
					<div className="relative border-b border-border lg:border-r lg:border-b-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[500px]">
						<div className="space-y-8">
							<h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-primary uppercase leading-[0.9]">
								{t("mainHeadlinePrimary")}
								<br />
								<span className="text-muted-foreground">
									{t("mainHeadlineSecondary")}
								</span>
							</h2>

							<p className="max-w-md text-lg text-foreground/70 leading-relaxed font-light">
								{t("description")}
							</p>
						</div>

						<div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
							<div className="space-y-2">
								<p className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
									{t("typeLabel")}
								</p>
								<p className="text-sm font-medium">{t("typeValue")}</p>
							</div>
						</div>
					</div>

					<div className="relative flex flex-col border-b border-border">
						<div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/10">
							<span className="text-[10px] font-mono text-muted-foreground uppercase">
								{t("figLabel")}
							</span>
							<IconArrowUpRight className="w-4 h-4 text-muted-foreground" />
						</div>

						<Link
							href="https://bluesuncb.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center bg-muted/5 p-12 relative overflow-hidden group hover:bg-muted/10 transition-colors"
						>
							<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

							<div className="relative w-64 aspect-video transition-all duration-500 ease-out scale-100 group-hover:scale-110">
								<Image
									src="/logos/bluesun.png"
									alt={t("logoAlt")}
									fill
									className="object-contain dark:invert dark:brightness-0"
									priority
								/>
							</div>
						</Link>

						<div className="px-6 py-6 border-t border-border bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-4">
							<div>
								<p className="text-xs text-muted-foreground font-mono mb-1">
									{t("headquartersLabel")}
								</p>
								<p className="text-sm text-foreground">{t("addressValue")}</p>
							</div>
							<div className="hidden sm:block h-8 w-[1px] bg-border" />
							<div className="text-right">
								<p className="text-xs text-muted-foreground font-mono mb-1">
									{t("referenceLabel")}
								</p>
								<p className="text-sm text-foreground">{t("tagline")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-between items-center pt-2">
				<span className="text-[10px] font-mono text-muted-foreground/40">
					{t("pagination")}
				</span>
				<span className="text-[10px] font-mono text-muted-foreground/40">
					{t("scrollLabel")}
				</span>
			</div>
		</SectionLayout>
	);
}
