import { ContactForm } from "@/components/forms/contact-form"
import Footer from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/ui/navbar"
import { Textarea } from "@/components/ui/textarea"
import { ATIK_OFFICE_LOCATIONS } from "@/constants/contact.constant"
import { IconMail, IconMapPin, IconPhone, IconSend } from "@tabler/icons-react"
import type { Metadata } from "next"
import { createTranslator, useTranslations } from "next-intl"
import { getMessages } from "next-intl/server"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const messages = await getMessages({ locale: params.locale })
	const t = createTranslator({ locale: params.locale, messages, namespace: "ContactPage" })
	return {
		title: t("meta.title", { default: "Contact Us" }),
		description: t("meta.description", { default: "Contact us for any questions or inquiries." }),
	}
}

export default function ContactPage() {
	const t = useTranslations("Contact")

	return (
		<div className="w-full h-full">
			<Navbar forceScrolled />
			<div className="w-full h-full py-10">
				<section className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<Badge variant="outline" className="mb-4">
							{t("title")}
						</Badge>
						<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t("title")}</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("description")}</p>
					</div>
					<div className="grid lg:grid-cols-2 gap-16 mb-20">
						<div>
							<h2 className="text-2xl font-semibold mb-8">{t("sendUsAMessage")}</h2>
							<ContactForm />
						</div>

						<div>
							<h2 className="text-2xl font-semibold mb-8">{t("ourGlobalPresence")}</h2>
							<div className="space-y-8 mb-12">
								{ATIK_OFFICE_LOCATIONS.map((office, index) => (
									<div key={index}>
										<h3 className="font-semibold text-lg mb-3">{t(`officeLocations.${office.id}.name`)}</h3>
										<div className="space-y-2 text-muted-foreground">
											<div className="flex items-center gap-2">
												<IconMapPin className="w-4 h-4" />
												<span className="text-sm">{t(`officeLocations.${office.id}.addressLines`)}</span>
											</div>
											{office.phone && (
												<div className="flex items-center gap-2">
													<IconPhone className="w-4 h-4" />
													<span className="text-sm">
														<span className="font-medium">{t("phoneLabel")}</span> {office.phone}
													</span>
												</div>
											)}
											{office.email && (
												<div className="flex items-center gap-2">
													<IconMail className="w-4 h-4" />
													<span className="text-sm">
														<span className="font-medium">{t("emailLabel")}</span> {office.email}
													</span>
												</div>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	)
}
