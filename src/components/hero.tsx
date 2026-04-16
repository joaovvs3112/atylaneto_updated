"use client";

import { motion } from "framer-motion";
import { BadgeCheck, MessageCircle, ArrowDown, Award, Users, Clock } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import AnimatedCounter from "@/components/ui/animated-counter";
import { WA_URL } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "+1.000", label: "Pacientes atendidos", icon: Users },
  { value: "20+", label: "Anos de experiência", icon: Clock },
];

// Word-by-word reveal for subtitle
const subtitleWords = "Mais de 20 anos devolvendo qualidade de vida com tratamentos de precisão em Vitória e Vila Velha, ES.".split(" ");

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background — left ivory, right emerald diagonal (desktop) */}
      <div className="absolute inset-0 bg-ivory" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald to-emerald-900 hidden lg:block"
        style={{
          clipPath: "polygon(55% 0, 100% 0, 100% 100%, 40% 100%)",
        }}
      />
      {/* Mobile: full emerald gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald to-emerald-900 lg:hidden" />

      {/* Animated decorative blobs — floating */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[20%] w-[400px] h-[400px] bg-gold/8 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-[10%] w-[300px] h-[300px] bg-emerald-light/10 rounded-full blur-[100px]"
      />
      {/* Extra floating blob */}
      <motion.div
        animate={{ y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[35%] w-[200px] h-[200px] bg-gold/5 rounded-full blur-[80px] hidden lg:block"
      />

      {/* Floating geometric shapes — decorative */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] right-[45%] w-16 h-16 border border-gold/10 rounded-lg hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[25%] right-[52%] w-8 h-8 border border-emerald-light/15 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[8%] w-4 h-4 bg-gold/20 rounded-sm hidden lg:block"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full pt-24 pb-16 lg:py-0">
          {/* Left — Text */}
          <div className="lg:col-span-6 xl:col-span-7 z-10">
            {/* Badge — slides in from left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2 bg-white/15 text-white/90 lg:bg-emerald-soft lg:text-emerald text-xs font-medium tracking-wide px-4 py-2 rounded-full mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 5 }}
              >
                <BadgeCheck size={14} />
              </motion.div>
              CRM 7743 | RQE 6402 — Especialista em Ortopedia
            </motion.div>

            <div className="mb-6">
              {/* "Ortopedia de" — drops in from above */}
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
                className="text-white/70 lg:text-graphite text-lg sm:text-xl font-light mb-1"
              >
                Ortopedia de
              </motion.p>

              {/* "Excelência." — scales up dramatically */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.7, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease }}
                className="font-serif text-white lg:text-ink text-5xl sm:text-6xl xl:text-7xl leading-[1.05]"
              >
                Excelência.
                {/* Gold underline — draws in */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1, ease }}
                  className="block h-[3px] bg-gold mt-2 origin-left"
                  style={{ maxWidth: "200px" }}
                />
              </motion.h1>
            </div>

            {/* Subtitle — word by word reveal */}
            <div className="max-w-[480px] mb-8">
              <p className="text-white/70 lg:text-graphite text-base sm:text-lg leading-relaxed">
                {subtitleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7 + i * 0.04,
                      ease,
                    }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>

            {/* Buttons — enter from bottom with stagger */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease }}
              >
                <MagneticButton
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald lg:bg-emerald lg:text-white hover:bg-emerald-light hover:text-white font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                >
                  <MessageCircle size={18} />
                  Agendar pelo WhatsApp
                </MagneticButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.35, ease }}
              >
                <MagneticButton
                  href="#especialidades"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white lg:border-emerald lg:text-emerald font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10 lg:hover:bg-emerald/5 text-sm sm:text-base"
                  strength={3}
                >
                  Conhecer Especialidades
                </MagneticButton>
              </motion.div>
            </div>

            {/* Stats — glassmorphism card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5, ease }}
              className="inline-flex gap-6 sm:gap-10 bg-white/15 lg:bg-white/60 backdrop-blur-xl border border-white/20 lg:border-white/60 rounded-2xl px-6 sm:px-8 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
            >
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3 group cursor-default">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 + i * 0.15, type: "spring", stiffness: 300 }}
                    className="w-10 h-10 rounded-xl bg-white/20 lg:bg-emerald-soft flex items-center justify-center flex-shrink-0"
                  >
                    <stat.icon size={18} className="text-gold-bright lg:text-emerald" />
                  </motion.div>
                  <div>
                    <AnimatedCounter
                      value={stat.value}
                      className="font-serif text-xl sm:text-2xl text-white lg:text-ink group-hover:scale-105 transition-transform duration-300 inline-block leading-tight"
                    />
                    <p className="text-white/60 lg:text-slate text-[11px] sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="hidden sm:block w-px h-8 bg-white/20 lg:bg-mist/50 ml-4" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo (desktop only) */}
          <div className="lg:col-span-6 xl:col-span-5 relative hidden lg:flex justify-center">
            {/* Gold offset frame — slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6, ease }}
              className="absolute -top-4 -left-4 w-[calc(100%-20px)] max-w-[400px] aspect-[3/4] border-2 border-gold/40 rounded-3xl"
            />

            {/* Photo container — reveal with clip */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
              className="relative w-full max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden group"
            >
              <img
                src="/dratyla-hero.jpg"
                alt="Dr. Atyla Neto em seu consultório"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating badge — bounces in from below */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="absolute -bottom-4 -left-8 glass rounded-2xl px-5 py-4 shadow-lg"
            >
              {/* Continuous gentle float */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-10 h-10 bg-gold-glow rounded-xl flex items-center justify-center"
                >
                  <Award size={20} className="text-gold" />
                </motion.div>
                <div>
                  <p className="text-ink font-semibold text-sm">20+ Anos</p>
                  <p className="text-slate text-xs">de Experiência</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 70 1440 60V80H0V40Z"
            fill="var(--color-snow)"
          />
        </svg>
      </div>

      {/* Scroll indicator — enhanced bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.5, duration: 0.5 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-silver text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={16} className="text-silver" />
      </motion.div>
    </section>
  );
}
