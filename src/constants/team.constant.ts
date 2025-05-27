import type { TeamMember } from "@/types/team.types"

const ATIK_TEAM_MEMBERS = [
	{
		id: "alexandre-moreau",
		name: "Alexandre Moreau",
		avatarUrl: "https://alt.tailus.io/images/team/member-one.webp",
		linkedinUrl: "https://linkedin.com/in/alexandremoreau-example",
	},
	{
		id: "priya-sharma",
		name: "Priya Sharma",
		role: "Head of Global Operations",
		description:
			"Priya is an expert in optimizing international freight operations and ensuring strict customs compliance. Her strategic oversight guarantees efficiency and reliability across our vast global network.",
		avatarUrl: "https://alt.tailus.io/images/team/member-two.webp",
		linkedinUrl: "https://linkedin.com/in/priyasharma-example",
	},
	{
		id: "kenji-tanaka",
		name: "Kenji Tanaka",
		role: "Director of Technology & Innovation",
		description:
			"Kenji spearheads the development of Atik Logistics' proprietary digital platform, integrating AI and IoT to provide clients with unparalleled shipment visibility and predictive analytics.",
		avatarUrl: "https://alt.tailus.io/images/team/member-three.webp",
		linkedinUrl: "https://linkedin.com/in/kenjitanaka-example",
	},
] as const

export { ATIK_TEAM_MEMBERS }
