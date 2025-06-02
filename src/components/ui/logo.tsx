"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import LogoLightImg from "../../../public/logo-light.svg";
import LogoDarkImg from "../../../public/logo-dark.svg";
import { cn } from "@/lib/utils";

interface LogoProps {
  isScrolled: boolean;
  className?: string;
}


const LOGO_WIDTH = 187;
const LOGO_HEIGHT = 51;

export function Logo({ isScrolled, className }: LogoProps) {
  const [currentLogo, setCurrentLogo] = useState<StaticImageData>(LogoLightImg);
  const t = useTranslations("Navbar");
  const { theme, resolvedTheme } = useTheme();


  useEffect(() => {
    const activeTheme = resolvedTheme || theme;
    if (activeTheme === "dark") {
      setCurrentLogo(LogoLightImg);
    } else {
      setCurrentLogo(isScrolled ? LogoDarkImg : LogoLightImg);
    }
  }, [theme, resolvedTheme, isScrolled]);

  return (
    <Link
      href="/"
      aria-label={t("home")}
      className={cn("flex shrink-0 items-center", className)}
    >
      <Image
        src={currentLogo}
        alt={t("logoAlt")}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority
        unoptimized
        style={{ width: '100%', height: 'auto' }}
      />
    </Link>
  );
}