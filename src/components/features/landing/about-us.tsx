"use client";
import { SectionLayout } from "@/components/ui/section-layout";
import { useScrollTextAnimation } from "@/hooks/useScrollTextAnimation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutUs() {
	const t = useTranslations("AboutUs");
	const fullText = t("aboutUsText");
	const { targetRef, AnimatedText } = useScrollTextAnimation(fullText);

	return (
		<SectionLayout
			id="about-us"
			badge={t("aboutUs")}
			className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background/30 via-transparent to-background/30"
			ref={targetRef}
		>
			<div className="absolute -left-[50vw] -right-[50vw] w-[200vw] h-full z-50">
				<div className="absolute inset-0 w-full h-full bg-gradient-to-b from-background/30 via-transparent to-background/30" />
				<div className="absolute inset-0 w-full h-full overflow-hidden">
					<div
						className="absolute inset-0 w-full h-full"
						style={{
							background:
								"linear-gradient(90deg, transparent 0%, var(--primary-500) 50%, transparent 100%)",
							opacity: 0.08,
							animation: "flicker 4s ease-in-out infinite",
							transform: "skewY(-8deg)",
							transformOrigin: "top left",
						}}
					/>
					<div
						className="absolute inset-0 w-full h-full bg-gradient-to-b from-background/30 via-transparent to-background/30 animate-flicker"
						style={{
							background:
								"linear-gradient(90deg, transparent 0%, var(--primary-400) 50%, transparent 100%)",
						}}
					/>
				</div>
			</div>
			<div className="relative w-full min-h-[220px] flex flex-col items-center justify-center py-12">
				<div className="w-full flex flex-col items-center justify-center">
					<motion.div
						initial={{ y: 40 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="max-w-4xl mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-black dark:text-white font-normal"
					>
						<AnimatedText />
					</motion.div>
				</div>
			</div>
		</SectionLayout>
	);
}
