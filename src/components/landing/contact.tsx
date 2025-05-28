"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ATIK_OFFICE_LOCATIONS } from "@/constants/contact.constant"
import { IconBuildingSkyscraper, IconHeadset, IconMail, IconMapPin, IconMessageCircle, IconSend, IconUser } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import type { FormEvent } from "react"
import { Globe } from "../ui/globe"
import { SectionLayout } from "../ui/section-layout"

export default function ContactUs() {
	const t = useTranslations("Contact")

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData.entries())
		console.log("Form submitted:", data)
	}

	const offices = ATIK_OFFICE_LOCATIONS.map((office) => ({
		...office,
		name: t(`officeLocations.${office.id}.name`),
		address: t(`officeLocations.${office.id}.addressLines`),
	}))

	return (
		<SectionLayout className="py-16" id="contact-us">
			<div className="max-w-4xl mx-auto mb-10 text-center">
				<h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
					<IconHeadset className="w-7 h-7 text-primary" /> {t("letsConnect")}
				</h2>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("description")}</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
				<div className="md:col-span-1 flex flex-col gap-4">
					<Card className="h-full p-6 border border-border bg-background/90 shadow-md flex flex-col">
						<div className="flex items-center gap-2 mb-4">
							<IconMapPin className="w-6 h-6 text-primary" />
							<span className="font-semibold text-lg text-foreground">{t("ourGlobalPresence")}</span>
						</div>
						<div className="space-y-4">
							{offices.map((office) => (
								<div key={office.id} className="flex items-start gap-3">
									<IconMapPin className={`w-5 h-5 mt-1 ${office.isHub ? "text-primary" : "text-muted-foreground"}`} />
									<div>
										<div className="font-semibold text-sm text-foreground mb-1">{office.name}</div>
										<div className="text-xs text-muted-foreground whitespace-pre-line">{office.address}</div>
									</div>
								</div>
							))}
						</div>
					</Card>
					<Card className="relative flex size-full w-full items-center justify-center overflow-hidden  border-none bg-background md:shadow-xl">
						<Globe />
						<div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
					</Card>
				</div>
				<div className="md:col-span-2 flex flex-col">
					<Card className="w-full p-8  border border-border bg-background/90 shadow-lg">
						<CardHeader className="p-0 mb-6">
							<div className="flex items-center gap-2 mb-2">
								<IconMessageCircle className="w-6 h-6 text-primary" />
								<span className="font-semibold text-xl text-foreground">{t("sendUsAMessage")}</span>
							</div>
							<CardTitle className="text-base font-medium text-muted-foreground">{t("quickContact")}</CardTitle>
						</CardHeader>
						<CardContent className="p-0">
							<form onSubmit={handleSubmit} className="flex flex-col gap-6">
								<div className="flex flex-col gap-2">
									<Label htmlFor="name">{t("fullName")}</Label>
									<Input id="name" name="name" placeholder={t("namePlaceholder")} required />
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="email">{t("emailAddress")}</Label>
									<Input id="email" name="email" type="email" placeholder={t("emailPlaceholder")} required />
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="company">{t("companyNameOptional")}</Label>
									<Input id="company" name="company" placeholder={t("companyPlaceholder")} />
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="message">{t("yourMessage")}</Label>
									<Textarea id="message" name="message" rows={4} placeholder={t("messagePlaceholder")} required />
								</div>
								<Button type="submit" className="w-full mt-2">
									{t("submitYourInquiry")}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</SectionLayout>
	)
}
