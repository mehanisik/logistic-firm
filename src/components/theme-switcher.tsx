"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
	const { setTheme, theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleToggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={handleToggleTheme}
			aria-label="Toggle theme"
			className={cn("relative flex items-center justify-center")}
			disabled={!mounted}
		>
			<IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
