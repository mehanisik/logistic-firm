"use client"

import { IconMenu2, IconPlant2, IconX } from "@tabler/icons-react"
import Link from "next/link"
import LanguageSwitcher from "../language-switcher"
import { ThemeSwitcher } from "../theme-switcher"
import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const t = useTranslations('Navbar')
	const [mobileOpen, setMobileOpen] = useState(false)

	// Scroll direction logic
	const lastScrollY = useRef(0)
	const [show, setShow] = useState(true)

	useEffect(() => {
		if (mobileOpen) return
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (currentScrollY < 10) {
				setShow(true)
			} else if (currentScrollY > lastScrollY.current) {
				setShow(false)
			} else {
				setShow(true)
			}
			lastScrollY.current = currentScrollY
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [mobileOpen])

	return (
		<>
			<motion.header
				initial={{ y: 0 }}
				animate={{ y: show ? 0 : -80 }}
				transition={{ type: "spring", stiffness: 300, damping: 30 }}
				className="border-b sticky top-0 z-50 w-full transition-colors duration-300"
			>
				<div className="max-w-7xl mx-auto h-14 flex items-center px-2 sm:px-4">
					<div className="flex justify-between items-center w-full h-full">
						<div className="flex items-center">
							<Link href="/" className="flex items-center space-x-2">
								<IconPlant2 />
								<span className="text-xl font-bold text-nexmove-primary">{t('brand')}</span>
							</Link>
						</div>
						<nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
							<Link href="/" className="">{t('home')}</Link>
							<Link href="/about-us" className="">{t('about')}</Link>
							<Link href="/service" className="">{t('service')}</Link>
							<Link href="/blog" className="">{t('blog')}</Link>
							<Link href="/contact-us" className="">{t('contact')}</Link>
							<LanguageSwitcher />
							<ThemeSwitcher />
						</nav>

						<button
							className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
							aria-label={t('openMenuAria')}
							onClick={() => setMobileOpen(true)}
						>
							<IconMenu2 size={28} />
						</button>
					</div>
				</div>
			</motion.header>

			{mobileOpen && (
				<div className="fixed inset-0 z-50 bg-background/95 flex flex-col">
					<div className="flex items-center justify-between h-14 px-4 border-b">
						<Link href="/" className="flex items-center space-x-2" onClick={() => setMobileOpen(false)}>
							<IconPlant2 />
							<span className="text-xl font-bold text-nexmove-primary">{t('brand')}</span>
						</Link>
						<button
							className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
							aria-label={t('closeMenuAria')}
							onClick={() => setMobileOpen(false)}
						>
							<IconX size={28} />
						</button>
					</div>
					<nav className="flex flex-col gap-2 px-6 py-6 text-lg">
						<Link href="/" onClick={() => setMobileOpen(false)} className="py-2">{t('home')}</Link>
						<Link href="/about-us" onClick={() => setMobileOpen(false)} className="py-2">{t('about')}</Link>
						<Link href="/service" onClick={() => setMobileOpen(false)} className="py-2">{t('service')}</Link>
						<Link href="/blog" onClick={() => setMobileOpen(false)} className="py-2">{t('blog')}</Link>
						<Link href="/contact-us" onClick={() => setMobileOpen(false)} className="py-2">{t('contact')}</Link>
						<div className="flex gap-4 mt-4 items-center">
							<LanguageSwitcher />
							<ThemeSwitcher />
						</div>
					</nav>
				</div>
			)}
		</>
	)
}
