"use client";
import AnimatedSection from "@/components/ui/animated-section";
import { ArrowRight } from "lucide-react";

export default function DetalheAbastece() {
  return (
    <section className="py-16 lg:py-24 bg-blue-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* White Card */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="bg-white rounded-xl p-8 lg:p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="text-sm font-medium text-gray-500">
                  Grupo Decio
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Cada Detalhe Abastece
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  O Grupo Decio está ao seu lado, transformando cada parada em
                  uma experiência acolhedora, segura e completa.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Action Buttons */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-4">
              <button className="w-full inline-flex items-center justify-between bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                <span>Encontre uma Estação de Serviços</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="w-full inline-flex items-center justify-between bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                <span>Conheça Nossos Serviços</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="w-full inline-flex items-center justify-between bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                <span>Trabalhe Conosco</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
