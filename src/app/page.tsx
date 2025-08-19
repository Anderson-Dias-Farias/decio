import Abastecimento from "@/components/_Pages/Home/Abastecimento";
import Distribuicao from "@/components/_Pages/Home/Distribuicao";
import Experiencias from "@/components/_Pages/Home/Experiencias";
import Hero from "@/components/_Pages/Home/Hero";
import Mapa from "@/components/_Pages/Home/Mapa";
import Parceiro from "@/components/_Pages/Home/Parceiro";
import SlideHome from "@/components/_Pages/Home/Slide";
import Video from "@/components/_Pages/Home/Video";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <SlideHome />
      <Video />
      <Mapa />
      <Abastecimento />
      <Experiencias />
      <Distribuicao />
      <Parceiro />
    </div>
  );
}
