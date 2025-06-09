import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Badge } from "./badge";

interface SectionLayoutProps extends Omit<HTMLAttributes<HTMLElement>, "id"> {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  paddingY?: string;
  badge?: string;
}

export const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  (
    {
      id,
      children,
      className,
      containerClassName,
      fullWidth = false,
      paddingY = "py-16 sm:py-20 lg:py-24",
      badge,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "w-full flex justify-center relative overflow-hidden",
          paddingY,
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30" />
        <div
          className={cn(
            "w-full pointer-events-auto relative z-10",
            !fullWidth && "max-w-7xl",
            containerClassName,
          )}
        >
          {badge && (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-4 sm:gap-6">
              <div className="md:w-full text-center">
                <Badge
                  variant="futuristic"
                  className="mb-2 sm:mb-3 px-6 sm:px-8 py-2 sm:py-2.5 text-xs uppercase"
                >
                  {badge}
                </Badge>
              </div>
            </div>
          )}
          {children}
        </div>
      </section>
    );
  },
);

SectionLayout.displayName = "SectionLayout";
