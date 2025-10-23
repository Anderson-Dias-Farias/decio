import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Cookies - Grupo Decio",
  description:
    "Informações sobre o uso de cookies no site do Grupo Decio. Saiba como utilizamos cookies para melhorar sua experiência.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AvisoCookies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Aviso de Cookies
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última atualização:</strong>{" "}
              {new Date().toLocaleDateString("pt-BR")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                O que são cookies?
              </h2>
              <p className="text-gray-700 mb-4">
                Cookies são pequenos arquivos de texto que são armazenados no
                seu dispositivo (computador, tablet ou celular) quando você
                visita nosso site. Eles nos ajudam a melhorar sua experiência de
                navegação e a entender como você interage com nosso conteúdo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Como utilizamos os cookies?
              </h2>
              <p className="text-gray-700 mb-4">
                O Grupo Decio utiliza cookies para:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Garantir o funcionamento adequado do site</li>
                <li>Lembrar suas preferências de navegação</li>
                <li>Analisar como você utiliza nosso site para melhorá-lo</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Fornecer funcionalidades de redes sociais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Tipos de cookies que utilizamos
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies Essenciais
                </h3>
                <p className="text-gray-700 mb-2">
                  Estes cookies são necessários para o funcionamento básico do
                  site e não podem ser desativados. Eles geralmente são
                  definidos apenas em resposta a ações feitas por você que
                  equivalem a uma solicitação de serviços.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies de Performance
                </h3>
                <p className="text-gray-700 mb-2">
                  Estes cookies nos permitem contar visitas e fontes de tráfego
                  para que possamos medir e melhorar o desempenho do nosso site.
                  Eles nos ajudam a saber quais páginas são mais e menos
                  populares.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies de Funcionalidade
                </h3>
                <p className="text-gray-700 mb-2">
                  Estes cookies permitem que o site forneça funcionalidades e
                  personalização aprimoradas. Podem ser definidos por nós ou por
                  terceiros cujos serviços adicionamos às nossas páginas.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies de Marketing
                </h3>
                <p className="text-gray-700 mb-2">
                  Estes cookies podem ser definidos através do nosso site por
                  nossos parceiros de publicidade para construir um perfil dos
                  seus interesses e mostrar-lhe anúncios relevantes em outros
                  sites.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Como gerenciar cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Você pode controlar e/ou deletar cookies como desejar. Você pode
                deletar todos os cookies que já estão no seu computador e pode
                configurar a maioria dos navegadores para impedir que sejam
                colocados.
              </p>
              <p className="text-gray-700 mb-4">
                Para mais informações sobre como gerenciar cookies, consulte as
                configurações do seu navegador:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/pt-BR/kb/Atualizar%20configura%C3%A7%C3%B5es%20para%20bloquear%20cookies%20de%20terceiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Internet Explorer
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookies de terceiros
              </h2>
              <p className="text-gray-700 mb-4">
                Nosso site pode conter cookies de terceiros, como:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Para análise de tráfego e
                  comportamento dos usuários
                </li>
                <li>
                  <strong>Redes Sociais:</strong> Para funcionalidades de
                  compartilhamento e integração
                </li>
                <li>
                  <strong>YouTube:</strong> Para exibição de vídeos incorporados
                </li>
                <li>
                  <strong>Google Maps:</strong> Para exibição de mapas e
                  localização
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Alterações nesta política
              </h2>
              <p className="text-gray-700 mb-4">
                Podemos atualizar esta política de cookies periodicamente.
                Recomendamos que você revise esta página regularmente para se
                manter informado sobre como utilizamos os cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contato
              </h2>
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas sobre nossa política de cookies, entre em
                contato conosco:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Grupo Decio</strong>
                  <br />
                  <Link
                    href="mailto:contato@grupodecio.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email: contato@grupodecio.com.br
                  </Link>
                  <br />
                  <Link
                    href="https://api.whatsapp.com/send/?phone=553499941007&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telefone: (34) 9994-1007
                  </Link>
                  <br />
                </p>
              </div>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                Este aviso de cookies é parte integrante dos nossos Termos de
                Uso e Política de Privacidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
