"use client";
import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { type ReactNode, useRef } from "react";
import { SectionLayout } from "../ui/section-layout";

type WordProps = {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
};
const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [40, 0]);

  return (
    <span className={"relative mr-4 mt-4"}>
      <span className={"absolute opacity-20"}>{children}</span>

      <motion.span style={{ opacity, y }}>{children}</motion.span>
    </span>
  );
};

export default function AboutUs() {
  const t = useTranslations("AboutUs");
  const aboutUsText = t("aboutUsText");
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "start start"],
  });
  const words = aboutUsText.split(" ");

  return (
    <SectionLayout
      fullWidth
      id="about-us"
      noPadding
      className="bg-primary/30 p-4 md:p-10 md:min-h-screen"
    >
      <div className="relative flex flex-col md:flex-row h-full w-full justify-between">
        <motion.div
          className="md:sticky md:top-0 self-start text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center md:text-left font-bold text-black dark:text-white mb-4 md:mb-6 px-2 md:px-4 w-full md:w-1/2 flex items-center justify-center md:justify-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {t("ourStory")}
        </motion.div>
        <p
          ref={container}
          className="flex flex-wrap text-lg sm:text-2xl md:text-4xl lg:text-6xl p-2 md:p-10 h-full w-full md:w-1/2"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={crypto.randomUUID()}
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </SectionLayout>
  );
}
