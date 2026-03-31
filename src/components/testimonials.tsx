"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/data";
import { fadeUp, viewportConfig } from "@/lib/animations";

// Cards enter from different sides and converge to center
const testimonialVariants = (index: number) => {
  const directions = [
    { x: -80, rotate: -4 },  // left card from left
    { x: 0, y: 50 },          // center card from bottom
    { x: 80, rotate: 4 },    // right card from right
  ];
  const dir = directions[index];
  return {
    hidden: { opacity: 0, ...dir, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };
};

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          badge="DEPOIMENTOS"
          title="O Que Dizem Nossos Pacientes"
          subtitle="Histórias reais de recuperação e qualidade de vida."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {TESTIMONIALS.map((testimonial, i) => {
            const isCenter = i === 1;
            return (
              <motion.div
                key={testimonial.name}
                variants={testimonialVariants(i)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                whileHover={{
                  scale: isCenter ? 1.04 : 1.03,
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className={`relative bg-chalk rounded-2xl border p-7 lg:p-8 cursor-default overflow-hidden transition-shadow duration-400 ${
                  isCenter
                    ? "border-emerald/15 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:scale-[1.03] md:-translate-y-2"
                    : "border-mist hover:border-emerald/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                }`}
              >
                {/* Decorative quotes — fade in with scale */}
                <motion.svg
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                  className="absolute -top-2 -left-2 w-16 h-16 text-emerald-soft"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M14 34c-4.4 0-8-3.6-8-8s3.6-8 8-8c1.1 0 2.2.2 3.2.7C19.6 12.3 24 8 30 8v6c-3.3 0-6 4-6 8v2h-2c-4.4 0-8 3.6-8 8v2zm24 0c-4.4 0-8-3.6-8-8s3.6-8 8-8c1.1 0 2.2.2 3.2.7C43.6 12.3 48 8 54 8v6c-3.3 0-6 4-6 8v2h-2c-4.4 0-8 3.6-8 8v2z" />
                </motion.svg>

                {/* Stars — pop in one by one */}
                <div className="flex gap-0.5 mb-4 relative">
                  {Array.from({ length: testimonial.rating }).map((_, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.6 + i * 0.2 + si * 0.08,
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <Star size={14} className="text-gold fill-gold" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-graphite italic leading-relaxed mb-6 relative text-sm lg:text-base">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Divider — animated width */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
                  className="h-px bg-mist mb-4 origin-left"
                />

                {/* Author — slides in from left */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald to-emerald-light flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-ink font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-slate text-xs">
                      {testimonial.condition}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Rating badge — scales in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-soft text-emerald px-5 py-2.5 rounded-full text-sm font-medium">
            <BadgeCheck size={16} />
            Avaliação 4.9/5 — Baseado em +1.000 pacientes atendidos
          </div>
        </motion.div>
      </div>
    </section>
  );
}
