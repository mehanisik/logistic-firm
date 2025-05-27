import type { AtikTestimonial } from "@/types/testimonial.types"
import { useTranslations } from "next-intl"
import { TestimonialsSection } from "../ui/marquee"
import { SectionLayout } from "../ui/section-layout"

export default function Tesimonials() {
	const t = useTranslations("Testimonial")
	const atikTestimonials = t.raw("testimonials") as AtikTestimonial[]
	return (
		<SectionLayout className="bg-background py-16 md:py-24 text-foreground" id="testimonials">
			<TestimonialsSection title={t("title")} description={t("description")} testimonials={atikTestimonials} />
		</SectionLayout>
	)
}
