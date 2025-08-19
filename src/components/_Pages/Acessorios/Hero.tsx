"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden min-h-[50vh] sm:min-h-[90vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full min-h-[100%] flex items-start justify-start w-full">
        <motion.div
          className="flex flex-col w-full sm:mb-26 max-w-xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
          }}
        >
          <motion.span
            className="text-xl md:text-2xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-shadow-mobile"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/assets/decio-vector.png"
              alt="Decio"
              width={100}
              height={100}
            />{" "}
            <span className="font-normal">Acessorios</span>
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-shadow-mobile"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Equipado <br /> para a Estrada
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl mb-6 sm:mb-8 opacity-90 text-shadow-mobile"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Tudo o que seu veículo e sua jornada precisam — de produtos de
            manutenção a acessórios de conforto e segurança.
          </motion.p>
          <motion.p className="flex items-center gap-2 text-green-500">
            <Play className="w-6 h-6" />
            <span className="text-sm">Saiba mais</span>
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0">
        <Image
          src="/assets/hero-acessorios.png"
          alt="Restaurante"
          fill
          className="object-cover object-center w-full h-full"
          priority
          style={{
            objectPosition: "65% 50%",
          }}
        />
      </div>
    </section>
  );
}
