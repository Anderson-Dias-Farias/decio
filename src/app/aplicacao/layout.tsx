import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "../fonts.css";
import "../globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login - Décio",
  description: "Acesse sua conta Décio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistMono.variable} antialiased font-salva overflow-x-hidden`}
        style={{ fontFamily: "Salva, system-ui, sans-serif" }}
      >
        <div className="min-h-screen bg-gray-50">{children}</div>
      </body>
    </html>
  );
}
