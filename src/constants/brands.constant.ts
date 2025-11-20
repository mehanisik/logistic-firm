export type BrandCategory =
	| "detergent"
	| "fabric-softener"
	| "air-freshener"
	| "household-cleaner"
	| "beverage"
	| "personal-care"
	| "confectionery";

export interface BrandInfo {
	id: string;
	name: string;
	logo: string;
	category: BrandCategory;
	regions: string[];
	launchYear?: number;
	certifications?: string[];
	invertDark?: boolean;
}

export const BRANDS: BrandInfo[] = [
	{
		id: "dreft",
		name: "Dreft",
		logo: "/logos/dreft.png",
		invertDark: false,
		category: "detergent",
		regions: ["Belgium", "Netherlands", "Nordic countries"],
		launchYear: 1948,
		certifications: ["Nordic Swan", "Asthma and Allergy Foundation"],
	},
	{
		id: "daz",
		name: "DAZ",
		logo: "/logos/daz.png",
		invertDark: false,
		category: "detergent",
		regions: ["United Kingdom"],
		launchYear: 1953,
	},
	{
		id: "a-plus",
		name: "A+",
		logo: "/logos/a1.png",
		invertDark: false,
		category: "detergent",
		regions: ["Sweden", "Denmark", "Norway", "Finland", "Portugal"],
		certifications: ["Nordic Swan", "Asthma and Allergy Foundation"],
	},
	{
		id: "lavandera",
		name: "La Lavandera",
		logo: "/logos/lavandera.svg",
		category: "household-cleaner",
		regions: ["Spain", "Romania", "Ukraine", "Eastern Europe"],
	},
	{
		id: "gama",
		name: "Gama",
		logo: "/logos/gama.png",
		invertDark: false,
		category: "detergent",
		regions: ["20+ countries globally"],
	},
	{
		id: "tinokleen",
		name: "Tinokleen",
		logo: "/logos/tinoclean.png",
		invertDark: false,
		category: "detergent",
		regions: ["Multiple markets"],
	},
	{
		id: "ambipur",
		name: "Ambipur",
		logo: "/logos/ampibur.png",
		invertDark: false,
		category: "air-freshener",
		regions: ["Multiple markets"],
	},
	{
		id: "noora",
		name: "Noora",
		logo: "/logos/noora.png",
		invertDark: false,
		category: "fabric-softener",
		regions: ["Nordic countries"],
	},
	{
		id: "opso",
		name: "Öpso",
		logo: "/logos/opso.png",
		invertDark: false,
		category: "air-freshener",
		regions: ["Multiple markets"],
	},
	{
		id: "lang",
		name: "Lang",
		logo: "/logos/lang.png",
		invertDark: false,
		category: "detergent",
		regions: ["Egypt", "Middle East"],
	},
	{
		id: "coca-cola",
		name: "Coca-Cola",
		logo: "/logos/cola.svg",
		category: "beverage",
		regions: ["Global - 200+ countries"],
	},
	{
		id: "colgate",
		name: "Colgate",
		logo: "/logos/colgate.svg",
		category: "personal-care",
		regions: ["Global - 200+ countries"],
	},
	{
		id: "dr-pepper",
		name: "Dr Pepper",
		logo: "/logos/dr-pepper.svg",
		category: "beverage",
		regions: ["Multiple markets globally"],
	},
	{
		id: "fanta",
		name: "Fanta",
		logo: "/logos/fanta.svg",
		category: "beverage",
		regions: ["Global"],
	},
	{
		id: "garnier",
		name: "Garnier",
		logo: "/logos/garnier.svg",
		category: "personal-care",
		regions: ["Global"],
	},
	{
		id: "loreal",
		name: "L'Oréal",
		logo: "/logos/loreal.svg",
		category: "personal-care",
		regions: ["Global"],
	},
	{
		id: "nivea",
		name: "Nivea",
		logo: "/logos/nivea.svg",
		category: "personal-care",
		regions: ["Global"],
	},
	{
		id: "prime",
		name: "Prime",
		logo: "/logos/prime.svg",
		category: "beverage",
		regions: ["Multiple markets"],
	},
	{
		id: "toblerone",
		name: "Toblerone",
		logo: "/logos/toblerone.svg",
		category: "confectionery",
		regions: ["Global"],
	},
	{
		id: "dove",
		name: "Dove",
		logo: "/logos/dove.svg",
		category: "personal-care",
		regions: ["Global"],
	},
	{
		id: "evian",
		name: "Evian",
		logo: "/logos/evian.svg",
		category: "beverage",
		regions: ["Global"],
	},
];

export const BRAND_CATEGORIES: Record<BrandCategory, string> = {
	detergent: "Laundry Detergent",
	"fabric-softener": "Fabric Softener",
	"air-freshener": "Air Freshener",
	"household-cleaner": "Household Cleaner",
	beverage: "Beverage",
	"personal-care": "Personal Care",
	confectionery: "Confectionery",
};
