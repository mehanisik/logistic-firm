import { carattere } from "@/fonts";
import { cn } from "@/lib/utils";

interface HeroHeadlineProps {
	headline1: string;
	headline2: string;
	className?: string;
	subheadlineClassName?: string;
}

export function HeroHeadline({
	headline1,
	headline2,
	className,
	subheadlineClassName,
}: HeroHeadlineProps) {
	return (
		<div className="animate-fade-up [animation-delay:700ms]">
			<h1
				className={cn(
					"font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight",
					className,
				)}
			>
				<span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
					{headline1}
				</span>
				<br />
				<span
					className={cn(
						"text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]",
						carattere.className,
						subheadlineClassName,
					)}
				>
					{headline2}
				</span>
			</h1>
		</div>
	);
}
