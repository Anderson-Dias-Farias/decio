import { Play } from "lucide-react";
import Image from "next/image";

const Marcador = ({
  value1,
  number,
  value2,
}: {
  value1: string;
  number: string;
  value2: string;
}) => {
  return (
    <div className="text-left flex flex-col text-primary">
      <div className="text-xs sm:text-sm font-bold">{value1}</div>
      <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
        {number}
      </div>
      <div className="text-xs sm:text-sm">{value2}</div>
    </div>
  );
};

export default function Mapa() {
  return (
    <section className="py-16 overflow-hidden lg:min-h-[95dvh]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <div className="w-full md:max-w-[500px] text-left">
            <p className="font-semibold mb-2 text-sm text-primary">
              Postos e Estações de Serviço
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-6xl font-semibold text-gray-900 mb-4 ">
              Estamos Onde <br className="hidden md:block" /> Você Precisa
            </h2>
            <p className="text-gray-600 mb-4 lg:mb-6 text-lg  lg:text-xl xl:text-2xl  ">
              Presente em 5 estados, atendendo{" "}
              <br className="hidden md:block" /> mais de 23 mil clientes por dia
            </p>
            <span className="text-[#197CA2] font-semibold text-md flex items-center gap-2 mt-4 mx-auto lg:mx-0 hover:text-[#146B8C] transition-colors duration-200 cursor-pointer">
              <Play className="w-4 h-4" /> Encontre o posto mais próximo
            </span>
          </div>

          {/* Imagem e Marcadores */}
          <div className="relative w-full max-w-lg lg:max-w-none">
            {/* Container da imagem */}
            <div className="relative w-full aspect-square max-w-[668px] mx-auto">
              <Image
                src="/assets/mapa-brasil.svg"
                alt="Mapa do Brasil"
                fill
                className="object-contain lg:-translate-x-70 md:-translate-x-60 sm:-translate-x-40 -translate-x-30"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>

            {/* Marcadores - posicionados de forma responsiva */}
            <div className="absolute -bottom-10 xs:bottom-10  md:bottom-16 lg:right-20 md:right-10 right-0  flex flex-col gap-2">
              <Marcador
                value1="Mais de"
                number="23"
                value2="Postos e estações de serviço"
              />
              <Marcador
                value1="Mais de"
                number="2 mil"
                value2="Colaboradores"
              />
              <Marcador
                value1="Mais de"
                number="1 milhão"
                value2="De clientes por ano"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
