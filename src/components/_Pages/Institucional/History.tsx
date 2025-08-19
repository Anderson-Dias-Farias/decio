"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VariedadesItens() {
  return (
    <section className="pt-16 bg-white w-full">
      <motion.div
        className="max-w-7xl mx-auto px-4 w-full pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ margin: "-100px" }}
      >
        <div
          className={cn(
            "flex flex-col  gap-12 items-center md:flex-row justify-between w-full px-2"
          )}
        >
          {/* Texto */}
          <div
            className={cn(
              "w-full flex flex-col gap-4 text-black",
              "lg:min-w-[320px] md:max-w-lg "
            )}
          >
            <motion.h2
              className="text-2xl lg:text-3xl xl:text-5xl font-bold  lg:mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              Quase 40 Anos <br className="hidden lg:block" /> de História
            </motion.h2>
            <motion.p
              className=" text-base  lg:text-lg leading-relaxed font-semibold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              Desde 1986, conectando caminhos <br className="hidden lg:block" />
              e transformando jornadas
            </motion.p>
            <motion.p
              className=" text-sm  lg:text-base  xl:text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              O Grupo Decio nasceu em 1986, em Ituiutaba (MG), com um único
              posto de combustível e um grande propósito: abastecer vidas e
              construir conexões reais. De um sonho familiar liderado por Décio
              Chaves Macedo, a empresa cresceu com a visão de seus filhos Elmo e
              Edmundo, consolidando-se em 5 estados brasileiros e atendendo mais
              de 1 milhão de clientes por ano. Hoje, somos mais do que postos.
              Somos um ecossistema completo de soluções para quem vive a
              estrada.
            </motion.p>
          </div>

          {/* Galeria de imagens */}
          <div
            className={cn("w-full space-y-4 max-w-3xl flex gap-4", "flex-col")}
          >
            {/* Imagem principal */}
            <motion.div
              className="relative w-full h-52 lg:h-72 xl:h-96"
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
                src="/assets/history-1.png"
                alt="História do Grupo Decio"
                fill
                className="object-cover object-center rounded-lg"
              />
            </motion.div>

            {/* Duas imagens lado a lado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="relative w-full h-52 md:h-32 lg:h-48 xl:h-64"
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
                  src="/assets/hitory2.png"
                  alt="História do Grupo Decio"
                  fill
                  className="object-cover object-center rounded-lg"
                />
              </motion.div>
              <motion.div
                className="relative w-full h-52 md:h-32 lg:h-48 xl:h-64"
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
                  src="/assets/hitory3.png"
                  alt="História do Grupo Decio"
                  fill
                  className="object-cover object-center rounded-lg"
                  style={{ objectPosition: "10% 40%" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
