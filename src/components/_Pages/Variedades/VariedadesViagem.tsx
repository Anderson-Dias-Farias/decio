"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Alimentacao() {
  return (
    <section className="py-16 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          {/* Texto */}
          <div className="w-full lg:w-1/2 lg:min-w-[400px] flex flex-col gap-4">
            <motion.h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              Variedades <span className="text-black">para sua viagem</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              Em nossas Estações de Serviço, você encontra uma seleção de
              produtos pensados para quem está na estrada!
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ margin: "-100px" }}
              >
                De itens de higiene a presentes e utilidades, oferecemos o que
                você precisa com conveniência, conforto e agilidade — tudo em um
                só lugar.
              </motion.p>
            </motion.p>
          </div>

          {/* Galeria de imagens */}
          <div className="w-full space-y-4 max-w-3xl px-4">
            {/* Imagem principal */}
            <motion.div
              className="relative w-full h-42 sm:h-52 lg:h-60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              <Image
                src="/assets/variedades-1.png"
                alt="Posto de combustível visto de cima"
                fill
                className="object-cover object-center rounded-lg"
              />
            </motion.div>

            {/* Duas imagens lado a lado */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="relative w-full h-48"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                viewport={{ margin: "-100px" }}
              >
                <Image
                  src="/assets/variedades-2.png"
                  alt="Interior da loja de conveniência"
                  fill
                  className="object-cover object-center rounded-lg"
                />
              </motion.div>
              <motion.div
                className="relative w-full h-48"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ margin: "-100px" }}
              >
                <Image
                  src="/assets/variedades-3.png"
                  alt="Interior do restaurante com mesas"
                  fill
                  className="object-cover object-center rounded-lg"
                  style={{ objectPosition: "10% 50%" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
