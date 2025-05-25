import HomeIndex from "@/components/pages/home-index"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"

export default function HomePage({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = use(params)
	setRequestLocale(locale)

	return <HomeIndex />
}
