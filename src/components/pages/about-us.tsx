'use client';
import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { SectionLayout } from '../ui/section-layout';

const AnimatedWord = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <span className="relative inline-block">
      <span
        className="absolute inset-0 select-none text-foreground/10"
        aria-hidden="true"
      >
        {children}
      </span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

function AnimatedScrollWords({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className="flex flex-wrap text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-10
                 leading-relaxed sm:leading-loose text-muted-foreground
                 gap-x-[0.4em] gap-y-[0.2em]"
      aria-label={text}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <AnimatedWord
            key={crypto.randomUUID()}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </AnimatedWord>
        );
      })}
    </p>
  );
}

export default function AboutUs() {
  return (
    <SectionLayout>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
        <div className="flex-1 w-full">
          <div className="text-xs sm:text-sm font-semibold mb-2 text-primary flex items-center gap-1">
            ABOUT US <span className="text-lg">↘</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-foreground">
            Your Trusted
            <br />
            Cargo Logistics
            <br />
            Partner
          </h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-muted-foreground max-w-xl">
            {' '}
            Reliable, efficient cargo logistics services tailored to meet your
            needs, ensuring timely delivery and customer satisfaction.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 rounded-md font-semibold"
          >
            Learn More
          </Button>
        </div>

        <div className="flex-1 flex flex-col justify-center w-full mt-8 md:mt-0">
          <AnimatedScrollWords
            text={
              'Welcome to our premier cargo logistics services, where we are dedicated to being your trusted partner for efficient, secure, and reliable transportation solutions. Count on us for seamless operations and peace of mind, ensuring your cargo reaches its destination safely and on time, every time.'
            }
          />
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 mt-4 sm:mt-8">
            <div className="text-center flex-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2">
                10M+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                Customers worldwide
              </div>
            </div>
            <div className="text-center flex-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2">
                100%
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                Happy Customers
              </div>
            </div>
            <div className="text-center flex-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2">
                12+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
