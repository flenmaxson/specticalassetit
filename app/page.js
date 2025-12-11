import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainLayout from "@/components/MainLayout";
import MapSupportSection from "@/components/MapSupportSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import SupportSection from "@/components/SupportSection";
import TestnimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <MainLayout>
    <HeroSection/>
    <ServicesSection/>
    <AboutSection/>
    <PricingSection/>
    <SupportSection/>
    <TestnimonialsSection/>
    <FaqSection/>
    <MapSupportSection/>
    <CTASection/>
    </MainLayout>
  );
}
