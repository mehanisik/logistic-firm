"use client"
import { type MotionValue, motion, useScroll, useTransform } from "framer-motion"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { type ReactNode, useRef } from "react"
import { Button } from "../ui/button"
import { SectionLayout } from "../ui/section-layout"

interface AnimatedWordProps {
	children: ReactNode
	progress: MotionValue<number>
	range: [number, number]
}

const AnimatedWord = ({ children, progress, range }: AnimatedWordProps) => {
	const opacity = useTransform(progress, range, [0.1, 1])

	return (
		<span className="relative inline-block">
			<span className="absolute inset-0 select-none text-foreground/10" aria-hidden="true">
				{children}
			</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	)
}

interface AnimatedScrollWordsProps {
	text: string
	className?: string
}

function AnimatedScrollWords({ text, className }: AnimatedScrollWordsProps) {
	const containerRef = useRef<HTMLParagraphElement>(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 0.9", "start 0.25"],
	})

	const words = text.split(" ")

	return (
		<p
			ref={containerRef}
			className={`flex flex-wrap text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-10
                 leading-relaxed sm:leading-loose text-muted-foreground
                 gap-x-[0.4em] gap-y-[0.2em] ${className || ""}`}
			aria-label={text}
		>
			{words.map((word, i) => {
				const start = i / words.length
				const end = start + 1 / words.length
				return (
					<AnimatedWord key={`${word}-${i}-${crypto.randomUUID()}`} progress={scrollYProgress} range={[start, end]}>
						{word}
					</AnimatedWord>
				)
			})}
		</p>
	)
}

export default function AboutUs() {
	const t = useTranslations("AboutUs")
	const aboutUsText = t("aboutUsText")

	return (
		<SectionLayout id="about-us">
			<div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center md:items-start">
				<div className="flex-1 w-full md:pr-8">
					<div className="text-xs sm:text-sm font-semibold mb-2 text-primary uppercase flex items-center gap-1 tracking-wider">
						{t("ourStory")} <span className="text-lg text-primary">↘</span>
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-foreground">
						{t("headline1")}
						<br className="hidden sm:block" />
						{t("headline2")} <span className="text-primary">{t("headlineAccent")}</span>
					</h2>
					<p className="mb-6 sm:mb-8 text-base sm:text-lg text-muted-foreground max-w-xl">{t("subDescription")}</p>
					<Button variant="default" size="lg" className="w-full sm:w-auto px-8 rounded-md font-semibold" asChild>
						<Link href="/contact-us">{t("partnerWithUs")}</Link>
					</Button>
				</div>
				<div className="flex-1 flex flex-col justify-center w-full mt-8 md:mt-0">
					<AnimatedScrollWords text={aboutUsText} />
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 mt-4 sm:mt-8">
						<div className="text-center p-4 bg-muted/50 rounded-lg">
							<div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 text-foreground">
								{t("yearsOfExpertiseValue")}
							</div>
							<div className="text-sm sm:text-base text-foreground font-medium">{t("yearsOfExpertiseLabel")}</div>
						</div>
						<div className="text-center p-4 bg-muted/50 rounded-lg">
							<div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 text-foreground">
								{t("customerRetentionValue")}
							</div>
							<div className="text-sm sm:text-base text-foreground font-medium">{t("customerRetentionLabel")}</div>
						</div>
						<div className="text-center p-4 bg-muted/50 rounded-lg">
							<div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 text-foreground">
								{t("globalClientsValue")}
							</div>
							<div className="text-sm sm:text-base text-foreground font-medium">{t("globalClientsLabel")}</div>
						</div>
					</div>
				</div>
			</div>
		</SectionLayout>
	)
}
