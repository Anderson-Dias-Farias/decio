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
    subtitle:
      "Ser a energia que transforma o dia a dia das pessoas, sendo referência de qualidade, prestação de serviço e relacionamento humano.",
    image: "/assets/icon-missao.png",
  },
  {
    title: "Visão",
    subtitle:
      "Ser referência de qualidade, atendimento ao cliente e responsabilidade social e ambiental, tornando-se o melhor grupo nos segmentos em que atua.",
    image: "/assets/icon-visao.png",
  },
  {
    title: "Valores",
    subtitle: "",
    list: [
      "Integridade",
      "Empreendedorismo",
      "Sustentabilidade",
      "Respeito",
      "Qualidade",
      "Simplicidade",
      "Orientação ao Cliente",
      "Excelência na prestação de serviços",
    ],
    image: "/assets/icon-valores.png",
  },
];

const Itens = ({ values }: { values: Values }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 ">
      {
        <div
          key={values.title}
          className={`flex flex-col max-w-[300px] justify-center gap-4 lg:gap-8 items-center`}
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
          {values.subtitle && (
            <p className="text-lg lg:text-xl font-semibold text-center">
              {values.subtitle}
            </p>
          )}
          {values.description && (
            <p className="text-base lg:text-lg">{values.description}</p>
          )}
          {values.list && (
            <ul className="list-none space-y-0 text-left w-full">
              {values.list.map((item) => (
                <li
                  key={item}
                  className="text-base lg:text-lg flex items-start gap-2"
                >
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>{item}</span>
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

        <div className="flex flex-col md:flex-row items-start justify-between gap-4 w-full mt-12 pt-2 h-full">
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
