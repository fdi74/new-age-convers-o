import { motion } from "framer-motion";
import { Sparkles, Syringe, Sun, Zap, Heart, Scissors } from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "Toxina Botulínica",
    description: "Suavize linhas de expressão com naturalidade e precisão.",
  },
  {
    icon: Sparkles,
    title: "Preenchimento Facial",
    description: "Restaure volume e contornos com ácido hialurônico premium.",
  },
  {
    icon: Sun,
    title: "Bioestimuladores",
    description: "Estimule o colágeno natural para uma pele mais firme e jovem.",
  },
  {
    icon: Zap,
    title: "Laser e Tecnologias",
    description: "Tratamentos avançados com laser para manchas, cicatrizes e rejuvenescimento.",
  },
  {
    icon: Heart,
    title: "Skincare Personalizado",
    description: "Protocolos sob medida para cada tipo de pele e necessidade.",
  },
  {
    icon: Scissors,
    title: "Procedimentos Dermatológicos",
    description: "Tratamentos clínicos para acne, melasma, rosácea e mais.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Tratamentos
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
            Excelência em cada{" "}
            <span className="text-gradient-gold italic font-medium">detalhe</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-gold transition-all duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
