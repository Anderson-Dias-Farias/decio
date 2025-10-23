import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidade Externo - Grupo Decio",
  description:
    "Aviso de Privacidade Externo do Grupo Decio. Conheça como tratamos seus dados pessoais e seus direitos.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AvisoPrivacidade() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Aviso de Privacidade Externo
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Data da última atualização:</strong> 06 de agosto de 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. INTRODUÇÃO
              </h2>
              <p className="text-gray-700 mb-4">
                Nós, da DECIO HOLDING S/A e demais afiliadas, subsidiárias e
                empresas integrantes do grupo econômico (&quot;Grupo Decio&quot;
                ou &quot;Grupo&quot;), em sintonia com os nossos valores de
                Ética e Comprometimento, desejamos cultivar a relação de
                Confiança e Transparência com aqueles que interagem conosco,
                como nossos Clientes, Fornecedores, Parceiros e Candidatos que
                aplicam às nossas vagas, assim como todos os demais Titulares
                que possuam qualquer tipo de relação conosco (&quot;Você&quot;),
                em especial, no que se refere às práticas relacionadas à
                privacidade e a proteção dos seus Dados Pessoais, que são
                prioridades essenciais para o Grupo.
              </p>
              <p className="text-gray-700 mb-4">
                Com esse propósito, elaboramos o presente Aviso de Privacidade
                (&quot;Aviso&quot;) para apoiá-lo na compreensão das nossas
                práticas referentes ao tratamento (coleta, armazenamento,
                compartilhamento etc.) de seus dados pessoais. Aqui,
                forneceremos ainda informações sobre os seus direitos em relação
                a esses dados e como exercê-los junto ao Grupo Decio.
              </p>
              <p className="text-gray-700 mb-4">
                Todas as informações que você nos fornece são tratadas de acordo
                com os limites estabelecidos no presente documento. Em caso de
                dúvidas relacionadas ao conteúdo deste documento,
                disponibilizamos o canal de atendimento apropriado ao final
                deste Aviso. Por favor, não hesite em nos contatar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. O QUE VOCÊ PRECISA SABER ANTES DE LER ESTE AVISO?
              </h2>
              <p className="text-gray-700 mb-4">
                Para que você consiga compreender completamente este Aviso,
                indicamos abaixo alguns termos e conceitos importantes, sendo
                eles:
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Autoridade Nacional de Proteção de Dados (ANPD)
                </h3>
                <p className="text-gray-700 mb-2">
                  é o órgão público pertencente à administração pública federal,
                  responsável pela regulamentação, fiscalização e aplicação de
                  penalidades administrativas, relacionadas à proteção de Dados
                  Pessoais.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Dados Pessoais
                </h3>
                <p className="text-gray-700 mb-2">
                  qualquer informação relativa a uma pessoa física identificada
                  ou identificável; é considerada identificável uma pessoa que
                  possa ser identificada, direta ou indiretamente, em especial
                  por referência a um identificador, como um nome, um número de
                  identificação, identificadores por via eletrônica, dentre
                  outras informações que lhe identifiquem ou permitam a sua
                  identificação.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Dados Pessoais Sensíveis
                </h3>
                <p className="text-gray-700 mb-2">
                  são quaisquer Dados Pessoais que digam respeito à origem
                  racial ou étnica, convicção religiosa, opinião política,
                  filiação a sindicato ou à organização de caráter religioso,
                  filosófico ou político, bem como dado referente à saúde ou à
                  vida sexual, dado genético ou biométrico.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Encarregado
                </h3>
                <p className="text-gray-700 mb-2">
                  o Encarregado pelo Tratamento de Dados Pessoais do Grupo Decio
                  é o principal responsável indicado para atuar como canal de
                  comunicação com você e com a ANPD.
                </p>
                <p className="text-gray-700 mb-2">
                  O Encarregado pelo Tratamento de Dados Pessoais do Grupo Decio
                  é o Sr.
                  <strong> Edmundo Souza Macedo Filho</strong>, brasileiro,
                  administrador, inscrito no CPF 040.077.406-23, com endereço
                  profissional na Av. Rondon Pacheco, nº 4.600, Ed. Uberlândia
                  Bussiness Tower – UBT, 25º Andar, CEP: 38.405-142, na cidade
                  de Uberlândia/MG.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Terceiros
                </h3>
                <p className="text-gray-700 mb-2">
                  toda e qualquer pessoa física ou jurídica que o Grupo Decio se
                  relacione ou venha a se relacionar, prestador de serviços,
                  fornecedor, consultor, parceiro, terceiro contratado ou
                  subcontratado.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Titular
                </h3>
                <p className="text-gray-700 mb-2">
                  pessoa física a quem se referem os dados pessoais.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Tratamento
                </h3>
                <p className="text-gray-700 mb-2">
                  qualquer atividade realizada com Dados Pessoais, como coleta,
                  recepção, classificação, utilização, acesso, reprodução,
                  transmissão, distribuição, processamento, arquivamento,
                  armazenamento, eliminação, avaliação ou controle da
                  informação, modificação, atualização, comunicação,
                  transferência, compartilhamento e extração.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. QUE TAL UM RESUMO DAS INFORMAÇÕES MAIS RELEVANTES?
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  QUEM TRATARÁ OS SEUS DADOS PESSOAIS?
                </h3>
                <p className="text-blue-700">
                  A DECIO HOLDING S/A, suas afiliadas, subsidiárias e demais
                  empresas integrantes (&quot;Grupo Decio&quot; ou
                  &quot;Grupo&quot;) compõem um Grupo focado no segmento de
                  distribuição e comercialização de combustíveis, que busca
                  atender clientes e parceiros por meio de soluções completas e
                  experiências únicas, sempre motivados por seus valores tais
                  como Ética, Comprometimento e Competência.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  COMO COLETAMOS SEUS DADOS PESSOAIS?
                </h3>
                <p className="text-green-700">
                  As informações que tratamos a seu respeito podem ter sido
                  fornecidas diretamente por Você ao Grupo Decio, por Terceiros
                  ou mesmo coletadas de forma automática através de nosso site e
                  outros canais.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  QUAIS DADOS PODEM SER TRATADOS?
                </h3>
                <p className="text-yellow-700">
                  Nome completo, data de nascimento, filiação, nacionalidade,
                  estado civil, gênero, RG, CPF, CNH, assinatura, endereço
                  residencial, cep, telefone fixo ou celular, e-mails pessoal
                  e/ou profissional, nome de usuário em aplicativos/rede social,
                  fotos em redes sociais, comprovante de renda, conta corrente e
                  agência bancária, informes de rendimentos, histórico de
                  pagamentos, score e consulta de crédito, perfil de consumo ou
                  profissional, histórico de uso de redes sociais, endereço de
                  IP, sistema operacional, tipo de navegador, data e hora do
                  acesso e páginas vistas através de cookies, imagens e vídeos
                  captados por videomonitoramento em nossas unidades, formação,
                  histórico escolar/acadêmico, idiomas, qualificações e
                  certificações, experiência profissional, função, profissão.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  POR QUE PRECISAMOS DOS SEUS DADOS PESSOAIS?
                </h3>
                <ul className="text-purple-700 list-disc list-inside space-y-1">
                  <li>
                    Atender a finalidade para a qual o dado foi fornecido e
                    entregar os nossos serviços
                  </li>
                  <li>Para podermos nos comunicar com Você</li>
                  <li>Cumprir com nossas obrigações legais ou regulatórias</li>
                  <li>Permitir o exercício regular de nossos direitos</li>
                  <li>Viabilizar atividades necessárias à nossa Organização</li>
                  <li>
                    Executar um contrato que Você tenha celebrado conosco ou
                    realizar diligências précontratuais
                  </li>
                  <li>Recrutamento e seleção</li>
                  <li>Evitar fraudes e zelar pela sua segurança</li>
                  <li>Realizar análise de crédito</li>
                  <li>Publicidade</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  POR QUANTO TEMPO OS SEUS DADOS SERÃO MANTIDOS?
                </h3>
                <p className="text-red-700">
                  Nós armazenamos os seus Dados Pessoais pelo tempo necessário
                  para atingir as finalidades para as quais eles foram
                  coletados. Quando possível, manteremos os Dados Pessoais de
                  forma anonimizada, respeitando o mais alto nível de cuidado e
                  segurança de mercado.
                </p>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                  QUANDO SEUS DADOS PESSOAIS PODERÃO SER COMPARTILHADOS?
                </h3>
                <p className="text-indigo-700">
                  Nós poderemos compartilhar seus Dados Pessoais com Terceiros
                  para que seja possível atingir as finalidades para as quais
                  eles foram coletados. Ainda, poderá haver compartilhamento
                  quando necessário para o atendimento de requisições de
                  autoridades judiciárias ou cumprimento de obrigações legais ou
                  regulatórias.
                </p>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-4">
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  COMO EXERCER SEUS DIREITOS ENQUANTO TITULAR DE DADOS PESSOAIS?
                </h3>
                <p className="text-pink-700">
                  Nos comprometemos com o cumprimento de todos os seus direitos
                  enquanto Titular. Por isso, possuímos um canal de comunicação
                  para resolver quaisquer dúvidas, sugestões ou solicitações
                  voltadas ao Tratamento dos Dados Pessoais coletados.
                </p>
                <p className="text-pink-700 mt-2">
                  Entre em contato com o nosso Encarregado pelo Tratamento de
                  Dados Pessoais, Edmundo Souza Macedo Filho, por meio do
                  e-mail:{" "}
                  <Link
                    href="mailto:encarregado.dpo@grupodecio.com.br"
                    className="text-blue-600 hover:underline"
                  >
                    encarregado.dpo@grupodecio.com.br
                  </Link>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. QUAIS DADOS PESSOAIS SEUS NÓS TRATAMOS?
              </h2>
              <p className="text-gray-700 mb-4">
                Com o propósito de respeitar a sua privacidade, entendemos que
                todo e qualquer Tratamento de Dados Pessoais deve ser limitado
                ao mínimo necessário, pertinente e proporcional para permitir
                que seja realizada a finalidade pretendida. Por isso, os Dados
                Pessoais que coletamos a seu respeito irão variar conforme a
                relação que você opte por estabelecer conosco, ou seja, de
                cliente, consumidor, fornecedor, prestador de serviço,
                parceiros, dentre outras.
              </p>

              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    1) Dados cadastrais
                  </h3>
                  <p className="text-gray-700">
                    Nome completo, Data de nascimento, Filiação, Nacionalidade,
                    Estado Civil, Gênero, RG, CPF, CNH, assinatura.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    2) Dados de contato
                  </h3>
                  <p className="text-gray-700">
                    Endereço residencial, CEP, Telefone fixo ou celular, Emails
                    pessoal e/ou profissional.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    3) Dados de identificação em redes sociais
                  </h3>
                  <p className="text-gray-700">
                    Nome de Usuário em Aplicativos/Rede Social, Fotos em redes
                    sociais.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    4) Dados financeiros
                  </h3>
                  <p className="text-gray-700">
                    Comprovante de renda, Conta corrente e Agência bancária,
                    Informes de Rendimentos, Histórico de Pagamentos, Score e
                    consulta de crédito.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    5) Dados comportamentais
                  </h3>
                  <p className="text-gray-700">
                    Perfil de consumo ou profissional, Histórico de uso de redes
                    sociais.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    6) Atributos associados aos seus dispositivos eletrônicos
                  </h3>
                  <p className="text-gray-700">
                    Endereço de IP, Sistema operacional, Tipo de navegador, Data
                    e hora do acesso e páginas vistas através de cookies.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    7) Dados de imagem
                  </h3>
                  <p className="text-gray-700">
                    Imagens e vídeos captados por videomonitoramento em nossas
                    unidades.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    8) Dados sobre a propriedade rural
                  </h3>
                  <p className="text-gray-700">
                    Área Total; Área Agricultável (plantada); Número do CAR;
                    Número das matrículas de imóveis relacionadas ao CAR;
                    Verificação da Cultura plantada e data do plantio; Lat Long
                    dentro de um ponto na propriedade; Tipo de Solo; Clima;
                    Relevo em % (Plano, Suave Ondulado, Ondulado); Alerta de
                    desmatamento; (DAP)
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    9) Dados sobre o cadastro de produtores rurais com tradings
                    de grãos
                  </h3>
                  <p className="text-gray-700">
                    Nome do produtor, CNPJ/CPF, informações de registro junto à
                    trading, quantidade e tipo de grãos comercializados,
                    histórico de transações com tradings, e dados relativos a
                    contratos firmados com tradings de grãos.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  No que se refere a dados de candidatos às nossas vagas,
                  podemos tratar as seguintes informações:
                </h3>

                <div className="grid gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">
                      10) Dados cadastrais
                    </h4>
                    <p className="text-blue-700">
                      Nome completo, Data de Nascimento, Idade, Estado Civil.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">
                      11) Dados de contato
                    </h4>
                    <p className="text-blue-700">
                      Endereço residencial, Telefone, Telefone Celular, E-mail.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">
                      12) Dados profissionais
                    </h4>
                    <p className="text-blue-700">
                      Formação, Histórico Escolar/Acadêmico, Idiomas,
                      Qualificações e Certificações, Experiência Profissional,
                      Função, Profissão.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. COMO COLETAMOS OS SEUS DADOS PESSOAIS?
              </h2>
              <p className="text-gray-700 mb-4">
                As informações que tratamos a seu respeito podem ter sido
                fornecidas diretamente por você ao Grupo Decio, por Terceiros ou
                mesmo coletadas de forma automática através de nosso site
                (https://www.grupodecio.com.br/) e outros canais.
              </p>

              <div className="grid gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    5.1. Fornecidas diretamente por Você
                  </h3>
                  <p className="text-green-700">
                    Desde o início da sua interação conosco, você
                    voluntariamente nos disponibiliza informações a seu
                    respeito. Por exemplo, quando nos contata por meio das redes
                    sociais ou dos nossos canais de atendimento (ex: Chatbot
                    &quot;Fale com o Decinho&quot;), quando do acesso para
                    conhecer os produtos e serviços ofertados pelo Grupo; ou,
                    ainda, quando se cadastra para participação em processo
                    seletivo em nosso site.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    5.2. Obtidas de Terceiros
                  </h3>
                  <p className="text-yellow-700">
                    Em casos específicos, nós também poderemos receber alguns
                    Dados Pessoais seus através de Terceiros. Por exemplo,
                    informações disponibilizadas por contratados do Grupo Decio
                    (como por exemplo consultores), por prestadores de serviços,
                    por fornecedores que nos auxiliam a oferecer produtos e
                    serviços a você, ou, ainda, em decorrência da ocorrência de
                    serviços creditícios, provenientes da Serasa Experian, por
                    exemplo.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">
                    5.3. Automaticamente
                  </h3>
                  <p className="text-purple-700">
                    Em algumas situações, também poderemos coletar Dados
                    Pessoais automaticamente dos dispositivos que você utiliza
                    para acessar o nosso site. Essas informações nos auxiliam a
                    gerar estatísticas de acesso e, assim, conhecer melhor o
                    nosso público. Isso é importante para que possamos
                    aperfeiçoar o nosso site cada vez mais e adequá-lo ao maior
                    público possível. Alguns desses dados podem ser coletados
                    por meio de cookies ou tecnologias similares, conforme
                    explicaremos em tópico próprio abaixo.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    5.4. Disponíveis publicamente
                  </h3>
                  <p className="text-red-700">
                    Há, também, a possibilidade de coletarmos informações suas
                    que se encontrem disponibilizadas publicamente, incluindo,
                    mas não se limitando a, mídias sociais (como, Instagram,
                    Facebook, LinkedIn, TikTok etc.) e bases de dados de órgãos
                    públicos (por exemplo, Receita Federal).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. PARA QUE UTILIZAMOS AS SUAS INFORMAÇÕES?
              </h2>
              <p className="text-gray-700 mb-4">
                Os Dados Pessoais que coletamos podem ser utilizadas conforme
                descrito abaixo:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Atender a finalidade para a qual o dado foi fornecido e
                    entregar os nossos serviços
                  </h3>
                  <p className="text-blue-700">
                    Tratamos seus Dados Pessoais para viabilizar a finalidade
                    para a qual os dados foram coletados ou para outras
                    finalidades compatíveis a estas. Por exemplo, quando do
                    contato em nossos canais de atendimento ou caso tenha
                    interesse em participar de alguma de nossas campanhas
                    promocionais.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Comunicação
                  </h3>
                  <p className="text-green-700">
                    Poderemos tratar seus Dados Pessoais para responder suas
                    solicitações ou demais interações conosco, como por e-mail,
                    chat ou outros canais. Encaminhar avisos relevantes sobre
                    nossas atividades, como mudanças de endereço e configuração
                    societária. Encaminhar atualizações que impactem o seu
                    relacionamento conosco em respeito à transparência, por
                    exemplo atualizações deste Aviso de Privacidade.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Cumprir com nossas obrigações legais ou regulatórias
                  </h3>
                  <p className="text-yellow-700">
                    Seus Dados Pessoais poderão ser utilizados para o
                    atendimento das nossas obrigações dispostas em lei e/ou
                    regulações de órgãos governamentais e de ordens ou
                    requisições de autoridades fiscais, Poder Judiciário e/ou
                    outra autoridade competente. Por exemplo, podemos tratar
                    Dados Pessoais para emissão de Notas Fiscais.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">
                    Permitir o exercício regular de nossos direitos
                  </h3>
                  <p className="text-purple-700">
                    Mesmo após o término da sua relação conosco, nós poderemos
                    tratar alguns de seus Dados Pessoais para exercer nossos
                    direitos garantidos em lei, inclusive como prova em
                    processos judiciais, administrativos ou arbitrais.
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                    Viabilizar atividades necessárias à nossa Organização
                  </h3>
                  <p className="text-indigo-700">
                    Com base no nosso legítimo interesse, também poderemos
                    tratar os seus Dados Pessoais em atividades como:
                    comunicação e marketing, melhorias de nossos produtos e
                    serviços, relacionamento com nossos clientes e parceiros,
                    análises e relatórios de desempenho do Grupo e consultas
                    internas.
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">
                    Executar um contrato que Você tenha celebrado conosco ou
                    realizar diligências pré-contratuais
                  </h3>
                  <p className="text-pink-700">
                    Caso você seja parte em um contrato com o Grupo Decio, ou
                    represente uma empresa em uma contratação, iremos tratar
                    seus dados para a celebração e execução do contrato, por
                    exemplo, para assegurar a realização do trabalho e do
                    respectivo pagamento. Ainda, os dados serão tratados para a
                    manutenção de nossas relações comerciais com clientes,
                    parceiros, fornecedores e outros.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Recrutamento e seleção
                  </h3>
                  <p className="text-red-700">
                    Nós divulgamos nossas vagas disponíveis em nosso site e
                    recebemos currículos preferencialmente em nossos canais
                    digitais, tais como vagas@grupodecio.com.br. Nessas
                    situações, nós iremos tratar seus Dados Pessoais para
                    analisar seu currículo, verificar as suas competências,
                    informações curriculares e se você atende aos requisitos
                    específicos da vaga para a qual você candidatou, bem como
                    para dar seguimento ao processo seletivo, quando for o caso,
                    em situações como contato por telefone ou e-mail e
                    agendamento de entrevistas.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">
                    Evitar fraudes e zelar pela sua segurança
                  </h3>
                  <p className="text-orange-700">
                    Poderemos tratar os seus Dados Pessoais para zelar pela sua
                    segurança (e de Terceiros) e para evitar fraudes de
                    identificação, em especial durante o seu acesso ao nosso
                    site institucional e sistemas internos ou em situações de
                    ingresso ou visita às nossas dependências
                    (videomonitoramento).
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">
                    Análise e Proteção ao crédito
                  </h3>
                  <p className="text-teal-700">
                    Para fins de análise de crédito e proteção de crédito,
                    informamos que a nossa empresa poderá tratar os dados
                    pessoais fornecidos por você. Esses dados serão utilizados
                    para avaliar a sua capacidade de crédito e gerenciar riscos
                    relacionados às atividades do Grupo.
                  </p>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyan-800 mb-2">
                    Publicidade
                  </h3>
                  <p className="text-cyan-700">
                    Por fim, poderemos utilizar os seus Dados Pessoais para
                    criar segmentações de públicos-alvo e, assim, promover de
                    forma mais adequada conteúdos atualizados de campanhas de
                    marketing do Grupo Decio. Nesta hipótese, a opção de
                    exclusão de cadastro da nossa base estará sempre disponível
                    ao final de cada comunicação que encaminharmos, sendo
                    facultado a possibilidade de escolha em relação ao
                    recebimento de informações como ofertas e novidades do Grupo
                    Decio. Podemos também utilizar seu nome e imagem, desde que
                    previamente autorizados, em postagens sobre o Grupo Decio em
                    redes sociais.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. O QUE SÃO COOKIES E COMO OS UTILIZAMOS?
              </h2>
              <p className="text-gray-700 mb-4">
                Cookies são arquivos de texto que podem ser armazenadas em seus
                dispositivos eletrônicos quando você visita o nosso site. O
                Grupo Decio utiliza-se desta ferramenta para diferentes
                finalidades, como gerar estatísticas de acesso, aprimorar a sua
                experiência em nossas interfaces/domínios, dentre outras.
              </p>

              <div className="grid gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Necessários/Essenciais
                  </h3>
                  <p className="text-red-700">
                    São cookies essenciais para viabilizar o adequado
                    funcionamento do nosso site, assim como para permitir que
                    você faça uso de todas as funcionalidades disponíveis.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Desempenho/Análise
                  </h3>
                  <p className="text-blue-700">
                    São cookies que nos ajudam a entender como os visitantes
                    interagem com o nosso site, fornecendo informações sobre as
                    áreas visitadas, o tempo de visita ao site e quaisquer
                    problemas eventualmente encontrados.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Funcionais
                  </h3>
                  <p className="text-green-700">
                    São cookies que nos permitem lembrar das suas escolhas
                    anteriores, como idioma de navegação. São responsáveis por
                    proporcionar uma experiência personalizada.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Marketing/Publicidade
                  </h3>
                  <p className="text-yellow-700">
                    São cookies utilizados para fornecer mais conteúdo relevante
                    e específico para os seus interesses. Podem, ainda, ser
                    utilizados para apresentar publicidade com um maior
                    direcionamento ou limitar o número que esta é veiculada.
                    Também permitem a medição da eficácia de uma campanha
                    lançada.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-4">
                <p className="text-orange-800">
                  <strong>Importante:</strong> Os cookies necessários são
                  essenciais para o normal funcionamento do nosso site, sendo
                  que a oposição à utilização desta ferramenta poderá implicar
                  na inutilização de sua experiência ou na suspensão de seu
                  acesso. Para maiores detalhes sobre cookies, acesse o{" "}
                  <Link
                    href="/aviso-cookies"
                    className="text-blue-600 hover:underline"
                  >
                    Aviso de Cookies específico
                  </Link>{" "}
                  aqui.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. COM QUEM COMPARTILHAMOS OS SEUS DADOS PESSOAIS?
              </h2>
              <p className="text-gray-700 mb-4">
                É possível que o Grupo Decio realize o uso compartilhado de seus
                Dados Pessoais, caso em que estará restrito ao mínimo adequado e
                necessário para o cumprimento de alguma das finalidades
                específicas e previamente informadas a Você neste Aviso. Assim,
                poderemos compartilhar seus dados com Terceiros nas seguintes
                situações:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  quando se tratar de empresa integrante do grupo da qual o
                  Grupo Decio faça parte e empresas afiliadas, com o intuito de
                  possibilitar o alcance dos resultados de nossas pesquisas e a
                  consequente divulgação destes indicadores;
                </li>
                <li>
                  parceiros de negócio e prestadoras de serviço, para viabilizar
                  a atuação de canais de comunicação e de marketing, bem como
                  fornecimento de estrutura necessárias à viabilidade de nossos
                  serviços;
                </li>
                <li>
                  com autoridades administrativas e judiciais quando necessário
                  para cumprimento de obrigação legal ou para auxiliar na
                  investigação de atividades suspeitas ou ilegais; e
                </li>
                <li>
                  com assessorias jurídicas e outros representantes legais
                  quando necessário para defender os interesses do Grupo Decio
                  em procedimentos administrativos, arbitrais ou judiciais.
                </li>
                <li>
                  Com fornecedores e parceiros, se necessário para o exercício
                  das nossas atividades. Para esse compartilhamento são
                  estabelecidos direitos e deveres entre as partes através de
                  contratos ou convênios, de forma a garantir o cumprimento das
                  legislações aplicáveis.
                </li>
              </ul>

              <p className="text-gray-700 mb-4">
                Quando realizamos o compartilhamento de seus Dados Pessoais nas
                situações acima, nós utilizamos de instrumentos contratuais para
                assegurar que qualquer Terceiro que os receba garanta a eles a
                proteção adequada. Nas situações em que o compartilhamento for
                com um Terceiro localizado fora do Brasil, será adotada uma das
                hipóteses legais de transferência internacional autorizada pela
                legislação.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. POR QUANTO TEMPO ARMAZENAMOS SEUS DADOS PESSOAIS?
              </h2>
              <p className="text-gray-700 mb-4">
                Reteremos seus Dados Pessoais pelo tempo que for necessário para
                cumprir a finalidade para a qual foram coletados, a menos que um
                período de retenção mais longo seja necessário para cumprir
                obrigações legais, resguardar nossos direitos ou cumprir acordos
                judiciais/extrajudiciais. Para determinar o período de retenção
                de seus dados, nos baseamos nos seguintes critérios:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Se temos uma obrigação legal, contratual ou outra de reter
                  Dados Pessoais, ou se são necessários para fins de
                  investigação ou litígio; e
                </li>
                <li>
                  Se são necessários para manter registros comerciais e
                  financeiros precisos.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. COMO PROTEGEMOS OS SEUS DADOS PESSOAIS?
              </h2>
              <p className="text-gray-700 mb-4">
                Temos políticas e protocolos internos que determinam como os
                Dados Pessoais devem ser tratados pelo Grupo Decio. Essas normas
                têm como objetivo garantir o Tratamento adequado e lícito dos
                dados pessoais que detemos, inclusive dos seus. Além dessas
                medidas organizacionais e de governança, adotamos diversas
                outras de natureza técnica que garantem ainda maior segurança a
                suas informações como:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>A realização de segregação de acesso a Dados Pessoais;</li>
                <li>Segurança em acesso remoto; e</li>
                <li>Acesso a serviços, exclusivamente, por redes seguras.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. QUAIS SÃO OS SEUS DIREITOS? COMO VOCÊ PODE EXERCÊ-LOS?
              </h2>
              <p className="text-gray-700 mb-4">
                Qualquer que seja a relação que você opte por estabelecer com o
                Grupo Decio, você tem assegurado todos os direitos relativos aos
                seus Dados Pessoais previstos pela LGPD, como:
              </p>

              <div className="grid gap-2">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-blue-800">
                    <strong>1)</strong> Saber se tratamos algum Dado Pessoal
                    seu;
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-green-800">
                    <strong>2)</strong> Saber quais Dados Pessoais seus são
                    tratados por nós;
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="text-yellow-800">
                    <strong>3)</strong> Corrigir dados incompletos, inexatos ou
                    desatualizados;
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-red-800">
                    <strong>4)</strong> Solicitar a anonimização, bloqueio ou
                    eliminação de dados desnecessários, excessivos ou que,
                    porventura, tenham sido tratados em desconformidade com a
                    lei;
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-purple-800">
                    <strong>5)</strong> Solicitar a portabilidade dos dados a
                    outro fornecedor de serviço ou produto;
                  </p>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="text-indigo-800">
                    <strong>6)</strong> Pedir a revisão de decisões unicamente
                    automatizadas que afetem seus interesses;
                  </p>
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <p className="text-pink-800">
                    <strong>7)</strong> Solicitar a eliminação dos dados
                    tratados com o seu consentimento;
                  </p>
                </div>
                <div className="bg-teal-50 p-3 rounded">
                  <p className="text-teal-800">
                    <strong>8)</strong> Obter informações sobre as entidades
                    públicas ou privadas com as quais compartilhamos os seus
                    dados; e
                  </p>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-orange-800">
                    <strong>9)</strong> Quando a atividade de Tratamento
                    necessitar do seu consentimento, você pode se negar a
                    consentir. Nesse caso, lhe informaremos sobre as
                    consequências da não realização de tal atividade. Caso você
                    consinta, a qualquer momento você poderá revogá-lo.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p className="text-gray-700 mb-2">
                  <strong>Como exercer seus direitos:</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Você poderá exercer seus direitos a qualquer tempo. Para
                  exercê-los, Você poderá contatar nosso Encarregado, Edmundo
                  Souza Macedo Filho, pelo e-mail{" "}
                  <Link
                    href="mailto:encarregado.dpo@grupodecio.com.br"
                    className="text-blue-600 hover:underline"
                  >
                    encarregado.dpo@grupodecio.com.br
                  </Link>
                  . Para isso, solicitamos que se identifique e indique qual
                  direito pretende exercer.
                </p>
                <p className="text-gray-700">
                  É possível que outras informações e/ou documentos sejam
                  solicitados pelo Grupo Decio com o objetivo de confirmar a
                  identidade ou a veracidade das suas informações. Requisições
                  que envolvam Dados Pessoais e/ou documentos de outros
                  Titulares não serão atendidas, exceto mediante procuração,
                  poder parental ou outra hipótese que autorize o exercício do
                  direito de outro Titular por Você. Importante informar que, em
                  circunstâncias específicas, é possível que a sua requisição
                  não seja atendida. Nestes casos, nós explicaremos os motivos
                  que justificaram o não atendimento.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. DÚVIDAS?
              </h2>
              <p className="text-gray-700 mb-4">
                Caso reste qualquer dúvida, você pode entrar em contato com
                nosso Encarregado, Edmundo Souza Macedo Filho, pelo e-mail{" "}
                <Link
                  href="mailto:encarregado.dpo@grupodecio.com.br"
                  className="text-blue-600 hover:underline"
                >
                  encarregado.dpo@grupodecio.com.br
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. ATUALIZAÇÃO
              </h2>
              <p className="text-gray-700 mb-4">
                É possível que algumas das informações aqui disponibilizadas
                sejam atualizadas ou alteradas. Por isso, aconselhamos que você
                consulte esse Aviso periodicamente. Quando houver alguma
                alteração, iremos informar em nossa página inicial.
              </p>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                Este aviso de privacidade é parte integrante dos nossos Termos
                de Uso e Política de Cookies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
