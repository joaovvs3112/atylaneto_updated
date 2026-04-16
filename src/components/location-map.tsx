"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { PHONE, PHONE_TEL } from "@/lib/data";
import { fadeUp, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d-40.2984719!3d-20.3329726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8163ad1c220e3%3A0xe051ddf021cdd703!2sCL%C3%8DNICA%20S%C3%83O%20CLEMENTE%20-%20Vila%20Velha%20-%20ES!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr";

const MAPS_LINK =
  "https://www.google.com/maps/place/CL%C3%8DNICA+S%C3%83O+CLEMENTE+-+Vila+Velha+-+ES/@-20.3329726,-40.2984719,17z";

export default function LocationMap() {
  return (
    <section
      id="localizacao"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #044D38 0%, #022c22 100%)",
      }}
    >
      {/* Hexagonal pattern overlay — same as differentials & CTA */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }}
      />

      {/* Content — heading + info card */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-6 lg:pt-10 pb-10">
        <SectionHeading
          badge="LOCALIZAÇÃO"
          title="Onde Estamos"
          subtitle="Clínica São Clemente — Vila Velha, ES"
          light
        />

        {/* Info card — centered above the map */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-xl mx-auto"
        >
          <div className="glass-dark rounded-2xl p-7 border border-white/10">
            <div className="flex items-start gap-5 mb-5">
              <div className="w-12 h-12 bg-gold-glow rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-white text-lg mb-1">
                  Clínica São Clemente
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  R. Carolina Leal, 46 — Jaburuna
                  <br />
                  Vila Velha — ES, 29100-510
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-gold" />
                <p className="text-white/70 text-sm">
                  Seg–Sex, 14h às 18h
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {PHONE}
                </a>
              </div>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-bright text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg text-sm"
            >
              <Navigation size={14} />
              Abrir no Google Maps
            </a>
          </div>
        </motion.div>
      </div>

      {/* Map — full width, edge to edge */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="w-full"
      >
        <iframe
          src={MAPS_EMBED_URL}
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Clínica São Clemente"
        />
      </motion.div>
    </section>
  );
}
