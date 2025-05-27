import { TESTIMONIALS } from "@/constants/testimonial.constant"
import type { AtikTestimonial } from "@/types/testimonial.types"
import { useTranslations } from "next-intl"
import { TestimonialsSection } from "../ui/marquee"
import { SectionLayout } from "../ui/section-layout"

export default function Tesimonials() {
	const t = useTranslations("Testimonial")
	return (
		<SectionLayout className="bg-background py-16 md:py-24 text-foreground" id="testimonials">
			<TestimonialsSection
				title={t("title")}
				description={t("description")}
				testimonials={TESTIMONIALS.map((testimonial) => ({
					author: {
						name: t(`testimonials.${testimonial.id}.author.name`),
						avatar: testimonial.author.avatar,
						handle: t(`testimonials.${testimonial.id}.author.handle`),
					},
					text: t(`testimonials.${testimonial.id}.text`),
					href: testimonial.href,
				}))}
			/>
		</SectionLayout>
	)
}
