"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_URL } from "@/lib/data";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Show tooltip once after becoming visible
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    if (!showTooltip) return;
    const timer = setTimeout(() => setShowTooltip(false), 4000);
    return () => clearTimeout(timer);
  }, [showTooltip]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="hidden sm:block bg-white text-ink text-sm font-medium px-4 py-2 rounded-xl shadow-lg whitespace-nowrap"
              >
                Agende sua consulta!
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 shadow-lg" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all duration-300 animate-pulse-green"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} className="text-white" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
