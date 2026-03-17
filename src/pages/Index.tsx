import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import CtaSection from "@/components/CtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <HowWeWorkSection />
        <WhoIsForSection />
        <CtaSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
