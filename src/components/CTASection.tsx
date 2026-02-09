import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-gold-light mb-4 block">
            Agende Agora
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6">
            Transforme sua pele{" "}
            <span className="text-gradient-gold italic font-medium">hoje</span>
          </h2>
          <p className="font-body text-lg text-cream-dark/60 max-w-2xl mx-auto mb-10">
            Agende sua avaliação gratuita e descubra o tratamento ideal para você. 
            Nossa equipe está pronta para atendê-la.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground font-body font-semibold px-10 py-5 rounded-full inline-flex items-center gap-3 text-lg shadow-gold hover:scale-105 transition-transform duration-300 mb-12"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar pelo WhatsApp
          </a>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-cream-dark/50 font-body text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              Balneário Camboriú, SC
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" />
              (47) 9 9999-9999
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
