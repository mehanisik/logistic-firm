"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { BorderBeam } from "@/components/ui/border-beam";
import BackgroundPattern from "@/components/ui/pattern";
import { SectionLayout } from "@/components/ui/section-layout";
import { FEATURE_ACCORDION_ITEMS } from "@/constants/feature-accordion.constant";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function FeatureAccordion() {
	const t = useTranslations("FeatureAccordion");
	const [selectedItem, setSelectedItem] = useState<string>(
		FEATURE_ACCORDION_ITEMS[0].id,
	);

	return (
		<SectionLayout
			id="features"
			className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
			badge={t("features")}
		>
			<div className="absolute inset-0 z-0 pointer-events-none">
				<BackgroundPattern />
			</div>
			<div className="mx-auto max-w-5xl space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 relative z-10 px-4 sm:px-6">
				<div className="relative z-10 mx-auto max-w-2xl space-y-4 sm:space-y-6 text-center">
					<h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
						{t("title")}
					</h2>
					<p className="text-sm sm:text-base text-muted-foreground">
						{t("description")}
					</p>
				</div>
				<div className="grid gap-6 sm:gap-8 md:gap-12 lg:gap-16 sm:px-4 md:px-8 md:grid-cols-2 lg:gap-20 lg:px-0">
					<Accordion
						type="single"
						value={selectedItem}
						onValueChange={(value) => setSelectedItem(value)}
						className="w-full cursor-pointer"
					>
						{FEATURE_ACCORDION_ITEMS.map((item) => {
							return (
								<AccordionItem value={item.id} key={item.id}>
									<AccordionTrigger className="text-sm sm:text-base">
										<div className="flex items-center gap-1.5 sm:gap-2">
											<div className="w-4 h-4 sm:w-5 sm:h-5 text-primary">
												{item.icon}
											</div>
											{t(`items.${item.id}.title`)}
										</div>
									</AccordionTrigger>
									<AccordionContent className="text-xs sm:text-sm text-muted-foreground">
										{t(`items.${item.id}.content`)}
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
					<div className="bg-background relative flex overflow-hidden rounded-2xl sm:rounded-3xl border p-1.5 sm:p-2">
						<div className="w-12 sm:w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]" />
						<div className="aspect-[4/3] sm:aspect-[76/59] bg-background relative w-[calc(3/4*100%+2rem)] sm:w-[calc(3/4*100%+3rem)] rounded-xl sm:rounded-2xl">
							<AnimatePresence mode="wait">
								<motion.div
									key={`${selectedItem}-id`}
									initial={{ opacity: 0, y: 6, scale: 0.98 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: 6, scale: 0.98 }}
									transition={{ duration: 0.2 }}
									className="size-full overflow-hidden rounded-xl sm:rounded-2xl border bg-background shadow-md"
								>
									<Image
										key={selectedItem}
										src={
											FEATURE_ACCORDION_ITEMS.find(
												(item) => item.id === selectedItem,
											)?.imageUrl ?? ""
										}
										alt={`Accordion section ${selectedItem}`}
										fill
										sizes="(min-width: 640px) 555px, 490px"
										className="w-full h-auto rounded-lg mx-auto object-cover object-center"
									/>
								</motion.div>
							</AnimatePresence>
						</div>
						<BorderBeam
							duration={6}
							size={200}
							className="from-transparent via-primary to-transparent dark:via-primary/50 [--size:150px] sm:[--size:200px]"
						/>
					</div>
				</div>
			</div>
		</SectionLayout>
	);
}
