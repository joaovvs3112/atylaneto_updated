"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  { src: "/dratyla-hero.jpg", alt: "Dr. Atyla Neto em seu consultório" },
  { src: "/dratyla-atendimento.jpg", alt: "Dr. Atyla Neto realizando atendimento" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function DoctorSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="lg:hidden bg-snow py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease }}
          className="relative max-w-md lg:max-w-lg mx-auto"
        >
          {/* Gold offset frame */}
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold/30 rounded-3xl" />

          {/* Photo container */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={photos[index].src}
                alt={photos[index].alt}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.9, ease }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald/15 via-transparent to-transparent" />

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index
                      ? "bg-white w-8 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                      : "bg-white/50 w-2 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
