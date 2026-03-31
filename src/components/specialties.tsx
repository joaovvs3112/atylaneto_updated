"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { SPECIALTIES, WA_URL } from "@/lib/data";
import { fadeUp, viewportConfig } from "@/lib/animations";
import MagneticButton from "@/components/ui/magnetic-button";

// Alternate entrance directions for each card
const cardVariants = (index: number) => {
  const directions = [
    { x: -60, y: 20 },  // from left
    { x: 0, y: 40 },    // from bottom
    { x: 60, y: 20 },   // from right
    { x: -60, y: 20 },  // from left
    { x: 0, y: 40 },    // from bottom
    { x: 60, y: 20 },   // from right
  ];
  const dir = directions[index % 6];
  return {
    hidden: { opacity: 0, x: dir.x, y: dir.y, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };
};

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-snow py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          badge="ÁREAS DE ATUAÇÃO"
          title="Especialidades"
          subtitle="Tratamentos especializados com abordagem personalizada para cada paciente."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec, i) => (
            <motion.div
              key={spec.title}
              variants={cardVariants(i)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 48px rgba(0,0,0,0.06)",
                transition: { duration: 0.3 },
              }}
              className="group relative bg-chalk rounded-2xl border border-mist p-7 transition-colors duration-400 hover:border-emerald/20 cursor-default overflow-hidden"
            >
              {/* Gold activation line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] bg-gold w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b" />

              {/* Icon with spin entrance */}
              <motion.div
                initial={{ rotate: -20, scale: 0.5 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12, type: "spring", stiffness: 200 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-400 bg-emerald-soft group-hover:bg-gold-glow"
              >
                <spec.icon
                  size={24}
                  className="transition-colors duration-400 text-emerald group-hover:text-gold"
                />
              </motion.div>

              {/* Content */}
              <h3 className="font-serif text-ink text-lg mb-2 transition-colors duration-400 group-hover:text-gold">
                {spec.title}
              </h3>
              <p className="text-graphite text-sm leading-relaxed mb-4">
                {spec.description}
              </p>

              {/* Hover link */}
              <div className="flex items-center gap-1 text-emerald text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Saiba mais
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <MagneticButton
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald hover:bg-emerald-light text-white font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg text-sm"
          >
            <MessageCircle size={16} />
            Fale com o Dr. Atyla
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
