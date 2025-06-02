import { Carattere } from "next/font/google";

import localFont from "next/font/local";

export const carattere = Carattere({
  weight: "400",
  variable: "--font-carattere",
  subsets: ["latin"],
  display: "swap",
});

export const halenoir = localFont({
  src: "./HalenoirCompact-Regular.otf",
  variable: "--font-halenoir",
  display: "swap",
  weight: "400",
  preload: true,
});
