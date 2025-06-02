"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { SectionLayout } from "@/components/ui/section-layout";
import { SERVICES } from "@/constants/services.constant";
import { cn } from "@/lib/utils";
import { IconTruck } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const t = useTranslations("Services");
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  return (
    <SectionLayout id="services">
      <div className="text-center mb-8 md:mb-12 lg:mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4">
          <IconTruck className="h-4 w-4 md:h-5 md:w-5" />
          {t("coreServices")}
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
          {t("headline")}
        </h2>
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
          {SERVICES.map((item, index) => (
            <CarouselItem
              key={item.id}
              className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
            >
              <div className="group rounded-xl">
                <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                  <Image
                    src={item.background}
                    alt={t(`features.${item.id}.altText`)}
                    fill
                    className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-5 md:p-8 rounded-b-xl bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-black/90 dark:via-black/60 dark:to-transparent shadow-lg">
                    <div className="mb-2 text-lg md:text-xl font-bold text-white drop-shadow-sm">
                      {t(`features.${item.id}.name`)}
                    </div>
                    <div className="mb-4 md:mb-6 lg:mb-8 text-sm md:text-base text-gray-200 dark:text-gray-300 line-clamp-2">
                      {t(`features.${item.id}.description`)}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-8 flex justify-center gap-2">
        {SERVICES.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={cn(
              "h-2 w-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              carouselApi?.selectedScrollSnap() === index
                ? "bg-primary"
                : "bg-primary/20",
            )}
            onClick={() => carouselApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
