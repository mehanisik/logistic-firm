export interface LogoInfo {
	src: string;
	alt: string;
	height?: number;
	width?: number;
	invertDark?: boolean;
}

export const PARTNER_LOGOS: LogoInfo[] = [
	{ src: "/logos/cola.svg", alt: "Coca-Cola Logo" },
	{ src: "/logos/colgate.svg", alt: "Colgate Logo" },
	{ src: "/logos/dr-pepper.svg", alt: "Dr Pepper Logo" },
	{ src: "/logos/fanta.svg", alt: "Fanta Logo" },
	{ src: "/logos/garnier.svg", alt: "Garnier Logo" },
	{ src: "/logos/loreal.svg", alt: "Loreal Logo" },
	{ src: "/logos/nivea.svg", alt: "Nivea Logo" },
	{ src: "/logos/prime.svg", alt: "Prime Logo" },
	{ src: "/logos/toblerone.svg", alt: "Toblerone Logo" },
	{ src: "/logos/dove.svg", alt: "Dove Logo" },
	{ src: "/logos/evian.svg", alt: "Evian Logo" },
	{ src: "/logos/dreft.png", alt: "Dreft Logo", invertDark: false },
	{ src: "/logos/daz.png", alt: "Daz Logo", invertDark: false },
	{ src: "/logos/a1.png", alt: "Ariel Logo" },
	{ src: "/logos/lal.png", alt: "Lavandera Logo" },
	{ src: "/logos/gama.png", alt: "Gama Logo", invertDark: false },
	{ src: "/logos/tinoclean.png", alt: "Tinoclean Logo", invertDark: false },
	{ src: "/logos/ampibur.png", alt: "Ambipur Logo", invertDark: false },
	{ src: "/logos/noora.png", alt: "Noora Logo", invertDark: false },
	{ src: "/logos/opso.png", alt: "Opso Logo", invertDark: false },
	{ src: "/logos/lang.png", alt: "Lang Logo", invertDark: false },
];
