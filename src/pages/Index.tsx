import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import OurStorySection from "@/components/wedding/OurStorySection";
import EventSection from "@/components/wedding/EventSection";
import LocationSection from "@/components/wedding/LocationSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main id="home" className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <EventSection />
      <LocationSection />
      <RSVPSection />
      <Footer />
    </main>
  );
};

export default Index;
