import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Atyla Neto — Ortopedista em Vitória e Vila Velha, ES",
  description:
    "Ortopedista e traumatologista com mais de 20 anos de experiência. Especialista em medicina regenerativa, tratamento de dores no joelho, coluna e dor crônica. Agende sua consulta.",
  keywords:
    "ortopedista, traumatologista, Vitória, Vila Velha, medicina regenerativa, dor no joelho, coluna, dor crônica",
  openGraph: {
    title: "Dr. Atyla Neto — Ortopedia de Excelência",
    description:
      "Mais de 20 anos devolvendo qualidade de vida com tratamentos de precisão.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
