import { motion } from "framer-motion";
import Image from "next/image";

export default function Cta2() {
  const bandeiras = [
    {
      name: "Bandeiras Parceiras",
      image: "/assets/shell.png",
    },
    {
      name: "Bandeiras Parceiras",
      image: "/assets/br.png",
    },
    {
      name: "Bandeiras Parceiras",
      image: "/assets/te.png",
    },
  ];
  return (
    <div className="py-20">
      <motion.div
        className="container mx-auto max-w-7xl px-4 md:px-12 flex flex-col sm:flex-row  items-center justify-between gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ margin: "-100px" }}
      >
        <div className="w-full h-full min-h-[265px] rounded-lg max-w-[520px]">
          <motion.h1
            className="text-primary text-3xl lg:text-5xl font-semibold mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            Parcerias que Garantem Nossa Qualidade
          </motion.h1>
          <motion.p
            className="text-gray-800 text-lg lg:text-xl mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            Os pilares que movem nossa jornada
          </motion.p>
          <div className="grid grid-cols-3 gap-4 pt-4 pb-6">
            {bandeiras.map((bandeira, index) => (
              <motion.div
                key={bandeira.name}
                className="w-full h-full max-h-16 lg:max-h-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ margin: "-100px" }}
              >
                <Image
                  src={bandeira.image}
                  alt={bandeira.name}
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-gray-800 text-lg lg:text-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            Trabalhamos com combustíveis de alta qualidade, garantindo controle
            rigoroso de estoque e transporte, além de manutenção constante das
            nossas estruturas. <br />
            <br /> Parceria com marcas reconhecidas globalmente assegura a{" "}
            <span className="font-semibold">
              confiança de quem abastece conosco.
            </span>
          </motion.p>
        </div>
        <motion.div
          className="w-full h-full min-h-[400px] sm:min-h-[556px] bg-white rounded-2xl relative sm:max-w-[428px] overflow-hidden"
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
            src="/assets/abastecimento-cta2.png"
            alt="Grupo Décio"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-bottom sm:object-center object-cover"
            style={{
              objectPosition: "25% 10%",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
