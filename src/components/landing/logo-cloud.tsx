"use client";

import { SectionLayout } from "@/components/ui/section-layout";
import { type LogoInfo, PARTNER_LOGOS } from "@/constants/logos.constant";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function LogoCloud() {
  const t = useTranslations("LogoCloud");
  return (
    <SectionLayout id="logo-cloud" className="py-10 sm:py-16">
      <div className="group relative m-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center md:flex-row md:gap-8">
          <div className="md:max-w-xs text-center md:text-end mb-6 md:mb-0 md:border-r md:pr-8">
            <p className="text-base font-medium text-foreground">
              {t("title")}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {t("description")}
            </p>
          </div>
          <div className="relative w-full flex-1 overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:3rem] [gap:var(--gap)] flex-row [--duration:100s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {[...Array(4)].map((_, setIndex) =>
                  PARTNER_LOGOS.map((logo: LogoInfo, index: number) => (
                    <div
                      className="flex-shrink-0 h-8 sm:h-10 mx-1"
                      key={`${logo.alt}-${index}`}
                    >
                      <Image
                        className="h-full w-auto object-contain dark:invert dark:brightness-0"
                        src={logo.src}
                        alt={logo.alt}
                        height={36}
                        width={36}
                        priority={index < 7}
                      />
                    </div>
                  )),
                )}
              </div>
            </div>

            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
