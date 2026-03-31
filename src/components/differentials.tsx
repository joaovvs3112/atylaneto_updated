"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import TiltCard from "@/components/ui/tilt-card";
import { DIFFERENTIALS } from "@/lib/data";
import { viewportConfig } from "@/lib/animations";

// Each card enters from a different direction
const cardDirections = [
  { x: -50, y: 30, rotate: -5 },   // from left
  { x: 0, y: 50, rotate: 0 },      // from bottom
  { x: 0, y: 50, rotate: 0 },      // from bottom
  { x: 50, y: 30, rotate: 5 },     // from right
];

export default function Differentials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: `
          radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 40%),
          linear-gradient(135deg, #065F46 0%, #022c22 100%)
        `,
      }}
    >
      {/* Hexagonal pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[5%] w-12 h-12 border border-white/[0.05] rounded-lg"
      />
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[8%] w-6 h-6 bg-gold/10 rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          badge="POR QUE ESCOLHER"
          title="Diferenciais que Fazem a Diferença"
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((diff, i) => {
            const dir = cardDirections[i];
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  transition: {
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1] as const,
                  },
                }}
                viewport={viewportConfig}
              >
                <TiltCard
                  className="group relative glass-dark rounded-2xl p-7 transition-all duration-400 hover:bg-white/[0.12] hover:border-gold/30 cursor-default h-full"
                  tiltAmount={12}
                >
                  {/* Decorative number */}
                  <motion.span
                    initial={{ opacity: 0, scale: 2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                    className="absolute top-4 right-4 font-serif text-5xl text-white/[0.07] group-hover:text-white/[0.12] transition-colors duration-400 select-none"
                  >
                    {diff.number}
                  </motion.span>

                  {/* Icon — pops in with spring */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + i * 0.15,
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="mb-5"
                  >
                    <diff.icon
                      size={32}
                      className="text-gold transition-all duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_0_8px_rgba(146,112,12,0.4)]"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-serif text-white text-lg mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {diff.description}
                  </p>

                  {/* Gold bottom line on hover */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold w-0 group-hover:w-3/4 transition-all duration-500 ease-out rounded-t" />
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
