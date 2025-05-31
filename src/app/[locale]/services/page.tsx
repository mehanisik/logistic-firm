import Footer from "@/components/landing/footer";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/ui/navbar";
import {
  IconBuildingWarehouse,
  IconFileText,
  IconPlane,
  IconShield,
  IconShip,
  IconTruck,
} from "@tabler/icons-react";
import type { Metadata, ResolvingMetadata } from "next";
import { createTranslator, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = createTranslator({ locale, messages, namespace: "ServicesPage" });
  return {
    title: t("meta.title", { default: "Services" }),
    description: t("meta.description", { default: "Our services" }),
  };
}

export default function ServicesPage() {
  const t = useTranslations("Services");
  const services = [
    {
      icon: IconShip,
      title: t("features.freight-forwarding.name"),
      description: t("features.freight-forwarding.description"),
      features: [
        t("features.freight-forwarding.badge"),
        t("features.freight-forwarding.cta"),
        t("features.freight-forwarding.altText"),
      ],
    },
    {
      icon: IconPlane,
      title: t("features.track-shipment.name"),
      description: t("features.track-shipment.description"),
      features: [
        t("features.track-shipment.badge"),
        t("features.track-shipment.cta"),
        t("features.track-shipment.altText"),
      ],
    },
    {
      icon: IconTruck,
      title: t("features.project-cargo.name"),
      description: t("features.project-cargo.description"),
      features: [
        t("features.project-cargo.badge"),
        t("features.project-cargo.cta"),
        t("features.project-cargo.altText"),
      ],
    },
    {
      icon: IconFileText,
      title: t("features.customs-brokerage.name"),
      description: t("features.customs-brokerage.description"),
      features: [
        t("features.customs-brokerage.badge"),
        t("features.customs-brokerage.cta"),
        t("features.customs-brokerage.altText"),
      ],
    },
    {
      icon: IconBuildingWarehouse,
      title: t("features.warehousing.name"),
      description: t("features.warehousing.description"),
      features: [
        t("features.warehousing.badge"),
        t("features.warehousing.cta"),
        t("features.warehousing.altText"),
      ],
    },
    {
      icon: IconShield,
      title: t("headline"),
      description: t("description"),
      features: [t("coreServices"), t("headline"), t("description")],
    },
  ];

  return (
    <div className="w-full h-full ">
      <Navbar forceScrolled />
      <div className="w-full h-full py-10">
        <section className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              {t("coreServices")}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              {t("headline")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
