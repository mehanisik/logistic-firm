import { cn } from "@/lib/utils";

interface HeroBadgeProps {
  text: string;
  className?: string;
}

export function HeroBadge({ text, className }: HeroBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full animate-fade-up [animation-delay:500ms]",
        className,
      )}
    >
      <span className="text-xs sm:text-sm font-extrabold text-primary-foreground tracking-wide">
        {text}
      </span>
    </div>
  );
}
