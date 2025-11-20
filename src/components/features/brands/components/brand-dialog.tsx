"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { type BrandInfo } from "@/constants/brands.constant";
import { IconCheck, IconLeaf, IconWorld } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandDialogProps {
	brand: BrandInfo | null;
	isOpen: boolean;
	onClose: () => void;
}

export function BrandDialog({ brand, isOpen, onClose }: BrandDialogProps) {
	const t = useTranslations("Brands");
	const tPage = useTranslations("BrandsPage");
	const tCategories = useTranslations("BrandsPage.categories");

	if (!brand) return null;

	const keyFeatures = t.raw(`${brand.id}.keyFeatures`) as string[];
	const hasSlogan = t.has(`${brand.id}.slogan`);

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none shadow-2xl bg-background/95 backdrop-blur-xl">
				<DialogHeader className="p-8 pb-6">
					<div className="flex items-start justify-between gap-4">
						<div className="space-y-1.5">
							<DialogTitle className="text-2xl font-light tracking-tight">
								{brand.name}
							</DialogTitle>
							<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
								{tCategories(brand.category)}
							</span>
						</div>
					</div>
				</DialogHeader>

				<div className="px-8 pb-8 space-y-10">
					<div className="flex justify-center">
						<div className="relative w-48 h-48 p-8">
							<Image
								src={brand.logo}
								alt={brand.name}
								fill
								className={cn(
									"object-contain transition-all duration-300",
									brand.invertDark !== false && "dark:brightness-0 dark:invert"
								)}
							/>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
							{tPage("aboutBrand")}
						</h3>
						<p className="text-base leading-relaxed text-foreground/90 font-light">
							{t(`${brand.id}.fullDescription`)}
						</p>
					</div>

					<div className="grid sm:grid-cols-2 gap-10">
						<div className="space-y-4">
							<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
								{tPage("keyFeatures")}
							</h3>
							<ul className="space-y-3">
								{keyFeatures.map((feature) => (
									<li
										key={feature}
										className="text-sm text-foreground/80 flex items-start gap-3"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="space-y-4">
							<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
								{tPage("availableMarkets")}
							</h3>
							<div className="flex flex-wrap gap-2">
								{brand.regions.map((region) => (
									<span
										key={region}
										className="text-xs font-medium px-3 py-1.5 rounded-md bg-muted/50 text-muted-foreground hover:bg-muted transition-colors"
									>
										{region}
									</span>
								))}
							</div>
						</div>
					</div>

					{hasSlogan && (
						<div className="pt-6 border-t border-border/20">
							<p className="text-lg font-light italic text-center text-muted-foreground">
								"{t(`${brand.id}.slogan`)}"
							</p>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
