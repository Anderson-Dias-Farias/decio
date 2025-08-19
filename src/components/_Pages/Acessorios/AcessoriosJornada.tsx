"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AcessoriosJornada() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <motion.div
        className="container mx-auto px-4 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ margin: "-100px" }}
      >
        {/* Text Content */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            <span className="text-primary">Acessórios</span> para Sua Jornada
          </motion.h2>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            Em nossas Estações de Serviço, você encontra uma linha completa de
            acessórios para o seu veículo e para sua viagem. São produtos de
            manutenção, segurança, conforto e utilidades, com a qualidade e a
            praticidade que motoristas exigentes procuram
          </motion.p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Image 1 - Interior do veículo */}
          <motion.div
            className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            <Image
              src="/assets/acessorios-1.png"
              alt="Interior do veículo com travesseiro e cooler"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Image 2 - Estação de serviço */}
          <motion.div
            className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            <Image
              src="/assets/acessorios-2.png"
              alt="Vista aérea de estação de serviço"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Image 3 - Loja de conveniência */}
          <motion.div
            className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 1.2,
              delay: 1.0,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            <Image
              src="/assets/acessorios-3.png"
              alt="Pessoas na loja de conveniência"
              fill
              className="object-cover object-right"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
