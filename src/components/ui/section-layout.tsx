import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionLayoutProps {
  id?: string;  
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export function SectionLayout({
  id,
  children,
  className,
  containerClassName,
  fullWidth = false,
  noPadding = false,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full flex justify-center bg-background relative',
        !noPadding && 'py-24',
        className
      )}
    >
      <div
        className={cn(
          'w-full',
          !fullWidth && 'max-w-7xl',
          !noPadding && 'px-4 sm:px-6 lg:px-8',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
} 