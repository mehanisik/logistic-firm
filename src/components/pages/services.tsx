import { BentoCard } from "@/components/ui/bento-card"
import { SectionLayout } from "@/components/ui/section-layout"
import { IconTruck } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import type { ReactNode } from "react"

interface AtikFeature {
	Icon: ReactNode
	name: string
	description: string
	href: string
	cta: string
	badge?: string
	background: string
	className: string
	altText: string
}

export default function ServicesSection() {
	const t = useTranslations("Services")
	const atikStats = t.raw("stats") as { label: string; value: string }[]
	const atikFeatures = t.raw("features") as AtikFeature[]
	return (
		<SectionLayout id="services" className="py-16 md:py-24 bg-background">
			<div className="relative">
				<div className="text-center mb-12 md:mb-20">
					<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
						<IconTruck className="h-5 w-5" />
						{t("coreServices")}
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{t("headline")}</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-12">{t("description")}</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
						{atikStats.map((stat) => (
							<div key={stat.label} className="text-center p-4 rounded-lg bg-background shadow-sm">
								<div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
								<div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
							</div>
						))}
					</div>
				</div>

				<div className="grid w-full auto-rows-[20rem] sm:auto-rows-[24rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-rows-3">
					{atikFeatures.map((feature) => (
						<BentoCard
							key={feature.name}
							{...feature}
							background={
								<Image
									src={feature.background}
									width={1200}
									height={800}
									alt={feature.altText}
									className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-75 transition-opacity duration-300 rounded-xl object-cover"
								/>
							}
						/>
					))}
				</div>
			</div>
		</SectionLayout>
	)
}
