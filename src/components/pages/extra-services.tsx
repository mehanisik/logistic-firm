"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { SectionLayout } from "../ui/section-layout"

interface AtikServiceHighlight {
	imageUrl: string
	altText: string
	title: string
	category: string
	description: string
	stat: string
	ctaLink: string
	ctaText: string
}

export default function ExtraServices() {
	const t = useTranslations("ExtraServices")
	const atikServiceHighlights = t.raw("highlights") as AtikServiceHighlight[]
	const scrollRef = useRef<HTMLDivElement>(null)

	return (
		<SectionLayout className="py-20 md:py-32 bg-background dark:bg-background">
			<div className="mb-12 text-center">
				<h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary mb-3">{t("headline")}</h2>
				<motion.div
					layoutId="extra-services-underline"
					className="mx-auto h-1 w-16 rounded-full bg-primary/70 dark:bg-primary/80 mb-2"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					style={{ transformOrigin: "left" }}
				/>
				{t("description", { default: "" }) && <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">{t("description")}</p>}
			</div>
			<div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar md:px-2">
				{atikServiceHighlights.map((service, idx) => {
					// Parallax effect for image
					const cardRef = useRef<HTMLDivElement>(null)
					const { scrollXProgress } = useScroll({
						container: scrollRef,
						target: cardRef,
					})
					const imageY = useTransform(scrollXProgress, [0, 1], [0, 30])
					return (
						<motion.div
							key={service.title}
							ref={cardRef}
							className="snap-center flex-shrink-0 min-w-[90vw] sm:min-w-[400px] max-w-[400px] w-full"
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{
								duration: 0.7,
								delay: idx * 0.12,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<Card className="relative flex flex-col h-full bg-white/60 dark:bg-black/40 backdrop-blur-lg border border-border/60 shadow-xl overflow-hidden">
								{/* Stat badge */}
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.7 }}
									transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
									className="absolute top-4 right-4 z-10 px-4 py-1 rounded-full bg-primary/90 text-background text-xs font-bold shadow-lg"
								>
									{service.stat}
								</motion.div>
								{/* Parallax image */}
								<motion.div style={{ y: imageY }} className="relative w-full h-56 overflow-hidden rounded-b-none rounded-t-2xl group">
									<Image
										src={service.imageUrl}
										alt={service.altText}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
										priority={service.title === atikServiceHighlights[0]?.title}
									/>
									<span className="absolute top-4 left-4 bg-primary/80 dark:bg-primary/70 text-background text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
										{service.category}
									</span>
								</motion.div>
								<CardContent className="flex flex-col flex-1 p-6 gap-3">
									<CardHeader className="p-0 mb-2">
										<CardTitle className="text-2xl font-bold text-foreground leading-tight mb-1">{service.title}</CardTitle>
										<CardDescription className="text-base text-muted-foreground mb-2 min-h-[48px]">{service.description}</CardDescription>
									</CardHeader>
									<Button
										asChild
										size="lg"
										className="mt-auto self-start group/button relative overflow-hidden"
										aria-label={service.ctaText}
									>
										<Link href={service.ctaLink}>
											<span className="relative z-10">{service.ctaText}</span>
											<motion.span
												className="absolute inset-0 bg-primary/10 dark:bg-primary/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 rounded"
												aria-hidden="true"
											/>
										</Link>
									</Button>
								</CardContent>
							</Card>
						</motion.div>
					)
				})}
			</div>
		</SectionLayout>
	)
}
