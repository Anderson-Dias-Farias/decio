import Alimentacao from "@/components/_Pages/Alimentacao/Alimentacao";
import Detalhe from "@/components/_Pages/Alimentacao/Detalhe";
import Explore from "@/components/_Pages/Alimentacao/Explore";
import Hero from "@/components/_Pages/Alimentacao/Hero";
import Parceiro from "@/components/_Pages/Alimentacao/Parceiro";

export default function AlimentacaoPage() {
  return (
    <>
      <Hero />
      <Alimentacao />
      <Explore />
      <Parceiro />
      <Detalhe />
    </>
  );
}
