import type { TestimonialAuthor } from "@/components/ui/testimonial-card"

export interface AtikTestimonial {
	author: TestimonialAuthor
	text: string
	href?: string
	companyLogoUrl?: string
	project?: string
}
