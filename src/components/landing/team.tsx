import { ATIK_TEAM_MEMBERS } from "@/constants/team.constant";
import { IconMail, IconPhone, IconUsersGroup } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionLayout } from "../ui/section-layout";

export default function TeamMembers() {
  const t = useTranslations("Team");
  return (
    <SectionLayout id="team">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-16 gap-6 md:gap-8">
        <div className="md:w-full text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-3 uppercase tracking-wider">
            <IconUsersGroup size={16} />
            {t("leadership")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {t("headline1")}
            <br />
            {t("headline2")}{" "}
            <span className="text-primary">{t("headlineAccent")}</span>
          </h2>
        </div>
      </div>
      <div className="mt-12 md:mt-24">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {ATIK_TEAM_MEMBERS.map((member, index) => (
            <div key={member.id} className="group overflow-hidden">
              <div className="relative h-[400px] w-full aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src={member.avatarUrl}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 3}
                />
              </div>
              <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                <div className="flex justify-between">
                  <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider text-foreground">
                    {member.name}
                  </h3>
                  <span className="text-xs">_0{index + 1}</span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {t(`team.${member.id}.role`)}
                  </span>
                </div>
                <div className="flex flex-col gap-1 mt-2 text-sm">
                  <div className="flex items-center gap-2">
                    <IconPhone size={16} className="text-primary" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconMail size={16} className="text-primary" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:underline"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
