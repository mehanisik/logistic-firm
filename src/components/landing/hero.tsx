import { Button } from "@/components/ui/button"
import { SectionLayout } from "@/components/ui/section-layout"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Navbar from "../ui/navbar"

export default function Hero() {
	const t = useTranslations("Hero")

	return (
		<>
			<Navbar />
			<SectionLayout id="hero" className="h-[75vh]">
				<div
					aria-hidden="true"
					role="presentation"
					className="absolute inset-0 m-4 md:m-8 rounded-2xl overflow-hidden z-0"
					style={{
						backgroundImage:
							"url(https://plus.unsplash.com/premium_photo-1661932015882-c35eee885897?q=80&w=2206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>

				<div className="relative z-10 w-full flex justify-center items-center px-4 py-8">
					<div className="max-w-3xl w-full p-8 md:p-12 flex flex-col items-center gap-6 rounded-lg bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
						<div className="space-y-3 md:space-y-4 text-center">
							<h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
								{t("headline1")}
								<br className="hidden sm:block" /> <span className="text-primary">{t("headline2")}</span>
							</h1>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 pt-2 w-full justify-center">
							<Button size="lg" className="px-8 py-3 text-base font-medium w-full sm:w-auto" asChild>
								<Link href="/contact-us#quote-form">{t("getAQuote")}</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="px-8 py-3 text-base font-medium border-border text-foreground hover:bg-primary/10 hover:text-primary w-full sm:w-auto"
								asChild
							>
								<Link href="/service">{t("exploreOurServices")}</Link>
							</Button>
						</div>
					</div>
				</div>
			</SectionLayout>
		</>
	)
}
