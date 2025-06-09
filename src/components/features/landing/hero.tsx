import HeroPattern from "@/components/layouts/hero-pattern";
import Navbar from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { HeroBadge } from "./hero-badge";
import { HeroHeadline } from "./hero-headline";

const commonHeroClasses =
  "relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex  md:bg-transparent min-h-screen w-full flex-col overflow-hidden"
    >
      <div className="md:hidden absolute inset-0">
        <HeroPattern />
      </div>

      <div className="hidden md:block absolute inset-0 w-full h-full p-3 z-[-1]">
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <Image
            src="/images/hero-image.webp"
            alt={t("imageAlt")}
            fill
            priority
            className="object-cover opacity-100 dark:opacity-100"
            sizes="(min-width: 768px) 100vw, 0"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50 dark:from-black/40 dark:via-black/60 dark:to-black/80" />
        </div>
      </div>

      <Navbar />

      <div className={cn(commonHeroClasses, "flex md:hidden")}>
        <div className="max-w-2xl mx-auto text-center">
          <HeroBadge text={t("companyName")} />
          <HeroHeadline
            headline1={t("headline1")}
            headline2={t("headline2")}
            className="text-4xl sm:text-5xl"
            subheadlineClassName="text-3xl sm:text-4xl"
          />
        </div>
      </div>

      <div className={cn(commonHeroClasses, "hidden md:flex")}>
        <div className="max-w-3xl mx-auto text-center">
          <HeroBadge
            text={t("companyName")}
            className="mb-6 sm:mb-8 md:mb-12"
          />
          <HeroHeadline
            headline1={t("headline1")}
            headline2={t("headline2")}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
            subheadlineClassName="text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
          />
        </div>
      </div>
    </section>
  );
}
