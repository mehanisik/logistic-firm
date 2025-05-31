"use client";

import { SectionLayout } from "@/components/ui/section-layout";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("Testimonial");

  const processedTestimonials = Array.from({ length: 3 }).map((_, index) => ({
    id: `testimonial-${index + 1}`,
    author: {
      name: t(`testimonials.testimonial-${index + 1}.author.name`),
      avatar: `/images/testimonials/avatar-${index + 1}.jpg`,
      handle: t(`testimonials.testimonial-${index + 1}.author.handle`),
    },
    text: t(`testimonials.testimonial-${index + 1}.text`),
  }));

  return (
    <SectionLayout id="testimonials" className="py-16 md:py-24">
      <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
          {t("title")}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
          {t("description")}
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, setIndex) =>
              processedTestimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={crypto.randomUUID()}
                  author={testimonial.author}
                  text={testimonial.text}
                  className="shrink-0"
                />
              )),
            )}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-1/6 sm:w-1/4 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-1/6 sm:w-1/4 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </SectionLayout>
  );
}
