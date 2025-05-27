import { IconArrowRight, IconBriefcase, IconUsersGroup } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { SectionLayout } from "../ui/section-layout"

interface TeamMember {
	name: string
	role: string
	description: string
	avatarUrl: string
	linkedinUrl?: string
}

export default function Team() {
	const t = useTranslations("Team")
	const atikTeamMembers = t.raw("members") as TeamMember[]
	return (
		<SectionLayout className="bg-background py-16 md:py-24" id="team">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-16 gap-6 md:gap-8">
				<div className="md:w-2/3">
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
				<div className="max-w-md text-muted-foreground text-sm sm:text-base md:text-left md:w-1/3">{t("description")}</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
				{atikTeamMembers.map((member) => (
					<div
						key={member.name}
						className="group flex flex-col bg-background rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
					>
						<div className="relative h-72 sm:h-80 w-full overflow-hidden">
							<Image
								src={member.avatarUrl}
								alt={`Portrait of ${member.name}, ${member.role} at Atik Logistics`}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								className="object-cover object-center w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300" />
						</div>
						<div className="flex flex-col p-6 flex-grow">
							<h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-1">{member.name}</h3>
							<p className="text-sm font-medium text-primary mb-3">{member.role}</p>
							<p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">{member.description}</p>
							{member.linkedinUrl && (
								<Button variant="outline" size="sm" asChild className="mt-auto self-start hover:bg-primary/10">
									<Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
										{t("connectOnLinkedIn")}
										<IconArrowRight size={16} />
									</Link>
								</Button>
							)}
						</div>
					</div>
				))}
			</div>
			<div className="mt-12 md:mt-16 text-center">
				<Button size="lg" asChild className="group">
					<Link href="/careers" className="flex items-center gap-2">
						<IconBriefcase size={20} className="transition-transform duration-300 group-hover:rotate-12" />
						{t("joinOurTeam")}
					</Link>
				</Button>
			</div>
		</SectionLayout>
	)
}
