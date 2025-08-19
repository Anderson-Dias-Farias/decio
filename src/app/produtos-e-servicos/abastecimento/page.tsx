"use client";

import Abastecimento from "@/components/_Pages/Abastecimento/Abastecimento";
import Cta from "@/components/_Pages/Abastecimento/Cta";
import Cta2 from "@/components/_Pages/Abastecimento/Cta2";
import Ctalinks from "@/components/_Pages/Abastecimento/Ctalinks";
import Hero from "@/components/_Pages/Abastecimento/Hero";
import Mapa from "@/components/_Pages/Abastecimento/Mapa";
import Parceiro from "@/components/_Pages/Home/Parceiro";
export default function Page() {
  return (
    <div>
      <Hero />
      <Mapa />
      <Abastecimento />
      <Cta />
      <Cta2 />
      <Parceiro />
      <Ctalinks />
    </div>
  );
}
