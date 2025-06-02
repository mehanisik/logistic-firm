"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const languages = [
  { label: "🇬🇧 English", value: "en" },
  { label: "🇹🇷 Türkçe", value: "tr" },
];

interface Language {
  code: string;
  label: string;
  icon: React.ReactNode;
}

type Locale = (typeof languages)[number]["value"];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>("tr");

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1] as Locale | undefined;

    const urlLocale = pathname.split("/")[1] as Locale;
    const validUrlLocale = languages.find((lang) => lang.value === urlLocale);

    if (validUrlLocale) {
      setCurrentLocale(urlLocale);
    } else if (
      cookieLocale &&
      languages.find((lang) => lang.value === cookieLocale)
    ) {
      setCurrentLocale(cookieLocale);
    } else {
      setCurrentLocale("tr");
    }
  }, [pathname]);

  const handleChangeLanguage = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;
    setCurrentLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-2 items-center">
      {languages.map((lang) => {
        const isActive = currentLocale === lang.value;
        return (
          <Button
            key={lang.value}
            type="button"
            variant={isActive ? "secondary" : "ghost"}
            size="sm"
            onClick={() => handleChangeLanguage(lang.value)}
            aria-current={isActive ? "true" : undefined}
            aria-label={`Switch to ${lang.label}`}
            className={cn(
              "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-semibold border border-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors",
              isActive
                ? "bg-accent text-primary dark:text-white"
                : "text-muted-foreground hover:bg-accent hover:text-primary",
            )}
          >
            <span>{lang.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
