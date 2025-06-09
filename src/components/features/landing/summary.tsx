import BackgroundPattern from "@/components/ui/pattern";
import { SectionLayout } from "@/components/ui/section-layout";
import { ATIK_SUMMARY_FEATURES } from "@/constants/summary.constant";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeaturesSummary() {
  const t = useTranslations("Summary");
  return (
    <SectionLayout
      id="summary"
      className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      badge={t("summary")}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundPattern />
      </div>
      <div className="mx-auto relative max-w-5xl space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-6 z-10">
        <div className="relative z-10 grid items-center gap-3 sm:gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base max-w-sm sm:ml-auto">
            {t("description")}
          </p>
        </div>
        <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 md:-mx-4 lg:-mx-8 lg:col-span-3">
          <div className="aspect-[16/9] sm:aspect-[88/36] relative">
            <Image
              src="/images/summary.webp"
              alt="Overview of services and results"
              fill
              quality={60}
              sizes="(min-width: 1280px) 1151px, (min-width: 1024px) calc(100vw - 128px), (min-width: 768px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"
              className="w-full h-auto rounded-xl mx-auto object-cover object-center"
              priority={false}
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-4">
          {ATIK_SUMMARY_FEATURES.map((feature) => (
            <div className="space-y-2 sm:space-y-3" key={feature.id}>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-foreground">
                  {t(`features.${feature.id}.title`)}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {t(`features.${feature.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
