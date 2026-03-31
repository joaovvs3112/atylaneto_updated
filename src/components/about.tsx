"use client";

import { motion } from "framer-motion";
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
    desc: "Hospital Naval Marcílio Dias — RJ",
  },
  {
    icon: Building,
    title: "Residência Médica",
    desc: "Hospital das Clínicas — SP",
  },
];

const differentials = [
  "Tratamentos baseados em evidência científica",
  "Abordagem personalizada sem excessos",
  "Foco em resultados reais e qualidade de vida",
];

export default function About() {
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

            {/* Photo placeholder */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-soft via-emerald-soft/50 to-emerald/10">
              {/* Shimmer effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
              />
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="w-48 h-64 bg-emerald/15 rounded-t-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald/20 via-transparent to-transparent" />
            </div>

            {/* Quote — fades in from below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="mt-6 relative pl-8"
            >
              <motion.span
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                className="absolute left-0 top-0 font-serif text-4xl text-gold leading-none inline-block"
              >
                &ldquo;
              </motion.span>
              <p className="font-serif text-graphite italic text-base leading-relaxed">
                Cada paciente é único. Meu compromisso é encontrar a melhor
                solução para a sua realidade.
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
              O Dr. Atyla Neto é ortopedista e traumatologista com mais de 20
              anos de experiência. Sua abordagem combina conhecimento técnico
              aprofundado com escuta ativa, garantindo que cada paciente receba
              um plano de tratamento verdadeiramente personalizado. Atua em
              Vitória e Vila Velha, ES, com foco em resultados que devolvem
              qualidade de vida.
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
                  className="p-4 rounded-xl transition-all duration-300 hover:bg-snow hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-default"
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
                    className="w-5 h-5 rounded-full bg-gold-glow flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-115 transition-transform duration-300"
                  >
                    <Check size={12} className="text-gold" />
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
                Fale com o Dr. Atyla
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
