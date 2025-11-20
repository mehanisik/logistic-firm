import localFont from "next/font/local";

export const halenoir = localFont({
	src: "./HalenoirCompact-Regular.otf",
	variable: "--font-halenoir",
	display: "swap",
	weight: "400",
	preload: true,
});

export const carattere = localFont({
	src: "./Carattere-Regular.otf",
	variable: "--font-carattere",
	display: "swap",
	weight: "400",
	preload: true,
});
