"use client";

import { Button } from "@/components/ui/button";
import { IconError404 } from "@tabler/icons-react";
import { useTheme } from "next-themes";

// Define messages directly since we can't use useTranslations in global-error
const messages = {
  en: {
    title: "Something went wrong",
    description:
      "We apologize for the inconvenience. A critical error has occurred. Our team has been notified and is working to resolve the issue.",
    tryAgain: "Try Again",
    returnHome: "Return Home",
  },
  tr: {
    title: "Bir hata oluştu",
    description:
      "Rahatsızlık için özür dileriz. Kritik bir hata oluştu. Ekibimiz bilgilendirildi ve sorunu çözmek için çalışıyor.",
    tryAgain: "Tekrar Dene",
    returnHome: "Ana Sayfaya Dön",
  },
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Get locale from document lang attribute
  const locale = document.documentElement.lang || "en";
  const t = messages[locale as keyof typeof messages];
  const { theme } = useTheme();

  return (
    <html lang={locale} suppressHydrationWarning className={theme}>
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-destructive/10">
            <IconError404 className="w-10 h-10 text-destructive" />
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">{t.description}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => reset()} variant="default">
              {t.tryAgain}
            </Button>
            <Button variant="outline" asChild>
              <a
                href={`/${locale}`}
                className="inline-flex items-center justify-center"
              >
                {t.returnHome}
              </a>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
