"use client";

import { cn } from "@/lib/utils";
import { IconCircle } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function LogisticsShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  type = "container",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  type?: "container" | "route" | "circle";
}) {
  const getShapeClasses = () => {
    switch (type) {
      case "container":
        return "rounded-lg"; // Container-like shape
      case "route":
        return "rounded-[2rem]"; // Route-like shape
      case "circle":
        return "rounded-full"; // Circle shape
      default:
        return "rounded-lg";
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0",
            getShapeClasses(),
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
            type === "circle" ? "after:rounded-full" : "after:rounded-lg",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroPattern() {
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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-accent/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <LogisticsShape
          delay={0.3}
          width={300}
          height={180}
          rotate={0}
          gradient="from-primary/[0.15]"
          type="container"
          className="left-[-10%] md:left-[-5%] top-[20%] md:top-[25%]"
        />

        <LogisticsShape
          delay={0.5}
          width={250}
          height={60}
          rotate={-15}
          gradient="from-accent/[0.15]"
          type="route"
          className="right-[-5%] md:right-[0%] top-[60%] md:top-[65%]"
        />

        <LogisticsShape
          delay={0.4}
          width={120}
          height={120}
          rotate={0}
          gradient="from-primary/[0.15]"
          type="circle"
          className="left-[15%] md:left-[20%] bottom-[15%] md:bottom-[20%]"
        />

        <LogisticsShape
          delay={0.6}
          width={200}
          height={120}
          rotate={5}
          gradient="from-accent/[0.15]"
          type="container"
          className="right-[15%] md:right-[20%] top-[25%] md:top-[30%]"
        />

        <LogisticsShape
          delay={0.7}
          width={80}
          height={80}
          rotate={0}
          gradient="from-primary/[0.15]"
          type="circle"
          className="left-[30%] md:left-[35%] top-[15%] md:top-[20%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 md:mb-8"
          >
            <IconCircle className="h-2 w-2 fill-accent/80" />
            <span className="text-sm text-white/60 tracking-wide">
              {t("companyName")}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {t("headline1")}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-primary via-white/90 to-accent",
                )}
              >
                {t("headline2")}
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
