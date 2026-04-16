import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { NAV_LINKS, WA_URL, PHONE, PHONE_TEL, CRM, RQE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-white text-xl mb-1">
              DR. ATYLA NETO
            </p>
            <p className="text-white/50 text-[11px] font-medium tracking-[0.25em] uppercase mb-4">
              ORTOPEDIA & TRAUMATOLOGIA
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Cuidado especializado em ortopedia com mais de 20 anos de
              experiência, devolvendo qualidade de vida aos pacientes.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-bright text-sm font-medium transition-colors"
            >
              <MessageCircle size={14} />
              Agendar pelo WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-medium text-sm mb-5">Navegação</p>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-white/60 hover:text-white/80 text-sm transition-colors"
              >
                Início
              </a>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/60 hover:text-white/80 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-medium text-sm mb-5">Contato</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-white/50 mt-0.5" />
                <p className="text-white/60 text-sm">
                  Vitória e Vila Velha, ES
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-white/50 mt-0.5" />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-white/60 hover:text-white/80 text-sm transition-colors"
                >
                  {PHONE}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-white/50 mt-0.5" />
                <p className="text-white/60 text-sm">
                  Segunda a Sexta, 14h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/50 text-xs text-center">
            © 2026 Dr. Atyla Neto — CRM {CRM} | RQE {RQE} — Todos os
            direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
