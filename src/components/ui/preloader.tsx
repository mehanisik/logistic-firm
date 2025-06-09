'use client';

import { useEffect, useRef } from 'react';
import type { AnimationItem, AnimationConfigWithData } from 'lottie-web';
import atikLogo from '../../../public/atik-logo.json';

type PreloaderProps = {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let animation: AnimationItem | null = null;

    const loadAnimation = async () => {
      try {
        const lottieModule = await import('lottie-web');
        
        if (containerRef.current && !animationRef.current) {
          animation = lottieModule.default.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: atikLogo,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
              progressiveLoad: true,
              hideOnTransparent: true
            }
          } as AnimationConfigWithData);

          animation.addEventListener('complete', () => {
            onComplete();
          });

          animationRef.current = animation;
        }
      } catch (error) {
        onComplete();
      }
    };

    loadAnimation();

    return () => {
      if (animation) {
        animation.destroy();
        animationRef.current = null;
      }
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div 
        ref={containerRef}
        className="w-[600px] h-[600px] max-w-[100vw] max-h-[100vh] "
        style={{
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
};