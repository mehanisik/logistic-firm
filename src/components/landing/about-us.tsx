"use client"
import { type MotionValue, motion, useScroll, useTransform } from "framer-motion"
import { MessageCircleIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { type ReactNode, useRef } from "react"
import { SectionLayout } from "../ui/section-layout"

type WordProps = {
	children: ReactNode
	progress: MotionValue<number>
	range: [number, number]
}
const Word = ({ children, progress, range }: WordProps) => {
	const opacity = useTransform(progress, range, [0, 1])

	return (
		<span className={"relative mr-4 mt-4"}>
			<span className={"absolute opacity-20"}>{children}</span>

			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	)
}

export default function AboutUs() {
	const t = useTranslations("AboutUs")
	const aboutUsText = t("aboutUsText")
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	})
	const words = aboutUsText.split(" ")

	return (
		<SectionLayout id="about-us">
			<div className="relative flex flex-col items-center justify-center min-h-[60vh]">
				<div className="text-center mb-8 md:mb-12 lg:mb-20">
					<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4">
						<MessageCircleIcon />
						{t("ourStory")}
					</div>
					<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 md:mb-6 px-4">{t("headline1")}</h2>
				</div>
				<p ref={container} className={"flex text-3xl md:text-6xl p-10 flex-wrap"}>
					{words.map((word, i) => {
						const start = i / words.length
						const end = start + 1 / words.length
						return (
							<Word key={i} progress={scrollYProgress} range={[start, end]}>
								{word}
							</Word>
						)
					})}
				</p>
			</div>
		</SectionLayout>
	)
}
