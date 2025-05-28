"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
	const t = useTranslations("Hero")
	return (
		<section id="hero" className="relative h-[100vh] w-full overflow-hidden">
			<div
				style={{
					backgroundImage:
						"url('https://images.pexels.com/photos/3277769/pexels-photo-3277769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
				className="absolute inset-0"
			/>

			<div className="relative z-30">
				<Navbar />
			</div>

			<div className="relative z-20 h-full flex justify-center items-center px-4">
				<div className="max-w-4xl w-full text-center">
					<div className="p-8 md:p-12 rounded-2xl border border-border md:bg-transparent md:backdrop-blur-none md:border-none">
						<div className="space-y-6">
							<h1 className="text-4xl md:text-5xl uppercase lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground drop-shadow-2xl">
								{t("headline1")}
							</h1>
							<p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/95 drop-shadow-lg max-w-3xl mx-auto">
								{t("headline2")}
							</p>
							<div className="pt-6">
								<Button
									size="lg"
									className="px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-xl"
									asChild
								>
									<Link href="#contact-us">{t("contactUs")}</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
				<div className="animate-bounce">
					<div className="w-6 h-10 border-2 border-border/50 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-background/70 rounded-full mt-2 animate-pulse" />
					</div>
				</div>
			</div>
		</section>
	)
}
