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
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          badge="LOCALIZAÇÃO"
          title="Onde Estamos"
          subtitle="Clínica São Clemente — Vila Velha, ES"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Map */}
          <motion.div
            variants={fadeRight(0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-8 rounded-2xl overflow-hidden border border-mist shadow-[0_8px_30px_rgba(0,0,0,0.04)] min-h-[400px]"
          >
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica São Clemente"
            />
          </motion.div>

          {/* Info card */}
          <motion.div
            variants={fadeLeft(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Address card */}
            <div className="bg-chalk rounded-2xl border border-mist p-7 flex-1">
              <div className="w-12 h-12 bg-emerald-soft rounded-xl flex items-center justify-center mb-5">
                <MapPin size={22} className="text-emerald" />
              </div>
              <h3 className="font-serif text-ink text-lg mb-1">
                Clínica São Clemente
              </h3>
              <p className="text-graphite text-sm leading-relaxed mb-4">
                R. Carolina Leal, 46 — Jaburuna
                <br />
                Vila Velha — ES, 29100-510
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-emerald-light" />
                  <p className="text-graphite text-sm">
                    Seg–Sex, 8h às 18h
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-emerald-light" />
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-graphite text-sm hover:text-emerald transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald hover:bg-emerald-light text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg text-sm"
              >
                <Navigation size={14} />
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
