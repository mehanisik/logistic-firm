"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { OfficeLocation } from "@/types/contact.types"
import { IconBuildingSkyscraper, IconHeadset, IconMail, IconMapPin, IconMessageCircle, IconSend, IconUser } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import type { FormEvent } from "react"
import { Cobe } from "../ui/cobe"
import { SectionLayout } from "../ui/section-layout"

export default function ContactUs() {
	const t = useTranslations("Contact")
	const officeLocations = t.raw("officeLocations") as OfficeLocation[]

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData.entries())
		console.log("Form submitted:", data)
	}

	return (
		<SectionLayout className="py-16 md:py-24" id="contact-us">
			<div className="flex flex-col gap-8 md:gap-12 items-center">
				<div className="max-w-2xl w-full text-center mb-4 sm:mb-8">
					<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-3 uppercase tracking-wider">
						<IconHeadset size={16} />
						{t("letsConnect")}
					</div>
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
						{t("title")} <span className="text-primary">Atik Logistics</span>
					</h1>
					<p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">{t("description")}</p>
				</div>
				<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
					<div className="bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted border border-border shadow-xl rounded-2xl flex items-center justify-center h-full min-h-[280px] sm:min-h-[350px] md:min-h-[450px] p-4 md:p-6 aspect-square lg:aspect-auto">
						<div className="w-full max-w-md mx-auto">
							<Cobe />
						</div>
					</div>

					<div className="flex flex-col gap-6 h-full">
						<Card className="flex-1 p-6 rounded-2xl shadow-lg border border-border">
							<CardHeader className="p-0 mb-4">
								<CardTitle className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
									<IconMail className="w-6 h-6 text-primary" /> {t("quickContact")}
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0 space-y-3 text-sm sm:text-base">
								<div>
									<Label htmlFor="email-contact" className="font-medium text-foreground">
										{t("generalInquiries")}
									</Label>
									<Link href="mailto:inquiries@atiklogistics.com" className="block text-primary hover:underline" id="email-contact">
										inquiries@atiklogistics.com
									</Link>
								</div>
								<div>
									<Label htmlFor="quote-contact" className="font-medium text-foreground">
										{t("salesAndQuotes")}
									</Label>
									<Link href="mailto:quotes@atiklogistics.com" className="block text-primary hover:underline" id="quote-contact">
										quotes@atiklogistics.com
									</Link>
								</div>
								<div>
									<Label htmlFor="phone-contact" className="font-medium text-foreground">
										{t("globalSupportHotline")}
									</Label>
									<Link href="tel:+1555LOGISTICS" className="block text-primary hover:underline" id="phone-contact">
										+1-555-LOGISTICS (564-4784)
									</Link>
								</div>
							</CardContent>
						</Card>

						<Card className="flex-1 p-6 rounded-2xl shadow-lg border border-border">
							<CardHeader className="p-0 mb-4" id="quote-form">
								<CardTitle className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
									<IconMessageCircle className="w-6 h-6 text-primary" /> {t("sendUsAMessage")}
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0">
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div>
											<Label htmlFor="name" className="mb-1 block text-sm font-medium">
												{t("fullName")}
											</Label>
											<div className="relative">
												<IconUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
												<Input type="text" id="name" name="name" placeholder={t("namePlaceholder")} required className="pl-9" />
											</div>
										</div>
										<div>
											<Label htmlFor="email" className="mb-1 block text-sm font-medium">
												{t("emailAddress")}
											</Label>
											<div className="relative">
												<IconMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
												<Input type="email" id="email" name="email" placeholder={t("emailPlaceholder")} required className="pl-9" />
											</div>
										</div>
									</div>
									<div>
										<Label htmlFor="company" className="mb-1 block text-sm font-medium">
											{t("companyNameOptional")}
										</Label>
										<Input type="text" id="company" name="company" placeholder={t("companyPlaceholder")} />
									</div>
									<div>
										<Label htmlFor="message" className="mb-1 block text-sm font-medium">
											{t("yourMessage")}
										</Label>
										<Textarea id="message" name="message" rows={4} placeholder={t("messagePlaceholder")} required className="resize-none" />
									</div>
									<Button type="submit" className="w-full flex items-center gap-2 text-base py-3 h-auto" size="lg">
										<IconSend className="w-5 h-5" /> {t("submitYourInquiry")}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
				<div className="w-full mt-8 md:mt-12 border-t border-border pt-8 md:pt-12">
					<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 md:mb-8 flex items-center justify-center gap-3">
						<IconBuildingSkyscraper className="w-7 h-7 text-primary" /> {t("ourGlobalPresence")}
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{officeLocations.map((office) => (
							<Card
								key={office.name}
								className={`p-6 rounded-xl shadow-md ${office.isHub ? "border-2 border-primary/50 bg-primary/5" : "border border-border"}`}
							>
								<CardHeader className="p-0 mb-2">
									<CardTitle className="text-lg font-semibold flex items-center gap-2 text-foreground">
										<IconMapPin className={`w-5 h-5 ${office.isHub ? "text-primary" : "text-muted-foreground"}`} /> {office.name}
									</CardTitle>
								</CardHeader>
								<CardContent className="p-0 text-sm text-muted-foreground space-y-0.5">
									{office.addressLines.map((line) => (
										<p key={line}>{line}</p>
									))}
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</SectionLayout>
	)
}
