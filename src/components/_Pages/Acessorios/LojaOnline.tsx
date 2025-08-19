"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LojaOnline() {
  return (
    <section className="sm:py-16 lg:py-24 bg-gradient-to-r from-[#00B616] to-[#32D346]">
      <motion.div
        className="container mx-auto px-4 lg:px-8 max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ margin: "-100px" }}
      >
        <div className="flex  items-center text-black relative">
          {/* Text Content */}
          <motion.div
            className=" w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            <motion.div
              className="text-sm font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              E-commerce
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#1341C5]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              Nossa Loja Online <br /> está em construção!
            </motion.h2>

            <motion.p
              className="text-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              Novidades em breve, <br /> acompanhe pelas redes sociais!!
            </motion.p>
          </motion.div>

          <motion.div
            className="relative w-full max-w-[150px] xs:max-w-[200px]  sm:max-w-[300px] h-[300px] md:h-[420px]  right-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            <Image
              src="/assets/acessorio-celular.png"
              alt="Loja Online"
              fill
              className="object-contain absolute"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
