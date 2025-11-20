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
	const tCategories = useTranslations("BrandsPage.categories");

	if (!brand) return null;

	const keyFeatures = t.raw(`${brand.id}.keyFeatures`) as string[];
	const hasSlogan = t.has(`${brand.id}.slogan`);

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-border bg-background">
				<DialogHeader className="p-6 pb-2 border-b border-border/50">
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<DialogTitle className="text-xl font-semibold tracking-tight">
								{brand.name}
							</DialogTitle>
							<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
								{tCategories(brand.category)}
							</span>
						</div>
					</div>
				</DialogHeader>

				<div className="p-6 space-y-8">
					<div className="flex justify-center py-4">
						<div className="relative w-40 h-40 p-6 border border-border/40 rounded-2xl bg-muted/5">
							<Image
								src={brand.logo}
								alt={brand.name}
								fill
								className={cn(
									"object-contain p-2",
									brand.invertDark !== false && "dark:brightness-0 dark:invert"
								)}
							/>
						</div>
					</div>

					<div className="space-y-3">
						<h3 className="text-sm font-medium text-foreground flex items-center gap-2">
							<span className="w-1 h-4 bg-primary rounded-full" />
							About the Brand
						</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{t(`${brand.id}.fullDescription`)}
						</p>
					</div>

					<div className="grid sm:grid-cols-2 gap-6">
						<div className="space-y-3">
							<h3 className="text-sm font-medium text-foreground flex items-center gap-2">
								<IconLeaf className="w-4 h-4 text-primary" />
								Key Features
							</h3>
							<ul className="grid gap-2">
								{keyFeatures.map((feature) => (
									<li
										key={feature}
										className="text-sm text-muted-foreground flex items-start gap-3 p-2.5 rounded-lg bg-muted/5 border border-border/50"
									>
										<IconCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-sm font-medium text-foreground flex items-center gap-2">
								<IconWorld className="w-4 h-4 text-blue-500" />
								Available Markets
							</h3>
							<div className="flex flex-wrap gap-2">
								{brand.regions.map((region) => (
									<span
										key={region}
										className="text-xs font-mono border border-border px-2 py-1 rounded-md text-muted-foreground bg-muted/5"
									>
										{region}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="p-4 border-t border-border bg-muted/5">
					{hasSlogan && (
						<p className="text-xs font-medium italic text-center text-muted-foreground">
							"{t(`${brand.id}.slogan`)}"
						</p>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
