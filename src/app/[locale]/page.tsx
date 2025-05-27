import AboutUs from "@/components/pages/about-us"
import Contact from "@/components/pages/contact"
import ExtraServices from "@/components/pages/extra-services"
import Footer from "@/components/pages/footer"
import Hero from "@/components/pages/hero"
import Services from "@/components/pages/services"
import Team from "@/components/pages/team"
import Testimonial from "@/components/pages/testimonial"
import Navbar from "@/components/ui/navbar"

export default function HomePage() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Services />
			<ExtraServices />
			<AboutUs />
			<Testimonial />
			<Team />
			<Contact />
			<Footer />
		</main>
	)
}
