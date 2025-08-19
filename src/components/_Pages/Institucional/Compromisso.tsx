"use client";
import AnimatedSection from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
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
      <div className="text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
        {number}
      </div>
      <div className="text-xs sm:text-sm">{value2}</div>
    </div>
  );
};

export default function Compromisso() {
  return (
    <section className="py-20 overflow-hidden lg:min-h-[95dvh] bg-white">
      <div className="max-w-6xl mx-auto px-4 relative mb-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-end sm:items-center justify-between z-10 relative">
          <div className="flex flex-col gap-4 md:min-h-[500px] lg:min-h-[600px] items-center justify-between">
            <AnimatedSection>
              <h1 className="text-2xl md:text-4xl lg:text-[64px] font-semibold">
                Compromisso <br className="hidden md:block" /> com Governança e
                Responsabilidade Social
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="w-full md:max-w-[350px] text-left p-6 shadow-xl border-none bg-gray-50 md:mb-10 dm:ml-20">
                <h2 className="text-xl lg:text-2xl font-semibold">
                  Mais do que números,
                  <br /> nosso impacto vai além:
                </h2>
                <p className="text-xs">
                  Apoiamos projetos sociais, promovemos educação, saúde e
                  sustentabilidade nas comunidades onde atuamos.
                  <br />
                  <br />
                  Somos uma empresa familiar que acredita no poder de cuidar das
                  pessoas e do planeta.
                </p>
              </Card>
            </AnimatedSection>
          </div>

          {/* Imagem e Marcadores */}
          <div className="relative w-full flex items-center justify-start md:items-end md:justify-end">
            <div className="w-auto xl:-mr-10">
              {/* Container da imagem */}

              {/* Marcadores - posicionados de forma responsiva */}
              <div className="flex flex-col gap-2 sm:ml-10 xl:ml-0 z-10">
                <AnimatedSection delay={0.4}>
                  <Marcador
                    value1="Mais de"
                    number="23"
                    value2="Postos e estações de serviço"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.6}>
                  <Marcador
                    value1="Mais de"
                    number="2 mil"
                    value2="Colaboradores"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.8}>
                  <Marcador
                    value1="Mais de"
                    number="1 milhão"
                    value2="De clientes por ano"
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/mapa-brasil.svg"
          alt="Mapa do Brasil"
          fill
          className="object-contain md:scale-115 absolute top-0 left-0 object-bottom"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw "
        />
      </div>
    </section>
  );
}
