"use client";

import { type ReactNode, useEffect, useState } from "react";
import Preloader from "./preloader";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-is-mobile";

export function PreloaderWrapper({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (isMobile) {
      setIsLoading(false);
    }
  }, [isMobile]);

  return (
    <>
      {isLoading && !isMobile && <Preloader onComplete={handlePreloaderComplete} />}
      <div className={cn(
        "transition-opacity duration-500",
        isLoading && !isMobile ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
        {children}
      </div>
    </>
  );
} 