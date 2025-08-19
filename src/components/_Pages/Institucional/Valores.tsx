"use client";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "next/image";

type Values = {
  title: string;
  subtitle: string;
  description?: string;
  list?: string[];
  image: string;
};

const values: Values[] = [
  {
    title: "Missão",
    subtitle: "Transformar o dia a dia das pessoas por meio da energia.",
    description:
      "Buscamos ser referência em qualidade, atendimento e relacionamento humano, oferecendo serviços que fazem a diferença na rotina dos nossos clientes.",
    image: "/assets/icon-missao.png",
  },
  {
    title: "Visão",
    subtitle: "Ser o melhor grupo nos segmentos em que atuamos.",
    description:
      "Trabalhamos para ser reconhecidos pela excelência no atendimento ao cliente e pela responsabilidade social e ambiental que guiamos em cada decisão.",
    image: "/assets/icon-visao.png",
  },
  {
    title: "Valores",
    subtitle: "Nosso jeito de fazer negócios é guiado por princípios sólidos:",
    list: [
      "Integridade e respeito",
      "Empreendedorismo e simplicidade",
      "Sustentabilidade e qualidade",
      "Orientação ao cliente e excelência nos serviços",
    ],
    image: "/assets/icon-valores.png",
  },
];

const Itens = ({ values }: { values: Values }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      {
        <div
          key={values.title}
          className="flex flex-col items-center text-center max-w-[300px] justify-center gap-4 lg:gap-8"
        >
          <Image
            src={values.image.toString()}
            alt={values.title}
            width={100}
            height={100}
            className="w-16 h-16 lg:w-24 lg:h-24"
          />
          <h3 className="text-3xl lg:text-5xl font-semibold text-primary">
            {values.title}
          </h3>
          <p className="text-lg lg:text-xl font-semibold">{values.subtitle}</p>
          {values.description && (
            <p className="text-base lg:text-lg">{values.description}</p>
          )}
          {values.list && (
            <ul className="list-disc list-inside">
              {values.list.map((item) => (
                <li key={item} className="text-base lg:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      }
    </div>
  );
};

export default function Valores() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col items-start justify-center">
        <AnimatedSection>
          <div className="flex flex-col text-black items-center text-center md:text-left md:items-start justify-between w-full px-2 gap-2 py-8 relative">
            <h2 className="text-3xl xl:text-5xl font-semibold">
              Nossa História em Movimento
            </h2>
            <p className="text-xl xl:text-[25px]">
              A trajetória do Grupo Decio, contada em marcos e conquistas
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full mt-12">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.2}>
              <Itens values={value} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
