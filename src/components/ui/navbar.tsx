"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import {
	IconBook,
	IconFlag,
	IconHome,
	IconInfoCircle,
	IconMoon,
	IconPhone,
	IconSun,
	IconTruckDelivery,
} from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
	{ href: "/", label: "Home", icon: IconHome },
	{ href: "/about", label: "About Us", icon: IconInfoCircle },
	{ href: "/service", label: "Service", icon: IconTruckDelivery },
	{ href: "/blog", label: "Blog", icon: IconBook },
	{ href: "/contact", label: "Contact Us", icon: IconPhone },
]

const languages = [
	{ code: "en", label: "English", icon: <IconFlag className="w-5 h-5 text-blue-600" /> },
	{ code: "tr", label: "Türkçe", icon: <IconFlag className="w-5 h-5 text-red-600" /> },
]

export function Navbar({ className }: { className?: string }) {
	const pathname = usePathname()
	const { theme, setTheme } = useTheme()
	const [currentLanguage, setCurrentLanguage] = useState("en")

	// Language switcher logic (simplified, you may want to sync with cookies or context)
	const handleLanguageChange = (lang: string) => {
		setCurrentLanguage(lang)
		// Add your routing logic here
	}

	return (
		<header
			className={cn(
				"px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 w-full",
				className,
			)}
		>
			<Link className="flex items-center gap-2" href="/">
				<IconTruckDelivery className="h-6 w-6 text-primary" />
				<span className="font-bold text-xl">Logistic Firm</span>
			</Link>
			<nav className="flex items-center gap-2 sm:gap-4">
				{navLinks.map(({ href, label, icon: Icon }) => (
					<Link
						key={href}
						href={href}
						className={cn(
							"flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
							pathname === href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
						)}
					>
						<Icon className="w-5 h-5" />
						<span>{label}</span>
					</Link>
				))}
				{/* Language Switcher */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" className="relative">
							{languages.find(l => l.code === currentLanguage)?.icon || <IconFlag className="w-5 h-5" />}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{languages.map(lang => (
							<DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
								<span className="mr-2">{lang.icon}</span>
								{lang.label}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
				{/* Theme Switcher */}
				<Button
					variant="ghost"
					size="icon"
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
					aria-label="Toggle theme"
				>
					{theme === "dark" ? <IconMoon className="w-5 h-5" /> : <IconSun className="w-5 h-5" />}
				</Button>
			</nav>
		</header>
	)
}

export default Navbar
