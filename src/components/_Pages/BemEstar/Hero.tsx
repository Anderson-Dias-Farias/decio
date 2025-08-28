"use client";

import { useNextSection } from "@/lib/use-next";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { scrollToNextSection } = useNextSection();
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden min-h-[50vh] sm:min-h-[90vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full min-h-[100%] flex items-center justify-start w-full">
        <motion.div
          className="flex flex-col w-full sm:mb-26 sm:max-w-md md:max-w-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-shadow-mobile"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Bem-estar <br /> em Cada Parada
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-[28px] mb-6 sm:mb-8 opacity-90 text-shadow-mobile"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Estações de Serviço com estrutura completa para quem precisa
            descansar, se cuidar e seguir viagem <br />
            com mais conforto e tranquilidade
          </motion.p>
          <motion.span
            onClick={() => scrollToNextSection("variedades")}
            className="flex items-center gap-2 cursor-pointer text-green-500"
          >
            <Play className="w-6 h-6" />
            <span className="text-sm">Saiba mais</span>
          </motion.span>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0">
        <Image
          src="/assets/hero-bem-estar.png"
          alt="Homem sorrindo"
          fill
          className="object-cover object-center w-full h-full opacity-80 md:opacity-100"
          priority
          style={{ objectPosition: "70% 20%" }}
        />
      </div>
    </section>
  );
}
