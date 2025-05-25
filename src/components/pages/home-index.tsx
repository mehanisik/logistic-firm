"use client"
import { Button } from "@/components/ui/button"
import { Github, Star } from "lucide-react"
import Link from "next/link"

import { useTranslations } from "next-intl"

export default function HomeIndex() {
	const t = useTranslations("Index")

	const f = useTranslations("Footer")

	return (
		<div className="flex flex-col min-h-screen w-full">
			<main className="flex-1">
				<section className="w-full py-8 md:py-12 lg:py-20">
					<div className=" px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									{t("title")}
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
									{t("description")}
								</p>
							</div>
							<div className="flex justify-center align-middle items-center gap-4 flex-wrap">
								<Button
									asChild
									size="lg"
									className="bg-primary hover:bg-primary/90 transition-colors duration-200"
								>
									<Link
										href="https://github.com/S0vers/next-app-i18n-starter"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="m-2 h-5 w-5" />
										{t("cloneRepository")}
									</Link>
								</Button>
								<Button asChild size="lg" variant={"outline"}>
									<Link
										href="https://github.com/S0vers/next-app-i18n-starter"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Star className="m-2 h-5 w-5" />
										{t("leaveStar")}
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-between">
				<p className="text-xs text-gray-500 dark:text-gray-400">{f("copyright")}</p>
				<nav className=" flex gap-4 sm:gap-6">
					<Link
						className="text-xs hover:underline underline-offset-4 hover:text-primary transition-colors duration-200"
						href="https://github.com/S0vers/next-app-i18n-starter"
						target="_blank"
						rel="noopener noreferrer"
					>
						{f("githubLink")}
					</Link>
				</nav>
			</footer>
		</div>
	)
}
