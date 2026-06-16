import type { Metadata } from "next";
import Script from "next/script";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const GTM_ID = "GTM-NV7M5XPZ";

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
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <body className="antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
