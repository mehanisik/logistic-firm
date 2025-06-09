import HeroPattern from "@/components/layouts/hero-pattern";
import Navbar from "@/components/ui/navbar";
import { carattere } from "@/fonts";
import { cn } from "@/lib/utils";
import { IconMouse } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100vh] w-full flex-col overflow-hidden"
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
            className="object-cover"
            sizes="(min-width: 768px) 100vw, 0"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <Navbar />

      {/* Mobile Text */}
      <div className="md:hidden relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full mb-6 animate-fade-up [animation-delay:500ms]">
            <span className="text-sm font-extrabold text-primary-foreground tracking-wide">
              {t("companyName")}
            </span>
          </div>

          <div className="animate-fade-up [animation-delay:700ms]">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
              <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                {t("headline1")}
              </span>
              <br />
              <span
                className={cn(
                  "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-3xl sm:text-4xl",
                  carattere.className,
                )}
              >
                {t("headline2")}
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Desktop Text */}
      <div className="hidden md:flex relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full mb-6 sm:mb-8 md:mb-12 animate-fade-up [animation-delay:500ms]">
            <span className="text-xs sm:text-sm font-extrabold text-primary-foreground tracking-wide">
              {t("companyName")}
            </span>
          </div>

          <div className="animate-fade-up [animation-delay:700ms]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight">
              <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                {t("headline1")}
              </span>
              <br />
              <span
                className={cn(
                  "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-3xl sm:text-4xl md:text-5xl lg:text-7xl",
                  carattere.className,
                )}
              >
                {t("headline2")}
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex justify-center">
          <IconMouse className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-bounce hover:scale-110 transition-transform" />
        </div>
      </div>
    </section>
  );
}
