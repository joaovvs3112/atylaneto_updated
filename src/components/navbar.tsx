"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WA_URL } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ease-out"
      style={{ paddingTop: scrolled ? "12px" : "16px" }}
    >
      <nav
        className={`relative mx-auto transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-4xl rounded-2xl border border-mist/60 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "max-w-5xl rounded-2xl border border-white/50 bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl"
        }`}
      >
        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX }}
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald via-emerald-light to-gold origin-left transition-all duration-500 ${
            scrolled ? "rounded-b-2xl left-4 right-4" : ""
          }`}
        />

        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? "px-4 sm:px-6 h-[56px]" : "px-5 sm:px-8 h-[72px]"
        }`}>
          {/* Logo */}
          <a href="#" className="flex flex-col shrink-0">
            <span
              className={`font-serif tracking-tight transition-all duration-400 ${
                scrolled
                  ? "text-lg text-ink"
                  : "text-xl sm:text-2xl text-ink"
              }`}
            >
              DR. ATYLA NETO
            </span>
            <span
              className={`font-medium tracking-[0.2em] uppercase transition-all duration-400 ${
                scrolled
                  ? "text-[9px] text-emerald-light"
                  : "text-[10px] sm:text-[11px] text-emerald-light"
              }`}
            >
              ORTOPEDIA & TRAUMATOLOGIA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 group ${
                  scrolled
                    ? "text-graphite hover:text-ink hover:bg-snow"
                    : "text-graphite hover:text-ink hover:bg-snow/50"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ${
                    scrolled ? "bg-emerald" : "bg-emerald"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:inline-flex items-center text-sm font-medium rounded-xl transition-all duration-300 ${
                scrolled
                  ? "bg-emerald hover:bg-emerald-light text-white px-5 py-2 shadow-sm hover:shadow-md"
                  : "bg-gold hover:bg-gold-bright text-white px-5 py-2.5 hover:shadow-[0_0_0_8px_rgba(146,112,12,0.08)]"
              }`}
            >
              Agendar Consulta
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-ink hover:bg-snow"
                  : "text-ink hover:bg-snow/50"
              }`}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`lg:hidden overflow-hidden ${
                scrolled
                  ? "border-t border-mist/40"
                  : "bg-white/95 backdrop-blur-xl rounded-b-2xl border border-mist/40 mt-2"
              }`}
            >
              <div className="px-4 py-5 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-graphite hover:text-ink hover:bg-snow text-base font-medium transition-all py-2.5 px-3 rounded-lg"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald hover:bg-emerald-light text-white text-center font-medium px-5 py-3 rounded-xl mt-3 transition-colors"
                >
                  Agendar Consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
