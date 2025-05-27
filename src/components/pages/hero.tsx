import { Button } from '@/components/ui/button';

import Image from 'next/image';
import FloatingPaths from '../background-path';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1634646809203-f3b4adff9127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover object-center absolute inset-0 w-full h-full z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />
      <div className="absolute inset-0 z-10">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="relative z-20 w-full flex justify-center items-center px-4">
        <div className="max-w-3xl w-full  p-8 md:p-12 flex flex-col items-center gap-6">
          <div className="space-y-3 md:space-y-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Cargo's Efficiency,
              <br className="hidden sm:block" /> Connectivity, and Global Reach
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground text-center">
            Cargo's efficiency, connectivity, and global reach ensure seamless
            logistics, timely deliveries, and robust international trade,
            driving economic growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full justify-center">
            <Button
              size="lg"
              className="px-8 py-3 text-base font-medium w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base font-medium border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
