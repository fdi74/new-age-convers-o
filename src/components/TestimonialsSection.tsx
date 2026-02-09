import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    procedure: "Toxina Botulínica",
    text: "Resultado incrível e super natural! A equipe é atenciosa e me deixou muito confortável durante todo o procedimento.",
    rating: 5,
  },
  {
    name: "Fernanda S.",
    procedure: "Bioestimuladores",
    text: "Minha pele nunca esteve tão bonita. O tratamento foi personalizado e os resultados superaram minhas expectativas.",
    rating: 5,
  },
  {
    name: "Juliana R.",
    procedure: "Preenchimento Facial",
    text: "Profissionais excepcionais. Me senti segura do início ao fim. Resultado harmonioso e natural, como eu queria.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
            Quem já{" "}
            <span className="text-gradient-gold italic font-medium">experimentou</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-background border border-border shadow-soft"
            >
              <Quote className="w-8 h-8 text-gold/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-body font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="font-body text-sm text-primary">
                  {testimonial.procedure}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
