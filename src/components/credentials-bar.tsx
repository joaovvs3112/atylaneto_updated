"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, Building, Stethoscope } from "lucide-react";
import { CREDENTIALS } from "@/lib/data";
import { fadeUp, stagger, viewportConfig } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  Building,
  Stethoscope,
};

export default function CredentialsBar() {
  return (
    <section className="bg-snow py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          className="text-center text-slate text-[11px] font-medium tracking-[0.25em] uppercase mb-8"
        >
          Formação e Atuação
        </motion.p>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0"
        >
          {CREDENTIALS.map((cred, i) => {
            const Icon = iconMap[cred.icon];
            return (
              <motion.div
                key={cred.institution}
                variants={fadeUp()}
                className="flex items-center gap-0"
              >
                {i > 0 && (
                  <div className="hidden sm:block w-px h-10 bg-mist mx-8 group-hover:opacity-0 transition-opacity" />
                )}
                <div className="group flex items-center gap-3 cursor-default">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-emerald-soft">
                    <Icon
                      size={18}
                      className="text-emerald transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-ink text-sm font-medium transition-colors duration-300 group-hover:text-ink">
                      {cred.institution}
                    </p>
                    <p className="text-slate text-xs">{cred.type}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
