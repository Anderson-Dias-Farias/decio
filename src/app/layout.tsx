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
  title: "Décio - Energia que Transforma o Seu Dia",
  description:
    "Soluções completas para quem vive na estrada: mentorias, logística e fidelidade em todo o Brasil",
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
