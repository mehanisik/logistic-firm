'use client';

import { TextRotate, type TextRotateRef } from '@/components/ui/text-rotate';
import {
  type MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { SectionLayout } from '../ui/section-layout';

const logisticsImages = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Global Shipping Network',
    author: 'LogiTrans Inc.',
    link: 'https://unsplash.com/photos/containers-on-cargo-ship-1506744038136-46273834b3fb',
    description:
      'Efficient global shipping solutions connecting continents with reliability and speed.',
    stat: '120+ Countries Served',
  },
  {
    url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Modern Warehousing',
    author: 'LogiTrans Inc.',
    link: 'https://unsplash.com/photos/warehouse-1464983953574-0892a716854b',
    description:
      'State-of-the-art warehouses ensure safe and timely storage and distribution.',
    stat: '500K+ sq ft Storage',
  },
  {
    url: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Customs Clearance',
    author: 'LogiTrans Inc.',
    link: 'https://unsplash.com/photos/customs-clearance-1515168833906-d2a3b82b3029',
    description:
      'Expert customs handling for seamless cross-border trade and compliance.',
    stat: '99.9% Clearance Success',
  },
  {
    url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Fleet Management',
    author: 'LogiTrans Inc.',
    link: 'https://unsplash.com/photos/fleet-management-1465101046530-73398c7f28ca',
    description:
      'Advanced fleet management for on-time deliveries and real-time tracking.',
    stat: '24/7 Real-Time Tracking',
  },
  {
    url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Air Freight Solutions',
    author: 'LogiTrans Inc.',
    link: 'https://unsplash.com/photos/air-freight-1509228468518-180dd4864904',
    description:
      'Fast and secure air freight for urgent and high-value shipments worldwide.',
    stat: '2,000+ Tons Flown/Year',
  },
  {
    url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Road & Rail Logistics',
    author: 'LogiTrans Inc.',
    link: 'https://unsplash.com/photos/road-rail-1519125323398-675f0ddb6308',
    description:
      'Integrated road and rail logistics for cost-effective inland transport.',
    stat: '1M+ Shipments Delivered',
  },
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function FeatureCard({
  image,
  title,
  author,
  link,
  description,
  stat,
}: {
  image: string;
  title: string;
  author: string;
  link: string;
  description: string;
  stat: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const inView = useInView(ref, { amount: 0.4, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full"
    >
      <Card className="mx-auto w-full max-w-4xl min-h-64 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 shadow-xl border-2 border-primary/20 bg-card/90 backdrop-blur-lg dark:bg-card/70 transition-all duration-300">
        <motion.div
          style={{ y }}
          className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6"
        >
          <a href={link} target="_blank" rel="noreferrer">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="rounded-xl object-cover w-full h-48 sm:h-64 md:h-80 border border-muted"
            />
          </a>
        </motion.div>
        <CardContent className="flex flex-col justify-center items-start gap-3 sm:gap-4 p-4 sm:p-6 w-full md:w-1/2">
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
              {title}
            </CardTitle>
            <CardDescription className="text-sm sm:text-base text-muted-foreground mb-2">
              {description}
            </CardDescription>
            <div className="text-xs sm:text-sm font-semibold text-primary mb-1">
              {stat}
            </div>
            <div className="text-xs text-muted-foreground">by {author}</div>
          </CardHeader>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline text-xs sm:text-sm mt-2"
          >
            Learn More
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ExtraServices() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <SectionLayout fullWidth className="relative">
      <div className="relative w-full h-screen overflow-y-auto snap-y snap-mandatory z-0 bg-background">
        {logisticsImages.map((image, index) => (
          <div
            key={image.title}
            className="snap-start flex justify-center items-center min-h-screen h-screen"
          >
            <FeatureCard
              image={image.url}
              title={image.title}
              author={image.author}
              link={image.link}
              description={image.description}
              stat={image.stat}
            />
          </div>
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </div>
    </SectionLayout>
  );
}
