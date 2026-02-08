import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import EventSection from "@/components/wedding/EventSection";
import TimelineSection from "@/components/wedding/TimelineSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import TravelSection from "@/components/wedding/TravelSection";
import GiftSection from "@/components/wedding/GiftSection";
import GallerySection from "@/components/wedding/GallerySection";
import FAQSection from "@/components/wedding/FAQSection";
import ContactsSection from "@/components/wedding/ContactsSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main id="home" className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EventSection />
      <TimelineSection />
      <RSVPSection />
      <TravelSection />
      <GiftSection />
      <GallerySection />
      <FAQSection />
      <ContactsSection />
      <Footer />
    </main>
  );
};

export default Index;
