"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Estilos CSS para as ondas
const waveStyles = `
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px,0,0);
    }
    100% { 
      transform: translate3d(85px,0,0);
    }
  }
`;

const servicos = [
  {
    id: 0,
    name: "Farmácia",
    description:
      "Medicamentos, itens de saúde e produtos de bem-estar para sua parada ser mais segura e tranquila",
    color: "#660000",
    gradient: "linear-gradient(to top, #660000, #800000, #990000)",
    waveColor: "#800000",
    textColor: "#F00000",
    image: "/assets/variedades-farmacia.png",
  },
  {
    id: 1,
    name: "Presentes e Utilidades",
    description:
      "Produtos que facilitam a rotina na estrada ou viram boas lembranças da sua parada. De itens essenciais a opções para presentear com praticidade e estilo.",
    color: "#E58600",
    gradient: "linear-gradient(to top, #E58600, #FF9900, #FFE100)",
    waveColor: "#FF9900",
    textColor: "#FFE100",
    image: "/assets/variedades-presentes.png",
  },
  {
    id: 2,
    name: "TOP Bordados",
    description:
      "Bonés, camisetas e uniformes personalizados com qualidade profissional. Leve um pedaço da estrada com você — com estilo e identidade..",
    color: "#136F07",
    gradient: "linear-gradient(to top, #136F07, #128C06, #11A905)",
    waveColor: "#11A905",
    textColor: "#1FCD08",
    image: "/assets/variedades-bordados.png",
  },
  {
    id: 3,
    name: "Mecânico e Borracharia",
    description:
      "Serviços rápidos e eficientes para seguir viagem com segurança. Troca de pneus, alinhamento, ajustes mecânicos e suporte especializado para quem não pode parar.",
    color: "#175990",
    gradient: "linear-gradient(to top, #175990, #172F47, #18405D)",
    waveColor: "#172F47",
    textColor: "#00EEFF",
    image: "/assets/variedades-farmacia.png",
  },
  {
    id: 4,
    name: "Lavanderia",
    description:
      "Serviço prático e rápido para cuidar das suas roupas durante a viagem. Lavagem e secagem com qualidade, garantindo peças limpas, cheirosas e prontas para uso em poucos passos.",
    color: "#843E8C",
    gradient: "linear-gradient(to top, #843E8C, #843E7C, #843E6C)",
    waveColor: "#843E7C",
    textColor: "#ffffff",
    image: "/assets/lavanderia.png",
  },
];

export default function ExploreServicos() {
  const [selectedServico, setSelectedServico] = useState(0);
  const [backgroundServico, setBackgroundServico] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Injetar estilos CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = waveStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleServicoChange = (id: number) => {
    if (id === selectedServico) return;

    setIsAnimating(true);
    setSelectedServico(id);

    setTimeout(() => {
      setIsAnimating(false);
      setBackgroundServico(id);
    }, 2000);
  };

  return (
    <div className="relative z-10 overflow-hidden">
      <section
        className="relative text-white min-h-[85dvh] sm:min-h-[70dvh] md:min-h-[80dvh] lg:min-h-[100vh] px-4 flex flex-col items-center justify-center w-full"
        style={{ backgroundColor: servicos[backgroundServico].color }}
      >
        {/* Background animado com ondas */}
        <motion.div
          key={`liquid-${selectedServico}`}
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full"
          style={{ background: servicos[selectedServico].gradient, zIndex: 1 }}
        >
          {/* Ondas SVG */}
          <motion.div
            key={`waves-${selectedServico}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimating ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute -top-20 left-0 w-full h-32"
            style={{ zIndex: 2 }}
          >
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
              style={{
                position: "relative",
                width: "100%",
                height: "15vh",
                marginBottom: "-7px",
                minHeight: "100px",
                maxHeight: "150px",
              }}
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  href="#gentle-wave"
                  x="48"
                  y="0"
                  fill={servicos[selectedServico].waveColor}
                  style={{
                    animation:
                      "move-forever 4s cubic-bezier(.55,.5,.45,.5) infinite",
                    animationDelay: "-1s",
                  }}
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="3"
                  fill={servicos[selectedServico].waveColor}
                  style={{
                    animation:
                      "move-forever 6s cubic-bezier(.55,.5,.45,.5) infinite",
                    animationDelay: "-2s",
                  }}
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="5"
                  fill={servicos[selectedServico].waveColor}
                  style={{
                    animation:
                      "move-forever 8s cubic-bezier(.55,.5,.45,.5) infinite",
                    animationDelay: "-3s",
                  }}
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="7"
                  fill={servicos[selectedServico].waveColor}
                  style={{
                    animation:
                      "move-forever 10s cubic-bezier(.55,.5,.45,.5) infinite",
                    animationDelay: "-4s",
                  }}
                />
              </g>
            </svg>
          </motion.div>
        </motion.div>

        {/* Conteúdo principal */}
        <div
          className="relative flex flex-col items-center justify-center w-full"
          style={{ zIndex: 100 }}
        >
          {/* Header */}
          <div className="flex flex-col gap-2 items-center justify-center min-h-[20dvh]">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Explore Nossos Serviços
            </motion.h1>
            <motion.h2
              className="text-base md:text-lg lg:text-xl xl:text-2xl max-w-xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Tudo o que você precisa além do combustível: conveniência e
              soluções para quem vive a estrada
            </motion.h2>
          </div>

          {/* Botões de seleção */}
          <motion.div
            className="flex sm:flex-row flex-col md:gap-6 gap-4 items-center justify-center sm:w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {servicos.map((servico) => (
              <motion.div
                onClick={() => handleServicoChange(servico.id)}
                key={servico.name}
                style={{
                  backgroundColor: servico.color,
                  zIndex: 101,
                  position: "relative",
                }}
                className={cn(
                  `w-full max-w-30 md:max-w-42 h-8 lg:max-w-56 lg:h-14 text-white rounded-lg flex items-center justify-center py-8 lg:py-10 cursor-pointer transition-all duration-300`,
                  selectedServico === servico.id &&
                    "border-2 border-white scale-105 shadow-lg"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-white text-sm md:text-lg lg:text-2xl font-semibold px-6 text-center break-words flex">
                  {servico.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Área de conteúdo */}
          <div className="relative overflow-hidden w-full sm:px-4">
            <div className="max-w-7xl mx-auto sm:px-4 relative w-full sm:p-2 min-h-[200px] md:min-h-[340px] lg:min-h-[500px] pt-[5%]">
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-start h-full">
                {/* Card de conteúdo */}
                <motion.div
                  className="w-full relative"
                  style={{ zIndex: 102 }}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <div className="p-6 gap-8 flex flex-col justify-between w-full h-full md:min-h-[300px] min-w-[200px]">
                    <AnimatePresence mode="wait">
                      {servicos[selectedServico] && (
                        <div className="flex flex-col sm:flex-row justify-between items-center h-full gap-2 w-full">
                          {/* Texto */}
                          <motion.div
                            key={`text-${servicos[selectedServico].id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1.2 }}
                            className="flex flex-col justify-between h-full gap-2 max-w-sm"
                          >
                            <h2
                              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-shadow-lg"
                              style={{
                                color: servicos[selectedServico].textColor,
                              }}
                            >
                              {servicos[selectedServico].name}
                            </h2>
                            <p className="text-base md:text-lg lg:text-2xl text-shadow-md">
                              {servicos[selectedServico].description}
                            </p>
                          </motion.div>

                          {/* Imagem com animação */}
                          <motion.div
                            key={`image-${servicos[selectedServico].id}`}
                            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                            transition={{
                              duration: 1.2,
                              ease: "easeOut",
                            }}
                            whileHover={{
                              scale: 1.05,
                              rotateY: 5,
                              transition: { duration: 0.3 },
                            }}
                            className="w-full rounded-lg overflow-hidden h-92 flex items-center justify-center max-w-[60%] relative"
                          >
                            <Image
                              src={
                                servicos[selectedServico].image ||
                                "/assets/variedades-farmacia.png"
                              }
                              className="object-cover object-center"
                              alt={servicos[selectedServico].name}
                              fill
                            />
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
