import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { ATIK_TEAM_MEMBERS } from "@/constants/team.constant";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { SectionLayout } from "../ui/section-layout";

export default function TeamMembers() {
  const t = useTranslations("Team");
  return (
    <SectionLayout id="team">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-16 gap-6 md:gap-8">
        <div className="md:w-full text-center">
          <Badge
            variant="secondary"
            className="mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
          >
            {t("leadership")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {t("headline1")}
            <br />
            {t("headline2")}{" "}
            <span className="text-primary">{t("headlineAccent")}</span>
          </h2>
        </div>
      </div>
      <div className="mt-12 md:mt-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ATIK_TEAM_MEMBERS.map((member, index) => (
            <div key={member.id} className="group perspective-1000">
              <div className="relative h-[250px] w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <Card className="absolute inset-0 h-full w-full border-none bg-gradient-to-br from-card to-card/80 shadow-lg transition-all duration-700 [backface-visibility:hidden] [transform:rotateY(0deg)]">
                  <CardHeader className="h-full flex flex-col items-center justify-center space-y-4 p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        {t(`team.${member.id}.role`)}
                      </p>
                      <Badge
                        variant="outline"
                        className="mt-3 font-mono text-xs"
                      >
                        0{index + 1}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="absolute inset-0 h-full w-full border-none bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg transition-all duration-700 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <CardContent className="flex h-full flex-col items-center justify-between p-6">
                    <div className="w-full flex justify-center">
                      <Logo isScrolled={true} className="w-[150px] h-auto" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground hover:bg-primary/5"
                        asChild
                      >
                        <a href={`tel:${member.phone}`}>
                          <IconPhone size={16} className="text-primary" />
                          {member.phone}
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground hover:bg-primary/5"
                        asChild
                      >
                        <a href={`mailto:${member.email}`}>
                          <IconMail size={16} className="text-primary" />
                          {member.email}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
