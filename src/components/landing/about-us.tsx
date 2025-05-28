"use client"
import { type MotionValue, motion, useScroll, useTransform } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
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
	const fontWeight = useTransform(progress, range, [400, 700])
	return (
		<span className="relative inline-block">
			<span className="absolute inset-0 select-none text-foreground/10" aria-hidden="true">
				{children}
			</span>
			<motion.span style={{ opacity, fontWeight }} className="text-foreground">
				{children}
			</motion.span>
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
			className={`flex flex-wrap text-2xl sm:text-2xl md:text-3xl mb-8 sm:mb-12 leading-relaxed sm:leading-loose text-muted-foreground gap-x-[0.4em] gap-y-[0.1em] ${className || ""}`}
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
		<SectionLayout id="about-us" className="relative px-0 py-0">
			<div className="relative flex flex-col md:flex-row items-center md:items-stretch justify-center min-h-[60vh] py-16 md:py-28 px-4 md:px-12 gap-8 md:gap-0">
				<div className="flex-1 flex items-center md:items-start justify-start md:justify-start">
					<h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight mb-6 md:mb-0 drop-shadow-xl">
						{t("headline1")} <span className="text-primary">{t("headlineAccent")}</span>
					</h2>
				</div>
				<div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
					<AnimatedScrollWords text={aboutUsText} className="text-white font-bold text-left md:text-2xl lg:text-3xl drop-shadow-xl" />
				</div>
			</div>
		</SectionLayout>
	)
}
