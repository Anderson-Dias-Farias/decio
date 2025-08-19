import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../../lib/utils";

export default function Cta() {
  const items = [
    {
      title: "Abastecimento",
      url: "/assets/cta-abastecimento-1.png",
    },
    {
      title: "Posto de Combustível",
      url: "/assets/cta-abastecimento-2.png",
    },
    {
      title: "Motorista Profissional",
      url: "/assets/cta-abastecimento-3.png",
    },
  ];

  const items2 = [
    {
      title: "Posto de Combustível",
      url: "/assets/cta-abastecimento-4.png",
    },
    {
      title: "Posto de Combustível",
      url: "/assets/cta-abastecimento-5.png",
    },
  ];

  return (
    <div className="py-20 bg-[#1E3FA8]">
      <motion.div
        className="container mx-auto max-w-7xl px-4 flex flex-col gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ margin: "-100px" }}
      >
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
              className={`w-full h-full min-h-[200px] xs:min-h-[265px] bg-white rounded-lg relative overflow-hidden ${
                index === 2 && "xs:col-span-2 md:col-span-1"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className={cn(
                    "w-full h-full object-cover object-center scale-101"
                  )}
                  style={{
                    objectPosition: "center",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
          {items2.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: (index + 3) * 0.2,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
              className="w-full h-full min-h-[200px] xs:min-h-[265px] bg-white rounded-lg relative overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
