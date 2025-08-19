import Ctalinks from "@/components/_Pages/Alimentacao/Detalhe";
import Compromisso from "@/components/_Pages/Institucional/Compromisso";
import Hero from "@/components/_Pages/Institucional/Hero";
import History from "@/components/_Pages/Institucional/History";
import SlideHistory from "@/components/_Pages/Institucional/SlideHistory";
import Valores from "@/components/_Pages/Institucional/Valores";

export default function Institucional() {
  return (
    <>
      <Hero />
      <History />
      <SlideHistory />
      <Valores />
      <Compromisso />
      <Ctalinks />
    </>
  );
}
