"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BorderBeam } from "@/components/ui/border-beam"
import type { FeatureAccordionItem } from "@/types/feature-accordion.types"
import { AnimatePresence, motion } from "motion/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"
import { ICONS, IMAGES } from "../../constants/feature-accordion.constants"

export default function FeatureAccordion() {
	const t = useTranslations("FeatureAccordion")
	const items = t.raw("items") as FeatureAccordionItem[]
	const [activeItem, setActiveItem] = useState<keyof typeof ICONS>(items[0].icon as keyof typeof ICONS)

	return (
		<section className="py-12 md:py-20 lg:py-32">
			<div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]" />
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
				<div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-6xl">{t("title")}</h2>
					<p>{t("description")}</p>
				</div>
				<div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
					<Accordion
						type="single"
						value={activeItem}
						onValueChange={(value) => setActiveItem(value as keyof typeof ICONS)}
						className="w-full"
					>
						{items.map((item) => {
							const Icon = ICONS[item.icon as keyof typeof ICONS]
							return (
								<AccordionItem value={item.icon} key={item.icon}>
									<AccordionTrigger>
										<div className="flex items-center gap-2 text-base">
											<Icon className="size-4" />
											{item.title}
										</div>
									</AccordionTrigger>
									<AccordionContent>{item.content}</AccordionContent>
								</AccordionItem>
							)
						})}
					</Accordion>
					<div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
						<div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]" />
						<div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
							<AnimatePresence mode="wait">
								<motion.div
									key={`${activeItem}-id`}
									initial={{ opacity: 0, y: 6, scale: 0.98 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: 6, scale: 0.98 }}
									transition={{ duration: 0.2 }}
									className="size-full overflow-hidden rounded-2xl border bg-background shadow-md"
								>
									<Image
										src={IMAGES[activeItem].image}
										className="size-full object-cover object-left-top dark:mix-blend-lighten"
										alt={IMAGES[activeItem].alt}
										width={1207}
										height={929}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
						<BorderBeam duration={6} size={200} className="from-transparent via-primary to-transparent dark:via-primary/50" />
					</div>
				</div>
			</div>
		</section>
	)
}
