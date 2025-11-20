"use client";

import { type BrandInfo } from "@/constants/brands.constant";
import Image from "next/image";

interface BrandCardProps {
	brand: BrandInfo;
	onClick: () => void;
}

export function BrandCard({ brand, onClick }: BrandCardProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="group relative flex flex-col items-center justify-center text-center w-full h-[200px] p-5 transition-colors duration-300 hover:bg-muted/5 focus:outline-none focus:bg-muted/5"
		>
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none p-8">
				<div className="relative w-full h-16 sm:h-20 transition-transform duration-500 group-hover:scale-110">
					<Image
						src={brand.logo}
						alt={`${brand.name} logo`}
						fill
						className={`object-contain transition-all duration-500 ${
							brand.invertDark !== false ? "dark:brightness-0 dark:invert" : ""
						}`}
						sizes="150px"
					/>
				</div>
			</div>

			<div className="absolute inset-x-0 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<span className="text-sm font-semibold text-foreground tracking-tight">
					{brand.name}
				</span>
			</div>

			<div className="absolute inset-2 border border-primary/0 group-hover:border-primary/5 rounded-sm pointer-events-none transition-colors" />
		</button>
	);
}
