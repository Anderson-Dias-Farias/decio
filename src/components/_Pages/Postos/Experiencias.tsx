"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Experiencias() {
  return (
    <section className="py-26 bg-white text-white min-h-[90dvh]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-xl md:text-3xl lg:text-4xl font-semibold mb-12 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Estrutura Completa{" "}
          <span className="text-black">para sua Jornada</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Grande - Topo */}
          <motion.div
            className="md:col-span-2 relative h-54 md:h-60 lg:h-78 rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/assets/conveniencia.png"
              alt="Restaurante 24h"
              fill
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center gap-4 max-w-lg">
              <div className="text-sm text-gray-200 mb-2">
                Sabores para Sua Jornada
              </div>
              <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-4">
                Lojas de Conveniência 24h <br /> e Restaurantes
              </h3>
              <div className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors duration-200">
                <Play className="w-4 h-4" />
                <span>Descubra</span>
              </div>
            </div>
          </motion.div>

          {/* Card Pequeno - Esquerda */}
          <motion.div
            className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/assets/banheiros.png"
              alt="Banheiros e Estacionamento"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end max-w-lg">
              <div className="text-sm text-gray-200 mb-2">
                Sua parada favorita
              </div>
              <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-3">
                Banheiros Limpos, Estacionamento Seguro <br /> e Muito Mais
              </h3>
              <div className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors duration-200">
                <Play className="w-4 h-4" />
                <span>Conheça</span>
              </div>
            </div>
          </motion.div>

          {/* Card Pequeno - Direita */}
          <motion.div
            className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/assets/acessorios.png"
              alt="Acessórios e Utilidades"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center gap-4 max-w-lg">
              <div className="text-sm text-gray-200 mb-2">
                Tudo para sua estrada
              </div>
              <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-3">
                Acessórios, Utilidades e Conforto para Motoristas
              </h3>
              <div className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors duration-200">
                <Play className="w-4 h-4" />
                <span>Saiba mais</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
