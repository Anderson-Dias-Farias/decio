"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/assets/slide-home2-1.png",
  "/assets/slide-home2-2.png",
  "/assets/slide-home2-3.png",
];

export default function Distribuicao() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className=" pb-16  md:py-16 bg-[#1e40af] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative mb-10">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-0">
          {/* Left Section - Text Content */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm mb-2 opacity-90"
            >
              Distribuição TRR
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6"
            >
              Combustível para
              <br className="hidden md:block" />
              sua Operação
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base lg:text-xl mb-8 opacity-90 leading-relaxed"
            >
              Diesel de qualidade entregue com agilidade
              <br className="hidden md:block" />
              para agronegócio, indústrias e outros segmentos
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="text-[#68F685] hover:text-[#68F685]/80 text-lg border-0 flex items-center gap-2 px-6 py-3 hover:bg-transparent"
              >
                <Play className="w-4 h-4" />
                Fale conosco
              </Button>
            </motion.div>
          </div>

          {/* Right Section - Carousel */}
          <div className="lg:absolute w-full h-full lg:left-[50%] bottom-0">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                loop: true,
                align: "start",
                containScroll: "trimSnaps",
              }}
            >
              <CarouselContent className="ml-2 md:max-w-[620px] p-4 lg:p-0">
                {slides.map((slide, index) => (
                  <CarouselItem key={index} className="md:pl-2 ">
                    <div className="relative overflow-hidden rounded-xl lg:max-w-[600px] lg:h-[300px] h-[250px]">
                      <Image
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dots */}
            <div className="lg:absolute -bottom-2 lg:-bottom-8  lg:left-[25%] transform lg:w-1/2 lg:-translate-x-1/2 flex gap-2  items-center justify-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
