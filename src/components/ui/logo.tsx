"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

import LogoLightImg from "../../../public/images/logo-light.svg";
import LogoDarkImg from "../../../public/images/logo-dark.svg";
import { useEffect, useState } from "react";

interface LogoProps {
  isScrolled: boolean;
  width?: number;
  height?: number;
}

export function Logo({ isScrolled, width = 100, height = 50 }: LogoProps) {
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
      className="flex shrink-0 items-center"
    >
      <Image
        src={currentLogo}
        alt={t("logoAlt")}
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
