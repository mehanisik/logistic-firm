import ServicesPage from "@/components/features/services/services-page";
import type { Metadata, ResolvingMetadata } from "next";
import { createTranslator } from "next-intl";
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

export default function Page() {
  return <ServicesPage />;
}
