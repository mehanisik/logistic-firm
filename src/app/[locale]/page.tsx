import AboutUs from '@/components/pages/about-us';
import Contact from '@/components/pages/contact';
import ExtraServices from '@/components/pages/extra-services';
import Hero from '@/components/pages/hero';
import Services from '@/components/pages/services';
import Team from '@/components/pages/team';
import Testimonial from '@/components/pages/testimonial';
import Footer from '@/components/ui/footer-section';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <ExtraServices />
      <AboutUs />
      <Testimonial />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
