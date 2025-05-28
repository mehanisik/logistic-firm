"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import { SERVICES } from "@/constants/services.constant"
import { IconTruck } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import { SectionLayout } from "../ui/section-layout"

export default function Services() {
	const t = useTranslations("Services")

	const [carouselApi, setCarouselApi] = useState<CarouselApi>()
	const [canScrollPrev, setCanScrollPrev] = useState(false)
	const [canScrollNext, setCanScrollNext] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		if (!carouselApi) {
			return
		}
		const updateSelection = () => {
			setCanScrollPrev(carouselApi.canScrollPrev())
			setCanScrollNext(carouselApi.canScrollNext())
			setCurrentSlide(carouselApi.selectedScrollSnap())
		}
		updateSelection()
		carouselApi.on("select", updateSelection)
		return () => {
			carouselApi.off("select", updateSelection)
		}
	}, [carouselApi])

	return (
		<SectionLayout id="services">
			<div className="text-center mb-8 md:mb-12 lg:mb-20">
				<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4">
					<IconTruck className="h-4 w-4 md:h-5 md:w-5" />
					{t("coreServices")}
				</div>
				<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">{t("headline")}</h2>
				<p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-10 lg:mb-12 px-4">
					{t("description")}
				</p>
			</div>

			<Carousel
				setApi={setCarouselApi}
				opts={{
					breakpoints: {
						"(max-width: 768px)": {
							dragFree: true,
						},
					},
				}}
			>
				<CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
					{SERVICES.map((item) => (
						<CarouselItem key={item.id} className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
							<a href={item.href} className="group rounded-xl">
								<div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
									<img
										src={item.background}
										alt={item.id}
										className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
									/>
									<div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,var(--primary)_100%)] mix-blend-multiply" />
									<div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
										<div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">{t(`features.${item.id}.name`)}</div>
										<div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">{t(`features.${item.id}.description`)}</div>
									</div>
								</div>
							</a>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="mt-8 flex justify-center gap-2">
				{SERVICES.map((_, index) => (
					<button
						type="button"
						key={index}
						className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-primary/20"}`}
						onClick={() => carouselApi?.scrollTo(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</SectionLayout>
	)
}
