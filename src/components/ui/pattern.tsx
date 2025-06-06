"use client";

import type React from "react";
import { useTheme } from "next-themes";

const svgPatternDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const BackgroundPattern: React.FC = (): React.ReactElement | null => {
  const { resolvedTheme } = useTheme();
  const baseOpacity = 0.2;
  const darkModeStyles =
    resolvedTheme === "dark"
      ? {
          filter: "invert(1) brightness(0.7)",
          opacity: 0.15,
        }
      : {
          opacity: baseOpacity,
        };

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `url("${svgPatternDataUrl}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "88px 24px",
        backgroundPosition: "center center",
        maskImage:
          "radial-gradient(ellipse 75% 55% at 50% 50%, black 40%, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 75% 55% at 50% 50%, black 40%, transparent 85%)",
        ...darkModeStyles,
      }}
    />
  );
};

export default BackgroundPattern;
