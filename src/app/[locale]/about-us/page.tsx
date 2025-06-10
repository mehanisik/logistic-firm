import AboutUs from "@/components/features/about/about-page";
import Footer from "@/components/features/landing/footer";
import { BackLink } from "@/components/features/shared/back-link";
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
  const t = createTranslator({ locale, messages, namespace: "AboutUsPage" });
  return {
    title: t("meta.title", { default: "About Us" }),
    description: t("meta.description", {
      default: "Learn more about our company, mission, and values.",
    }),
  };
}

export default function AboutUsPage() {
  const t = useTranslations("AboutUsPage");

  return (
    <div className="w-full h-full">
      <div className="w-full h-full py-10">
        <BackLink />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}
