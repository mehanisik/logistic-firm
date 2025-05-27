import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

interface SectionLayoutProps extends Omit<HTMLAttributes<HTMLElement>, 'id'> {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  noPadding?: boolean;
  fullWidth?: boolean;
}


export const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  ({
    id,
    children,
    className,
    containerClassName,
    noPadding = false,
    fullWidth = false,
    ...props
  }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'w-full flex justify-center bg-background relative',
          !noPadding && 'py-16 sm:py-20 lg:py-24',
          className
        )}
        {...props}
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
);

SectionLayout.displayName = 'SectionLayout';