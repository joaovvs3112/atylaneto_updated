"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`max-w-2xl ${alignClass} mb-12 lg:mb-16`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <motion.span
        variants={fadeUp(0)}
        className={`inline-block text-xs font-medium tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5 ${
          light
            ? "bg-white/10 text-white/80"
            : "bg-emerald-soft text-emerald"
        }`}
      >
        {badge}
      </motion.span>
      <motion.h2
        variants={fadeUp(0.1)}
        className={`font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp(0.2)}
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-graphite"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
