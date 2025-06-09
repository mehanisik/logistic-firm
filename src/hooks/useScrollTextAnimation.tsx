import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { type ReactElement, useRef } from "react";

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  wordIndex: number;
}

const AnimatedWord = ({
  word,
  progress,
  range,
  wordIndex,
}: WordProps): ReactElement => {
  const opacity = useTransform(progress, range, [0.05, 1]);
  return (
    <motion.span style={{ opacity, display: "inline-block" }}>
      {word}
    </motion.span>
  );
};

interface AnimatedParagraphProps {
  text: string;
  scrollProgress: MotionValue<number>;
}

const AnimatedParagraph = ({
  text,
  scrollProgress,
}: AnimatedParagraphProps): ReactElement => {
  if (!text) return <></>;
  const words = text.split(/(\s+)/); // keep spaces as separate elements
  const totalWords = words.filter((w) => w.trim().length > 0).length;
  let wordCounter = 0;
  const rangeDuration = 1;

  function getStableKey(value: string, index: number): string {
    return `${value.replace(/\s+/g, "_")}-${index}`;
  }

  return (
    <>
      {words.map((word, i) => {
        if (/^\s+$/.test(word)) {
          return <span key={getStableKey(word, i)}>{word}</span>;
        }
        const wordStart =
          totalWords > 0 ? (wordCounter / totalWords) * rangeDuration : 0;
        const wordEnd =
          totalWords > 0 ? ((wordCounter + 1) / totalWords) * rangeDuration : 0;
        wordCounter++;
        return (
          <div key={getStableKey(word, i)} style={{ display: "inline" }}>
            <AnimatedWord
              word={word}
              progress={scrollProgress}
              range={[wordStart, wordEnd]}
              wordIndex={i}
            />
          </div>
        );
      })}
    </>
  );
};

export const useScrollTextAnimation = (text: string) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "start 0.1"],
  });

  const AnimatedText = (): ReactElement => (
    <AnimatedParagraph text={text} scrollProgress={scrollYProgress} />
  );

  return {
    targetRef,
    AnimatedText,
  };
};
