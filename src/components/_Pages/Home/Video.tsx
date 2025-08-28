"use client";
import { motion, useInView } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function Video() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-100 min-h-[500px] lg:min-h-[620px] flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <div className="w-full md:max-w-[350px] xl:max-w-[50%]">
            <p className="font-semibold text-sm text-primary">Grupo Decio</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-semibold text-gray-900 mb-4 ">
              Movendo o Brasil
              <br className="hidden md:block" /> com Você
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl ">
              Quase 40 anos abastecendo <br className="hidden md:block" />{" "}
              histórias e transformando
              <br className="hidden sm:block" /> jornadas nas principais rotas
              do país
            </p>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-[#197CA2] font-semibold text-md flex mt-2 items-center gap-2 md:mt-4 mx-auto lg:mx-0 hover:text-[#146B8C] transition-colors duration-200 cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              {isPlaying ? "Pausar" : "Assista o vídeo"}
            </button>
          </div>

          {/* Vídeo */}
          <div
            ref={ref}
            className="relative w-full max-w-none md:mx-0 lg:max-w-none"
          >
            {/* Fundo decorativo */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={isInView ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-primary rounded-2xl lg:rounded-4xl z-10 overflow-hidden w-full h-64 sm:h-96 md:h-80 lg:h-[400px] xl:h-[450px] absolute top-0 left-0 transform -rotate-3 scale-103"
            ></motion.div>

            {/* Container do vídeo */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={isInView ? { rotate: 360 } : { rotate: 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative z-20"
            >
              <div className="rounded-2xl lg:rounded-xl z-20 overflow-hidden w-full h-64 sm:h-96 md:h-80 lg:h-[400px] xl:h-[450px] relative shadow-xl">
                <iframe
                  src={`https://www.youtube.com/embed/wGqY0CWciEE?autoplay=${
                    isPlaying ? 1 : 0
                  }&mute=0&loop=1&playlist=wGqY0CWciEE&controls=1&modestbranding=1&rel=0&showinfo=0&enablejsapi=1`}
                  title="Grupo Decio - Movendo o Brasil"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
