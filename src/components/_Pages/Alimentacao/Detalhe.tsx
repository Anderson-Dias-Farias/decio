import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Ctalinks() {
  const itens = [
    {
      title: "Encontre uma Estação de Serviços",
    },

    {
      title: "Conheça Nossos Serviços",
    },

    {
      title: "Trabalhe Conosco",
    },
  ];

  return (
    <div className="py-8 md:py-16 bg-[#1e40af] relative min-h-[70dvh] flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/slide-home2-3.png"
        alt="App Mobile"
        sizes="100vw"
        className="w-full h-auto object-cover blur-sm scale-110"
        fill
      />
      <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 relative z-10">
        <div className="w-full h-full md:min-h-[350px] rounded-xl bg-white text-gray-900 flex flex-col justify-center gap-2 md:gap-4 p-8">
          <span className="text-sm">Grupo Decio</span>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold mb-4">
            Cada Detalhe Abastece
          </h1>
          <p className="text-sm md:text-md">
            O Grupo Decio está ao seu lado, transformando <br /> cada parada em
            uma experiência acolhedora, segura e completa.
          </p>
        </div>
        <div className="w-full h-full sm:min-h-[265px] text-white flex flex-col gap-4 items-center justify-center">
          {itens.map((item) => (
            <div
              key={item.title}
              className="flex w-full items-center gap-2 text-md font-semibold min-h-[60px] md:min-h-[100px] bg-green-600 rounded-xl p-4 md:p-6"
            >
              <ArrowRightIcon className="w-4 h-4 md:w-6 md:h-6" />
              <h1 className="text-sm md:text-xl lg:text-2xl font-semibold">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
