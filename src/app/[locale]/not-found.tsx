import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { IconError404 } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("error");
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background px-4 text-center">
      <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-destructive/10">
        <IconError404 className="w-10 h-10 text-destructive" />
      </div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {t("notFound.title")}
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">
        {t("notFound.description")}
      </p>
      <Button variant="default" asChild>
        <Link href="/">{t("returnHome")}</Link>
      </Button>
    </div>
  );
}
