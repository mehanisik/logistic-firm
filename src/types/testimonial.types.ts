import type { TestimonialAuthor } from "../../ui/testimonial-card"

export interface AtikTestimonial {
	author: TestimonialAuthor
	text: string
	href?: string
	companyLogoUrl?: string
	project?: string
}
