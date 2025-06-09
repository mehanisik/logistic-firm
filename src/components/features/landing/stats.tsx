import { SectionLayout } from "@/components/ui/section-layout";
import { STATS } from "@/constants/stats.constant";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("Stats");
  return (
    <SectionLayout
      id="stats"
      className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      badge={t("stats")}
    >
      <div className="mx-auto max-w-5xl space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 sm:space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground px-2 sm:px-4">
            {t("description")}
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          {STATS.map((stat) => (
            <div
              className="space-y-2 sm:space-y-3 md:space-y-4 pt-6 sm:pt-8 md:pt-0"
              key={stat.id}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                {t(`statItems.${stat.id}.name`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
