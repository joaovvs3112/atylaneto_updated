"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/animations";

export default function SectionDivider() {
  return (
    <div className="flex justify-center py-2">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-emerald/25 to-transparent"
      />
    </div>
  );
}
