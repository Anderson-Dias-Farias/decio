"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const historyData = [
  {
    year: "1986",
    description:
      "Aquisição do Decio Ituiutaba, empreendimento voltado para o comércio varejista de combustíveis, lubrificantes, serviços de bar e restaurante.",
  },
  {
    year: "1990",
    description:
      "É criado o Posto Alto da Cidade, com sede própria na Rua 22, nº 1772, em Ituiutaba. No início do mesmo ano surge o Decio TRR em Ituiutaba-MG, que é transferido para a cidade de Uberlândia-MG.",
  },
  {
    year: "1991",
    description:
      "É inaugurada a Bombocado, uma loja de conveniência e panificação diferenciada, que se localiza junto ao Posto Alto da Cidade.",
  },
  {
    year: "1997",
    description:
      "Entra em operação a Liderpetro Distribuidora de Petróleo Ltda. E sob essa bandeira é criado em outubro o Posto 5, em Ituiutaba-MG.",
  },
  {
    year: "1999",
    description:
      "Iniciam-se as atividades do Decio Beira Rio, localizado em Araporã-MG, hoje Decio Araporã.",
  },
  {
    year: "2004",
    description:
      "É inaugurado o Decio Buriti na cidade de Uberlândia; em Ituiutaba é criada a Agência Decio, voltada a prestações de serviços publicitários e, em novembro, mais uma filial da Liderpetro Distribuidora, com base própria, é implantada em Senador Canedo-GO.",
  },
  {
    year: "2006",
    description:
      "O Decio Gurupi inicia suas atividades em Gurupi-TO, na BR 153 que liga Belém-PA a Brasília-DF, uma das rodovias mais movimentadas do país.",
  },
  {
    year: "2008",
    description:
      "O Grupo Decio expande seus negócios com a abertura da Transportadora Rododecio em Itumbiara-GO.",
  },
  {
    year: "2009",
    description:
      "É inaugurado o Decio Buriti na cidade de Uberlândia; em Ituiutaba é criada a Agência Decio, voltada a prestações de serviços publicitários e, em novembro, mais uma filial da Liderpetro Distribuidora, com base própria, é implantada em Senador Canedo-GO.",
  },
  {
    year: "2010",
    description:
      "É inaugurado, em 25 de julho, o Decio L1, localizado em Ituiutaba-MG.",
  },
  {
    year: "2011",
    description:
      "É inaugurado, em 16 de janeiro, o Decio L2 e, em 10 de julho, o Decio L3, ambos localizados em Ituiutaba-MG. No dia 13 de dezembro é inaugurado em Rio Verde-GO uma filial do Decio TRR.",
  },
  {
    year: "2012",
    description:
      "São inaugurados os postos Decio L5, Decio L6 e Decio L7 em Rio Verde-GO. Em agosto é inaugurado o Decio Uberlândia, em Uberlândia-MG.",
  },
  {
    year: "2013",
    description: "Em janeiro é inaugurado o Decio Rio Verde, em Rio Verde-GO.",
  },
  {
    year: "2014",
    description: "Em janeiro é inaugurado o Decio L13 em Rio Verde-GO.",
  },
  {
    year: "2015",
    description:
      "Em 12 de janeiro foi inaugurado em Ituiutaba-MG o Decio L4 (juntamente com a Drogaria Americana).Em 05 de maio foi inaugurado o Decio L14 em Rio Verde-GO.Em 05 de novembro foi inaugurado o Decio Campina Verde, juntamente com a Drogaria Americana.",
  },
  {
    year: "2016",
    description:
      "Em agosto é inaugurada a unidade da Drogaria Americana anexa ao Decio L2, em Ituiutaba-MG.",
  },
  {
    year: "2019",
    description:
      "Em fevereiro é inaugurada a unidade da Drogaria Americana localizada na Rua 20, Centro de Ituiutaba-MG.",
  },
  {
    year: "2020",
    description: "Em julho é reinaugurado o Decio L13 em Rio Verde-GO.",
  },
  {
    year: "2021",
    description:
      "Em junho é inaugurado em Uberlândia-MG, às margens da BR 365, o Decio Olhos D’Água. Em outubro é inaugurado o Decio TRR de Gurupi-TO.",
  },
  {
    year: "2022",
    description:
      "Em outubro é reinaugurada em Itumbiara-GO a unidade do Decio TRR.",
  },
  {
    year: "2023",
    description:
      "Em maio é inaugurado em Mineiros-GO, às margens da BR 364, a Estação de Serviços Decio Mineiros..",
  },
  {
    year: "2024",
    description:
      "Em janeiro é inaugurado o Decio TRR em Ituiutaba-MG, Pres. Venceslau - SP, Barreiras - BA.",
  },
  {
    year: "2025",
    description: "Inaugurado o Decio Cezarina em Cezarina - GO.",
  },
];

export default function SlideHistory() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="mt-8 w-full">
      <div
        className="w-full pointer-events-none overflow-hidden"
        style={{ zIndex: 888888888, maxHeight: "300px" }}
      >
        <Image
          src="/assets/listra-horizontal-2.svg"
          alt="Listras decorativas"
          width={1920}
          height={200}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 w-full flex flex-col items-start justify-center">
          <div className="flex flex-col text-white items-start justify-between w-full px-2 gap-2 py-8 relative">
            <h2 className="text-3xl xl:text-5xl font-semibold">
              Nossa História em Movimento
            </h2>
            <p className="text-xl xl:text-[25px] font-semibold">
              A trajetória do Grupo Decio, contada em marcos e conquistas
            </p>
            <div className="w-full h-2 bg-white my-8 max-w-6xl relative" />
            <div
              onClick={() => api?.scrollNext()}
              className=" text-white hover:text-gray-100 absolute xl:right-10 right-2 xl:bottom-5 bottom-20 cursor-pointer"
            >
              <ArrowRightIcon className="w-10 h-10" />
            </div>
          </div>

          {/* Carousel Container */}
          <div className="w-full max-w-7xl mx-auto pb-12 ">
            <Carousel
              className="w-full"
              opts={{
                align: "center",
                loop: true,
              }}
              setApi={setApi}
            >
              <CarouselContent className="-ml-2 md:-ml-4 ">
                {historyData.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <Card
                      className={`min-h-[200px] flex flex-col justify-center p-0 ${
                        index % 2 === 0 ? "bg-white" : "bg-inherit border-none"
                      }`}
                    >
                      <CardContent className="text-left p-4">
                        <h3
                          className={`text-3xl xl:text-6xl font-bold mb-4 ${
                            index % 2 === 0 ? "text-primary" : "text-[#FFBC21]"
                          }`}
                        >
                          {item.year}
                        </h3>
                        <p
                          className={`text-sm xl:text-base leading-relaxed ${
                            index % 2 === 0 ? "text-gray-700" : "text-white"
                          }`}
                        >
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
