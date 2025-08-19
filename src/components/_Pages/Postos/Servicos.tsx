"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Array de postos - pode ser alimentado dinamicamente
const postos = [
  {
    id: 1,
    name: "Decio Barreiras",
    location: "Barreiras - BA",
    image: "/assets/decio-barreiras.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Acessórios", color: "#3B82F6" },
      { text: "Restaurante", color: "#F97316" },
    ],
  },
  {
    id: 2,
    name: "Decio Uberlândia",
    location: "Uberlândia - MG",
    image: "/assets/decio-uberlandia.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Hotel", color: "#8B5CF6" },
      { text: "Farmácia", color: "#F59E0B" },
      { text: "Acessórios", color: "#3B82F6" },
    ],
  },
  {
    id: 3,
    name: "Decio L14",
    location: "Rio Verde - GO",
    image: "/assets/decio-l14.png", // Substitua pela URL real
    tags: [
      { text: "Posto de Combustível", color: "#06B6D4" },
      { text: "Urbano", color: "#10B981" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
  {
    id: 4,
    name: "Decio Mineiros",
    location: "Mineiros - GO",
    image: "/assets/decio-mineiros.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Acessórios", color: "#3B82F6" },
      { text: "Restaurante", color: "#F97316" },
    ],
  },
  {
    id: 5,
    name: "Decio Presidente Venceslau",
    location: "Pres. Venceslau - SP",
    image: "/assets/decio-presidente.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Hotel", color: "#8B5CF6" },
    ],
  },
  {
    id: 6,
    name: "Posto Alto da Cidade",
    location: "Ituiutaba - MG",
    image: "/assets/posto-alto.png", // Substitua pela URL real
    tags: [
      { text: "Posto de Combustível", color: "#06B6D4" },
      { text: "Urbano", color: "#10B981" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
];

export default function Servicos() {
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);

  const handleVerMais = () => {
    setShowAll(!showAll);
    setVisibleItems(showAll ? 6 : postos.length);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center md:text-left mb-12 md:max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ margin: "-100px" }}
          >
            Nossos Postos e Estações de Serviço
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ margin: "-100px" }}
          >
            Postos localizados nas principais rotas para atender você com
            estrutura e qualidade
          </motion.p>
        </motion.div>

        {/* Grid de Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ margin: "-100px" }}
        >
          {postos.slice(0, visibleItems).map((posto, index) => (
            <motion.div
              key={posto.id}
              className="bg-white rounded-lg shadow-lg p-4 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex items-center justify-between"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              viewport={{ margin: "-50px" }}
            >
              {/* Conteúdo */}
              <div className="">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {posto.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-2 py-1 rounded-sm text-[10px] font-medium text-white"
                      style={{ backgroundColor: tag.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 * index + 0.1 * tagIndex,
                      }}
                      viewport={{ margin: "-50px" }}
                    >
                      {tag.text}
                    </motion.span>
                  ))}
                  <motion.span
                    className="px-2 py-1 rounded-sm text-[10px] font-medium text-blue-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 * index + 0.1,
                    }}
                    viewport={{ margin: "-50px" }}
                  >
                    e mais...
                  </motion.span>
                </div>

                {/* Nome do Posto */}
                <motion.h3
                  className="text-xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 * index }}
                  viewport={{ margin: "-50px" }}
                >
                  {posto.name}
                </motion.h3>

                {/* Localização */}
                <motion.p
                  className="text-gray-600 mb-4 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 * index + 0.1 }}
                  viewport={{ margin: "-50px" }}
                >
                  {posto.location}
                </motion.p>

                {/* Link Saiba Mais */}
                <motion.div
                  className="flex items-center text-blue-400 font-medium hover:text-blue-600 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 * index + 0.2 }}
                  viewport={{ margin: "-50px" }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  <span className=" transition-colors cursor-pointer">
                    Saiba mais
                  </span>
                </motion.div>
              </div>
              {/* Imagem */}
              <motion.div
                className="relative h-40 w-full max-w-40 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={posto.image}
                  alt={posto.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botão Ver Mais */}
        {postos.length > 5 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ margin: "-100px" }}
          >
            <motion.button
              onClick={handleVerMais}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className={`w-4 h-4 mr-2 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {showAll ? "ver menos" : "ver mais"}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
