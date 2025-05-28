import { Button } from "@/components/ui/button"
import { SectionLayout } from "@/components/ui/section-layout"
import { ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Story() {
	const t = useTranslations("Story")
	return (
		<SectionLayout className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
				<img
					className="rounded-(--radius) grayscale"
					src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Our team at work"
					height=""
					width=""
					loading="lazy"
				/>

				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<h2 className="text-4xl font-medium text-foreground">{t("title")}</h2>
					<div className="space-y-6">
						<p className="text-muted-foreground">{t("description")}</p>

						<Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
							<Link href="#">
								<span>{t("cta")}</span>
								<ChevronRight className="size-2" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</SectionLayout>
	)
}
