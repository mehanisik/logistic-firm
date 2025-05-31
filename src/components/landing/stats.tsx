import { SectionLayout } from "@/components/ui/section-layout";
import { STATS } from "@/constants/stats.constant";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("Stats");
  return (
    <SectionLayout>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl text-foreground">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          {STATS.map((stat) => (
            <div className="space-y-4" key={stat.id}>
              <div className="text-5xl font-bold text-foreground">
                {stat.value}
              </div>
              <p className="text-muted-foreground">
                {t(`stats.${stat.id}.name`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
