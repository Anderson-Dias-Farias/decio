"use client";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Parceiro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gray-100 relative overflow-hidden lg:min-h-[80dvh] flex items-center justify-center"
    >
      <Image
        src="/assets/parceiro-acessorios.png"
        alt="App Mobile"
        sizes="100vw"
        className="w-full h-auto object-cover blur-xs"
        fill
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="flex gap-12 flex-col sm:flex-row items-center w-full">
          <div className="flex flex-col gap-4 w-full md:max-w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg relative z-10 w-full"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-black font-medium mb-3 text-sm"
              >
                Clube de benefícios
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-5xl font-semibold text-[#1e40af] mb-2"
              >
                Seja um
                <br />
                Parceiro Decio
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-gray-700 text-lg"
              >
                Abasteça, acumule pontos e troque
                <br />
                por produtos, serviços e vantagens
                <br />
                exclusivas.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="text-green-500 hover:text-green-600 flex items-center gap-2 px-6 py-3 rounded-lg font-medium w-fit hover:bg-blur"
              >
                <Play className="w-4 h-4" />
                Saiba mais
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: 100, scale: 0.8 }
            }
            transition={{
              duration: 1.0,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative flex justify-center items-center max-w-1/3 z-12"
          >
            <Image
              src="/assets/celulares.png"
              alt="App Mobile"
              sizes="100vw"
              width={800}
              height={600}
              className="w-full h-auto scale-200 object-cover object-center sm:-translate-x-16 md:translate-x-0 sm:-translate-y-8 md:translate-y-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
