import { useTranslations } from "next-intl"
import { TestimonialsSection } from "../ui/marquee"
import { SectionLayout } from "../ui/section-layout"
import type { TestimonialAuthor } from "../ui/testimonial-card"

interface AtikTestimonial {
	author: TestimonialAuthor
	text: string
	href?: string
	companyLogoUrl?: string
	project?: string
}

export default function TestimonialPage() {
	const t = useTranslations("Testimonial")
	const atikTestimonials = t.raw("testimonials") as AtikTestimonial[]
	return (
		<SectionLayout className="bg-background py-16 md:py-24" id="testimonials">
			<TestimonialsSection title={t("title")} description={t("description")} testimonials={atikTestimonials} />
		</SectionLayout>
	)
}
