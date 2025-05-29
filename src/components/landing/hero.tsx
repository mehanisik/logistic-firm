"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar"
import { cn } from "@/lib/utils"
import { IconMouse } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

const HERO_CONFIG = {
	backgroundImageUrl: "https://images.pexels.com/photos/3277769/pexels-photo-3277769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
	altText: "Global logistics network concept",
	contactLink: "#contact-us",
	imagePadding: "p-4 md:p-6 lg:p-10",
	imageBorderRadius: "rounded-xl md:rounded-2xl",
}

export default function Hero() {
	const t = useTranslations("Hero")

	const headline1 = t("headline1")
	const headline2 = t("headline2")
	const contactUsText = t("contactUs")

	return (
		<section id="hero" aria-labelledby="hero-heading" className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-primary text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
			>
				Skip to main content
			</a>
			<div className="relative z-30">
				<Navbar />
			</div>

			<main id="main-content" className="relative z-10 flex flex-grow flex-col h-full">
				<div className={cn("relative flex-grow m-8", HERO_CONFIG.imagePadding)}>
					<Image
						src={HERO_CONFIG.backgroundImageUrl}
						alt={HERO_CONFIG.altText}
						fill
						className={cn("object-cover object-center", HERO_CONFIG.imageBorderRadius)}
						priority
						quality={85}
						unoptimized={process.env.NODE_ENV === "development"}
					/>
					<div aria-hidden="true" className={cn("absolute inset-0 bg-black/20 dark:bg-black/40", HERO_CONFIG.imageBorderRadius)} />
				</div>

				<div className="absolute inset-0 z-20 flex items-center justify-center p-4 text-center">
					<div className="w-full max-w-4xl">
						<div className="space-y-6 md:space-y-8 p-6 rounded-lg">
							<h1
								id="hero-heading"
								className="text-4xl font-bold uppercase leading-tight text-foreground drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl"
							>
								{headline1} <br className="md:hidden" />
								<span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light normal-case text-foreground/80">
									{headline2}
								</span>
							</h1>
							<div className="pt-6">
								<Button
									size="lg"
									className="rounded-xl dark:bg-black dark:text-primary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
									asChild
								>
									<Link href={HERO_CONFIG.contactLink}>{contactUsText}</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</main>

			<div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 transform">
				<IconMouse className="h-8 w-8 text-white/70 group-hover:text-white animate-bounce transition-all  hover:scale-110" />
			</div>
		</section>
	)
}
