import ServicesPage from "@/components/features/services/services-page";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { createTranslator } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = createTranslator({ locale, messages, namespace: "ServicesPage" });
  const localeCode = locale === "tr" ? "tr_TR" : "en_US";

  const defaultTitle = locale === "tr" ? "Hizmetler" : "Services";
  const defaultDescription =
    locale === "tr"
      ? "Uluslararası taşımacılık, kamyon bazlı çözümler ve temizlik ve bakım ürünlerinin dağıtımı. Dünya çapında güvenilir lojistik hizmetleri."
      : "International transportation, truck-based solutions, and distribution of cleaning and care products. Reliable logistics services worldwide.";
  const defaultKeywords =
    locale === "tr"
      ? [
          "lojistik hizmetleri",
          "uluslararası taşımacılık",
          "kamyon taşımacılığı",
          "navlun taşımacılığı",
          "gümrük aracılığı",
          "depolama",
          "temizlik ürünleri dağıtımı",
          "bakım ürünleri",
          "tedarik zinciri",
        ]
      : [
          "logistics services",
          "international transportation",
          "truck transportation",
          "freight forwarding",
          "customs brokerage",
          "warehousing",
          "cleaning products distribution",
          "care products",
          "supply chain",
        ];

  return generatePageMetadata({
    title: t("meta.title", { default: defaultTitle }),
    description: t("meta.description", { default: defaultDescription }),
    keywords: defaultKeywords,
    url: `/${locale}/services`,
    locale: localeCode,
    image: {
      url: "/web-app-manifest-512x512.png",
      width: 1200,
      height: 630,
      alt:
        locale === "tr"
          ? "Atik İthalat İhracat Hizmetleri"
          : "Atik Import Export Services",
    },
  });
}

export default function Page() {
  return <ServicesPage />;
}
