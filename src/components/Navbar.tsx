import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-semibold text-cream">
          New Age <span className="text-gradient-gold">Derma</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="font-body text-sm text-cream/70 hover:text-gold transition-colors">
            Tratamentos
          </a>
          <a href="#depoimentos" className="font-body text-sm text-cream/70 hover:text-gold transition-colors">
            Depoimentos
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground font-body font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2 text-sm shadow-gold hover:scale-105 transition-transform duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-gold/10 px-6 py-6 flex flex-col gap-4"
        >
          <a href="#servicos" onClick={() => setMenuOpen(false)} className="font-body text-cream/80 hover:text-gold transition-colors">
            Tratamentos
          </a>
          <a href="#depoimentos" onClick={() => setMenuOpen(false)} className="font-body text-cream/80 hover:text-gold transition-colors">
            Depoimentos
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground font-body font-medium px-5 py-3 rounded-full inline-flex items-center justify-center gap-2 shadow-gold"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar pelo WhatsApp
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
