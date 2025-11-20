"use client";

import { SectionLayout } from "@/components/ui/section-layout";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { useTranslations } from "next-intl";

const generateTestimonials = (t: ReturnType<typeof useTranslations>) =>
	Array.from({ length: 3 }).map((_, index) => ({
		id: `testimonial-${index + 1}`,
		author: {
			name: t(`testimonialItems.testimonial-${index + 1}.author.name`),
			avatar: `/images/testimonials/avatar-${index + 1}.jpg`,
			handle: t(`testimonialItems.testimonial-${index + 1}.author.handle`),
		},
		text: t(`testimonialItems.testimonial-${index + 1}.text`),
	}));

const REPEAT_COUNT = 4;

export default function Testimonials() {
	const t = useTranslations("Testimonial");
	const processedTestimonials = generateTestimonials(t);

	return (
		<SectionLayout
			id="testimonials"
			className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
			badge={t("testimonials")}
		>
			<div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
					{t("title")}
				</h2>
				<p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl sm:max-w-2xl px-2 sm:px-4">
					{t("description")}
				</p>
			</div>
			<div className="relative w-full flex-1 overflow-hidden">
				<div className="group flex overflow-hidden p-1 sm:p-2 [--gap:1.5rem] sm:[--gap:2rem] md:[--gap:2.5rem] lg:[--gap:3rem] [gap:var(--gap)] flex-row [--duration:100s]">
					<div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
						{Array.from({ length: REPEAT_COUNT }).map((_, setIndex) =>
							processedTestimonials.map((testimonial) => (
								<TestimonialCard
									key={`${testimonial.id}-${setIndex}`}
									author={testimonial.author}
									text={testimonial.text}
									className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
								/>
							)),
						)}
					</div>
				</div>
				<div className="absolute inset-y-0 left-0 w-1/5 sm:w-1/6 md:w-1/4 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
				<div className="absolute inset-y-0 right-0 w-1/5 sm:w-1/6 md:w-1/4 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
			</div>
		</SectionLayout>
	);
}
