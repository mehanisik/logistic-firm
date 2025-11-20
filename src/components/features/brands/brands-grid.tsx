"use client";

import { BRANDS, type BrandInfo } from "@/constants/brands.constant";
import { useState } from "react";
import { BrandCard } from "./components/brand-card";
import { BrandDialog } from "./components/brand-dialog";

export default function BrandsGrid() {
	const [selectedBrand, setSelectedBrand] = useState<BrandInfo | null>(null);

	return (
		<div className="w-full">
			{}
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-border bg-background">
				{BRANDS.map((brand) => (
					<div key={brand.id} className="border-b border-r border-border">
						<BrandCard brand={brand} onClick={() => setSelectedBrand(brand)} />
					</div>
				))}
			</div>

			{}
			{}

			{}
			<BrandDialog
				brand={selectedBrand}
				isOpen={!!selectedBrand}
				onClose={() => setSelectedBrand(null)}
			/>
		</div>
	);
}
