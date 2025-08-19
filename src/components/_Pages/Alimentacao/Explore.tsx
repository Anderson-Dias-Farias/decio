"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
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

const options = [
  {
    title: "Bebidas geladas",
    image: "/assets/alimentacao-icon1.png",
  },
  {
    title: "Snacks e alimentos prontos",
    image: "/assets/alimentacao-icon2.png",
  },
  {
    title: "Itens de higiene e uso pessoal",
    image: "/assets/alimentacao-icon-3.png",
  },
];

const restaurantes = [
  {
    title: "Pratos quentes",
    image: "/assets/alimentacao-icon4.png",
  },
  {
    title: "Lanches rápidos",
    image: "/assets/alimentacao-icon5.png",
  },
  {
    title: "Cafés para todos os momentos",
    image: "/assets/alimentacao-icon-6.png",
  },
];

const backgrounds = {
  espaco: {
    color: "#1341C5",
    gradient: "linear-gradient(to top, #1341C5, #1e4fd8, #2a5de8)",
    waveColor: "#2a5de8",
  },
  conveniencia: {
    color: "#E0501B",
    gradient: "linear-gradient(to top, #E0501B, #e66633, #E0501B)",
    waveColor: "#e66633",
  },
  restaurante: {
    color: "#EAB308",
    gradient: "linear-gradient(to top, #EAB308, #fbbf24, #fcd34d)",
    waveColor: "#fbbf24",
  },
};

export default function Explore() {
  const [selected, setSelected] = useState<
    "espaco" | "conveniencia" | "restaurante"
  >("espaco");
  const [backgroundSelected, setBackgroundSelected] = useState<
    "espaco" | "conveniencia" | "restaurante"
  >("espaco");
  const [isAnimating, setIsAnimating] = useState(false);

  // Adicionar estilos CSS quando o componente montar
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = waveStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleSelect = (option: "espaco" | "conveniencia" | "restaurante") => {
    if (option === selected) return;

    setIsAnimating(true);
    setSelected(option);

    // Após 2 segundos, para a animação e estabiliza o fundo
    setTimeout(() => {
      setIsAnimating(false);
      setBackgroundSelected(option);
    }, 2000);
  };

  return (
    <section
      className="py-20 text-white relative overflow-hidden min-h-[80dvh]"
      style={{ backgroundColor: backgrounds[backgroundSelected].color }}
    >
      {/* Líquido que sobe de baixo para cima COM ONDAS */}
      <motion.div
        key={`liquid-${selected}`}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-full"
        style={{
          background: backgrounds[selected].gradient,
          zIndex: 1,
        }}
      >
        {/* Ondas SVG como topo do bg - APENAS DURANTE A ANIMAÇÃO */}
        <motion.div
          key={`waves-${selected}`}
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
                fill={`${backgrounds[selected].waveColor}`}
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
                fill={`${backgrounds[selected].waveColor}`}
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
                fill={`${backgrounds[selected].waveColor}`}
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
                fill={`${backgrounds[selected].waveColor}`}
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

      <div className="max-w-7xl mx-auto px-4 relative" style={{ zIndex: 10 }}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.h2
            onClick={() => handleSelect("espaco")}
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Explore Nossos Espaços
          </motion.h2>
          <motion.p
            className="text-lg lg:text-2xl opacity-90 font-semibold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            Clique e conheça nossas opções de alimentação e conveniência
          </motion.p>
        </motion.div>

        {/* Botões */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
        >
          <motion.button
            onClick={() => handleSelect("conveniencia")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors duration-200 font-semibold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conveniências
          </motion.button>
          <motion.button
            onClick={() => handleSelect("restaurante")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md transition-colors duration-200 font-semibold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Restaurantes
          </motion.button>
        </motion.div>

        {selected === "espaco" && (
          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Texto */}
            <motion.div
              className="w-full lg:w-1/2 px-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Mais do que uma pausa na estrada — um cuidado com você.
              </h3>
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                Em nossos restaurantes e lojas de conveniência, cada detalhe é
                pensado para oferecer sabor, praticidade e bem-estar em cada
                parada
              </p>
            </motion.div>

            {/* Vídeo */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/assets/alimentacao-espaco.png"
                  alt="Buffet de comida"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {selected === "conveniencia" && (
          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Texto */}
            <motion.div
              className="w-full lg:w-1/2 px-6 flex flex-col gap-4 max-w-[500px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <motion.span
                className="text-lg lg:text-xl opacity-90 leading-relaxed font-semibold text-green-300 flex items-center gap-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: "easeOut",
                }}
              >
                <Play className="w-6 h-6" />
                Encontre conveniências perto de você
              </motion.span>
              <motion.h3
                className="text-2xl lg:text-5xl font-bold mb-4 text-yellow-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "easeOut",
                }}
              >
                Conveniência
              </motion.h3>
              <motion.p
                className="text-lg lg:text-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: "easeOut",
                }}
              >
                Produtos práticos e essenciais para sua jornada, com opções{" "}
                <span className="font-semibold">
                  24 horas em diversas unidades.
                </span>
              </motion.p>
              <div className="flex flex-col gap-4">
                {options.map((option, index) => (
                  <motion.div
                    key={option.title}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.0 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src={option.image}
                      alt={option.title}
                      width={60}
                      height={60}
                    />
                    <h4 className="text-lg lg:text-2xl font-semibold">
                      {option.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vídeo */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              <div className="relative w-full h-64 lg:h-120 rounded-lg overflow-hidden">
                <Image
                  src="/assets/alimentacao-conveniencia.png"
                  alt="Buffet de comida"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {selected === "restaurante" && (
          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto justify-between text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Texto */}
            <motion.div
              className="w-full lg:w-1/2 px-6 flex flex-col gap-4 max-w-[500px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <motion.span
                className="text-lg lg:text-xl opacity-90 leading-relaxed font-semibold text-blue-400 flex items-center gap-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: "easeOut",
                }}
              >
                <Play className="w-6 h-6" />
                Encontre restaurantes perto de você
              </motion.span>
              <motion.h3
                className="text-2xl lg:text-5xl font-bold mb-4 text-orange-500"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "easeOut",
                }}
              >
                Restaurantes
              </motion.h3>
              <motion.p
                className="text-lg lg:text-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: "easeOut",
                }}
              >
                Sabores frescos e variados para sua parada, com opções{" "}
                <span className="font-semibold">
                  24 horas em algumas unidades.
                </span>
              </motion.p>
              <div className="flex flex-col gap-4">
                {restaurantes.map((option, index) => (
                  <motion.div
                    key={option.title}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.0 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src={option.image}
                      alt={option.title}
                      width={60}
                      height={60}
                    />
                    <h4 className="text-lg lg:text-2xl font-semibold">
                      {option.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vídeo */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              <div className="relative w-full h-64 lg:h-120 rounded-lg overflow-hidden">
                <Image
                  src="/assets/alimentacao-restaurante.png"
                  alt="Buffet de comida"
                  fill
                  className="object-cover object-center"
                  style={{
                    objectPosition: "80% 10%",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
