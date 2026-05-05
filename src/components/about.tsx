"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Building,
  Check,
  MessageCircle,
} from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import { WA_URL } from "@/lib/data";
import { fadeUp, viewportConfig } from "@/lib/animations";

const ease = [0.22, 1, 0.36, 1] as const;

const formation = [
  {
    icon: GraduationCap,
    title: "Graduação em Medicina",
    desc: "EMESCAM — Vitória, ES",
  },
  {
    icon: Building2,
    title: "Especialização em Ortopedia",
    desc: "Hospital das Clínicas — SP",
  },
  {
    icon: Building,
    title: "Residência Médica",
    desc: "Hospital Naval Marcílio Dias — RJ",
  },
];

const differentials = [
  "Tratamentos baseados em evidência científica",
  "Abordagem personalizada sem excessos",
  "Foco em resultados reais e qualidade de vida",
];

const mobilePhotos = [
  { src: "/dratyla-hero.jpg", alt: "Dr. Atyla Neto em seu consultório" },
  { src: "/dratyla-atendimento.jpg", alt: "Dr. Atyla Neto realizando atendimento" },
];

export default function About() {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % mobilePhotos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sobre" className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Photo — slides in from left with rotation */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5 relative"
          >
            {/* Gold offset frame — animates separately */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="absolute -top-4 -left-4 w-[calc(100%-16px)] aspect-[3/4] border-2 border-gold/30 rounded-2xl transition-all duration-500 hover:translate-x-1 hover:translate-y-1"
            />

            {/* Photo — static on desktop */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden hidden lg:block">
              <img
                src="/dratyla-atendimento.jpg"
                alt="Dr. Atyla Neto realizando atendimento"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald/15 via-transparent to-transparent" />
            </div>

            {/* Photo slideshow — mobile only */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden lg:hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photoIndex}
                  src={mobilePhotos[photoIndex].src}
                  alt={mobilePhotos[photoIndex].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald/15 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {mobilePhotos.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === photoIndex
                        ? "bg-white w-8 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        : "bg-white/50 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quote — fades in from below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="mt-6"
            >
              <p className="font-serif text-graphite italic text-base leading-relaxed">
                Alívio da dor com tratamento certo para o seu caso.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Content — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="lg:col-span-7"
          >
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="inline-block text-xs font-medium tracking-[0.25em] uppercase bg-emerald-soft text-emerald px-4 py-1.5 rounded-full mb-5"
            >
              SOBRE O ESPECIALISTA
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="font-serif text-ink text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight mb-6"
            >
              Dedicação que Transforma Vidas
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="text-graphite text-base leading-relaxed mb-8 max-w-xl"
            >
              &ldquo;Com mais de 20 anos de experiência, transformo vidas em
              Vitória e Vila Velha-ES, oferecendo tratamentos de ponta para
              dores no joelho e dor crônica com abordagens modernas baseadas
              em evidências científicas.&rdquo;
            </motion.p>

            {/* Formation cards — staggered from different angles */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {formation.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.12, ease }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-4 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.08)] cursor-default"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.12, type: "spring", stiffness: 300 }}
                  >
                    <item.icon size={20} className="text-emerald-light mb-2" />
                  </motion.div>
                  <p className="text-ink text-sm font-medium">{item.title}</p>
                  <p className="text-slate text-xs mt-0.5">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Differentials — checkmarks pop in */}
            <div className="space-y-3 mb-8">
              {differentials.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1, ease }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1 + i * 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                    }}
                    className="w-5 h-5 rounded-full bg-emerald-soft flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-115 transition-transform duration-300"
                  >
                    <Check size={12} className="text-emerald" />
                  </motion.div>
                  <p className="text-graphite text-sm">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2, ease }}
            >
              <MagneticButton
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald hover:bg-emerald-light text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg text-sm"
              >
                <MessageCircle size={16} />
                Agendar Consulta
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
