import AboutUs from "@/components/about-page"
import Footer from "@/components/landing/footer"
import Navbar from "@/components/ui/navbar"
import type { Metadata } from "next"
import { createTranslator, useTranslations } from "next-intl"
import { getMessages } from "next-intl/server"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const messages = await getMessages({ locale: params.locale })
	const t = createTranslator({ locale: params.locale, messages, namespace: "AboutUsPage" })
	return {
		title: t("meta.title", { default: "About Us" }),
		description: t("meta.description", { default: "Learn more about our company, mission, and values." }),
	}
}

export default function AboutUsPage() {
	const t = useTranslations("AboutUsPage")

	return (
		<div className="w-full h-full">
			<Navbar forceScrolled />
			<div className="w-full h-full py-10">
				<section className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
					<AboutUs />
				</section>
			</div>
			<Footer />
		</div>
	)
}
