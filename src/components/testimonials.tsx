"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/data";
import { fadeUp, viewportConfig } from "@/lib/animations";

const firstColumn = TESTIMONIALS.slice(0, 3);
const secondColumn = TESTIMONIALS.slice(3, 6);
const thirdColumn = TESTIMONIALS.slice(6, 9);

function TestimonialsColumn({
  testimonials,
  duration = 15,
  className = "",
}: {
  testimonials: typeof TESTIMONIALS;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, loopIndex) => (
          <React.Fragment key={loopIndex}>
            {testimonials.map((testimonial, i) => (
              <div
                key={`${loopIndex}-${i}`}
                className="bg-chalk rounded-2xl border border-mist p-7 max-w-xs w-full shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-emerald/15 transition-all duration-400 cursor-default group"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-graphite leading-relaxed text-sm lg:text-base mb-5">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-mist mb-4" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-soft"
                  />
                  <div>
                    <p className="text-ink font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-slate text-xs">{testimonial.condition}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          badge="DEPOIMENTOS"
          title="O Que Dizem Nossos Pacientes"
          subtitle="Histórias reais de recuperação e qualidade de vida."
        />

        {/* Scrolling columns with fade mask */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{
            duration: 0.6,
            delay: 0.3,
            type: "spring",
            stiffness: 200,
          }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-soft text-emerald px-5 py-2.5 rounded-full text-sm font-medium">
            <BadgeCheck size={16} />
            +1.000 pacientes atendidos — Relatos reais de recuperação
          </div>
        </motion.div>
      </div>
    </section>
  );
}
