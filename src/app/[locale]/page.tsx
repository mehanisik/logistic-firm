import AboutUs from "@/components/landing/about-us"
import ContactUs from "@/components/landing/contact"
import FeatureAccordion from "@/components/landing/feature-accordion"
import Footer from "@/components/landing/footer"
import Hero from "@/components/landing/hero"
import LogoCloud from "@/components/landing/logo-cloud"
import Services from "@/components/landing/services"
import Stats from "@/components/landing/stats"
import Summary from "@/components/landing/summary"
import TeamMembers from "@/components/landing/team"
import Tesimonials from "@/components/landing/testimonial"

export default function HomePage() {
	return (
		<main>
			<Hero />
			<LogoCloud />
			<Summary />
			<FeatureAccordion />
			<Services />
			<AboutUs />
			<Tesimonials />
			<Stats />
			<TeamMembers />
			<ContactUs />
			<Footer />
		</main>
	)
}
