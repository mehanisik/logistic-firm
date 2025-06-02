"use client";
import Navbar from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import { IconMouse } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Carattere } from "next/font/google";
import Image from "next/image";

const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-carattere",
});

export default function Hero() {
  const t = useTranslations("Hero");

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex bg-primary dark:bg-black md:bg-transparent min-h-screen w-full flex-col overflow-hidden"
    >
      <Navbar />
      <div className="absolute hidden md:block inset-5 rounded-xl overflow-hidden">
        <Image
          src="/images/hero-image.webp"
          alt={t("companyName")}
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full  mb-8 md:mb-12"
          >
            <span className="text-sm font-extrabold text-black dark:text-white tracking-wide">
              {t("companyName")}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text  bg-gradient-to-b text-black dark:text-white">
                {t("headline1")}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text  text-black dark:text-white ",
                  carattere.className,
                )}
              >
                {t("headline2")}
              </span>
            </h1>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 transform">
        <IconMouse className="h-8 w-8 text-white/70 group-hover:text-white animate-bounce transition-all  hover:scale-110" />
      </div>
    </section>
  );
}
