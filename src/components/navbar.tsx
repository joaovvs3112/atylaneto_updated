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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald via-emerald-light to-gold origin-left"
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span
            className={`font-serif text-xl sm:text-2xl tracking-tight transition-colors duration-400 ${
              scrolled ? "text-ink" : "text-white lg:text-ink"
            }`}
          >
            DR. ATYLA NETO
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase transition-colors duration-400 ${
              scrolled ? "text-emerald-light" : "text-white/70 lg:text-emerald-light"
            }`}
          >
            ORTOPEDIA & TRAUMATOLOGIA
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-300 group ${
                scrolled
                  ? "text-graphite hover:text-ink"
                  : "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ${
                  scrolled ? "bg-emerald" : "bg-white"
                }`}
              />
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-bright text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_0_8px_rgba(146,112,12,0.08)]"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-ink" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
          }`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white border-t border-mist overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-graphite hover:text-ink text-base font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white text-center font-medium px-5 py-3 rounded-full mt-2"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
