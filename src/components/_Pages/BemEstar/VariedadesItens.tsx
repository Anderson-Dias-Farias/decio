"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface VariedadesItensProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  description2?: string;
  image: string;
  image2: string;
  image3: string;
}

export default function VariedadesItens({
  index,
  title,
  subtitle,
  description,
  description2,
  image,
  image2,
  image3,
}: VariedadesItensProps) {
  return (
    <section className="py-16 bg-white w-full">
      <motion.div
        className="max-w-7xl mx-auto px-4 w-full"
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
            "flex flex-col  gap-12 items-center justify-between w-full",
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          )}
        >
          {/* Texto */}
          <div
            className={cn(
              "w-full flex flex-col gap-4",
              index % 2 !== 0
                ? "lg:min-w-[320px] max-w-sm "
                : "lg:min-w-[400px] max-w-lg"
            )}
          >
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
              {title + " "} <span className="text-black">{subtitle}</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg lg:text-2xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              {description}
            </motion.p>
            {description2 && (
              <motion.p
                className="text-gray-600 text-lg lg:text-2xl leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ margin: "-100px" }}
              >
                {description2}
              </motion.p>
            )}
          </div>

          {/* Galeria de imagens */}
          <div
            className={cn(
              "w-full space-y-4 max-w-3xl px-4 flex gap-4",
              index % 2 !== 0 ? "flex-col-reverse" : "flex-col"
            )}
          >
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
                src={image}
                alt={title}
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
                  src={image2}
                  alt={title}
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
                  src={image3}
                  alt={title}
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
