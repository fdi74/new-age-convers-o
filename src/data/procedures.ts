import procToxina from "@/assets/proc-toxina.webp";
import procPreenchimento from "@/assets/proc-preenchimento.webp";
import procBioestimulador from "@/assets/proc-bioestimulador.webp";
import procUltraformer from "@/assets/proc-ultraformer.webp";
import procLavieen from "@/assets/proc-lavieen.webp";
import procLimpeza from "@/assets/proc-limpeza.webp";

export interface Procedure {
  id: string;
  title: string;
  summary: string;
  description: string;
  indications: string[];
  image: string;
  icon: string;
}

export const procedures: Procedure[] = [
  {
    id: "toxina-botulinica",
    title: "Toxina Botulínica",
    summary: "Suavização de rugas e linhas de expressão com naturalidade e precisão.",
    description:
      "A toxina botulínica é uma proteína purificada que, ao ser aplicada de forma estratégica, promove o relaxamento controlado da musculatura facial. O resultado é uma aparência descansada e rejuvenescida, preservando a expressividade natural do rosto. Na New Age, cada aplicação é personalizada para realçar a beleza única de cada paciente.",
    indications: [
      "Rugas na testa e região frontal",
      "Linhas ao redor dos olhos (pés de galinha)",
      "Vincos entre as sobrancelhas (glabela)",
    ],
    image: procToxina,
    icon: "Sparkles",
  },
  {
    id: "preenchimento-acido-hialuronico",
    title: "Preenchimento com Ácido Hialurônico",
    summary: "Reposição de volume e harmonização dos contornos faciais com sofisticação.",
    description:
      "Utilizamos géis de ácido hialurônico de alta performance para restaurar a estrutura e o volume facial perdidos com o tempo. A técnica promove sustentação dos tecidos, hidratação profunda e contornos harmoniosos — tudo com resultados imediatos e aspecto natural.",
    indications: [
      "Olheiras profundas",
      "Definição e volume labial",
      "Contorno de mandíbula e queixo",
      "Maçãs do rosto e sulco nasogeniano",
    ],
    image: procPreenchimento,
    icon: "Droplets",
  },
  {
    id: "bioestimuladores-colageno",
    title: "Bioestimuladores de Colágeno",
    summary: "Tratamento avançado para combater a flacidez e restaurar a firmeza da pele.",
    description:
      "Os bioestimuladores são substâncias injetáveis que ativam os fibroblastos — células responsáveis pela produção de colágeno. O tratamento promove uma renovação gradual e duradoura, melhorando a textura, a firmeza e a qualidade geral da pele ao longo de semanas e meses.",
    indications: [
      "Flacidez facial e corporal",
      "Perda de contorno e definição",
      "Melhora global da qualidade da pele",
    ],
    image: procBioestimulador,
    icon: "Dna",
  },
  {
    id: "ultraformer-iii",
    title: "Ultraformer III",
    summary: "Ultrassom micro e macrofocado para efeito lifting sem cortes ou agulhas.",
    description:
      "O Ultraformer III é uma tecnologia de ultrassom que atua nas camadas mais profundas da pele e da musculatura, promovendo retração tecidual, estímulo de colágeno e até redução de gordura localizada. O procedimento oferece um efeito lifting visível, sem incisões e com recuperação mínima.",
    indications: [
      "Lifting facial não cirúrgico",
      "Redução de papada e gordura submentoniana",
      "Melhora da elasticidade e firmeza cutânea",
    ],
    image: procUltraformer,
    icon: "Waves",
  },
  {
    id: "lavieen-laser-tulio",
    title: "Lavieen (Laser de Túlio)",
    summary: 'O renomado "BB Laser" para uma pele de porcelana com brilho radiante.',
    description:
      "O Lavieen é um laser fracionado de túlio que trabalha a textura e a uniformidade da pele com precisão e baixíssimo downtime. Ideal para quem busca aquele efeito glass skin — pele luminosa, poros refinados e tom uniforme. Sessões regulares potencializam resultados progressivos e duradouros.",
    indications: [
      "Manchas e hiperpigmentação",
      "Poros dilatados",
      "Cicatrizes de acne e irregularidades",
      "Rejuvenescimento e luminosidade global",
    ],
    image: procLavieen,
    icon: "Sun",
  },
  {
    id: "limpeza-pele-premium",
    title: "Limpeza de Pele Premium",
    summary: "Protocolo exclusivo de higiene profunda, renovação e hidratação intensiva.",
    description:
      "Nosso protocolo premium vai além da limpeza convencional. Combinamos extração profissional de impurezas e comedões com a aplicação de ativos regeneradores, antioxidantes e calmantes. O resultado é uma pele purificada, equilibrada e radiante — a base perfeita para qualquer tratamento estético.",
    indications: [
      "Manutenção preventiva da saúde cutânea",
      "Controle de oleosidade e brilho excessivo",
      "Preparação para procedimentos estéticos",
    ],
    image: procLimpeza,
    icon: "Leaf",
  },
];
