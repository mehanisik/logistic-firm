"use client"

import { Button } from "@/components/ui/button"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
	const { setTheme, theme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		<Button variant="ghost" size="icon" onClick={() => toggleTheme()}>
			<IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
