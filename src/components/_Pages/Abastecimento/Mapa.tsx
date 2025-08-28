import Image from "next/image";

export default function Mapa() {
  return (
    <section className="py-8 overflow-hidden" id="abastecimento">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col sm:flex-row  sm:gap-16 lg:gap-12 items-center relative">
          {/* Texto */}
          <div className="">
            <div className="w-full lg:max-w-[580px] md:max-w-[90%]  text-left  space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900 mb-4 ">
                Abastecimento <br className="hidden lg:block" />
                de Qualidade
              </h2>
              <p className="text-gray-600 mb-4 lg:mb-6 text-lg  lg:text-xl  ">
                Com uma rede de postos <br className="hidden lg:block" />
                estrategicamente localizados, atendemos motoristas e frotistas
                com combustíveis de alta qualidade, proporcionando a melhor
                experiência na estrada.
              </p>
            </div>
          </div>

          {/* Imagem e Marcadores */}
          <div className="relative w-full max-w-lg lg:max-w-none  sm:max-h-70 lg:max-h-none">
            {/* Container da imagem */}
            <div className="relative w-full aspect-square max-w-[668px] mx-auto">
              <Image
                src="/assets/mapa-abastecimento.png"
                alt="Mapa do Brasil"
                fill
                className="object-contain sm:scale-110 sm:-translate-x-10 lg:-translate-x-0 "
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
        <div className=" lg:absolute text-white  md:max-w-[70%] md:bottom-0  lg:bottom-20  lg:max-w-2xl left-4 bg-green-500 p-4 rounded-lg text-md  transition-colors duration-200 w-full">
          Nossas Estações de Serviço são equipadas para oferecer rapidez,
          segurança e conveniência durante o abastecimento, sempre com o
          atendimento cordial que é nossa marca registrada
        </div>
      </div>
    </section>
  );
}
