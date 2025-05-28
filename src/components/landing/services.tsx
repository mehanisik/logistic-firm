import { BentoCard } from "@/components/ui/bento-card"
import { SectionLayout } from "@/components/ui/section-layout"
import { SERVICES, SERVICES_STATS } from "@/constants/services.constant"
import type { AtikFeature } from "@/types/services.types"
import { IconTruck } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function Services() {
	const t = useTranslations("Services")
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
				</div>

				<div className="grid w-full auto-rows-[20rem] sm:auto-rows-[24rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-rows-3">
					{SERVICES.map((feature) => (
						<BentoCard
							key={feature.id}
							name={t(`features.${feature.id}.name`)}
							className={feature.className}
							Icon={feature.Icon}
							description={t(`features.${feature.id}.description`)}
							cta={t(`features.${feature.id}.cta`)}
							badge={t(`features.${feature.id}.badge`)}
							href={feature.href}
							background={
								<Image
									src={feature.background}
									width={1200}
									height={800}
									alt={feature.id}
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
