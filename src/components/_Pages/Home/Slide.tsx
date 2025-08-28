"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/assets/slide-home-1.png",
    alt: "Slide 1",
    link: "/produtos-e-servicos/alimentacao",
  },
  {
    id: 2,
    image: "/assets/slide-home-2.png",
    alt: "Slide 2",
  },
  {
    id: 3,
    image: "/assets/slide-home-3.png",
    alt: "Slide 3",
  },
];

export default function SlideHome() {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-2">
      <div className="mx-auto px-4 md:px-8 overflow-hidden">
        <div>
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full relative"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "center",
              slidesToScroll: 1,
              loop: true,
              skipSnaps: false,
              dragFree: false,
              duration: 25,
              inViewThreshold: 0.7,
            }}
          >
            <CarouselContent className="flex gap-4 md:gap-8 py-10 justify-center">
              {/* Usar apenas os slides originais - loop nativo do Embla */}
              {slides.map((slide, index) => (
                <CarouselItem
                  key={slide.id}
                  className="min-w-0 shrink-0 basis-[90vw] max-w-[90vw] md:basis-[557px] md:max-w-[557px]"
                >
                  <Link href={slide.link ?? ""}>
                    <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-[200px] xs:h-[320px] sm:h-[360px] md:h-[340px] md:w-[557px]">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 90vw, 557px"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controles sempre visíveis */}
            <div className="flex items-center justify-center gap-6 -mt-6 mb-6">
              {/* Indicadores (bullets) */}
              <div className="flex space-x-2">
                {Array.from({ length: slides.length }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      current === index
                        ? "bg-primary scale-110"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
