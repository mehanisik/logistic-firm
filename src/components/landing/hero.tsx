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
			<Image
				src="https://plus.unsplash.com/premium_photo-1661932015882-c35eee885897?q=80&w=2206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Hero Background"
				fill
				quality={100}
				className="object-cover object-center"
				priority
			/>

			<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-[1]" />

			<div className="relative z-30">
				<Navbar />
			</div>

			<div className="relative z-20 h-full flex justify-center items-center px-4">
				<div className="max-w-4xl w-full text-center">
					<div className="p-8 md:p-12 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 md:bg-transparent md:backdrop-blur-none md:border-none">
						<div className="space-y-6">
							<h1 className="text-4xl md:text-5xl uppercase lg:text-6xl xl:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
								{t("headline1")}
							</h1>
							<p className="text-xl md:text-2xl lg:text-3xl font-light text-white/95 drop-shadow-lg max-w-3xl mx-auto">{t("headline2")}</p>
							<div className="pt-6">
								<Button
									size="lg"
									className="px-8 py-4 text-lg font-semibold bg-white text-black hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-xl"
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
					<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
					</div>
				</div>
			</div>
		</section>
	)
}
