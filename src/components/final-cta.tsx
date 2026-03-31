"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import { WA_URL } from "@/lib/data";
import { fadeUp, viewportConfig } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-emerald via-emerald to-emerald-900">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-[10%] w-[300px] h-[300px] bg-gold/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-[15%] w-[250px] h-[250px] bg-emerald-light/10 rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
        >
          Sua Qualidade de Vida Começa com uma{" "}
          <span className="text-gold-bright italic">Consulta.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-white/70 text-lg mb-10 max-w-xl mx-auto"
        >
          Atendimento humanizado com mais de 20 anos de experiência em
          ortopedia.
        </motion.p>

        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <MagneticButton
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-bright text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(146,112,12,0.4)] text-base animate-pulse-glow"
          >
            <MessageCircle size={18} />
            Agendar pelo WhatsApp
          </MagneticButton>
          <MagneticButton
            href="#contato"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 text-base"
            strength={3}
          >
            <FileText size={18} />
            Preencher Formulário
          </MagneticButton>
        </motion.div>

        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-white/60 text-sm"
        >
          Consultas em Vitória e Vila Velha, ES | Seg-Sex 8h-18h
        </motion.p>
      </div>
    </section>
  );
}
