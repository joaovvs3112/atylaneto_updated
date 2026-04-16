"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import { WA_URL } from "@/lib/data";
import { fadeUp, viewportConfig } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section
      className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #065F46 0%, #044D38 100%)",
      }}
    >
      {/* Wave divider — top edge for smooth transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V60C240 20 480 80 720 60C960 40 1200 80 1440 50V120H0Z"
            fill="#065F46"
          />
          <path
            d="M0 120V80C360 40 720 100 1080 70C1260 55 1380 65 1440 60V120H0Z"
            fill="#065F46"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      {/* Hexagonal pattern overlay — same as differentials */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }}
      />

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
            href="tel:+552733207150"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 text-base"
            strength={3}
          >
            <Phone size={18} />
            Ligue Diretamente
          </MagneticButton>
        </motion.div>

        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-white/60 text-sm"
        >
          Consultas em Vila Velha, ES | Seg-Sex 14h-18h
        </motion.p>
      </div>
    </section>
  );
}
