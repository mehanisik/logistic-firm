import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

import { Preloader } from "@/components/preloader";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

async function getMessages(locale: string) {
  try {
    return (await import(`../../dictionary/${locale}.json`)).default;
  } catch (error) {
    return (await import("../../dictionary/tr.json")).default;
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Preloader />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
