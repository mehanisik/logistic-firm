"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BorderBeam } from "@/components/ui/border-beam";
import { SectionLayout } from "@/components/ui/section-layout";
import { FEATURE_ACCORDION_ITEMS } from "@/constants/feature-accordion.constant";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import BackgroundPattern from "../ui/pattern";

export default function FeatureAccordion() {
  const t = useTranslations("FeatureAccordion");
  const [selectedItem, setSelectedItem] = useState<string>(
    FEATURE_ACCORDION_ITEMS[0].id,
  );

  return (
    <SectionLayout
      noPadding
      containerClassName="bg-primary/5 p-10 rounded-b-3xl relative"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundPattern />
      </div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)] relative z-10">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            {t("title")}
          </h2>
          <p>{t("description")}</p>
        </div>
        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={selectedItem}
            onValueChange={(value) => setSelectedItem(value)}
            className="w-full"
          >
            {FEATURE_ACCORDION_ITEMS.map((item) => {
              return (
                <AccordionItem value={item.id} key={item.id}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-2 text-base">
                      {item.icon}
                      {t(`items.${item.id}.title`)}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(`items.${item.id}.content`)}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]" />
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-background shadow-md"
                >
                  <Image
                    src={
                      FEATURE_ACCORDION_ITEMS.find(
                        (item) => item.id === selectedItem,
                      )?.imageUrl ?? ""
                    }
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={t(`items.${selectedItem}.title`)}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-primary to-transparent dark:via-primary/50"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
