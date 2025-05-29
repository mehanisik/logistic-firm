"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconMoon, IconPlant2, IconSend, IconSun } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import Link from "next/link"
import { type MouseEvent, useRef, useState } from "react"

interface NavLinkItem {
	href: string
	label: string
}

interface SocialLinkItem {
	Icon: React.ElementType
	href: string
	label: string
	tooltip: string
}

export default function Footer() {
	const t = useTranslations("Footer")
	const { theme, setTheme } = useTheme()
	const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)
	const footerRef = useRef<HTMLDivElement>(null)
	const currentYear = new Date().getFullYear()

	const footerNavLinks: NavLinkItem[] = [
		{ href: "/", label: t("nav.home") },
		{ href: "/about-us", label: t("nav.about") },
		{ href: "/service", label: t("nav.services") },
		{ href: "/blog", label: t("nav.blog") },
		{ href: "/contact-us", label: t("nav.contact") },
		{ href: "/track-shipment", label: t("nav.track") },
	]

	const legalNavLinks: NavLinkItem[] = [
		{ href: "/privacy-policy", label: t("legal.privacy") },
		{ href: "/terms-of-service", label: t("legal.terms") },
		{ href: "/sitemap.xml", label: t("legal.sitemap") },
	]

	const socialLinks: SocialLinkItem[] = [
		{
			Icon: IconBrandLinkedin,
			href: "https://linkedin.com/company/atiklogistics-example",
			label: "LinkedIn",
			tooltip: t("social.linkedin"),
		},
		{
			Icon: IconBrandTwitter,
			href: "https://twitter.com/atiklogistics-example",
			label: "Twitter",
			tooltip: t("social.twitter"),
		},
		{
			Icon: IconBrandFacebook,
			href: "https://facebook.com/atiklogistics-example",
			label: "Facebook",
			tooltip: t("social.facebook"),
		},
	]

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const rect = footerRef.current?.getBoundingClientRect()
		if (!rect) return
		setCursor({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		})
	}

	const handleMouseLeave = () => {
		setCursor(null)
	}

	const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const email = formData.get("email")
		console.log("Newsletter subscription for:", email)
		event.currentTarget.reset()
	}

	return (
		<footer
			ref={footerRef}
			className="relative border-t bg-background text-foreground transition-colors duration-300 overflow-hidden"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{cursor && (
				<div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 w-full h-full z-0">
					<div
						style={{
							position: "absolute",
							left: cursor.x,
							top: cursor.y,
							width: 240,
							height: 240,
							transform: "translate(-50%, -50%)",
							borderRadius: "50%",
							background:
								theme === "dark"
									? "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 70%)"
									: "radial-gradient(circle, rgba(0,0,0,0.10) 0%, transparent 70%)",
							filter: "blur(32px)",
							mixBlendMode: theme === "dark" ? "lighten" : "multiply",
							pointerEvents: "none",
							transition: "left 0.08s linear, top 0.08s linear, opacity 0.2s",
						}}
					/>
				</div>
			)}
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16 relative z-10">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
					<div className="lg:col-span-4">
						<Link href="/" className="inline-flex items-center gap-2 mb-4 group">
							<IconPlant2 className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
							<span className="text-2xl font-bold text-foreground">{t("companyName")}</span>
						</Link>
						<p className="mb-6 text-muted-foreground text-sm leading-relaxed">{t("newsletterDescription")}</p>
						<form onSubmit={handleNewsletterSubmit} className="relative flex items-center">
							<Label htmlFor="footer-newsletter-email" className="sr-only">
								Email for newsletter
							</Label>
							<Input
								type="email"
								id="footer-newsletter-email"
								name="email"
								placeholder={t("newsletterPlaceholder")}
								required
								className="pr-12 py-3 h-auto text-base bg-background dark:bg-slate-800 border-border focus:border-primary"
							/>
							<Button
								type="submit"
								variant="ghost"
								size="icon"
								className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-md text-primary hover:bg-primary/10"
								aria-label={t("newsletterAriaLabel")}
							>
								<IconSend className="h-5 w-5" />
							</Button>
						</form>
					</div>

					<div className="lg:col-span-2 md:justify-self-end">
						<h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-foreground">{t("quickLinks")}</h3>
						<nav className="space-y-2.5">
							{footerNavLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					<div className="lg:col-span-3 md:justify-self-end">
						<h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-foreground">{t("contactTitle")}</h3>
						<address className="space-y-2.5 text-sm not-italic text-muted-foreground">
							<p>{t("address")}</p>
							<p>
								<Link href="tel:+15555644784" className="hover:text-primary transition-colors duration-200">
									{t("phoneLabel")}
								</Link>
							</p>
							<p>
								<Link href="mailto:inquiries@atiklogistics.com" className="hover:text-primary transition-colors duration-200">
									{t("emailLabel")}
								</Link>
							</p>
						</address>
					</div>

					<div className="lg:col-span-3 md:justify-self-end">
						<h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-foreground">{t("followUs")}</h3>
						<div className="mb-6 flex space-x-3">
							{socialLinks.map((social) => (
								<TooltipProvider key={social.label} delayDuration={100}>
									<Tooltip>
										<TooltipTrigger asChild>
											<Button
												variant="outline"
												size="icon"
												className="rounded-lg border-border hover:border-primary hover:text-primary transition-colors duration-200"
												asChild
											>
												<Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
													<social.Icon className="h-5 w-5" />
												</Link>
											</Button>
										</TooltipTrigger>
										<TooltipContent side="top">
											<p>{social.tooltip}</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							))}
						</div>
						<div className="flex items-center space-x-2 mt-4">
							<IconSun className="h-5 w-5 text-muted-foreground" />
							<Switch
								id="footer-dark-mode-toggle"
								checked={theme === "dark"}
								onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
								aria-label="Toggle dark mode"
							/>
							<IconMoon className="h-5 w-5 text-muted-foreground" />
						</div>
					</div>
				</div>

				<div className="mt-10 lg:mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center md:flex-row">
					<p className="text-xs text-muted-foreground">{t("copyright", { year: currentYear })}</p>
					<nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
						{legalNavLinks.map((link) => (
							<Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200">
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</footer>
	)
}
