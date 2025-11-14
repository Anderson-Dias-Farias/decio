"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Abastecimento() {
  return (
    <section className=" relative overflow-hidden xl:min-h-[80dvh] pt-16 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 relative w-full  p-2 min-h-[340px] lg:min-h-[500px] xl:min-h-[650px]">
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-start  lg:pt-12  xl:pt-26 h-full">
          {/* Card de conteúdo */}
          <motion.div
            className="w-full lg:w-1/2  z-20 relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-gray-100 shadow-xl rounded-lg p-6 gap-8 flex flex-col justify-between  w-full h-full">
              <div className="flex flex-col justify-between h-full gap-2 ">
                <p className="font-semibold text-sm text-primary">
                  Combustível
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary ">
                  Abasteça
                  <br className="hidden lg:block" />
                  com Confiança
                </h2>
                <p className="text-gray-600  text-base md:text-lg lg:text-xl xl:text-2xl ">
                  Combustíveis de qualidade, atendimento{" "}
                  <br className="hidden lg:block" /> cordial e estrutura pensada
                  para sua <br className="hidden lg:block" /> comodidade e
                  segurança
                </p>
              </div>
              <span className="text-[#197CA2] sm:hidden font-semibold text-md flex items-center gap-2 hover:text-[#146B8C] transition-colors duration-200 cursor-pointer">
                <Play className="w-4 h-4" /> Gasolina, etanol e diesel com
                qualidade comprovada.
              </span>
            </div>
            <Link
              href="/produtos-e-servicos/abastecimento"
              className="text-[#197CA2] hidden font-semibold text-md sm:flex items-center gap-2 mt-4 lg:mt-8 hover:text-[#146B8C] transition-colors duration-200 cursor-pointer"
            >
              <Play className="w-4 h-4" /> Gasolina, etanol e diesel com selo de{" "}
              <br className="block md:hidden" />
              qualidade comprovada
            </Link>
          </motion.div>

          {/* Imagem da bomba - responsiva */}
          <motion.div
            className=" w-full xs:w-1/3  md:w-1/2 relative z-10   h-74 sm:h-50 md:h-96 lg:h-[500px] xl:h-[650px] lg:absolute lg:right-0 lg:bottom-0  xl:w-[581px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative sm:w-full min-w-70 sm:min-w-full  max-w-md mx-auto  lg:max-w-none lg:mx-0 h-74 sm:h-50 md:h-96 lg:h-[500px] xl:h-[650px] lg:absolute lg:right-0 lg:bottom-0 lg:w-[450px] xl:w-[581px]">
              <div className="relative sm:w-full min-w-70 sm:min-w-full h-74 sm:h-50  md:h-96 lg:h-[500px] xl:h-[650px] lg:absolute lg:right-0 lg:bottom-0 lg:w-[450px] xl:w-[581px]">
                <Image
                  src="/assets/bomba-gasolina.png"
                  alt="Bomba de combustível"
                  fill
                  sizes="(max-width: 1024px) 100vw, 581px"
                  className="object-contain object-center "
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SVG de fundo */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/assets/listras-horizontal.svg"
          alt="Listras decorativas"
          width={1920}
          height={370}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
