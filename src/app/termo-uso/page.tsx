import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso - Grupo Decio",
  description:
    "Termos e condições de uso do Portal do Grupo Decio. Conheça nossas políticas e diretrizes de uso.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermoUso() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Termos de Uso
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última revisão:</strong> 02 de agosto de 2021
            </p>

            <section className="mb-8">
              <p className="text-gray-700 mb-4">
                O Grupo Decio o convida a visitar o seu Portal e informa os
                Termos e Condições que regem a utilização do mesmo. Consideramos
                que, ao utilizá-lo, você estará manifestando concordância com
                estes Termos e Condições.
              </p>
              <p className="text-gray-700 mb-4">
                O conteúdo deste Portal se destina a oferecer aos usuários da
                internet um painel institucional, informativo e de
                relacionamento com o Grupo Decio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Definições
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Termos e condições de uso:</strong> regras
                  estabelecidas para o uso do Portal;
                </li>
                <li>
                  <strong>Usuário:</strong> pessoa física ou jurídica,
                  cadastrada ou não, que faz uso do Portal e dos links ali
                  disponibilizados;
                </li>
                <li>
                  <strong>Portal:</strong> designa o endereço
                  www.grupodecio.com.br.
                </li>
                <li>
                  <strong>Cadastro de usuários:</strong> dados pessoais
                  fornecidos pelo usuário, cuja veracidade é de responsabilidade
                  deste.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Informação
              </h2>
              <p className="text-gray-700 mb-4">
                O Grupo Decio se esforçará para manter as informações e
                materiais contidos neste Portal tão precisos, atualizados e
                completos quanto possível. No entanto, não se responsabilizará
                pela utilização, aplicação ou processamento que os usuários
                possam dar à mencionada informação. O usuário é inteiramente
                responsável pela finalidade de uso do dado coletado no Portal.
              </p>
              <p className="text-gray-700 mb-4">
                O Grupo Decio procura assegurar que as informações fornecidas
                sejam acuradas, completas, atuais e que o seu uso não tenha
                interrupções nem erros. O conteúdo, incluindo todas as
                informações disponíveis no Portal ou acessadas por meio dele, é
                fornecido &quot;Como Encontrado&quot;. A utilização deste
                material, bem como qualquer interpretação sobre o mesmo ou
                inserção em outros contextos são de responsabilidade exclusiva
                do usuário.
              </p>
              <p className="text-gray-700 mb-4">
                A informação contida neste Portal poderá ser atualizada ou
                modificada periodicamente. Por conseguinte, não deve ser
                interpretada como definitiva.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Privacidade de nossos visitantes
              </h2>
              <p className="text-gray-700 mb-4">
                O Grupo Decio não tem a responsabilidade de controlar o acesso
                nem a utilização que os usuários fazem do Portal, assim como o
                acesso aos links nele indicados. Em particular, o Grupo Decio
                não garante que os usuários utilizem o Portal em conformidade
                com a Lei, com os presentes Termos e Condições de uso, com a
                moral e os bons costumes, os princípios gerais de direito e a
                ordem pública, nem que o façam de forma cuidadosa e prudente,
                atendendo ao dever objetivo de cuidado.
              </p>
              <p className="text-gray-700 mb-4">
                O Grupo Decio não se responsabiliza pelos danos e prejuízos de
                qualquer natureza que possam advir da utilização do Portal e dos
                seus serviços na forma acima descrita.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Do Usuário
              </h2>
              <p className="text-gray-700 mb-4">
                O usuário responderá pelos danos e prejuízos de qualquer
                natureza que ao Grupo Decio possa sofrer em conseqüência do
                descumprimento de qualquer uma das obrigações a que fica
                submetido por estes Termos e Condições Gerais de Uso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Utilização do Portal e de seus links
              </h2>
              <p className="text-gray-700 mb-4">
                Em nenhuma hipótese será o Grupo Decio responsável pelo uso de
                seu Portal ou pelo acesso a links nele indicados, bem como por
                atos praticados por usuário que tenham por base informações
                obtidas no Portal e em links. O Grupo Decio não se
                responsabiliza nem pelo conteúdo nem pelas políticas / práticas
                de privacidade dos sites que apontam para o nosso Portal e
                daqueles para os quais apontamos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Aviso aos clientes, fornecedores, colaboradores e investidores
                em potencial
              </h2>
              <p className="text-gray-700 mb-4">
                As informações sobre o Grupo Decio contidas neste Portal de
                forma alguma constituem um convite a partes interessadas e
                tampouco se propõem servir de base para decisões de negócios,
                contratos e investimentos, sejam eles feitos por pessoas físicas
                ou jurídicas.
              </p>
              <p className="text-gray-700 mb-4">
                O conteúdo do Portal é fornecido com o propósito único de
                informar, e nenhum conteúdo incluído no Portal serve para
                comercialização, negócios ou investimentos.
              </p>
              <p className="text-gray-700 mb-4">
                Portanto, o leitor não deve se basear exclusivamente nas
                informações aqui contidas para a realização de negócios,
                contratos e investimentos.
              </p>
              <p className="text-gray-700 mb-4">
                O Grupo Decio não será responsável ou obrigado pela transmissão
                ou acessibilidade de informações exatas, úteis ou disponíveis
                através do Portal e não será, também, responsável ou obrigado
                por qualquer transação ou decisões de negócios, contratos e
                investimentos feitas com base em tais informações.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Exclusão de garantias e de responsabilidade – disponibilidade,
                continuidade, utilidade e falibilidade
              </h2>
              <p className="text-gray-700 mb-4">
                O Grupo Decio não garante a disponibilidade e continuidade do
                funcionamento do Portal. Nem todos os serviços, produtos e
                conteúdos em geral descritos no Portal se encontram disponíveis
                para todas as áreas geográficas. Quando isto for razoavelmente
                possível, o Grupo Decio advertirá previamente as interrupções no
                funcionamento do Portal. A Grupo Decio tampouco garante a
                utilidade do Portal para a realização de alguma atividade em
                particular, nem sua infalibilidade e, em particular, ainda que
                não de modo exclusivo, não garante que os usuários possam
                efetivamente utilizar o Portal, acessar as distintas páginas web
                que formam o Portal.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-800 font-semibold">
                  O GRUPO DECIO SE EXIME DE QUALQUER RESPONSABILIDADE PELAS
                  PERDAS E DANOS DE TODA NATUREZA QUE POSSAM ADVIR DA FALTA DE
                  DISPONIBILIDADE OU DE CONTINUIDADE DO FUNCIONAMENTO DO PORTAL;
                  DA DEFRAUDAÇÃO PELA UTILIDADE QUE OS USUÁRIOS POSSAM TER
                  ATRIBUÍDO AO PORTAL, DA FALIBILIDADE DO PORTAL, E, EM
                  PARTICULAR, AINDA QUE NÃO DE MODO EXCLUSIVO, SE EXIME PELAS
                  FALHAS NO ACESSO ÀS DISTINTAS PÁGINAS WEB DO PORTAL.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Exclusão de garantias e de responsabilidade – contaminação por
                vírus e assemelhados
              </h2>
              <p className="text-gray-700 mb-4">
                O Grupo Decio não controla nem garante a ausência de vírus nem
                de outros elementos nos conteúdos que possam produzir alterações
                em seu sistema de informática (software e hardware) ou nos
                documentos eletrônicos e arquivos armazenados em seu sistema de
                informática.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-800 font-semibold">
                  O GRUPO DECIO SE EXIME DE QUALQUER RESPONSABILIDADE PELAS
                  PERDAS E DANOS, DE TODA NATUREZA, QUE SE POSSAM ATRIBUIR À
                  PRESENÇA DE VÍRUS OU DE OUTROS ELEMENTOS NOS CONTEÚDOS QUE
                  POSSAM PRODUZIR ALTERAÇÕES NO SISTEMA DE INFORMÁTICA,
                  DOCUMENTOS ELETRÔNICOS OU CADASTROS DE USUÁRIOS.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Direitos autorais e propriedade intelectual
              </h2>
              <p className="text-gray-700 mb-4">
                Este Portal contém textos, fotografias, imagens e som, que se
                encontram protegidos por direitos autorais ou outros direitos de
                propriedade intelectual. Estes direitos pertencem ao Grupo Decio
                ou foram outorgados sob licença por seus titulares, de tal forma
                que o Grupo Decio pode utilizar este material como parte deste
                Portal.
              </p>
              <p className="text-gray-700 mb-4">
                Ao acessar a página do Grupo Decio, o usuário declara que irá
                respeitar todos os direitos de propriedade intelectual e
                industrial, os decorrentes da proteção de marcas registradas da
                mesma, bem como de todos os direitos referentes a terceiros que
                porventura estejam, ou estiveram, de alguma forma, disponíveis
                no Portal. O simples acesso ao Portal não confere ao usuário
                qualquer direito de uso dos nomes, títulos, palavras, frases,
                marcas, patentes, obras literárias, artísticas, lítero-musicais,
                entre outras, que nele estejam, ou estiveram, disponíveis.
              </p>
              <p className="text-gray-700 mb-4">
                Todas as marcas comerciais incluídas neste Portal são de
                propriedade do Grupo Decio ou lhe foram outorgadas sob licença
                ou autorização por seus titulares para sua utilização neste
                Portal.
              </p>
              <p className="text-gray-700 mb-4">
                A reprodução dos conteúdos descritos anteriormente está
                proibida, salvo prévia autorização por escrito do Grupo Decio ou
                caso se destinem a uso exclusivamente pessoal e sem que em
                nenhuma circunstância o usuário adquira qualquer direito sobre
                os mesmos.
              </p>
              <p className="text-gray-700 mb-4">
                É permitido fazer somente o arquivo temporário deste Portal,
                sendo vedada sua utilização para finalidades comerciais,
                publicitárias ou qualquer outra que contrarie a realidade para o
                qual foi concebido, conforme definido neste Termo. Restam
                igualmente proibidas a reprodução, distribuição e divulgação,
                total ou parcial, dos textos, figuras, gráficos que compõem o
                presente Portal, sem prévia e expressa autorização do Grupo
                Decio, sendo permitida somente a impressão de cópias para uso e
                arquivo pessoal, sem que sejam separadas as partes que permitam
                dar o fiel e real entendimento de seu conteúdo e objetivo.
              </p>
              <p className="text-gray-700 mb-4">
                O usuário assume toda e qualquer responsabilidade, de caráter
                civil e/ou criminal, pela utilização indevida das informações,
                textos, gráficos, marcas, obras, enfim, de todo e qualquer
                direito de propriedade intelectual ou industrial deste Portal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Modificações destes Termos e Condições
              </h2>
              <p className="text-gray-700 mb-4">
                O Grupo Decio se reserva o direito de modificar a qualquer
                momento, de forma unilateral, os presentes Termos e Condições de
                Uso. Ao navegar por este Portal, você aceita guiar-se pelos
                Termos e Condições vigentes na data, e, portanto, deve
                verificá-los previamente cada vez que visitar este Portal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Informações de tráfego e cookies do site
              </h2>
              <p className="text-gray-700 mb-4">
                Quando visita um website, este pode armazenar ou recolher
                informações no seu navegador, principalmente na forma de
                cookies. Esta informação pode ser sobre si, as suas preferências
                ou o seu dispositivo e é utilizada principalmente para fazer o
                website funcionar conforme o esperado. A informação normalmente
                não o identifica diretamente, mas pode dar-lhe uma experiência
                web mais personalizada. Uma vez que respeitamos o seu direito à
                privacidade, pode optar por não permitir alguns tipos de
                cookies. Clique nos cabeçalhos das diferentes categorias para
                saber mais e alterar as nossas configurações predefinidas. No
                entanto, o bloqueio de alguns tipos de cookies pode afetar a sua
                experiência no website e os serviços que podemos oferecer.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies Essenciais
                </h3>
                <p className="text-gray-700 mb-2">
                  Estes cookies são necessários para (i) ativar funcionalidades
                  essenciais, como software e antivírus; (ii) dispor nosso
                  conteúdo de forma adequada ao tamanho da sua tela, velocidade
                  de conexão e tipo de navegador; (iii) lembrar do seu acesso; e
                  (iv) compreender o seu comportamento de navegação e como a
                  Plataforma está sendo usada e não podem ser desligados nos
                  nossos sistemas. Normalmente, eles só são configurados em
                  resposta às suas ações que correspondem a uma solicitação de
                  serviços, tais como definir as suas preferências de
                  privacidade, iniciar sessão ou preencher formulários em alguma
                  de nossas Plataformas. Você pode configurar o seu navegador
                  para bloquear ou alertá-lo(a) sobre esses cookies, mas algumas
                  partes da Plataforma não funcionarão.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies de desempenho
                </h3>
                <p className="text-gray-700 mb-2">
                  Estes cookies permitem que visitas e fontes de tráfego sejam
                  contadas para que possamos medir e melhorar o desempenho das
                  nossas Plataformas. Eles nos ajudam a saber quais são as
                  páginas mais e menos populares e a ver como os usuários se
                  movimentam nas Plataformas. Todas as informações recolhidas
                  por estes cookies são agregadas e, consequentemente, anônimas.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies de funcionalidade
                </h3>
                <p className="text-gray-700 mb-2">
                  Estes cookies permitem que o site forneça uma funcionalidade e
                  personalização melhoradas. Podem ser estabelecidos por nós ou
                  por fornecedores externos cujos serviços adicionámos às nossas
                  páginas. Se não permitir estes cookies algumas destas
                  funcionalidades, ou mesmo todas, podem não atuar corretamente.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Segmentação/Publicidade
                </h3>
                <p className="text-gray-700 mb-2">
                  Estes cookies podem ser ativados tanto nas nossas Plataformas
                  quanto nas plataformas dos nossos parceiros de publicidade.
                  São usados para veicular publicidade no ambiente digital de
                  forma personalizada e podem ajudar a lhe mostrar anúncios
                  on-line de produtos que podem ser do seu interesse. Eles não
                  armazenam diretamente informações pessoais, mas são baseados
                  nos dados relativos à sua navegação. Se não permitir estes
                  cookies, você receberá menos publicidade das nossas novidades
                  selecionadas de acordo com o seu perfil.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Dúvidas
              </h2>
              <p className="text-gray-700 mb-4">
                Caso tenha qualquer dúvida em relação ao presente documento,
                favor entrar em contato pelo e-mail{" "}
                <Link
                  href="mailto:sac@grupodecio.com.br"
                  className="text-blue-600 hover:underline"
                >
                  sac@grupodecio.com.br
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Lei aplicável e jurisdição
              </h2>
              <p className="text-gray-700 mb-4">
                Os presentes Termos e Condições de Uso regem-se pela legislação
                da República Brasileira. Os usuários do Portal do Grupo Decio se
                submetem ao Foro da Comarca de Uberlândia, Estado de Minas
                Gerais, com exclusão de qualquer outro, por mais privilegiado
                que seja.
              </p>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                Ao continuar usando este Portal, você confirma que leu, entendeu
                e concorda com estes termos de uso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
