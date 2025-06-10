"use client";

import Footer from "@/components/features/landing/footer";
import { BackLink } from "@/components/features/shared/back-link";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SERVICES } from "@/constants/services.constant";
import { cn } from "@/lib/utils";
import { IconTruck } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type ServiceId = (typeof SERVICES)[number]["id"];

export default function ServicesPage() {
  const t = useTranslations("Services");
  const searchParams = useSearchParams();
  const selectedServiceId = searchParams.get("service") as ServiceId;
  const selectedServiceRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<ServiceId>(
    selectedServiceId || SERVICES[0].id,
  );

  useEffect(() => {
    if (selectedServiceId && selectedServiceRef.current) {
      selectedServiceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setActiveTab(selectedServiceId);
    }
  }, [selectedServiceId]);

  return (
    <section className="w-full h-full">
      <div className="w-full h-full py-10">
        <BackLink />
        <div className="px-4 max-w-7xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              <IconTruck className="h-4 w-4 sm:h-5 sm:w-5" />
              {t("coreServices")}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              {t("headline")}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto px-4">
              {t("description")}
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as ServiceId)}
            className="w-full"
          >
            <div className="flex justify-center mb-8 sm:mb-12">
              <TabsList className="inline-flex h-10 sm:h-12 items-center justify-center rounded-lg bg-muted/50 backdrop-blur-sm p-1 overflow-x-auto max-w-full">
                {SERVICES.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    {t(`features.${service.id}.name`)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {SERVICES.map((service) => (
              <TabsContent
                key={service.id}
                value={service.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div
                    ref={
                      selectedServiceId === service.id
                        ? selectedServiceRef
                        : null
                    }
                    className={cn(
                      "group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm",
                      "transition-all duration-500 hover:shadow-xl hover:shadow-primary/5",
                      selectedServiceId === service.id &&
                        "ring-2 ring-primary ring-offset-2",
                    )}
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={service.background}
                        alt={`Service visual ${service.id}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={cn(
                          "object-cover transition-transform duration-700",
                          selectedServiceId === service.id
                            ? "scale-105"
                            : "group-hover:scale-105",
                        )}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
                    <div className="space-y-3 sm:space-y-4">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        {t(`features.${service.id}.name`)}
                      </h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {t(`features.${service.id}.description`)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Badge
                        variant="secondary"
                        className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5"
                      >
                        {t(`features.${service.id}.badge`)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      <Footer />
    </section>
  );
}
