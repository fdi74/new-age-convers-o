import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Estetica from "@/components/ProceduresSection";
import Slider from "@/components/BeforeAfterSlider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        
        {/* Fechamento da section corrigido aqui */}
        <section id="depoimentos">
          <TestimonialsSection />
        </section>
        
        <Estetica />
        <Slider />
        <CTASection />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
