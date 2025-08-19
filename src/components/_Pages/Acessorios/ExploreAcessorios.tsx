"use client";
import { motion } from "framer-motion";
import DialogAcessorios from "./DialogAcessorios";

const acessorios = [
  {
    title: "Manutenção e Limpeza",
    description: "Produtos para manter seu veículo em dia",
    image: "/assets/acessorio-manutencao.png",
    color: "bg-[#00726B]",
    list: [
      {
        img: "/assets/acessorios-1.png",
        title: "Desengraxante Multiuso Spray 500ml",
      },
      {
        img: "/assets/acessorios-2.png",
        title: "Limpador de Parabrisa Concentrado 1L",
      },

      {
        img: "/assets/acessorios-3.png",
        title: "Pano Microfibra Extra Resistente",
      },
      {
        img: "/assets/acessorios-3.png",
        title: "Escova de cerdas duras para limpeza de rodas",
      },
    ],
  },
  {
    title: "Conforto",
    description: "Itens para tornar sua viagem mais agradável",
    image: "/assets/acessorio-conforto.png",
    color: "bg-[#040A34]",
    list: [
      {
        img: "/assets/acessorios-1.png",
        title: "Almofada de pescoço com espuma",
      },
      {
        img: "/assets/acessorios-2.png",
        title: "Ventilador veicular com encaixe em 12V",
      },
      {
        img: "/assets/acessorios-3.png",
        title: "Tapete térmico para descanso dos pés",
      },
      {
        img: "/assets/acessorios-4.png",
        title: "Capa de banco com tecido impermeável",
      },
    ],
  },
  {
    title: "Segurança",
    description: "Acessórios para sua proteção na estrada",
    image: "/assets/acessorio-seguranca.png",
    color: "bg-[#700E07]",
    list: [
      {
        img: "/assets/acessorios-1.png",
        title: "Triângulo de Sinalização Refletivo",
      },
      {
        img: "/assets/acessorios-2.png",
        title: "Lanterna tática LED recarregável",
      },
      {
        img: "/assets/acessorios-3.png",
        title: "Kit de primeiros socorros (com 12 itens)",
      },
      {
        img: "/assets/acessorios-4.png",
        title: "Coletes refletivos de alta visibilidade",
      },
    ],
  },
  {
    title: "Utilidades",
    description: "Itens práticos para sua rotina",
    image: "/assets/utilidades.png",
    color: "bg-[#004E00]",
    list: [
      {
        img: "/assets/acessorios-1.png",
        title: "Geladeira térmica automotiva 12V",
      },
      {
        img: "/assets/acessorios-2.png",
        title: "Copo térmico inox 500ml com tampa",
      },
      {
        img: "/assets/acessorios-3.png",
        title: "  Caixa organizadora modular ",
      },
      {
        img: "/assets/acessorios-4.png",
        title: "Adaptador USB duplo para acendedor",
      },
    ],
  },
];

export default function ExploreAcessorios() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 w-full">
      <motion.div
        className="container mx-auto w-full  px-4 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ margin: "-100px" }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            Explore nossos Acessórios
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ margin: "-100px" }}
          >
            Clique e conheça soluções para quem vive na estrada
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full ">
          {acessorios.map((categoria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ margin: "-100px" }}
            >
              <DialogAcessorios
                list={categoria.list}
                title={categoria.title}
                description={categoria.description}
                image={categoria.image}
                color={categoria.color}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
