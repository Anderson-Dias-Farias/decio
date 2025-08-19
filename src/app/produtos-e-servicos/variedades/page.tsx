import DetalheAbastece from "@/components/_Pages/Variedades/DetalheAbastece";
import ExploreServicos from "@/components/_Pages/Variedades/ExploreServicos";
import Hero from "@/components/_Pages/Variedades/Hero";
import ParceiroDecio from "@/components/_Pages/Variedades/ParceiroDecio";
import VariedadesViagem from "@/components/_Pages/Variedades/VariedadesViagem";

export default function VariedadesPage() {
  return (
    <>
      <Hero />
      <VariedadesViagem />
      <ExploreServicos />
      <ParceiroDecio />
      <DetalheAbastece />
    </>
  );
}



