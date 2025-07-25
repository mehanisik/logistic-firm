"use client";
import { SectionLayout } from "@/components/ui/section-layout";
import { Separator } from "@/components/ui/separator";
import { ATIK_TEAM_MEMBERS } from "@/constants/team.constant";
import { cn } from "@/lib/utils";
import { IconBuilding, IconMail, IconPhone } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TeamCardProps {
  member: (typeof ATIK_TEAM_MEMBERS)[number];
  index: number;
  t: (key: string) => string;
}

function TeamCard({ member, index, t }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className={cn(
        "w-full h-[250px] mx-auto [perspective:1000px]",
        isMobile ? "cursor-pointer" : "cursor-default",
      )}
      onClick={() => isMobile && setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (isMobile && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      role={isMobile ? "button" : undefined}
      tabIndex={isMobile ? 0 : undefined}
      aria-label={
        isMobile ? `${member.name} - ${t(`team.${member.id}.role`)}` : undefined
      }
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]",
          !isMobile && "group-hover:[transform:rotateY(180deg)]",
        )}
        style={
          isMobile
            ? { transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }
            : undefined
        }
      >
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-black to-black/90 rounded-xl shadow-lg"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-6 gap-4">
            <Image
              src="/logo-light.svg"
              alt="Atik Logo"
              width={100}
              height={100}
              className="object-contain w-auto h-auto"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">{member.name}</h2>
              <p className="text-sm text-white/80 mt-1">
                {t(`team.${member.id}.role`)}
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-white/90 dark:from-black dark:to-black/90 rounded-xl shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex h-full">
            <div className="w-1/6 bg-primary h-full rounded-l-xl" />
            <div className="flex-1 h-full flex flex-col p-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground">
                  {member.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(`team.${member.id}.role`)}
                </p>
                <Separator className="my-4" />
              </div>
              <div className="space-y-3">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconMail className="h-5 w-5" />
                  <span className="text-sm">{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconPhone className="h-5 w-5" />
                  <span className="text-sm">{member.phone}</span>
                </a>
                <div className="flex items-center gap-2 text-foreground">
                  <IconBuilding className="h-5 w-5" />
                  <span className="text-sm">
                    {index === 0
                      ? t("locations.istanbul")
                      : index === 1
                        ? t("locations.tehran")
                        : t("locations.warsaw")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamMembers() {
  const t = useTranslations("Team");

  return (
    <SectionLayout
      id="team"
      className="px-4 sm:px-6 lg:px-8"
      badge={t("leadership")}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-4 sm:gap-6">
        <div className="md:w-full text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {t("headline1")}
            <br />
            {t("headline2")}{" "}
            <span className="text-primary">{t("headlineAccent")}</span>
          </h2>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-3">
          {ATIK_TEAM_MEMBERS.map((member, index) => (
            <div key={member.id} className="group">
              <TeamCard member={member} index={index} t={t} />
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
