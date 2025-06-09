"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  isScrolled: boolean;
  withLink?: boolean;
  className?: string;
}

export function Logo({ isScrolled, className, withLink = true }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const t = useTranslations("Navbar");

  const getLogoSource = () => {
    if (resolvedTheme === "dark") return "/logo-light.svg";
    return isScrolled ? "/logo-dark.svg" : "/logo-light.svg";
  };

  return (
    <div className={cn("flex shrink-0 items-center", className)}>
      {withLink ? (
        <Link href="/">
          <Image
            src={getLogoSource()}
            alt={t("home")}
            width={187}
            height={51}
            priority
            fetchPriority="high"
            quality={100}
            sizes="(max-width: 640px) 80px, (max-width: 768px) 90px, 100px"
            className="w-full h-auto object-cover object-center"
          />
        </Link>
      ) : (
        <Image
          src={getLogoSource()}
          alt={t("home")}
          width={187}
          height={51}
          priority
          fetchPriority="high"
          quality={100}
          sizes="(max-width: 640px) 80px, (max-width: 768px) 90px, 100px"
          className="w-full h-auto object-cover object-center"
        />
      )}
    </div>
  );
}