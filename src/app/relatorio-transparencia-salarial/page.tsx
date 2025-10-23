import { Building2, Calendar, Download, FileText } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Relatório de Transparência Salarial - Grupo Decio",
  description:
    "Relatório de Transparência e Igualdade Salarial de Mulheres e Homens do Grupo Decio. Cumprindo com o Decreto Nº 11.795 e a Lei nº 14.611.",
  robots: {
    index: true,
    follow: true,
  },
};

const relatorios = [
  {
    id: 1,
    titulo: "Relatório de Transparência Salarial - 1º Ciclo de 2024",
    ciclo: "1º CICLO DE 2024",
    empresa: "Decio Comércio e Serviços Rodoviários LTDA",
    cnpj: "19.046.218/001187",
    arquivo: "Relatório de Transparência - 19046218001187.pdf",
    categoria: "1º Ciclo 2024",
  },
  {
    id: 2,
    titulo: "Relatório de Transparência Salarial - 1º Ciclo de 2024",
    ciclo: "1º CICLO DE 2024",
    empresa: "Decio Auto Posto de Gurupi LTDA",
    cnpj: "06.698.533/0002-56",
    arquivo: "Relatório de Transparência - 06698533000256.pdf",
    categoria: "1º Ciclo 2024",
  },
  {
    id: 3,
    titulo: "Relatório de Transparência Salarial - 1º Ciclo de 2024",
    ciclo: "1º CICLO DE 2024",
    empresa: "Decio Holding S/A",
    cnpj: "39.848.608/0002-97",
    arquivo: "Relatório de Transparência - 39848608000297.pdf",
    categoria: "1º Ciclo 2024",
  },
  {
    id: 4,
    titulo: "Relatório de Transparência Salarial - 2º Ciclo de 2024",
    ciclo: "2º CICLO DE 2024",
    empresa: "Decio Comércio e Serviços Rodoviários LTDA",
    cnpj: "19.046.218/001187",
    arquivo: "Decio Comercio - 19046218001187 - Relatório 2ºCiclo.pdf",
    categoria: "2º Ciclo 2024",
  },
  {
    id: 5,
    titulo: "Relatório de Transparência Salarial - 2º Ciclo de 2024",
    ciclo: "2º CICLO DE 2024",
    empresa: "Decio Auto Posto de Gurupi LTDA",
    cnpj: "06.698.533/0002-56",
    arquivo: "Decio Gurupi - 06698533000256 - Relatório 2º Ciclo.pdf",
    categoria: "2º Ciclo 2024",
  },
  {
    id: 6,
    titulo: "Relatório de Transparência Salarial - 2º Ciclo de 2024",
    ciclo: "2º CICLO DE 2024",
    empresa: "Decio Holding S/A",
    cnpj: "39.848.608/0002-97",
    arquivo: "Decio Holding - 39848608000297 - Relatório 2º ciclo.pdf",
    categoria: "2º Ciclo 2024",
  },
];

const ciclos = ["1º Ciclo 2024", "2º Ciclo 2024"];

export default function RelatorioTransparenciaSalarial() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Relatório de Transparência Salarial
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Cumprindo com o Decreto Nº 11.795, de 23 de novembro de 2023 e a
              Lei nº 14.611, de 3 de julho de 2023, o Grupo Decio divulga o
              Relatório de Transparência e Igualdade Salarial de Mulheres e
              Homens do primeiro semestre de 2024.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>
                  Para conferir os documentos, basta acessar os links abaixo:
                </strong>
              </p>
            </div>
          </div>

          {/* Filtros por ciclo */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Filtrar por ciclo
            </h2>
            <div className="flex flex-wrap gap-2">
              {ciclos.map((ciclo) => (
                <button
                  key={ciclo}
                  className="px-4 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors text-sm font-medium"
                >
                  {ciclo}
                </button>
              ))}
            </div>
          </div>

          {/* Lista de relatórios */}
          <div className="space-y-6">
            {relatorios.map((relatorio) => (
              <div
                key={relatorio.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{relatorio.ciclo}</span>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {relatorio.categoria}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {relatorio.titulo}
                    </h3>

                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{relatorio.empresa}</span>
                    </div>

                    <p className="text-sm text-gray-500 mb-4">
                      CNPJ: {relatorio.cnpj}
                    </p>

                    <div className="flex items-center gap-4">
                      <Link
                        href={`/assets/pdf/relatorio/${relatorio.arquivo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Visualizar PDF</span>
                      </Link>

                      <a
                        href={`/assets/pdf/relatorio/${relatorio.arquivo}`}
                        download={relatorio.arquivo}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>

                  <div className="ml-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Informações sobre a legislação */}
          <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              Base Legal
            </h3>
            <div className="text-green-800 space-y-2 text-sm">
              <p>
                <strong>Decreto Nº 11.795, de 23 de novembro de 2023:</strong>{" "}
                Estabelece as regras para a divulgação de informações sobre
                transparência salarial entre homens e mulheres.
              </p>
              <p>
                <strong>Lei nº 14.611, de 3 de julho de 2023:</strong> Dispõe
                sobre a igualdade salarial entre homens e mulheres que exercem a
                mesma função.
              </p>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Informações importantes
            </h3>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• Todos os relatórios estão disponíveis em formato PDF</li>
              <li>
                • Os relatórios são divulgados conforme as obrigações legais
                vigentes
              </li>
              <li>
                • Os dados apresentados refletem a situação salarial do período
                especificado
              </li>
              <li>
                • Em caso de dúvidas sobre os relatórios, entre em contato
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
              Se você tiver dúvidas sobre os relatórios ou precisar de
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
