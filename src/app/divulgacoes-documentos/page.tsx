import { Calendar, Download, FileText } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Divulgações e Documentos - Grupo Decio",
  description:
    "Divulgações e documentos oficiais do Grupo Decio. Acesse relatórios, demonstrações financeiras e documentos regulatórios.",
  robots: {
    index: true,
    follow: true,
  },
};

const documentos = [
  {
    id: 1,
    titulo:
      "Aviso Ao Mercado - Oferta de Distribuição de Notas Comerciais Escriturais em Série Única",
    data: "08/10/24",
    arquivo: "Ofertas Públicas - NCs Decio I Aviso ao Mercado (v- final).pdf",
    categoria: "Ofertas Públicas",
    pasta: "oferta-publica",
  },
  {
    id: 2,
    titulo:
      "Termo de 1ª Emissão de Notas Comerciais Escriturais em Série Única",
    data: "08/10/24",
    arquivo: "Ofertas Públicas - NCs_Decio_l_Termo_de_Emissão.pdf",
    categoria: "Ofertas Públicas",
    pasta: "oferta-publica",
  },
  {
    id: 3,
    titulo: "Anúncio de Início",
    data: "14/10/24",
    arquivo: "NCs Decio I Anúncio de Início (v- final).pdf",
    categoria: "Ofertas Públicas",
    pasta: "oferta-publica",
  },
  {
    id: 4,
    titulo: "Anúncio de Encerramento",
    data: "15/10/24",
    arquivo: "NCs Decio I Anúncio de Encerramento (v- final).pdf",
    categoria: "Ofertas Públicas",
    pasta: "oferta-publica",
  },
  {
    id: 5,
    titulo: "Demonstrações financeiras 2024",
    data: "31/03/25",
    arquivo: "253QH-049-PB Decio Holding (ADC 31-12-24) Final.pdf",
    categoria: "Demonstrações Financeiras",
    pasta: "oferta-publica",
  },
  {
    id: 6,
    titulo: "Organogramas e atos societários | Declaração de 2024",
    data: "31/03/25",
    arquivo: "Oraganograma e atos societários_declaração.pdf",
    categoria: "Atos Societários",
    pasta: "oferta-publica",
  },
  {
    id: 7,
    titulo: "Relatório Anual do Agente Fiduciário - Exercício 2024",
    data: "29/04/25",
    arquivo: "RA_2024_NC_DECIO_1E_US.pdf",
    categoria: "Relatórios Anuais",
    pasta: "oferta-publica",
  },
  {
    id: 8,
    titulo: "Relatório De Equidade Salarial 2025",
    data: "14/10/25",
    arquivo: "RelatorioIgualdadeSalarialLote_2025_2_39848608000297.pdf",
    categoria: "Relatórios de Transparência",
    pasta: "oferta-publica",
  },
  {
    id: 9,
    titulo: "Relatório De Equidade Salarial 2025 - Lote 1",
    data: "14/10/25",
    arquivo: "RelatorioIgualdadeSalarialLote_2025_1_39848608000297.pdf",
    categoria: "Relatórios de Transparência",
    pasta: "relatorio",
  },
  {
    id: 10,
    titulo: "Relatório De Equidade Salarial 2025 - Lote 2 (Versão 2)",
    data: "14/10/25",
    arquivo: "RelatorioIgualdadeSalarialLote_2025_2_39848608000297 1.pdf",
    categoria: "Relatórios de Transparência",
    pasta: "relatorio",
  },
];

const categorias = [
  "Ofertas Públicas",
  "Demonstrações Financeiras",
  "Atos Societários",
  "Relatórios Anuais",
  "Relatórios de Transparência",
];

export default function DivulgacoesDocumentos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Divulgações e Documentos
            </h1>
            <p className="text-gray-600 text-lg">
              Acesse os documentos oficiais, relatórios e divulgações do Grupo
              Decio
            </p>
          </div>

          {/* Filtros por categoria */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Filtrar por categoria
            </h2>
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors text-sm font-medium"
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>

          {/* Lista de documentos */}
          <div className="space-y-6">
            {documentos.map((documento) => (
              <div
                key={documento.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{documento.data}</span>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {documento.categoria}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {documento.titulo}
                    </h3>

                    <div className="flex items-center gap-4">
                      <Link
                        href={`/assets/pdf/${
                          documento.pasta || "oferta-publica"
                        }/${documento.arquivo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Visualizar PDF</span>
                      </Link>

                      <a
                        href={`/assets/pdf/${
                          documento.pasta || "oferta-publica"
                        }/${documento.arquivo}`}
                        download={documento.arquivo}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>

                  <div className="ml-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Informações importantes
            </h3>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• Todos os documentos estão disponíveis em formato PDF</li>
              <li>
                • Para visualizar os PDFs, você precisará de um leitor de PDF
                instalado
              </li>
              <li>
                • Os documentos são atualizados conforme as obrigações
                regulatórias
              </li>
              <li>
                • Em caso de dúvidas sobre os documentos, entre em contato
                conosco
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Precisa de ajuda?
            </h3>
            <p className="text-gray-700 mb-4">
              Se você tiver dúvidas sobre os documentos ou precisar de
              informações adicionais, entre em contato conosco:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="mailto:contato@grupodecio.com.br"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>contato@grupodecio.com.br</span>
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=553499941007&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <span>(34) 9994-1007</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
