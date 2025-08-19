"use client";
import AnimatedSection from "@/components/ui/animated-section";
import { Play } from "lucide-react";
import Image from "next/image";

export default function ParceiroDecio() {
  return (
    <section className="relative py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bem-estar-parceiro-bg.jpg"
          alt="Estação de serviço movimentada com bombas e carros"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* White Card */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="bg-white rounded-xl p-8 lg:p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="text-sm font-medium text-gray-500">
                  Clube de benefícios
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Seja um Parceiro Decio
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Abasteça, acumule pontos e troque por produtos, serviços e
                  vantagens exclusivas.
                </p>

                <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  <Play className="w-5 h-5" />
                  Saiba mais
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Smartphones */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Smartphone 1 - Login */}
                <div className="relative z-20 transform rotate-12">
                  <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="bg-blue-600 text-white p-4">
                          <div className="text-center">
                            <h3 className="font-bold text-lg">Decio</h3>
                            <p className="text-sm">Faça login</p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 space-y-4">
                          <div className="space-y-3">
                            <div className="h-10 bg-gray-200 rounded"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                            <div className="h-10 bg-green-600 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Smartphone 2 - Home */}
                <div className="absolute top-8 -right-8 z-10 transform -rotate-6">
                  <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="bg-blue-600 text-white p-4">
                          <div className="text-center">
                            <h3 className="font-bold text-lg">Decio</h3>
                            <p className="text-sm">400 pontos</p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 space-y-3">
                          <div className="bg-green-100 rounded-lg p-2">
                            <div className="h-3 bg-green-300 rounded w-3/4 mb-1"></div>
                            <div className="h-3 bg-green-300 rounded w-1/2"></div>
                          </div>
                          <div className="bg-blue-100 rounded-lg p-2">
                            <div className="h-3 bg-blue-300 rounded w-3/4 mb-1"></div>
                            <div className="h-3 bg-blue-300 rounded w-1/2"></div>
                          </div>
                          <div className="bg-yellow-100 rounded-lg p-2">
                            <div className="h-3 bg-yellow-300 rounded w-3/4 mb-1"></div>
                            <div className="h-3 bg-yellow-300 rounded w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
