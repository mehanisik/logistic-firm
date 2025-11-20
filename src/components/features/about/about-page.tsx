import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
	IconBuilding,
	IconCircleCheck,
	IconGlobe,
	IconShip,
	IconTrendingUp,
	IconUsers,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function AboutUs() {
	const t = useTranslations("AboutUsPage");
	const t3 = useTranslations("About3");
	const stats = [
		{
			icon: IconGlobe,
			value: t3("stat3Value"),
			label: t3("stat3Label"),
			description: t3("breakoutDescription"),
		},
		{
			icon: IconShip,
			value: t3("stat1Value"),
			label: t3("stat1Label"),
			description: t3("mainImageAlt"),
		},
		{
			icon: IconUsers,
			value: t3("stat2Value"),
			label: t3("stat2Label"),
			description: t3("secondaryImageAlt"),
		},
		{
			icon: IconTrendingUp,
			value: t3("stat4Value"),
			label: t3("stat4Label"),
			description: t3("breakoutAlt"),
		},
	];

	const features = [
		{
			title: t3("breakoutTitle"),
			description: t3("breakoutDescription"),
		},
		{
			title: t3("breakoutButton"),
			description: t3("breakoutDescription"),
		},
		{
			title: t3("mainImageAlt"),
			description: t3("secondaryImageAlt"),
		},
	];

	return (
		<section className="px-4 max-w-7xl mx-auto">
			<div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
				<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
					<IconBuilding className="h-4 w-4 sm:h-5 sm:w-5" />
					{t("ourStoryTitle")}
				</div>
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
					{t("title")}
				</h1>
				<p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto px-4">
					{t("subtitle")}
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
				{stats.map((stat) => {
					const IconComponent = stat.icon;
					return (
						<Card key={stat.label} className="text-center">
							<CardContent className="pt-6">
								<IconComponent className="w-8 h-8 text-primary mx-auto mb-4" />
								<div className="text-3xl font-bold mb-1">{stat.value}</div>
								<div className="font-medium text-sm mb-1">{stat.label}</div>
								<div className="text-xs text-muted-foreground">
									{stat.description}
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>

			<div className="grid lg:grid-cols-2 gap-12 mb-16">
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">{t("missionTitle")}</CardTitle>
						<CardDescription>{t("missionText")}</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<p className="text-muted-foreground leading-relaxed">
							{t("ourStoryText")}
						</p>

						<div className="space-y-3">
							<div className="flex items-center gap-2">
								<IconCircleCheck className="w-4 h-4 text-green-600" />
								<span className="text-sm">{t("value1")}</span>
							</div>
							<div className="flex items-center gap-2">
								<IconCircleCheck className="w-4 h-4 text-green-600" />
								<span className="text-sm">{t("value2")}</span>
							</div>
							<div className="flex items-center gap-2">
								<IconCircleCheck className="w-4 h-4 text-green-600" />
								<span className="text-sm">{t("value3")}</span>
							</div>
						</div>

						<div className="flex flex-wrap gap-2 pt-4">
							<Badge variant="secondary">{t3("breakoutTitle")}</Badge>
							<Badge variant="secondary">{t3("breakoutButton")}</Badge>
							<Badge variant="secondary">{t3("mainImageAlt")}</Badge>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">{t3("breakoutTitle")}</CardTitle>
						<CardDescription>{t3("breakoutDescription")}</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						{features.map((feature, index) => (
							<div key={feature.title}>
								<h4 className="font-semibold mb-2">{feature.title}</h4>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{feature.description}
								</p>
								{index < features.length - 1 && <Separator className="mt-4" />}
							</div>
						))}
					</CardContent>
				</Card>
			</div>

			<Card className="bg-muted/50">
				<CardContent className="pt-8 pb-8">
					<div className="text-center max-w-2xl mx-auto">
						<h3 className="text-2xl font-semibold mb-4">{t("subtitle")}</h3>
						<p className="text-muted-foreground mb-6">{t("subDescription")}</p>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
