import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CredentialsBar from "@/components/credentials-bar";
import About from "@/components/about";
import Specialties from "@/components/specialties";
import Differentials from "@/components/differentials";
import Testimonials from "@/components/testimonials";
import LocationMap from "@/components/location-map";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import SectionDivider from "@/components/ui/section-divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CredentialsBar />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Specialties />
      <Differentials />
      <SectionDivider />
      <Testimonials />
      <FinalCTA />
      <LocationMap />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
