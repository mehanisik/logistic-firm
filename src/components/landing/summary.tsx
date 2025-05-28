import { SectionLayout } from "@/components/ui/section-layout"
import { ATIK_SUMMARY_FEATURES } from "@/constants/summary.constant"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function FeaturesSummary() {
	const t = useTranslations("Summary")
	return (
		<SectionLayout noPadding containerClassName="bg-primary/5 p-10">
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
					{ATIK_SUMMARY_FEATURES.map((feature) => (
						<div className="space-y-3" key={feature.id}>
							<div className="flex items-center gap-2">
								{feature.icon}
								<h3 className="text-sm font-medium text-foreground">{t(`features.${feature.id}.title`)}</h3>
							</div>
							<p className="text-muted-foreground text-sm">{t(`features.${feature.id}.description`)}</p>
						</div>
					))}
				</div>
			</div>
		</SectionLayout>
	)
}
