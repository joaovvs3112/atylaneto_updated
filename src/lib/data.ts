import {
  Syringe,
  Leaf,
  Bone,
  Activity,
  Shield,
  StretchVertical,
  Crosshair,
  Award,
  Cpu,
  Star,
} from "lucide-react";

export const WA_URL =
  "https://wa.me/5527998230873?text=Olá, gostaria de marcar uma consulta com o Dr. Atyla Neto";
export const PHONE = "(27) 99823-0873";
export const PHONE_TEL = "+5527998230873";
export const CRM = "7743";
export const RQE = "6402";

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const STATS = [
  { value: "4.9/5", label: "Avaliação dos pacientes", icon: "star" },
  { value: "+1.000", label: "Pacientes atendidos", icon: "users" },
  { value: "20+", label: "Anos de experiência", icon: "clock" },
];

export const CREDENTIALS = [
  { institution: "EMESCAM", type: "Graduação", icon: "GraduationCap" },
  {
    institution: "Hospital Naval Marcílio Dias, RJ",
    type: "Especialização",
    icon: "Building2",
  },
  {
    institution: "Hospital das Clínicas, SP",
    type: "Residência",
    icon: "Building",
  },
  {
    institution: "Hospital Unimed Vitória",
    type: "Atuação",
    icon: "Stethoscope",
  },
];

export const SPECIALTIES = [
  {
    icon: Syringe,
    title: "Medicina Regenerativa",
    description:
      "Técnicas avançadas para regeneração de tecidos e articulações sem cirurgia invasiva.",
  },
  {
    icon: Leaf,
    title: "Tratamento com Canabidiol",
    description:
      "Uso terapêutico de CBD para dor crônica e inflamação com acompanhamento médico.",
  },
  {
    icon: Bone,
    title: "Dores no Joelho",
    description:
      "Diagnóstico e tratamento de lesões, artrose e instabilidades do joelho.",
  },
  {
    icon: Activity,
    title: "Dor Crônica",
    description:
      "Abordagem multidisciplinar para controle e eliminação de dores persistentes.",
  },
  {
    icon: Shield,
    title: "Fraturas e Traumas",
    description:
      "Atendimento especializado em fraturas, luxações e lesões traumáticas.",
  },
  {
    icon: StretchVertical,
    title: "Saúde da Coluna",
    description:
      "Tratamento de hérnias, lombalgias, cervicalgias e desvios posturais.",
  },
];

export const DIFFERENTIALS = [
  {
    icon: Crosshair,
    number: "01",
    title: "Diagnóstico Preciso",
    description:
      "Avaliação minuciosa com exames e tecnologia para identificar a raiz do problema.",
  },
  {
    icon: Award,
    number: "02",
    title: "+20 Anos de Prática",
    description:
      "Duas décadas de experiência em ortopedia com centenas de casos complexos resolvidos.",
  },
  {
    icon: Cpu,
    number: "03",
    title: "Tecnologia Avançada",
    description:
      "Tratamentos modernos incluindo medicina regenerativa e terapias inovadoras.",
  },
  {
    icon: Star,
    number: "04",
    title: "4.9/5 de Avaliação",
    description:
      "Nota máxima dos pacientes, refletindo cuidado e resultados consistentes.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Maria Helena S.",
    condition: "Dor no Joelho",
    text: "Depois de anos sofrendo com dores, encontrei no Dr. Atyla um profissional que realmente ouviu minha história e encontrou o tratamento certo.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo M.",
    condition: "Dor Crônica",
    text: "Voltei a trabalhar e praticar esportes. O acompanhamento foi impecável do início ao fim.",
    rating: 5,
  },
  {
    name: "Ana Paula R.",
    condition: "Problemas na Coluna",
    text: "Profissional extremamente atencioso. Explicou tudo com clareza e o resultado superou minhas expectativas.",
    rating: 5,
  },
];
