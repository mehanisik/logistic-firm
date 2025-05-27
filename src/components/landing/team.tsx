import type { TeamMember } from "@/types/team.types"
import { IconUsersGroup } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { SectionLayout } from "../ui/section-layout"

export default function TeamMembers() {
	const t = useTranslations("Team")
	const atikTeamMembers = t.raw("members") as TeamMember[]
	return (
		<SectionLayout>
			<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-16 gap-6 md:gap-8">
				<div className="md:w-full">
					<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-3 uppercase tracking-wider">
						<IconUsersGroup size={16} />
						{t("leadership")}
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
						{t("headline1")}
						<br />
						{t("headline2")} <span className="text-primary">{t("headlineAccent")}</span>
					</h2>
				</div>
			</div>
			<div className="mt-12 md:mt-24">
				<div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
					{atikTeamMembers.map((member, index) => (
						<div key={index} className="group overflow-hidden">
							<img
								className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
								src={member.avatarUrl}
								alt="team member"
								width="826"
								height="1239"
							/>
							<div className="px-2 pt-2 sm:pb-0 sm:pt-4">
								<div className="flex justify-between">
									<h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider text-foreground">
										{member.name}
									</h3>
									<span className="text-xs">_0{index + 1}</span>
								</div>
								<div className="mt-1 flex items-center justify-between">
									<span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
										{member.role}
									</span>
									<Link
										href={member.linkedinUrl ?? "#"}
										className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
									>
										Linktree
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</SectionLayout>
	)
}
