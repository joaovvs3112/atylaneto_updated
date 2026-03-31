"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import MagneticButton from "@/components/ui/magnetic-button";
import { WA_URL, PHONE, PHONE_TEL, SPECIALTIES } from "@/lib/data";
import { fadeUp, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";

const schema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  specialty: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Erro ao enviar mensagem.");
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao enviar. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-ink bg-chalk placeholder:text-silver transition-all duration-300 outline-none ${
      hasError
        ? "border-red-400 ring-2 ring-red-400/20"
        : "border-mist focus:border-emerald/30 focus:ring-2 focus:ring-emerald/20"
    }`;

  return (
    <section id="contato" className="bg-snow py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          badge="ENTRE EM CONTATO"
          title="Agende sua Consulta"
          subtitle="Escolha a forma mais conveniente para você."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact info */}
          <motion.div
            variants={fadeRight(0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* WhatsApp Card */}
            <div className="bg-emerald rounded-2xl p-7 mb-8 group hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,95,70,0.2)] transition-all duration-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">
                    Atendimento rápido
                  </p>
                  <p className="text-white/60 text-sm">pelo WhatsApp</p>
                </div>
              </div>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-emerald font-medium px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-colors"
              >
                <MessageCircle size={16} />
                Chamar no WhatsApp
              </a>
              <p className="text-white/60 text-xs mt-3">{PHONE}</p>
            </div>

            {/* Info items */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-emerald-soft">
                  <MapPin size={18} className="text-emerald" />
                </div>
                <div>
                  <p className="text-ink font-medium text-sm">Localização</p>
                  <p className="text-graphite text-sm">
                    Vitória e Vila Velha, ES
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-emerald-soft">
                  <Phone size={18} className="text-emerald" />
                </div>
                <div>
                  <p className="text-ink font-medium text-sm">Telefone</p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-graphite text-sm hover:text-emerald transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-emerald-soft">
                  <Clock size={18} className="text-emerald" />
                </div>
                <div>
                  <p className="text-ink font-medium text-sm">Horário</p>
                  <p className="text-graphite text-sm">
                    Segunda a Sexta, 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeLeft(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {submitted ? (
              <div className="bg-chalk rounded-2xl border border-mist p-10 text-center">
                <CheckCircle2
                  size={48}
                  className="text-emerald-light mx-auto mb-4"
                />
                <h3 className="font-serif text-ink text-xl mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-graphite text-sm">
                  Entraremos em contato em breve. Obrigado!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-chalk rounded-2xl border border-mist p-7 lg:p-8 space-y-5"
              >
                <div>
                  <input
                    {...register("name")}
                    placeholder="Nome completo"
                    className={inputClass(!!errors.name)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      {...register("phone")}
                      placeholder="Telefone"
                      className={inputClass(!!errors.phone)}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("email")}
                      placeholder="E-mail"
                      type="email"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <select
                  {...register("specialty")}
                  className={`${inputClass(false)} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Especialidade de interesse
                  </option>
                  {SPECIALTIES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>

                <textarea
                  {...register("message")}
                  placeholder="Mensagem (opcional)"
                  rows={4}
                  className={inputClass(false)}
                />

                {error && (
                  <p className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-xl">
                    {error}
                  </p>
                )}

                <MagneticButton
                  className={`w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-bright text-white font-medium py-3.5 rounded-full transition-all duration-300 hover:shadow-lg text-sm ${
                    loading ? "opacity-70 pointer-events-none" : ""
                  }`}
                  strength={3}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar Mensagem
                    </>
                  )}
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
