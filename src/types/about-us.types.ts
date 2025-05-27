import type { MotionValue } from "framer-motion"
import type { ReactNode } from "react"

export interface AnimatedWordProps {
	children: ReactNode
	progress: MotionValue<number>
	range: [number, number]
}

export interface AnimatedScrollWordsProps {
	text: string
	className?: string
}
