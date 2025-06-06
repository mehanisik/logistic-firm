import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

interface SectionLayoutProps extends Omit<HTMLAttributes<HTMLElement>, "id"> {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  (
    {
      id,
      children,
      className,
      containerClassName,
      fullWidth = false,
      noPadding = false,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "w-full flex justify-center bg-background relative",
          className,
          !noPadding && "py-16 sm:py-20 lg:py-24",
        )}
        {...props}
      >
        <div
          className={cn(
            "w-full",
            !fullWidth && "max-w-[90rem]",
            containerClassName,
          )}
        >
          {children}
        </div>
      </section>
    );
  },
);

SectionLayout.displayName = "SectionLayout";
