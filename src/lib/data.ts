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
  { label: "Contato", href: "#localizacao" },
];

export const STATS = [
  { value: "SBOT", label: "Membro da Sociedade Brasileira", icon: "award" },
  { value: "+1.000", label: "Pacientes atendidos", icon: "users" },
  { value: "20+", label: "Anos de experiência", icon: "clock" },
];

export const CREDENTIALS = [
  { institution: "EMESCAM", type: "Graduação", icon: "GraduationCap" },
  {
    institution: "Hospital das Clínicas, SP",
    type: "Especialização",
    icon: "Building2",
  },
  {
    institution: "Hospital Naval Marcílio Dias, RJ",
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
      "Terapias avançadas de medicina regenerativa para estimular a recuperação natural do corpo, promovendo a regeneração de tecidos e alívio duradouro da dor sem procedimentos invasivos.",
  },
  {
    icon: Leaf,
    title: "Tratamento com Canabidiol",
    description:
      "Protocolo terapêutico com canabidiol para controle eficaz da dor crônica, redução de inflamações e melhora da qualidade de vida, com acompanhamento médico especializado.",
  },
  {
    icon: Bone,
    title: "Dores no Joelho",
    description:
      "Tratamento especializado para todas as condições do joelho, incluindo artrose, lesões ligamentares, menisco e outras patologias que causam dor e limitação funcional.",
  },
  {
    icon: Activity,
    title: "Dor Crônica",
    description:
      "Abordagem multidisciplinar para o tratamento da dor crônica, utilizando técnicas modernas e protocolos personalizados para devolver qualidade de vida aos pacientes.",
  },
  {
    icon: Shield,
    title: "Fraturas e Traumas",
    description:
      "Atendimento especializado em fraturas, luxações e lesões traumáticas, incluindo procedimentos minimamente invasivos e protocolos avançados de cicatrização.",
  },
  {
    icon: StretchVertical,
    title: "Saúde da Coluna",
    description:
      "Tratamento de hérnias, lombalgias, cervicalgias e desvios posturais com abordagens não cirúrgicas.",
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
    title: "Atendimento Humanizado",
    description:
      "Escuta ativa e dedicação integral, garantindo que cada paciente se sinta acolhido.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Maria Helena S.",
    condition: "Dor no Joelho",
    text: "Depois de anos sofrendo com dores, encontrei no Dr. Atyla um profissional que realmente ouviu minha história e encontrou o tratamento certo. Hoje consigo caminhar sem dor.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Eduardo M.",
    condition: "Dor Crônica",
    text: "Voltei a trabalhar e praticar esportes. O acompanhamento foi impecável do início ao fim. Recomendo de olhos fechados.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ana Paula R.",
    condition: "Problemas na Coluna",
    text: "Profissional extremamente atencioso. Explicou tudo com clareza e o resultado superou minhas expectativas. Me sinto outra pessoa.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Roberto Mendes",
    condition: "Fratura no Tornozelo",
    text: "Sofri uma fratura jogando futebol e fui atendido com muita agilidade. A recuperação foi mais rápida do que eu imaginava. Profissional de altíssimo nível.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Luciana Ferreira",
    condition: "Artrose no Quadril",
    text: "O Dr. Atyla me explicou cada etapa do tratamento com paciência. Fez toda a diferença na minha qualidade de vida. Gratidão enorme.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Fernando Costa",
    condition: "Hérnia de Disco",
    text: "Cheguei no consultório sem conseguir ficar em pé direito. Com o tratamento correto, evitei cirurgia e hoje vivo sem limitações. Médico excepcional.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Patrícia Oliveira",
    condition: "Tendinite no Ombro",
    text: "Já tinha passado por outros médicos sem resultado. O Dr. Atyla identificou o problema na primeira consulta e o tratamento funcionou de verdade.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Marcos Vinícius L.",
    condition: "Lesão no Menisco",
    text: "Atendimento humanizado de verdade. Me senti acolhido desde a recepção. O doutor é direto, competente e se preocupa genuinamente com o paciente.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Beatriz Santos",
    condition: "Dor Lombar",
    text: "Anos de dor lombar resolvidos com um tratamento que nenhum outro médico tinha sugerido. Consultório moderno e equipe muito profissional.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/37.jpg",
  },
];
