"use client"

import { useEffect, useState } from "react"

export function Preloader() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	if (!isLoading) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
			<div className="flex flex-col items-center gap-6">
				<div className="relative">
					<div className="h-24 w-24 animate-[morph_8s_ease-in-out_infinite,float_6s_ease-in-out_infinite] bg-gradient-to-br from-primary via-primary-400 to-primary-600 shadow-lg" />
					<div className="absolute inset-0 animate-[morph_8s_ease-in-out_infinite_reverse,float_6s_ease-in-out_infinite_0.5s] bg-gradient-to-tr from-primary-600 via-primary-400 to-primary opacity-50 blur-sm" />
				</div>
				<p className="text-lg font-medium text-muted-foreground animate-pulse">Loading...</p>
			</div>
		</div>
	)
}
