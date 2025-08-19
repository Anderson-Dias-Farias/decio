import VariedadesItens from "./VariedadesItens";

export default function Variedades() {
  const variedades = [
    {
      title: "Estacionamento",
      subtitle: "Seguro e Espaçoso",
      description:
        "Nossos pátios são amplos, bem iluminados e planejados para garantir manobras seguras e tranquilidade no descanso",
      image: "/assets/bem-estacionamento1.png",
      image2: "/assets/bem-estacionamento2.png",
      image3: "/assets/bem-estacionamento3.png",
    },
    {
      title: "Banheiros",
      subtitle: "Sempre Limpos",
      description:
        "Higiene e cuidado em primeiro lugar. Espaços limpos, bem equipados e disponíveis 24h",
      image: "/assets/bem-banheiro1.png",
      image2: "/assets/bem-banheiro2.png",
      image3: "/assets/bem-banheiro3.png",
    },
    {
      title: "Hotéis em",
      subtitle: "Uberlândia e Presidente Venceslau",
      description:
        "Para quem precisa de uma pausa maior, nossas unidades em Uberlândia e Presidente Venceslau contam com hotel próprio.",
      description2:
        "Quartos confortáveis, ambiente limpo, seguro e pronto para receber você com tranquilidade durante sua viagem.",
      image: "/assets/bem-hotel1.png",
      image2: "/assets/bem-hotel2.png",
      image3: "/assets/bem-hotel3.png",
    },
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4 lg:px-8 w-full">
        <div className="flex flex-col gap-8 items-center w-full">
          {variedades.map((variedade, index) => (
            <VariedadesItens
              key={variedade.title}
              {...variedade}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
