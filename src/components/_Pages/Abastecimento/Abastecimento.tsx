"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Adicionando estilos CSS inline para as ondas
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

const combustiveis = [
  {
    id: 0,
    name: "Gasolina Comum",
    description: "Ideal para uso diário em veículos leves",
    color: "#213762",
    gradient: "linear-gradient(to top, #213762, #2d4a78, #3a5d94)",
    waveColor: "#3a5d94",
  },
  {
    id: 1,
    name: "Gasolina Aditivada",
    description:
      "Mais proteção para o motor, com aditivos que limpam e preservam.",
    color: "#FF9800",
    gradient: "linear-gradient(to top, #FF9800, #ffab33, #ffbd5c)",
    waveColor: "#ffab33",
  },
  {
    id: 2,
    name: "Etanol",
    description: "Renovável e menos poluente. Boa opção para veículos flex.",
    color: "#8BC34A",
    gradient: "linear-gradient(to top, #8BC34A, #9ccc65, #aed581)",
    waveColor: "#9ccc65",
  },
  {
    id: 3,
    name: "Diesel S500",
    description: "Indicado para motores antigos e veículos pesados.",
    color: "#9E9E9E",
    gradient: "linear-gradient(to top, #9E9E9E, #b3b3b3, #c7c7c7)",
    waveColor: "#b3b3b3",
  },
  {
    id: 4,
    name: "Diesel S10",
    description: "Mais moderno e ecológico, com baixo teor de enxofre.",
    color: "#03A9F4",
    gradient: "linear-gradient(to top, #03A9F4, #29b6f6, #4fc3f7)",
    waveColor: "#29b6f6",
  },
];

export default function Abastecimento() {
  const [selectedCombustivel, setSelectedCombustivel] = useState(0);
  const [backgroundCombustivel, setBackgroundCombustivel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bubbles, setBubbles] = useState<
    Array<{ id: number; left: string; duration: string; size: string }>
  >([]);

  // Adicionar estilos CSS quando o componente montar
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = waveStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Bolhas contínuas - OTIMIZADO
  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      // Criar múltiplas bolhas de uma vez
      for (let i = 0; i < 2; i++) {
        // Reduzido de 5 para 3
        const newBubble = {
          id: Math.random(),
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 3 + 2}s`,
          // Tamanho responsivo apenas para mobile
          size:
            window.innerWidth < 768
              ? `${Math.random() * 20 + 8}px` // Mobile: 8-28px
              : `${Math.random() * 35 + 10}px`, // Desktop: 10-45px
        };
        setBubbles((prev) => [...prev, newBubble]);
        setTimeout(() => {
          setBubbles((prev) =>
            prev.filter((bubble) => bubble.id !== newBubble.id)
          );
        }, 4000); // Reduzido de 7000ms para 4000ms
      }
    }, 50); // Reduzido de 20ms para 50ms

    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);

  const handleCombustivelChange = (id: number) => {
    if (id === selectedCombustivel) return;

    setIsAnimating(true);
    setSelectedCombustivel(id);

    // Após 2 segundos, para a animação e estabiliza o fundo
    setTimeout(() => {
      setIsAnimating(false);
      setBackgroundCombustivel(id);
    }, 2000);
  };

  return (
    <div className="relative z-10 overflow-hidden">
      <section
        className="relative text-white pt-16 -z-1 min-h-[85dvh] sm:min-h-[70dvh] md:min-h-[80dvh] lg:min-h-[100vh] px-4"
        style={{ backgroundColor: combustiveis[backgroundCombustivel].color }}
      >
        {/* Líquido que sobe de baixo para cima COM ONDAS */}
        <motion.div
          key={`liquid-${selectedCombustivel}`}
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-full"
          style={{
            background: combustiveis[selectedCombustivel].gradient,
            zIndex: 1,
          }}
        >
          {/* Ondas SVG como topo do bg - APENAS DURANTE A ANIMAÇÃO */}
          <motion.div
            key={`waves-${selectedCombustivel}`}
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
                  fill={`${combustiveis[selectedCombustivel].waveColor}`}
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
                  fill={`${combustiveis[selectedCombustivel].waveColor}`}
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
                  fill={`${combustiveis[selectedCombustivel].waveColor}`}
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
                  fill={`${combustiveis[selectedCombustivel].waveColor}`}
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

        {/* Bolhas */}
        <div
          className="absolute bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden"
          style={{ zIndex: 3 }}
        >
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{ y: "100vh", opacity: 1, scale: 0 }}
              animate={{ y: "-30vh", opacity: 0, scale: 1.5 }}
              transition={{
                duration: parseFloat(bubble.duration) * 0.3,
                ease: "easeOut",
              }}
              className="absolute rounded-full shadow-2xl"
              style={{
                left: bubble.left,
                width: bubble.size,
                height: bubble.size,
                backgroundColor: `rgba(255, 255, 255, 1)`,
                boxShadow: `
                  0 0 40px rgba(255, 255, 255, 0.9), 
                  inset 0 0 20px rgba(255, 255, 255, 0.6),
                  0 0 80px rgba(255, 255, 255, 0.4)
                `,
                border: `2px solid rgba(255, 255, 255, 0.8)`,
              }}
            />
          ))}
        </div>

        {/* Conteúdo - SEMPRE VISÍVEL */}
        <div
          className="relative flex flex-col items-center justify-center"
          style={{ zIndex: 100 }}
        >
          <div className="flex flex-col gap-2 items-center justify-center min-h-[20dvh]">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Nossos Combustíveis
            </motion.h1>
            <motion.h2
              className="text-base md:text-lg lg:text-xl xl:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Descubra o tipo ideal para sua jornada
            </motion.h2>
          </div>

          <div className=" flex sm:flex-col flex-row-reverse items-start justify-between  w-full px-4">
            <motion.div
              className="flex sm:flex-row flex-col md:gap-6 gap-4 items-center justify-center sm:w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {combustiveis.map((combustivel) => (
                <motion.div
                  onClick={() => handleCombustivelChange(combustivel.id)}
                  key={combustivel.name}
                  style={{
                    backgroundColor: combustivel.color,
                    zIndex: 101,
                    position: "relative",
                  }}
                  className={cn(
                    `w-full max-w-24 md:max-w-32 h-8 lg:max-w-42 lg:h-14 text-white rounded-lg flex items-center justify-center py-8 lg:py-10 cursor-pointer transition-all duration-300`,
                    selectedCombustivel === combustivel.id &&
                      "border-2 border-white scale-105 shadow-lg"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="text-white text-sm md:text-lg lg:text-2xl font-semibold px-8 text-center">
                    {combustivel.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="relative overflow-hidden w-full   sm:px-4">
              <div className="max-w-7xl mx-auto sm:px-4 relative w-full sm:p-2 min-h-[200px] md:min-h-[340px] lg:min-h-[500px] pt-[5%]">
                <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-start h-full">
                  {/* Card de conteúdo */}
                  <motion.div
                    className="w-full lg:w-1/2 relative"
                    style={{ zIndex: 102 }}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  >
                    <div className="p-6 gap-8 flex flex-col justify-between w-full sm:max-w-1/2 md:max-w-md h-full md:min-h-[300px] min-w-[200px]">
                      <AnimatePresence mode="wait">
                        {combustiveis[selectedCombustivel] && (
                          <motion.div
                            key={combustiveis[selectedCombustivel].id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1.2 }}
                            className="flex flex-col justify-between h-full gap-2"
                          >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-shadow-lg">
                              {combustiveis[selectedCombustivel].name}
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl xl:text-3xl text-shadow-md">
                              {combustiveis[selectedCombustivel].description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG de fundo - DENTRO da section mas com opacity maior */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{ zIndex: 50000 }}
        >
          <Image
            src="/assets/listras-horizontal.svg"
            alt="Listras decorativas"
            width={1920}
            height={370}
            style={{ zIndex: 50000 }}
            className="w-full h-auto opacity-80"
          />
        </div>
      </section>

      {/* SVG DUPLICADO para garantir que apareça */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ zIndex: 888888888 }}
      >
        <Image
          src="/assets/listras-horizontal.svg"
          alt="Listras decorativas"
          width={1920}
          height={370}
          style={{ zIndex: 888888888 }}
          className="w-full h-auto opacity-50"
        />
      </div>

      {/* BOMBA DE COMBUSTÍVEL - FORA DE TUDO - MÁXIMO Z-INDEX */}
      <div
        className="absolute left-0 right-1/2 sm:right-0  bottom-2 sm:left-1/2 w-1/2  lg:max-w-[68%] mx-auto h-74 sm:h-[280px] md:h-[360px] lg:h-[500px] 3xl:h-[560px] "
        style={{
          zIndex: 99999999999,
          // position: "fixed",
          // right: "0",
          bottom: "0",
        }}
      >
        <Image
          src="/assets/bomba-gasolina.png"
          alt="Bomba de combustível"
          fill
          sizes="(max-width: 1024px) 100vw, 581px"
          className="object-contain object-center"
          priority
          style={{ zIndex: 99999999999 }}
        />
      </div>
    </div>
  );
}
