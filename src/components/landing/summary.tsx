import type { SummaryFeature } from "@/types/summary.types"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { ICONS } from "../../constants/summary.constants"

export default function FeaturesSummary() {
	const t = useTranslations("Summary")
	const features = t.raw("features") as SummaryFeature[]
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-12 px-6">
				<div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
					<h2 className="text-4xl font-semibold text-foreground">{t("title")}</h2>
					<p className="max-w-sm sm:ml-auto">{t("description")}</p>
				</div>
				<div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
					<div className="aspect-88/36 relative">
						<div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent" />
						<Image
							src={
								"https://plus.unsplash.com/premium_photo-1661932015882-c35eee885897?q=80&w=2206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
							className="absolute inset-0 z-10"
							alt="logistics illustration"
							width={2797}
							height={1137}
						/>
					</div>
				</div>
				<div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
					{features.map((feature, idx) => {
						const Icon = ICONS[feature.icon as keyof typeof ICONS]
						return (
							<div className="space-y-3" key={feature.title}>
								<div className="flex items-center gap-2">
									<Icon className="size-4 text-primary" />
									<h3 className="text-sm font-medium text-foreground">{feature.title}</h3>
								</div>
								<p className="text-muted-foreground text-sm">{feature.description}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
