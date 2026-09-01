import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termo de Uso Trecho - Grupo Decio",
  description:
    "Termo de Uso e Termo de Abertura de Conta do Trecho, em parceria com Rodobank S.A. e Fit$ Instituição de Pagamento S.A.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermoUsoTrecho() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Termo de Uso Trecho
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                TERMO DE USO
              </h2>

              <p className="text-gray-700 mb-4">
                Pelo presente instrumento particular e na melhor forma de
                direito, as partes:
              </p>

              <p className="text-gray-700 mb-4">
                <strong>DECIO COMERCIO E SERVICOS RODOVIARIOS LTDA</strong>,
                &quot;CONTRATADO&quot; sociedade Limitada, com sede na Cidade
                de Ituiutaba, Estado de Minas Gerais, na Rod br - 365, nº s/n,
                Bairro de Paranaíba, CEP 38.301-115, inscrita no CNPJ/ME sob o
                nº 19.046.218/0001-05, representada de acordo com seus atos
                constitutivos, doravante denominado simplesmente por{" "}
                <strong>&quot;Trecho&quot;</strong>;
              </p>

              <p className="text-gray-700 mb-4">
                &quot;<strong>Titular</strong>&quot; ou &quot;CONTRATANTE&quot;,
                é a pessoa natural ou jurídica cujo tenha realizado o download
                do Aplicativo e/ou tenha acesso ao portal do CONTRATADO,
                inclusive através de plataformas e aplicativos{" "}
                <em>White-label</em>, independente do sistema ou dispositivo,
                com base em seus critérios e procedimentos próprios de
                checagem e validação de informações; e
              </p>

              <p className="text-gray-700 mb-4">
                <strong>RODOBANK S.A.</strong> ou, sociedade por ações, com
                sede na Cidade de São Paulo, Estado de São Paulo, na Avenida
                Cidade Jardim, nº 400, 20º andar, conjunto 206, Jardim
                Paulistano, CEP 01454-901, inscrita no CNPJ/ME sob o nº
                37.628.771/0001-38, representada de acordo com seus atos
                constitutivos, doravante denominado simplesmente por{" "}
                <strong>&quot;RODOBANK&quot;</strong>.
              </p>

              <p className="text-gray-700 mb-2">
                <strong>&quot;Terceiros Contratados&quot;</strong>
              </p>

              <p className="text-gray-700 mb-4">
                <strong>FITS INSTITUIÇÃO DE PAGAMENTO S.A.</strong>, sociedade
                por ações, inscrito no CNPJ/ME sob o nº 13.203.354/0001-85,
                com endereço na Av. Cidade Jardim, 400, 20º andar, conjunto
                206 – Jardim Paulistano, São Paulo – SP, CEP 01454-901,
                representada de acordo com seus atos constitutivos, doravante
                denominada simplesmente por <strong>&quot;Fit$&quot;</strong>{" "}
                ou <strong>&quot;Terceiro Contratado&quot;</strong> é o
                responsável por manter o domicílio bancário das contas dos
                Titulares e prestar os serviços que lhe são cabíveis em
                atuação concomitante ao RODOBANK, atuando em controladoria
                conjunta de dados pessoais em finalidade específica ao
                presente termo e contratos de prestação de serviços.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. DEFINIÇÕES
              </h3>
              <p className="text-gray-700 mb-4">
                1.1. Para o perfeito entendimento e interpretação deste Termo,
                fica estabelecido que:
              </p>
              <ul className="list-none text-gray-700 mb-4 space-y-3">
                <li>
                  <strong>(i) &quot;CONTRATANTE&quot;</strong> significa a
                  parte que contratou os serviços do Trecho, nos termos do
                  Contrato de Prestação de Serviços;
                </li>
                <li>
                  <strong>(ii) &quot;CONTRATADO&quot;</strong> significa a
                  parte irá prestar os serviços de modo &quot;White-Label&quot;,
                  sendo &quot;White-Label&quot; o termo utilizado para
                  descrever o modelo de negócio em que um produto ou serviço
                  desenvolvido por determinada empresa, neste caso o RODOBANK
                  e o FitBank, são fornecidos ao CONTRATADO que os
                  disponibilizam ao CONTRATANTE.
                </li>
                <li>
                  <strong>(iii) &quot;Contrato de Prestação de Serviços&quot;</strong>{" "}
                  significa o contrato firmado entre o CONTRATADO e o
                  CONTRATANTE, por meio do qual foram elencados todos os
                  serviços contratados pelo CONTRATANTE e que serão
                  disponibilizados aos titulares das contas abertas junto ao
                  Trecho;
                </li>
                <li>
                  <strong>(iv) &quot;Legislação Aplicável&quot;</strong>{" "}
                  significa toda e qualquer disposição normativa válida (geral
                  ou individual, constitucional, legal ou regulamentar)
                  editada por Autoridade Pública, incluindo as disposições de
                  qualquer tratado, lei, decreto, decreto-lei, medida
                  provisória, portaria, resolução, ordem de serviço,
                  instrução, ordem judicial, mandado, outorga ou regulamento,
                  ou ainda qualquer outro acordo escrito com força de lei,
                  editado, emitido, expedido ou homologado por uma Autoridade
                  Pública;
                </li>
                <li>
                  <strong>(v) &quot;Termo&quot;</strong> significa o presente
                  Termo de Uso; e
                </li>
                <li>
                  <strong>(vi) &quot;Titular&quot;</strong> ou{" "}
                  <strong>&quot;Usuário&quot;</strong> significa as pessoas
                  indicadas no preâmbulo, que realizaram o download do
                  aplicativo, ou utilizam os portais e aplicativos do Trecho
                  ou acessam os aplicativos e portais de forma{" "}
                  <em>White-label</em> do RODOBANK ou vinculados ao RODOBANK
                  para qualquer finalidade.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. OBJETO
              </h3>
              <p className="text-gray-700 mb-4">
                2.1. Este Termo tem por objeto estabelecer as responsabilidades
                entre as partes, descrever com precisão, clareza e
                transparência como deverá ser realizado o uso do aplicativo e
                portais disponibilizados pelo CONTRATADO que é integrado ao
                Rodobank e que utiliza a infraestrutura do Fit$ para
                disponibilização de seus serviços e produtos.
              </p>
              <p className="text-gray-700 mb-4">
                2.2. A adesão a este Termo ocorrerá assim que o titular
                declarar que leu e concorda com o presente Termo de Uso.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Obrigações e Responsabilidades do Titular
              </h3>
              <p className="text-gray-700 mb-4">
                3.1. O Titular está ciente de que a plataforma utilizada é
                integrada ao RODOBANK, que usufrui da infraestrutura do Fit$
                para estabelecer o domicílio bancário das contas que serão
                posteriormente abertas, sendo o CONTRATADO o principal
                responsável para as soluções tecnológicas, de modo que
                incumbe ao Rodobank e ao Fit$ somente o obrigação de
                permanecer em consonância com as legislações aplicáveis e de
                administrar de forma coletiva as ações realizadas nos
                aplicativos e portais que utilizem a infraestrutura de forma
                individual ou conjunta das partes envolvidas.
              </p>
              <p className="text-gray-700 mb-4">
                3.2. O Titular está ciente de que o aplicativo será utilizado
                para a realização de abertura de contas, operações,
                transações, visualização de <em>status</em> e/ou qualquer
                outra funcionalidade nele oferecida.
              </p>
              <p className="text-gray-700 mb-4">
                3.3. O Titular jamais poderá utilizar o aplicativo com
                finalidade diversa á que lhe foi proposto ou estipulado em
                contratos e termos.
              </p>
              <p className="text-gray-700 mb-4">
                3.4. O Usuário será responsabilizado por todo e quaisquer
                danos, diretos ou indiretos, que sejam causados ao
                CONTRATADO, Rodobank ou ao Fit$ por descumprimento do disposto
                neste ou demais termos.
              </p>
              <p className="text-gray-700 mb-4">
                3.5. O Titular compromete-se a fornecer informações
                verdadeiras, legítimas e jamais utilizar as plataformas para
                realizar qualquer ação que possa ser considerado ilícita ou
                ilegal.
              </p>
              <p className="text-gray-700 mb-4">
                3.6. O Titular está ciente de que o aplicativo poderá ser
                atualizado a qualquer momento sem que seja necessária a
                prévia comunicação ao Titular e que tanto os serviços quanto
                os produtos oferecidos poderão ficar indisponíveis a qualquer
                momento e por tempo indeterminado para reparos, atualizações
                ou qualquer outra ação necessária para seu bom funcionamento.
              </p>
              <p className="text-gray-700 mb-4">
                3.7. O cadastro realizado é de uso pessoal e intransferível,
                possuindo controles de acesso através de login e senha,
                identificação facial, biometria e token qual assegura o
                Usuário a utilização e acesso individual ao aplicativo e
                portais, competindo ao Titular a manutenção de senha, a
                confidencialidade e o acesso.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Obrigações e Responsabilidades do CONTRATADO
              </h3>
              <p className="text-gray-700 mb-4">
                4.1. O CONTRATADO, o Rodobank e o Fit$ não se responsabilizam
                por: (i) qualquer equipamento infectado ou invadido por
                programas suspeitos ou criminosos, (ii) equipamentos avariados
                no momento do uso do Aplicativo, (iii) proteção do
                equipamento, (iv) vulnerabilidades e instabilidades existentes
                em sistemas e redes dos Usuários.
              </p>
              <p className="text-gray-700 mb-4">
                4.2. O simples aceite deste termo não interfere em eventuais
                procedimentos, políticas ou termos disponibilizados por
                qualquer um dos prestadores de serviços mencionados neste
                contrato.
              </p>
              <p className="text-gray-700 mb-4">
                4.3. O funcionamento do Aplicativo e dos portais estarão
                disponíveis por 24 (vinte e quatro) horas, 7 (sete) dias por
                semana, no entanto a navegação dentro do aplicativo ou portal
                poderá ser interrompida, limitada ou suspensa caso o titular
                não realize o cadastro completo nas plataformas e mantenha
                seus dados atualizados, a navegação também poderá ser
                restringida nos casos em que houver suspeita ou confirmação
                de fraude, violação da Legislação Aplicável, descumprimento
                dos termos e políticas presentes nos Portais e Aplicativos do
                CONTRATADO, do Rodobank e do Fit$.
              </p>
              <p className="text-gray-700 mb-4">
                4.4. O CONTRATADO, o Rodobank e o Terceiro Contratado se
                eximem de toda responsabilidade pelos prejuízos e danos
                causados de qualquer natureza que possam ocorrer pelo acesso,
                utilização, alteração, eliminação, modificação ou manipulação
                de terceiros e pessoas não autorizadas durante o uso do
                Aplicativo ou Portais.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. TARIFAS
              </h3>
              <p className="text-gray-700 mb-4">
                5.1. O CONTRATADO poderá aplicar uma tarifa mensal ao TITULAR
                para utilização da plataforma, a ser cobrada da Conta Frete e
                da Conta Consolidada, quando aplicável.
              </p>
              <p className="text-gray-700 mb-4">
                5.2. A mensalidade ocorrerá nas modalidades &quot;pré-paga&quot;
                ou &quot;pós-paga&quot;, a depender do objeto do contrato.
              </p>
              <p className="text-gray-700 mb-4">
                5.3. A cobrança da tarifa não excederá o valor que o TITULAR
                venha a possuir na conta no momento da cobrança. Em caso de
                saldo insuficiente, o CONTRATADO poderá cobrar o valor
                remanescente no mês subsequente, se o saldo da conta suprir a
                respectiva dívida em momento posterior e de forma retroativa,
                a exclusivo critério do CONTRATADO.
              </p>
              <p className="text-gray-700 mb-4">
                5.4. Além da tarifa de mensalidade, o CONTRATADO poderá,
                ainda, cobrar a tarifa adicional de manutenção da conta para
                cenários de clientes inativos.
              </p>
              <p className="text-gray-700 mb-4">
                5.5. Considera-se cliente inativo o TITULAR que não
                movimentar qualquer valor (de entrada ou de saída) por um
                prazo determinado. A cobrança será realizada, se aplicável,
                no primeiro dia útil de cada mês, caso ainda não haja
                movimentação da conta em tal dia.
              </p>
              <p className="text-gray-700 mb-4">
                5.6. A cobrança da tarifa de inatividade nunca poderá
                ultrapassar o saldo positivo que o TITULAR obtiver em conta no
                momento da cobrança.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. PROPRIEDADE INTELECTUAL
              </h3>
              <p className="text-gray-700 mb-4">
                6.1. O Titular se compromete a não violar, reproduzir,
                imitar, total ou parcialmente, qualquer propriedade
                intelectual do CONTRATADO, bem como a não utilizar qualquer
                propriedade intelectual do CONTRATADO para finalidades além
                das previstas neste Contrato e permitidas por lei.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. TRATAMENTO DE DADOS
              </h3>
              <p className="text-gray-700 mb-4">
                7.1. O CONTRATADO realiza o tratamento dos dados do Titular de
                acordo com sua Política de Privacidade, a qual pode ser
                consultada a qualquer momento pelo Titular no endereço
                eletrônico:{" "}
                <Link
                  href="https://www.grupodecio.com.br"
                  className="text-blue-600 hover:underline"
                >
                  www.grupodecio.com.br
                </Link>
                .
              </p>
              <p className="text-gray-700 mb-4">
                7.2. O titular da conta autoriza o RODOBANK e o Fit$ a ter
                acesso aos seus dados pessoais para fins única e
                exclusivamente de utilização dos serviços estabelecidos em
                contrato, consentimento este que pode ser revogado a qualquer
                tempo por parte do Titular.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. DISPOSIÇÕES GERAIS
              </h3>
              <p className="text-gray-700 mb-4">
                8.1. O Titular declara que todas as informações fornecidas no
                momento do cadastro do aplicativo e de sua ativação são
                verídicas. O Titular manterá o CONTRATADO sempre informado a
                respeito de quaisquer alterações nos seus dados cadastrais.
                Será de inteira responsabilidade do Titular todas as
                consequências decorrentes do descumprimento dessa obrigação.
                Além disso, o CONTRATADO, discricionariamente, poderá
                solicitar a atualização dos dados do Titular sempre que
                entender necessário ou quando a legislação vigente aplicável
                assim exigir. O CONTRATADO, o Rodobank ou o Fit$ poderão
                realizar o bloqueio temporário do Aplicativo e portais caso
                entenda que não houve o cumprimento das obrigações previstas
                nesta cláusula.
              </p>
              <p className="text-gray-700 mb-4">
                8.2. O CONTRATADO poderá contatar o Titular por qualquer meio,
                inclusive telefônico, e-mail, SMS, WhatsApp e correspondência,
                para enviar comunicações a respeito do Aplicativo e outras
                finalidades. O Titular poderá cancelar, a qualquer momento, o
                recebimento de notificações não obrigatórias.
              </p>
              <p className="text-gray-700 mb-4">
                8.3. Fica eleito o Foro da Comarca da Capital do Estado de
                Rondônia para dirimir quaisquer questões relativas ao
                presente Termo, sem prejuízo de o Titular optar pelo foro de
                seu domicílio.
              </p>
              <p className="text-gray-700 mb-4">
                8.4. Para solução de eventuais conflitos relacionados a este
                Termo, para pedidos de cancelamento, reclamações e sugestões,
                o Titular poderá entrar em contato com o CONTRATADO através
                dos seguintes meios de comunicação: (i) telefone: 4003-8658,
                (ii) SAC 0800-888-1051 e (iii) E-mail:{" "}
                <Link
                  href="mailto:c.atendimento@rodobank.com.br"
                  className="text-blue-600 hover:underline"
                >
                  c.atendimento@rodobank.com.br
                </Link>
              </p>
              <p className="text-gray-700 mb-4">
                8.5. O Titular afirma e declara que o presente Termo poderá
                ser assinado por meio eletrônico, sendo consideradas válidas
                as referidas assinaturas, nos termos da Medida Provisória Nº
                2200-2/2001, sendo certo, inclusive, que a adesão eletrônica
                ao Termo por meio do aceite eletrônico deve ser considerada
                como assinatura para os fins do presente Termo.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p className="text-gray-800 font-medium">
                  Declaro que li, entendi e concordei com as disposições
                  previstas neste Termo.
                </p>
              </div>
            </section>

            <div className="border-t-2 border-gray-200 my-10" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                TERMO DE ABERTURA DE CONTA
              </h2>

              <p className="text-gray-700 mb-4">
                Pelo presente instrumento particular e na melhor forma de
                direito, as partes:
              </p>

              <p className="text-gray-700 mb-4">
                <strong>DECIO COMERCIO E SERVICOS RODOVIARIOS LTDA</strong>,
                &quot;CONTRATADO&quot; sociedade Limitada, com sede na
                Ituiutaba, Estado de Minas Gerais, na rod br -365, nº s/n,
                Bairro Paranaíba, CEP 38.301-115, inscrita no CNPJ/ME sob o nº
                19.046.218/0001-05, representada de acordo com seus atos
                constitutivos, doravante denominado simplesmente por{" "}
                <strong>&quot;Trecho&quot;</strong>;
              </p>

              <p className="text-gray-700 mb-4">
                &quot;<strong>Titular</strong>&quot; ou &quot;CONTRATANTE&quot;,
                a pessoa natural ou jurídica cujo pedido de abertura de Conta
                de Pagamento tenha sido devidamente aprovado pelo CONTRATADO e
                demais partes, com base em seus critérios e procedimentos
                próprios de checagem e validação de informações; e
              </p>

              <p className="text-gray-700 mb-4">
                <strong>RODOBANK S.A.</strong>, sociedade por ações, com sede
                na Cidade de São Paulo, Estado de São Paulo, na Avenida
                Cidade Jardim, nº 400, 20º andar, conjunto 206, Jardim
                Paulistano, CEP 01454-901, inscrita no CNPJ/ME sob o nº
                37.628.771/0001-38, representada de acordo com seus atos
                constitutivos, doravante denominado simplesmente por{" "}
                <strong>&quot;RODOBANK&quot;</strong>.
              </p>

              <p className="text-gray-700 mb-2">
                <strong>&quot;Terceiros Contratados&quot;</strong>
              </p>

              <p className="text-gray-700 mb-4">
                <strong>FITS INSTITUIÇÃO DE PAGAMENTO S.A.</strong>, sociedade
                por ações, inscrito no CNPJ/ME sob o nº 13.203.354/0001-85,
                com endereço na Av. Cidade Jardim, 400, 20º andar, conjunto
                206 – Jardim Paulistano, São Paulo – SP, CEP 01454-901,
                representado de acordo com seus atos constitutivos, doravante
                denominada simplesmente por <strong>&quot;Fit$&quot;</strong>{" "}
                ou <strong>&quot;Terceiro Contratado&quot;</strong> é o
                responsável por manter o domicílio bancário das contas dos
                Titulares, atuando em controladoria conjunta de dados
                pessoais em finalidade específica ao presente termo e
                contratos de prestação de serviços.
              </p>

              <p className="text-gray-700 mb-4">
                Resolvem celebrar o presente Termo de Abertura de Conta
                (&quot;Termo&quot;), que será regido pelos seguintes termos e
                condições:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                9. DEFINIÇÕES
              </h3>
              <p className="text-gray-700 mb-4">
                9.1. Para o perfeito entendimento e interpretação deste Termo,
                fica estabelecido que:
              </p>
              <ul className="list-none text-gray-700 mb-4 space-y-3">
                <li>
                  <strong>(vii) &quot;CONTRATANTE&quot;</strong> significa a
                  parte que contratou os serviços do Trecho, nos termos do
                  Contrato de Prestação de Serviços;
                </li>
                <li>
                  <strong>(viii) &quot;Cartão&quot;</strong> significa o
                  instrumento utilizado para pagamento de compras de bens
                  e/ou serviços emitido por uma das bandeiras emissoras, a
                  depender da contratação realizada junto à emissora, e que é
                  de seu uso pessoal e intransferível;
                </li>
                <li>
                  <strong>(ix) &quot;Conta Digital&quot;</strong> ou{" "}
                  <strong>&quot;Conta&quot;</strong> significa a conta de
                  depósito aberta e mantida pelo Trecho em nome e favor dos
                  Titulares com domicílio bancário mantido pelo Fit$, de
                  acordo com os termos das normas em vigor e das Regras de
                  Utilização, por meio da qual o Titular terá acesso às
                  funcionalidades contratadas junto ao CONTRATADO no Contrato
                  de Prestação de Serviços;
                </li>
                <li>
                  <strong>(x) &quot;Contrato de Prestação de Serviços&quot;</strong>{" "}
                  significa o contrato firmado entre o Titular e o
                  CONTRATADO, por meio do qual foram elencados todos os
                  serviços contratados pelo CONTRATANTE e que serão
                  disponibilizados aos titulares das contas abertas junto ao
                  RODOBANK e ao Fit$;
                </li>
                <li>
                  <strong>(xi) &quot;Função Crédito&quot;</strong> significa a
                  funcionalidade do Cartão que, quando habilitada,
                  possibilitará a realização de compras de bens e/ou serviços
                  até o limite do saldo disponível para essa modalidade;
                </li>
                <li>
                  <strong>(xii) &quot;Função Débito&quot;</strong> significa a
                  funcionalidade do Cartão que, quando habilitada, permitirá
                  ao Titular movimentar os recursos mantidos na sua Conta do
                  Trecho para realização de compras de bens e/ou serviços e/ou
                  retirada de recursos (saques);
                </li>
                <li>
                  <strong>(xiii) &quot;Legislação Aplicável&quot;</strong>{" "}
                  significa toda e qualquer disposição normativa válida (geral
                  ou individual, constitucional, legal ou regulamentar)
                  editada por Autoridade Pública, incluindo as disposições de
                  qualquer tratado, lei, decreto, decreto-lei, medida
                  provisória, portaria, resolução, ordem de serviço,
                  instrução, ordem judicial, mandado, outorga ou regulamento,
                  ou ainda qualquer outro acordo escrito com força de lei,
                  editado, emitido, expedido ou homologado por uma Autoridade
                  Pública;
                </li>
                <li>
                  <strong>(xiv) &quot;Termo&quot;</strong> significa o
                  presente Termo de Abertura de Conta; e
                </li>
                <li>
                  <strong>(xv) &quot;Titular&quot;</strong> significa as
                  pessoas indicadas no preâmbulo, devidamente cadastradas e
                  autorizadas pelo CONTRATADO a movimentar recursos em suas
                  respectivas Contas Digitais.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                10. OBJETO
              </h3>
              <p className="text-gray-700 mb-4">
                10.1. Este Termo tem por objeto a abertura de Conta em nome do
                Titular junto ao CONTRATADO e estabelecer as responsabilidades
                entre as presentes partes sendo o CONTRATADO, o RODOBANK, o
                Titular e o Fit$.
              </p>
              <p className="text-gray-700 mb-4">
                10.2. A adesão a este Termo ocorrerá após os prestadores de
                serviços listados neste Termo analisarem e aprovarem as
                informações enviadas pelo Titular no momento do cadastro.
              </p>
              <p className="text-gray-700 mb-4">
                10.3. O titular está ciente de que a abertura de conta passa
                por análise interna do Contratado, do RODOBANK e do Fit$,
                considerando que o Fit$ e as demais instituições autorizadas a
                funcionar pelo Banco Central do Brasil têm como obrigação
                estipular regras e parâmetros que colaborem com a prevenção
                da utilização do Sistema Financeiro para a prática de
                irregularidades e crimes, em especial o lavagem de dinheiro,
                de acordo com critérios próprios e mediante a prerrogativa de
                manter a discricionariedade a respeito das partes com quem
                desejam manter relação comercial. A presente checagem é
                baseada nos critérios e políticas internas estabelecidas pelo
                CONTRATADO, pelo RODOBANK e pelo Fit$ de forma independente,
                sendo que as normas e critérios do Fit$ estão de acordo com as
                normas do Banco Central do Brasil, em especial a Circular Nº
                3.978 de 23/01/2020 e a Resolução Nº 96 de 2021.
              </p>
              <p className="text-gray-700 mb-4">
                10.4. Caso tenha sido oferecida pelo CONTRATADO ao Titular, a
                Conta aberta por meio deste Termo estará vinculada ao
                Contrato de Prestação de Serviços firmado entre o CONTRATADO e
                o RODOBANK, de modo que apenas os serviços contratados pelo
                CONTRATADO poderão ser disponibilizados ao Titular, os
                serviços contratados poderão utilizar a estrutura do Fit$ de
                forma parcial ou total, sendo que todas as ações realizadas
                são de responsabilidade entre o Titular e o Contratante.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                11. TARIFAS
              </h3>
              <p className="text-gray-700 mb-4">
                11.1. A Conta Digital está sujeita a cobrança de tarifas à
                título da prestação de serviços, decorrentes da abertura e da
                manutenção da Conta podendo, a exclusivo critério do
                Contratado, serem cobradas junto a Conta Digital do Titular,
                sendo o débito da tarifa efetuado de forma proporcional as
                suas ocorrências.
              </p>
              <p className="text-gray-700 mb-4">
                11.2. Referida cobrança poderá ocorrer mensalmente, como
                contraprestação por parte do Titular pela utilização da
                plataforma.
              </p>
              <p className="text-gray-700 mb-4">
                11.3. A mensalidade ocorrerá nas modalidades &quot;pré-paga&quot;
                ou &quot;pós-paga&quot;, a depender do objeto do contrato.
              </p>
              <p className="text-gray-700 mb-4">
                11.4. A cobrança da tarifa não excederá o valor que o Titular
                venha a possuir na conta no momento da cobrança. Em caso de
                saldo insuficiente, o CONTRATADO poderá cobrar o valor
                remanescente no mês subsequente, se o saldo da conta suprir a
                respectiva dívida em momento posterior.
              </p>
              <p className="text-gray-700 mb-4">
                11.5. Além da tarifa de mensalidade, o CONTRATADO poderá,
                ainda, cobrar a tarifa adicional de manutenção da conta para
                cenários de clientes inativos, podendo essa cobrança ser
                feita de forma retroativa.
              </p>
              <p className="text-gray-700 mb-4">
                11.6. Considera-se cliente inativo o Titular que não
                movimentar qualquer valor (de entrada ou de saída) por um
                determinado período. A cobrança será realizada, se aplicável,
                no primeiro dia útil de cada mês, caso ainda não haja
                movimentação da conta em tal dia.
              </p>
              <p className="text-gray-700 mb-4">
                11.7. A cobrança de tarifa somente será realizada caso a
                Conta Digital possua recursos disponíveis, de forma que o
                saldo não ficará negativo.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                12. A CONTA DO Trecho
              </h3>
              <p className="text-gray-700 mb-4">
                12.1. A Conta Digital é de titularidade exclusiva do Titular,
                podendo ser movimentada a qualquer momento.
              </p>
              <p className="text-gray-700 mb-4">
                12.2. A Conta Digital será de domicílio bancário do Fit$,
                deste modo, sempre que houver suspeita de fraude ou qualquer
                outro meio de transgressão a legislação aplicável o Fit$
                poderá realizar bloqueios em operações e conta sempre que
                achar necessário.
              </p>
              <p className="text-gray-700 mb-4">
                12.3. A Conta Digital terá um número de identificação que
                será informado ao Titular no momento da abertura, bem como
                uma senha de acesso, que não pode ser compartilhada com
                terceiros.
              </p>
              <p className="text-gray-700 mb-4">
                12.4. O Titular poderá consultar todas as movimentações de
                entrada e saída de recursos ocorridas em sua Conta, inclusive
                extratos e comprovantes, por meio da Plataforma do
                CONTRATADO, sendo que todas as movimentações serão operadas e
                avaliadas pelo Fit$.
              </p>
              <p className="text-gray-700 mb-4">
                12.5. Salvo em casos de bloqueios previstos neste Termo ou na
                Legislação Aplicável, o Titular poderá retirar, a qualquer
                momento, recursos depositados em sua Conta por meio da
                Plataforma do CONTRATADO, observados os prazos para
                disponibilização desses recursos.
              </p>
              <p className="text-gray-700 mb-4">
                12.6. O CONTRATADO, tanto quanto o Fit$ e o Rodobank poderão
                viabilizar sistemas de bloqueios voluntários para a
                movimentação do saldo da Conta, a serem configurados e
                autorizados pelo Titular, de modo a permitir maior controle
                financeiro referente aos recursos do Titular depositados na
                Conta. Esses sistemas não prejudicarão a livre movimentação do
                saldo da Conta, de modo que o Titular poderá configurar ou
                cancelar esses sistemas de bloqueios voluntários por meio da
                Plataforma do CONTRATADO.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                13. FUNCIONALIDADE DA CONTA DO Trecho
              </h3>
              <p className="text-gray-700 mb-4">
                13.1. Uma vez que os recursos estejam depositados na Conta, o
                Titular poderá utilizá-los para realizar transferências,
                pagar contas e realizar compras, inclusive por meio de Pix,
                desde que o serviço tenha sido contratado pelo CONTRATADO
                junto ao RODOBANK nos termos do Contrato de Prestação de
                Serviços. A movimentação dos recursos da Conta poderá ocorrer
                para pessoas físicas e/ou jurídicas localizadas no Brasil e
                depende da existência prévia de recursos disponíveis e
                utilizará de forma parcial ou total a infraestrutura do Fit$.
              </p>
              <p className="text-gray-700 mb-4">
                13.2. A Conta poderá ser bloqueada sem que seja permitida a
                realização de nenhuma movimentação, a qualquer momento, caso
                haja suspeita de inconsistências cadastrais, crimes
                financeiros, operações fora do seu padrão de uso e/ou
                utilização indevida que desrespeite qualquer condição
                presente neste Termo, em outras contratações realizadas com
                CONTRATADO, e/ou na legislação vigente aplicável. Nesses
                casos, a Conta somente será liberada após o esclarecimento e
                regularização da situação que motivou o bloqueio. O
                CONTRATADO fica, ainda, autorizado a compensar prejuízos
                comprovadamente causados pela Contratante ao CONTRATADO e a
                terceiros em razão de tais violações.
              </p>
              <p className="text-gray-700 mb-4">
                13.3. O CONTRATADO e o Fit$ estão autorizados a bloquear
                valores oriundos de possíveis fraudes no âmbito do arranjo de
                pagamento Pix reportados via canal MED (Mecanismo Especial de
                Devolução).
              </p>
              <p className="text-gray-700 mb-4">
                13.4. Conforme diretrizes do Banco Central do Brasil,
                incluindo a Resolução Nº 103 de 2021, o Mecanismo Especial de
                Devoluções é compreendido como o conjunto de regras e de
                procedimentos operacionais destinados a viabilizar a
                devolução de um Pix nos casos de (i) fundada suspeita do uso
                do arranjo para a prática de fraude e (ii) falha operacional
                no sistema de tecnologia da informação de qualquer dos
                participantes envolvidos na transação.
              </p>
              <p className="text-gray-700 mb-4">
                13.5. Ao aderir à Proposta/Contrato de Abertura, o Cliente
                AUTORIZA, de forma irrevogável e irretratável, o CONTRATADO,
                utilizando a infraestrutura do Fit$, a efetivar débitos em sua
                conta transacional, na hipótese de devoluções realizadas no
                âmbito do Mecanismo Especial de Devolução, contemplando,
                inclusive, a possibilidade de bloqueio dos recursos mantidos
                na conta, em uma ou mais parcelas, até o atingimento do valor
                total da transação.
              </p>
              <p className="text-gray-700 mb-4">
                13.6. As transferências para devolução dos valores poderão
                ser realizadas entre contas do CONTRATADO, ou entre contas do
                CONTRATADO e contas de pessoas físicas ou jurídicas em outras
                instituições financeiras, por meio da Plataforma do
                CONTRATADO.
              </p>
              <p className="text-gray-700 mb-4">
                13.7. Ademais, quando houver qualquer outra suspeita de
                fraude, o CONTRATADO, o RODOBANK e/ou o Fit$ poderá(ão)
                efetuar bloqueios cautelares de recursos de uma transação no
                âmbito do Pix, na conta de pagamento, que poderá durar até 72
                (setenta e duas) horas, conforme determina a Resolução Nº
                1/2020 do Banco Central do Brasil.
              </p>
              <p className="text-gray-700 mb-4">
                13.8. O CONTRATADO solicitará ao Fit$ a exclusão da chave Pix
                sem a necessidade da anuência do titular, em caso de: I -
                Encerramento da sua conta; II - Suspeita, tentativa ou
                efetivação de uso fraudulento da chave Pix; ou III -
                Identificação da necessidade de ajuste após processo de
                verificação de sincronismo de chaves, nos termos da
                regulação.
              </p>
              <p className="text-gray-700 mb-4">
                13.9. Nas transferências de recursos via Pix, para quaisquer
                de suas chaves cadastradas, a Conta será mostrada também para
                quem pretende realizar a transferência.
              </p>
              <p className="text-gray-700 mb-4">
                13.10. Com os recursos depositados na Conta, o Titular
                eventualmente também poderá pagar boletos, contas de serviços
                públicos, realizar recargas de créditos no seu celular e
                transferências por meio de plataformas e arranjos de
                terceiros, desde que contratado pelo CONTRATADO nos termos do
                Contrato de Prestação de Serviços.
              </p>
              <p className="text-gray-700 mb-4">
                13.11. O CONTRATADO não terá qualquer responsabilidade caso
                não seja possível realizar uma operação em virtude da falta
                de recursos disponíveis na Conta.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                14. PROCEDIMENTOS DE SEGURANÇA
              </h3>
              <p className="text-gray-700 mb-4">
                14.1. O Titular deverá observar as instruções de segurança
                mencionadas no presente Termo, bem como aquelas eventualmente
                encaminhadas ao Titular pela equipe de suporte do CONTRATADO.
              </p>
              <p className="text-gray-700 mb-4">
                14.2. O Titular deverá manter o seu celular em local seguro e
                com mecanismos restritivos de acesso aos seus aplicativos. É
                obrigação do Titular proteger suas senhas e PIN de acesso à
                conta do CONTRATADO, nunca as divulgando e nem permitindo o
                seu uso por terceiros. O Titular isenta o CONTRATADO e o Fit$
                de qualquer responsabilidade pelo eventual acesso não
                autorizado da conta de e-mail, aplicativo e/ou número de
                telefone do Titular.
              </p>
              <p className="text-gray-700 mb-4">
                14.3. As transações com a Conta do CONTRATADO estão sujeitas a
                mecanismos de autenticação, tais como a solicitação do
                preenchimento de código PIN, aprovação de acesso em novos
                aparelhos, entre outros.
              </p>
              <p className="text-gray-700 mb-4">
                14.4. O Titular isenta o CONTRATADO e o Fit$ de qualquer
                responsabilidade decorrente de (i) transações não realizadas
                em virtude da suspeita de crimes financeiros; (ii) transações
                realizadas por terceiros com o uso do seu PIN e/ou senhas;
                (iii) transações realizadas por terceiros não autorizados em
                decorrência da falta de informe de bloqueio imediato da sua
                Conta, após furto, roubo e/ou perda do aparelho celular do
                Titular.
              </p>
              <p className="text-gray-700 mb-4">
                14.5. Em observância ao dever de boa-fé e cooperação mútua, o
                Titular deverá comunicar imediatamente ao CONTRATADO a
                ocorrência de qualquer furto, roubo e/ou perda de seu celular
                com acesso à sua Conta do CONTRATADO, por meio dos canais de
                atendimento{" "}
                <Link
                  href="mailto:c.atendimento@rodobank.com.br"
                  className="text-blue-600 hover:underline"
                >
                  c.atendimento@rodobank.com.br
                </Link>{" "}
                ou 4003 8658 e 0800 888 1051, para que o CONTRATADO
                providencie a revogação do acesso à sua Conta.
              </p>
              <p className="text-gray-700 mb-4">
                14.6. Caso não seja observado o dever de comunicação previsto
                acima, o Titular poderá ser responsabilizado pelas operações
                realizadas por terceiros.
              </p>
              <p className="text-gray-700 mb-4">
                14.7. Como medida de segurança, caso o Titular decida utilizar
                outro smartphone que não aquele previamente utilizado para
                download do aplicativo, o CONTRATADO poderá solicitar que o
                Titular confirme algumas informações com a finalidade de
                garantir a sua segurança. Caso o CONTRATADO entenda que não
                houve o atendimento das informações de forma correta a
                garantir sua identidade, poderá não autorizar a utilização do
                aplicativo no novo aparelho, e/ou até mesmo bloquear o Cartão
                preventivamente.
              </p>
              <p className="text-gray-700 mb-4">
                14.8. O Titular deverá manter seu e-mail sempre atualizado
                para que o CONTRATADO possa realizar procedimentos de
                segurança necessários à prestação dos serviços. O CONTRATADO
                poderá solicitar confirmações a fim de garantir a
                legitimidade do acesso.
              </p>
              <p className="text-gray-700 mb-4">
                14.9. O Titular deverá conferir todas as despesas lançadas em
                sua Conta. Caso discorde de algum lançamento, o Titular
                poderá questioná-lo, no prazo de até 90 (noventa) dias,
                contados da data do processamento da transação. As transações
                contestadas estão sujeitas às regras de resolução de disputa
                instituídas pela bandeira do Cartão na Função Débito.
                Eventuais valores contestados não estarão sujeitos a
                remuneração nos termos deste Contrato.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                15. ALTERAÇÕES CONTRATUAIS
              </h3>
              <p className="text-gray-700 mb-4">
                15.1. A proposta de adesão e as comunicações enviadas ao
                Titular pelo CONTRATADO integram e integrarão este Termo. Os
                regulamentos relativos a eventuais campanhas promocionais,
                programas de incentivo e outros programas que propiciem
                benefícios adicionais à Conta serão divulgados separadamente.
              </p>
              <p className="text-gray-700 mb-4">
                15.2. O CONTRATADO poderá alterar quaisquer condições deste
                Termo, mediante prévia notificação, por escrito, com
                antecedência mínima de 15 (quinze) dias, para adaptar o Termo
                às alterações legislativas ou econômicas relevantes. Caso o
                Titular não concorde com as alterações realizadas pelo
                CONTRATADO, poderá imediatamente solicitar o cancelamento da
                Conta junto ao CONTRATADO, rescindindo este Termo.
              </p>
              <p className="text-gray-700 mb-4">
                15.3. O não cancelamento ou o uso da Conta após comunicação da
                alteração implica no aceite do Titular quanto às novas
                condições do Termo.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                16. PRAZO E TÉRMINO
              </h3>
              <p className="text-gray-700 mb-4">
                16.1. Este Termo terá início na data da sua adesão, vigerá por
                prazo indeterminado e obriga as partes, seus herdeiros e
                sucessores.
              </p>
              <p className="text-gray-700 mb-4">
                16.2. Este Termo poderá ser rescindido e a Conta poderá ser
                encerrada nas seguintes hipóteses:
              </p>
              <ul className="list-none text-gray-700 mb-4 space-y-3">
                <li>
                  <strong>(i)</strong> Pelo Titular, mediante comunicação ao
                  CONTRATADO, o que poderá ser feito a qualquer momento e sem
                  a necessidade de especificar o motivo;
                </li>
                <li>
                  <strong>(ii)</strong> Pela rescisão ou término do prazo de
                  vigência do Contrato de Prestação de Serviços firmado entre
                  o CONTRATANTE e o CONTRATADO;
                </li>
                <li>
                  <strong>(iii)</strong> Pelo CONTRATADO, mediante
                  comunicação ao Titular, por escrito, com 5 (cinco) dias de
                  antecedência, o que poderá ser feito a qualquer momento e
                  sem a necessidade de especificar o motivo, desde que
                  observado o prévio aviso;
                </li>
                <li>
                  <strong>(iv)</strong> Pelo CONTRATADO, a seu critério, com
                  efeitos imediatos, caso:
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                    <li>
                      a. A Conta ou seu Cartão (se o Titular for portador de
                      um) seja utilizada em desconformidade com as
                      disposições dos instrumentos que o Titular tem firmados
                      com o CONTRATADO;
                    </li>
                    <li>
                      b. Não haja movimentação na Conta no prazo de 6 (seis)
                      meses consecutivos, podendo o cancelamento da Conta ser
                      realizado sem que haja autorização do Titular ou do
                      CONTRATADO;
                    </li>
                    <li>
                      c. Existam restrições cadastrais ou creditícias em nome
                      do titular da conta do CONTRATADO;
                    </li>
                    <li>
                      d. Sejam verificadas irregularidades nas informações
                      prestadas pelo Titular;
                    </li>
                    <li>
                      e. Sejam verificadas: operações fora do seu padrão de
                      uso; suspeitas de crimes financeiros; inconsistências
                      cadastrais; utilização indevida que desrespeite
                      qualquer condição presente neste Termo, em outras
                      contratações realizadas entre o Titular e o CONTRATADO,
                      ou na Legislação Aplicável; e/ou caso o Titular deixe de
                      atender pedido de envio de novos documentos para a
                      comprovação da sua identidade e renda;
                    </li>
                    <li>
                      f. A análise inicial cadastral não seja satisfatória,
                      por discricionariedade do CONTRATADO ou do Fit$;
                    </li>
                    <li>
                      g. Ocorra uso não autorizado de propriedade intelectual
                      do CONTRATADO;
                    </li>
                    <li>
                      h. O Titular utilize palavras ou materiais ofensivos no
                      relacionamento com o CONTRATADO ou seus representantes;
                      ou
                    </li>
                    <li>
                      i. Ocorra o falecimento, interdição judicial ou
                      insolvência do Titular.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                16.3. O encerramento da Conta está condicionado ao resgate
                total dos recursos, sendo que o Titular autoriza o
                CONTRATADO a realizar o resgate antecipado de quaisquer
                aplicações e produtos financeiros mantidos no CONTRATADO.
                Caso ocorra o encerramento imediato da sua Conta por parte do
                CONTRATADO, o Titular deverá enviar seus dados bancários o
                quanto antes para a devolução dos recursos depositados,
                deduzidas eventuais tarifas devidas pelo Titular ao
                CONTRATADO.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                17. PROPRIEDADE INTELECTUAL
              </h3>
              <p className="text-gray-700 mb-4">
                17.1. O Titular se compromete a não violar, reproduzir,
                imitar, total ou parcialmente, qualquer propriedade
                intelectual do CONTRATADO, bem como a não utilizar qualquer
                propriedade intelectual do CONTRATADO para finalidades além
                das previstas neste Contrato e permitidas por lei.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                18. TRATAMENTO DE DADOS
              </h3>
              <p className="text-gray-700 mb-4">
                18.1. O CONTRATADO realiza o tratamento dos dados do Titular
                de acordo com sua Política de Privacidade, a qual pode ser
                consultada a qualquer momento pelo Titular no endereço
                eletrônico:{" "}
                <Link
                  href="https://www.grupodecio.com.br"
                  className="text-blue-600 hover:underline"
                >
                  www.grupodecio.com.br
                </Link>
                .
              </p>
              <p className="text-gray-700 mb-4">
                18.2. O titular da conta autoriza o CONTRATADO, o RODOBANK e o
                Fit$ a ter acesso aos seus dados pessoais para fins única e
                exclusivamente de utilização dos serviços estabelecidos em
                contrato, consentimento este que pode ser revogado a qualquer
                tempo por parte do Titular.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                19. DISPOSIÇÕES GERAIS
              </h3>
              <p className="text-gray-700 mb-4">
                19.1. O Titular declara que todas as informações fornecidas
                no momento da abertura da Conta e de sua ativação são
                verídicas. O Titular manterá o CONTRATADO sempre informado a
                respeito de quaisquer alterações nos seus dados cadastrais.
                Será de inteira responsabilidade do Titular todas as
                consequências decorrentes do descumprimento dessa obrigação.
                Além disso, o CONTRATADO, discricionariamente, poderá
                solicitar a atualização dos dados do Titular sempre que
                entender necessário ou quando a legislação vigente aplicável
                assim exigir. O CONTRATADO ou o Fit$ poderá realizar o
                bloqueio temporário da Conta caso entenda que não houve o
                cumprimento das obrigações previstas nesta cláusula.
              </p>
              <p className="text-gray-700 mb-4">
                19.2. Em caso de atraso, o Titular autoriza o CONTRATADO a
                realizar o débito em conta ou saque de aplicações
                financeiras, total ou parcialmente, para fins de pagamento de
                valores devidos pelo Titular ao CONTRATADO. Também poderá o
                CONTRATADO, em caso de atraso, a seu critério, suspender ou
                bloquear outros serviços prestados ao Titular pelo CONTRATADO
                ou por outras empresas de seu grupo, até o efetivo pagamento
                da dívida.
              </p>
              <p className="text-gray-700 mb-4">
                19.3. Caso a Conta não apresente saldo disponível, o
                CONTRATADO poderá realizar, a seu critério, resgate de suas
                aplicações financeiras, para amortização ou liquidação do
                saldo devedor relacionado a este Termo. Qualquer resgate ou
                saque de valores das aplicações indicadas neste item será
                creditado na conta escolhida para pagamento. Qualquer
                aplicação futura que o Titular venha a fazer no CONTRATADO
                integrará a autorização prevista neste item.
              </p>
              <p className="text-gray-700 mb-4">
                19.4. O CONTRATADO poderá contatar o Titular por qualquer
                meio, inclusive telefônico, e-mail, SMS, WhatsApp e
                correspondência, para enviar comunicações a respeito da Conta
                e outras finalidades. O Titular poderá cancelar, a qualquer
                momento, o recebimento de notificações não obrigatórias.
              </p>
              <p className="text-gray-700 mb-4">
                19.5. O Titular declara reconhecer que a utilização de
                determinadas funcionalidades da Conta, bem como a existência
                de uma remuneração sobre os saldos, implica no pagamento de
                impostos, que serão integralmente pagos pelo Titular ou
                retidos antes da disponibilização dos recursos.
              </p>
              <p className="text-gray-700 mb-4">
                19.6. Fica eleito o Foro da Comarca da Capital do Estado de
                Rondônia para dirimir quaisquer questões relativas ao
                presente Termo, sem prejuízo de o Titular optar pelo foro de
                seu domicílio.
              </p>
              <p className="text-gray-700 mb-4">
                19.7. Para solução de eventuais conflitos relacionados a este
                Termo, para pedidos de cancelamento, reclamações e sugestões,
                o Titular poderá entrar em contato com o CONTRATADO através
                dos seguintes canais de atendimento{" "}
                <Link
                  href="mailto:c.atendimento@rodobank.com.br"
                  className="text-blue-600 hover:underline"
                >
                  c.atendimento@rodobank.com.br
                </Link>{" "}
                ou 4003 8658 e 0800 888 1051.
              </p>
              <p className="text-gray-700 mb-4">
                19.8. O Titular afirma e declara que o presente Termo poderá
                ser assinado por meio eletrônico, sendo consideradas válidas
                as referidas assinaturas, nos termos da Medida Provisória Nº
                2200-2/2001, sendo certo, inclusive, que a adesão eletrônica
                ao Termo por meio do aceite eletrônico deve ser considerada
                como assinatura para os fins do presente Termo.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p className="text-gray-800 font-medium">
                  Declaro que li, entendi e concordei com as disposições
                  previstas neste Termo.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
