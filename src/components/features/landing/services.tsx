"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SectionLayout } from "@/components/ui/section-layout";
import { SERVICES } from "@/constants/services.constant";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Services() {
  const t = useTranslations("Services");
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const handleServiceClick = (serviceId: string) => {
    router.push(`/services?service=${serviceId}`);
  };

  return (
    <SectionLayout
      id="services"
      className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      badge={t("services")}
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4">
          {t("headline")}
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4">
          {t("description")}
        </p>
      </div>

      <Carousel
        setApi={setCarouselApi}
        opts={{
          breakpoints: {
            "(max-width: 640px)": {
              dragFree: true,
              containScroll: "trimSnaps",
            },
            "(max-width: 768px)": {
              dragFree: true,
            },
          },
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0 sm:ml-4 md:ml-6 lg:ml-8 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
          {SERVICES.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 sm:pl-4 md:pl-6 lg:pl-8 max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
            >
              <div
                className="group rounded-xl cursor-pointer"
                onClick={() => handleServiceClick(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleServiceClick(item.id);
                  }
                }}
              >
                <div className="group relative h-full min-h-[24rem] sm:min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                  <Image
                    key={item.id}
                    src={item.background}
                    alt={`Service visual ${item.id}`}
                    fill
                    sizes="(min-width: 660px) 555px, 494px)"
                    className="w-full h-auto rounded-xl mx-auto object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 sm:p-5 md:p-6 lg:p-8 rounded-b-xl bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-black/90 dark:via-black/60 dark:to-transparent shadow-lg">
                    <div className="mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-sm">
                      {t(`features.${item.id}.name`)}
                    </div>
                    <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base text-gray-200 dark:text-gray-300 line-clamp-2 sm:line-clamp-3">
                      {t(`features.${item.id}.description`)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-primary hover:text-primary/80 transition-colors">
                        {t(`features.${item.id}.cta`)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-6 sm:mt-8 flex justify-center gap-2.5 sm:gap-3">
        {SERVICES.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={cn(
              "relative h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full transition-colors duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              currentSlide === index
                ? "bg-primary scale-110"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
            )}
            onClick={() => {
              carouselApi?.scrollTo(index);
              setCurrentSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : "false"}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
