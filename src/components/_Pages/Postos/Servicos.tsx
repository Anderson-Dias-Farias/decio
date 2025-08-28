"use client";
import { motion } from "framer-motion";
import { Play, Search } from "lucide-react";
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
      { text: "Farmácia", color: "#660000" },
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
  {
    id: 7,
    name: "Decio Araporã",
    location: "Araporã - MG",
    image: "/assets/arapora.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Acessórios", color: "#3B82F6" },
      { text: "Restaurante", color: "#F97316" },
    ],
  },
  {
    id: 8,
    name: "Decio Ituiutaba",
    location: "Ituiutaba - MG",
    image: "/assets/ituiutaba.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Variedades", color: "#28395E" },
      { text: "Acessórios", color: "#3B82F6" },
    ],
  },
  {
    id: 9,
    name: "Decio L2",
    location: "Ituiutaba - MG",
    image: "/assets/ituiutabal2.png", // Substitua pela URL real
    tags: [
      { text: "Posto de Combustível", color: "#06B6D4" },
      { text: "Urbano", color: "#10B981" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
  {
    id: 10,
    name: "Decio Campina Verde",
    location: "Campina Verde - MG",
    image: "/assets/campina-verde.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Acessórios", color: "#3B82F6" },
      { text: "Restaurante", color: "#F97316" },
    ],
  },
  {
    id: 11,
    name: "Decio Centralina",
    location: "Centralina - MG",
    image: "/assets/centralina.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Hotel", color: "#8B5CF6" },
      { text: "Farmácia", color: "#660000" },
      { text: "Acessórios", color: "#3B82F6" },
    ],
  },
  {
    id: 12,
    name: "Decio L3",
    location: "Ituiutaba - MG",
    image: "/assets/ituiutabal3.png", // Substitua pela URL real
    tags: [
      { text: "Posto de Combustível", color: "#06B6D4" },
      { text: "Urbano", color: "#10B981" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
  {
    id: 13,
    name: "Decio Parada Bonita",
    location: "Uberlândia - MG",
    image: "/assets/parada-bonita.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Lavanderia", color: "#862AE2" },
      { text: "Restaurante", color: "#F97316" },
    ],
  },
  {
    id: 14,
    name: "Decio Buruti",
    location: "Uberlândia - MG",
    image: "/assets/buruti.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Lavanderia", color: "#862AE2" },
      { text: "Acessórios", color: "#3B82F6" },
    ],
  },
  {
    id: 15,
    name: "Decio L4",
    location: "Ituiutaba - MG",
    image: "/assets/ituiutabal4.png", // Substitua pela URL real
    tags: [
      { text: "Posto de Combustível", color: "#06B6D4" },
      { text: "Urbano", color: "#10B981" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
  {
    id: 16,
    name: "Decio Rio Verde",
    location: "Rio Verde - GO",
    image: "/assets/rio-verde.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Farmácia", color: "#660000" },
      { text: "Restaurante", color: "#F97316" },
    ],
  },
  {
    id: 17,
    name: "Decio Gurupi",
    location: "Gurupi - TO",
    image: "/assets/gurupi.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Lavanderia", color: "#862AE2" },
      { text: "Farmácia", color: "#660000" },
    ],
  },
  {
    id: 18,
    name: "Decio Rio Verde",
    location: "Rio Verde - GO",
    image: "/assets/rio-verdel5.png", // Substitua pela URL real
    tags: [
      { text: "Posto de Combustível", color: "#06B6D4" },
      { text: "Urbano", color: "#10B981" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
  {
    id: 19,
    name: "Decio Olhos D’Água",
    location: "Uberlândia - MG",
    image: "/assets/olhos-agua.png", // Substitua pela URL real
    tags: [
      { text: "Estação de Serviço", color: "#EAB308" },
      { text: "Rodovia", color: "#6B7280" },
      { text: "Variedades", color: "#660000" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
  {
    id: 20,
    name: "Decio L7",
    location: "Rio Verde - GO",
    image: "/assets/rio-verdel7.png", // Substitua pela URL real
    tags: [
      { text: "Posto de Combustível", color: "#06B6D4" },
      { text: "Urbano", color: "#10B981" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
  {
    id: 21,
    name: "Decio L6",
    location: "Rio Verde - GO",
    image: "/assets/rio-verdel6.png", // Substitua pela URL real
    tags: [
      { text: "Posto de Combustível", color: "#06B6D4" },
      { text: "Urbano", color: "#10B981" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
  {
    id: 22,
    name: "RIO VERDE – GO",
    location: "RBR 060, km 380",
    image: "/assets/rio-verde-ttr.png", // Substitua pela URL real
    tags: [{ text: "Decio TTR", color: "#18B2AA" }],
  },
  {
    id: 23,
    name: "GURUPI – TO",
    location: "BR 153, Km 665,3",
    image: "/assets/gurupi-ttr.png", // Substitua pela URL real
    tags: [{ text: "Decio TTR", color: "#18B2AA" }],
  },
  {
    id: 24,
    name: "Decio L13",
    location: "Rio Verde - GO",
    image: "/assets/rio-verdel3.png", // Substitua pela URL real
    tags: [
      { text: "Posto de Combustível", color: "#06B6D4" },
      { text: "Urbano", color: "#10B981" },
      { text: "Conveniência", color: "#EF4444" },
    ],
  },
  {
    id: 25,
    name: "ITUMBIARA – GO",
    location: "BR 452, Km 195,3",
    image: "/assets/itumbiara.png", // Substitua pela URL real
    tags: [{ text: "Decio TTR", color: "#18B2AA" }],
  },
  {
    id: 27,
    name: "ITUIUTABA – MG",
    location: "BR 365, Km 764",
    image: "/assets/ituiutaba-ttr.png", // Substitua pela URL real
    tags: [{ text: "Decio TTR", color: "#18B2AA" }],
  },
  {
    id: 28,
    name: "RODODECIO",
    location: "Uberlândia - MG",
    image: "/assets/rododecio.png", // Substitua pela URL real
    tags: [{ text: "Distribuição", color: "#396500" }],
  },
  {
    id: 29,
    name: "UBERLÂNDIA – MG",
    location: "BR-365, Km 640",
    image: "/assets/uberlandia.png", // Substitua pela URL real
    tags: [{ text: "Decio TTR", color: "#18B2AA" }],
  },
  {
    id: 30,
    name: "Decio Distribuidora",
    location: "Uberlândia - MG",
    image: "/assets/uberlandia-distribuicao.png", // Substitua pela URL real
    tags: [{ text: "Distribuição", color: "#396500" }],
  },
  {
    id: 31,
    name: "Decio Distribuidora",
    location: "Senador Canedo - GO",
    image: "/assets/canedo-distribuicao.png", // Substitua pela URL real
    tags: [{ text: "Distribuição", color: "#396500" }],
  },
  {
    id: 32,
    name: "Decio Cezarina",
    location: "Cezarina - GO",
    image: "/assets/cezarina.png", // Substitua pela URL real
    tags: [{ text: "Distribuição", color: "#396500" }],
  },
];

export default function Servicos() {
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);
  const [search, setSearch] = useState("");

  const handleVerMais = () => {
    setShowAll(!showAll);
    setVisibleItems(showAll ? 6 : postos.length);
  };

  return (
    <section className="bg-gray-50 py-16 px-4" id="postos">
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
          <motion.div
            className="text-lg md:text-2xl text-gray-700 max-w-2xl mt-4 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ margin: "-100px" }}
          >
            <div className="flex gap-2 rounded-md bg-gray-200 py-2 px-4 items-center justify-start">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Encontre o posto Decio mais próximo de você"
                className="outline-none text-gray-500 w-full placeholder:text-[16px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Grid de Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ margin: "-100px" }}
        >
          {postos
            .filter((posto) =>
              posto.location.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, search.length > 0 ? postos.length : visibleItems) // ← AQUI ESTÁ A CORREÇÃO
            .map((posto, index) => (
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
                    {posto.tags.length > 3 && (
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
                    )}
                  </div>

                  {/* Nome do Posto */}
                  <motion.h3
                    className="text-xl font-semibold text-gray-900"
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
        {postos.length > 5 && search.length === 0 && (
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
