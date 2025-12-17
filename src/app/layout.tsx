import { AuthProvider } from "@/components/Providers/auth-provider";
import LayoutProvider from "@/components/Providers/layoutProvider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./fonts.css";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Decio - Energia que Transforma o Seu Dia",
  description:
    "Soluções completas para quem vive na estrada: mentorias, logística e fidelidade em todo o Brasil",
  authors: { name: "Anderson D Faria", url: "https://www.adfdeveloper.com.br" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    url: "https://www.grupodecio.com.br",
    siteName: "Grupo Decio",
    type: "website",
    locale: "pt-BR",
    images: "/favicon.ico",
  },
  twitter: {
    images: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.grupodecio.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistMono.variable} antialiased font-salva overflow-x-hidden`}
        style={{ fontFamily: "Salva, system-ui, sans-serif" }}
      >
        <AuthProvider>
          <LayoutProvider>{children}</LayoutProvider>

          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
