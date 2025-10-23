import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidade Interno - Grupo Decio",
  description:
    "Aviso de Privacidade Interno do Grupo Decio para colaboradores. Conheça como tratamos seus dados pessoais e seus direitos.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AvisoPrivacidadeInterno() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Aviso de Privacidade Interno
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Data da última atualização:</strong> 20 de janeiro de 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. OBJETIVO
              </h2>
              <p className="text-gray-700 mb-4">
                Informar aos colaboradores do Grupo Decio como é realizado o
                tratamento seguro e transparente de seus Dados Pessoais e Dados
                Pessoas Sensíveis, nos termos da LGPD.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. APLICAÇÃO
              </h2>
              <p className="text-gray-700 mb-4">
                Este documento se aplica a todas as áreas e colaboradores do
                Grupo Decio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. INTRODUÇÃO
              </h2>
              <p className="text-gray-700 mb-4">
                A DECIO HOLDING S/A, suas subsidiárias, afiliadas e demais
                empresas integrantes do grupo econômico (&quot;Grupo Decio&quot;
                ou &quot;Grupo&quot;), preocupam-se com a privacidade e a
                proteção dos Dados Pessoais dos seus Colaboradores
                (&quot;Você&quot;). Assim, este Aviso de Privacidade
                (&quot;Aviso&quot;) foi criado para demonstrar o nosso
                compromisso e responsabilidade em relação ao tratamento seguro e
                transparente de seus Dados Pessoais, tudo em conformidade com a
                Lei Geral de Proteção de Dados Pessoais (&quot;LGPD&quot;) e
                sempre em respeito à sua privacidade, com o propósito de
                construir pilares cada vez mais sólidos de confiança na
                constância de nossas relações.
              </p>
              <p className="text-gray-700 mb-4">
                Este Aviso destina-se a ajudar você a entender quais Dados
                Pessoais são coletados, por qual motivo os tratamos durante a
                nossa relação, para quais finalidades, se os compartilhamos e
                com quem, bem como informar sobre os seus direitos relativos a
                essas informações e como exercê-los junto ao Grupo Decio.
              </p>
              <p className="text-gray-700 mb-4">
                Em caso de dúvidas, fique tranquilo! Disponibilizamos um canal
                de contato apropriado no final deste documento. Adicionalmente,
                é importante a releitura deste Aviso periodicamente, em razão de
                eventuais alterações sofridas, as quais estarão disponibilizadas
                no repositório de Políticas e Procedimentos do Grupo Decio, e
                que serão devidamente informadas aos Colaboradores pelo e-mail
                corporativo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. O QUE VOCÊ PRECISA SABER ANTES DE CONTINUAR LENDO ESTE AVISO?
              </h2>
              <p className="text-gray-700 mb-4">
                Para que você consiga compreender este Aviso, indicamos abaixo
                um &quot;glossário&quot; que contém alguns conceitos
                importantes, sendo eles:
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Colaboradores
                </h3>
                <p className="text-gray-700 mb-2">
                  são todos aqueles que trabalham no Grupo Decio, como
                  estagiários, menores aprendizes, empregados (independentemente
                  do nível hierárquico), prestadores de serviços (ainda que na
                  condição de autônomos), administradores, conselheiros de
                  administração e diretores estatutários etc.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Dados Pessoais
                </h3>
                <p className="text-gray-700 mb-2">
                  são todas as informações que lhe identificam ou permitem a sua
                  identificação como, por exemplo, seu nome, usuário de acesso,
                  CPF, RG, telefone, dados da sua conta bancária, dentre outros.
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
                  Encarregado(a)
                </h3>
                <p className="text-gray-700 mb-2">
                  é a pessoa indicada pelo(a) Grupo Decio para ser o(a)
                  responsável por zelar pela sua privacidade. Comumente, esse
                  profissional também é conhecido como DPO (Data Protection
                  Officer). Se você tiver qualquer dúvida sobre como os seus
                  dados (ou de seus dependentes) são tratados por nós, é ele
                  quem vai te ajudar.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Tratamento
                </h3>
                <p className="text-gray-700 mb-2">
                  toda operação realizada com Dados Pessoais dentro de seu ciclo
                  de vida, como coleta, produção, recepção, classificação,
                  utilização, acesso, reprodução, transmissão, distribuição,
                  processamento, arquivamento, armazenamento, eliminação,
                  avaliação ou controle da informação, modificação, comunicação,
                  transferência, difusão ou extração.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. COMO COLETAMOS OS SEUS DADOS PESSOAIS?
              </h2>
              <p className="text-gray-700 mb-4">
                As informações que tratamos a seu respeito podem ter sido
                fornecidas diretamente por você ao Grupo Decio, ou mesmo
                coletadas de forma automática durante seu relacionamento
                conosco.
              </p>
              <p className="text-gray-700 mb-4">
                Vamos entender melhor cada uma dessas situações de coleta de
                dados?
              </p>

              <div className="grid gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    5.1. Informações fornecidas diretamente por você
                  </h3>
                  <p className="text-blue-700">
                    Desde o início da sua interação conosco, você
                    voluntariamente nos disponibiliza informações a seu
                    respeito. Por exemplo, quando se cadastra para participação
                    em processo seletivo em nosso site, quando nos fornece as
                    documentações necessárias para admissão, para obter algum
                    benefício, dentre outras situações.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    5.2. Informações obtidas automaticamente
                  </h3>
                  <p className="text-green-700">
                    Em algumas situações, também poderemos coletar Dados
                    Pessoais de forma automática, por meio dos dispositivos que
                    Você utiliza para acessar ferramentas e sistemas
                    relacionados às suas funções laborais. Essas informações nos
                    auxiliam a gerar estatísticas de acesso e, assim, assegurar
                    o uso correto das nossas plataformas.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    5.3. Informações disponíveis publicamente
                  </h3>
                  <p className="text-yellow-700">
                    Há, também, a possibilidade de coletarmos informações suas
                    que se encontrem disponibilizadas publicamente e em mídias
                    sociais (como, Instagram e Facebook) e bases de dados de
                    órgãos públicos (Receita Federal).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. QUAIS DADOS PESSOAIS SEUS NÓS TRATAMOS?
              </h2>
              <p className="text-gray-700 mb-4">
                Com o propósito de respeitar a sua privacidade, entendemos que
                todo e qualquer tratamento de Dados Pessoais deve ser limitado
                ao mínimo necessário, de forma pertinente e proporcional para
                permitir que seja realizada a finalidade pretendida.
              </p>
              <p className="text-gray-700 mb-4">
                Por isso, os Dados Pessoais que coletamos a seu respeito irão
                variar a depender do momento de nosso relacionamento, que se
                inicia com o processo de recrutamento e seleção e finaliza com o
                eventual desligamento.
              </p>
              <p className="text-gray-700 mb-4">
                Abaixo, agrupados em categorias, apresentamos os principais
                Dados Pessoais que podem ser tratados por nós:
              </p>

              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dados cadastrais
                  </h3>
                  <p className="text-gray-700">
                    Nome completo, Data de nascimento, RG, CPF, CNH, nº PIS, nº
                    INSS, CTPS, Certificado Militar, Cartão do SUS, Número
                    Interno de Registro/Matrícula, Estado civil, Nacionalidade,
                    Naturalidade, Filiação, Idade, Gênero e cópias dos
                    documentos mencionados.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dados de imagens
                  </h3>
                  <p className="text-gray-700">
                    Fotos e imagens de videomonitoramento.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dados de contato
                  </h3>
                  <p className="text-gray-700">
                    Telefone fixo ou celular e E-mails pessoal e/ou
                    profissional, Endereço residencial/comercial e CEP.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dados financeiros
                  </h3>
                  <p className="text-gray-700">
                    Banco, conta corrente e Agência bancária, Salário, Descontos
                    e/ou reembolsos a serem efetuados.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dados profissionais
                  </h3>
                  <p className="text-gray-700">
                    Profissão, Local de trabalho, Função/Cargo, Histórico
                    profissional, Histórico Escolar/Acadêmico, Idiomas,
                    Qualificações e Certificações, Faltas e/ou horas extras
                    devida, Data de contratação, Jornada de Trabalho, superior
                    hierárquico.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dados comportamentais
                  </h3>
                  <p className="text-gray-700">
                    Indicadores de desempenho, Histórico/Hábito de Consumo,
                    Histórico de Deslocamentos.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Dados pessoais sensíveis
                  </h3>
                  <p className="text-red-700">
                    Dados relacionados à sua origem racional/étnica, PCD, Riscos
                    ocupacionais, Resultado de Exames Ocupacionais, Biometria
                    (como impressão digital ou reconhecimento facial), Filiação
                    sindical, Atestados Médicos; Dados de Saúde; CID; Nome do
                    Médico; CRM do Médico; Motivo de Afastamento; Data de
                    Emissão Atestado.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Atributos associados aos recursos tecnológicos
                    disponibilizados
                  </h3>
                  <p className="text-gray-700">
                    Nome de usuário, Geolocalização, Histórico de Deslocamentos,
                    Histórico/Hábito de Consumo.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dados públicos
                  </h3>
                  <p className="text-gray-700">Perfil em Redes Sociais.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Dados de dependentes
                  </h3>
                  <p className="text-blue-700">
                    Nome completo, RG, CPF, Filiação, Data de Nascimento, Idade,
                    Estado civil, Grau de Parentesco.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. PARA QUE UTILIZAMOS AS SUAS INFORMAÇÕES?
              </h2>
              <p className="text-gray-700 mb-4">
                Os Dados Pessoais que coletamos podem ser utilizados conforme
                descrito abaixo:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Recrutamento e seleção
                  </h3>
                  <p className="text-blue-700">
                    Nós divulgamos as vagas disponíveis e recebemos currículos
                    preferencialmente em nossos canais digitais, tais como via
                    e-mail vagas@grupodecio.com.br, por meio de nosso site e a
                    plataforma de recrutamento e seleção Recrutei, bem como por
                    meio de chatbot do Whatsapp. Nessas situações, nós iremos
                    tratar seus Dados Pessoais para analisar seu currículo,
                    verificar as suas competências, informações curriculares e
                    se você atende ou não aos requisitos específicos da vaga
                    para a qual Você aplicou, bem como para dar seguimento ao
                    processo seletivo, quando for o caso, em situações como
                    contato por telefone ou e-mail e agendamento de entrevistas.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Realização de procedimentos admissionais e de desligamento
                  </h3>
                  <p className="text-green-700">
                    Ao ser admitido para uma posição de trabalho no Grupo Decio,
                    requeremos seus Dados Pessoais a fim de conduzir os
                    procedimentos admissionais e de integração, além de
                    formalizar o seu Contrato de Trabalho, e para cumprir com
                    nossas obrigações decorrentes da admissão, como registro no
                    e-Social, elaboração de ficha de registro de empregado,
                    dentre outras.
                  </p>
                  <p className="text-green-700 mt-2">
                    Quando recebemos a sua solicitação de desligamento, ou a
                    solicitação do gestor para o desligamento de alguém,
                    tratamos alguns Dados Pessoais para garantir que o
                    desligamento possa ocorrer, como a confirmação de
                    estabilidade (CIPA, sindicato ou afastamento, dentre outros)
                    e pendências de férias e o bloqueio do usuário nos sistemas.
                    Além de tratar os Dados Pessoais cadastrais e aqueles
                    relacionados ao seu contrato de trabalho e remuneração,
                    tratamos também a data e motivo do desligamento, bem como
                    realizamos atividades consectárias ao seu desligamento e
                    necessárias para o cumprimento de obrigação legal.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Fornecimento de benefícios
                  </h3>
                  <p className="text-yellow-700">
                    Após a liberação para o início de trabalho e conforme a
                    prática vigente do Grupo Decio, procedemos ao registro e
                    disponibilização dos benefícios oferecidos no momento da
                    admissão, de acordo com o seu contrato e modalidade de
                    contratação. Além disso, alguns desses benefícios oferecidos
                    pelo Grupo Decio a você, também poderão ser estendidos a
                    alguns dos seus familiares (dependentes). Alguns desses
                    benefícios incluem suporte médico e/ou psicológico ao
                    colaborador e aos dependentes.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">
                    Condução de treinamentos
                  </h3>
                  <p className="text-purple-700">
                    Nos preocupamos com a capacitação e desenvolvimento dos
                    nossos colaboradores, portanto, podemos tanto fornecer ou
                    custear treinamentos que acreditamos serem importantes para
                    o seu desenvolvimento profissional, quanto treinamentos
                    previstos em lei (obrigatórios, conforme exigência da
                    legislação trabalhista e normas reguladoras). Também podemos
                    ministrar treinamentos exigidos contratualmente por algum de
                    nossos parceiros ou, ainda, treinamentos necessários para
                    que Você possa exercer a sua função da melhor maneira
                    possível.
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                    Controle de jornada
                  </h3>
                  <p className="text-indigo-700">
                    Tratamos os seus Dados Pessoais, incluindo Dados Pessoais
                    biométricos, para controle de jornada, no qual Você utiliza
                    seus dados cadastrais, sua impressão digital e/ou
                    reconhecimento facial para apontar o início, final e
                    intervalos de trabalho.
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">
                    Execução do contrato de trabalho/prestação de serviços, ou
                    realizar diligências pré-contratuais
                  </h3>
                  <p className="text-pink-700">
                    Tratamos os seus Dados Pessoais para cumprir com nossas
                    obrigações contratuais, principalmente para realizar o seu
                    pagamento, para lhe fornecer acesso aos softwares e
                    programas necessários para Você trabalhar, entre outras
                    atividades relacionadas ao contrato.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Cumprir com nossas obrigações legais ou regulatórias
                  </h3>
                  <p className="text-red-700">
                    Seus Dados Pessoais poderão ser utilizados para o
                    atendimento das nossas obrigações dispostas em lei e/ou
                    regulações de órgãos governamentais e de ordens ou
                    requisições de autoridades fiscais, Poder Judiciário e/ou
                    outra autoridade competente. Por exemplo:
                  </p>
                  <ul className="text-red-700 mt-2 list-disc list-inside space-y-1">
                    <li>Envio das informações para o e-Social</li>
                    <li>Pagamento do FGTS e INSS</li>
                    <li>Afastamento por INSS</li>
                    <li>Pagamento de férias e 13º salário</li>
                    <li>
                      Gestão de demandas como jornadas de trabalho, ausências,
                      medidas disciplinares, ajustes de ponto, banco de horas
                      etc.
                    </li>
                    <li>Emissão de CAT (Cadastro de Acidente de Trabalho)</li>
                    <li>Elaboração de PPP e PCSMO</li>
                    <li>Registro dos Acordos Coletivos de Trabalho</li>
                    <li>
                      Realização de exames médicos ocupacionais (admissional,
                      periódico e demissional)
                    </li>
                    <li>
                      Concessão dos benefícios de licença
                      maternidade/paternidade, licença casamento, entre outros
                    </li>
                    <li>Controle de horas</li>
                    <li>Ficha de registro de entrega de EPI</li>
                    <li>
                      Concessão dos benefícios previstos em lei ou em norma
                      coletiva
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">
                    Permitir o exercício regular de nossos direitos
                  </h3>
                  <p className="text-orange-700">
                    Mesmo após o término da sua relação conosco, nós poderemos
                    tratar alguns de seus Dados Pessoais para exercer nossos
                    direitos garantidos em lei, especialmente no âmbito de
                    fiscalização de órgãos competentes (como o Ministério
                    Público do Trabalho, por exemplo) e inclusive como prova em
                    processos judiciais, administrativos ou arbitrais.
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">
                    Viabilizar atividades necessárias ao Grupo Decio
                  </h3>
                  <p className="text-teal-700">
                    Com base no nosso legítimo interesse, também poderemos
                    tratar os seus Dados Pessoais em atividades como: pesquisas
                    internas sobre o ambiente/clima de trabalho; avaliações
                    periódicas; coleta de opiniões sobre líderes/gestores;
                    análises de situações específicas, como o trabalho remoto
                    (exemplo: home office); análises e relatórios de desempenho;
                    auditorias e inspeções internas; investigação de denúncias
                    relativas à ética; elaboração e análise de alguns
                    documentos, como contratos, procurações e atos societários;
                    campanhas internas temáticas, datas comemorativas, envio de
                    brindes aos colaboradores, e ações pelo &quot;tempo de
                    casa&quot;. Nas atividades de apoio aos interesses do Grupo
                    Decio, sempre observaremos os limites da sua expectativa e o
                    Tratamento dos Dados Pessoais não se dará em prejuízo de
                    seus interesses, direitos ou liberdades fundamentais.
                  </p>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyan-800 mb-2">
                    Evitar fraudes e zelar pela sua segurança
                  </h3>
                  <p className="text-cyan-700">
                    Poderemos tratar os seus Dados Pessoais para zelar pela sua
                    segurança (e de Terceiros) e para evitar fraudes de
                    identificação, em especial durante o seu acesso aos nossos
                    sistemas internos, ingresso às nossas dependências e gestão
                    das imagens de videomonitoramento.
                  </p>
                </div>
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
                específicas e previamente informadas a Você neste Aviso.
              </p>
              <p className="text-gray-700 mb-4">
                Assim, poderemos compartilhar seus dados com Terceiros nas
                seguintes situações:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  quando se tratar de empresa integrante do grupo da qual o
                  Grupo Decio faça parte e empresas afiliadas, com o intuito de
                  possibilitar o alcance dos resultados de nossas pesquisas e a
                  consequente divulgação destes indicadores;
                </li>
                <li>
                  parceiros de negócio e prestadoras de serviço, como
                  plataformas de recrutamento e seleção, administradoras de
                  benefícios, empresas prestadoras de assistência médica e
                  odontológica, seguro de vida, para viabilizar o fornecimento
                  de benefícios a Você e seus dependentes;
                </li>
                <li>
                  administradoras de benefícios, empresas prestadoras de
                  assistência médica e odontológica, seguro de vida e demais
                  benefícios oferecidos;
                </li>
                <li>
                  instituições de ensino e treinamento, para viabilização dos
                  cursos e treinamentos realizados no contexto de sua relação
                  conosco;
                </li>
                <li>
                  fornecedores, como plataformas que fornecem softwares e
                  programas que Você utiliza no dia a dia para trabalho com uma
                  conta corporativa, bem como empresas e instituições de
                  educação e treinamento, e/ou agências de viagens.
                </li>
                <li>
                  diante de alguma operação societária, como por exemplo
                  operações de fusão, aquisição, cisão e incorporação;
                </li>
                <li>
                  com autoridades administrativas e judiciais quando necessário
                  para cumprimento de obrigação legal ou para auxiliar na
                  investigação de atividades suspeitas ou ilegais (exemplo:
                  órgãos públicos, estaduais e regionais, como o Ministério do
                  Trabalho, a Previdência Social, a Receita Federal, Conselhos
                  Regionais, Corpo de Bombeiros, Prefeituras, Vigilância
                  Sanitária).
                </li>
              </ul>

              <p className="text-gray-700 mb-4">
                Quando realizamos o compartilhamento de seus Dados Pessoais nas
                situações acima, nós utilizamos de instrumentos contratuais para
                assegurar que qualquer Terceiro que os receba garanta a eles a
                proteção adequada.
              </p>
              <p className="text-gray-700 mb-4">
                Nas situações em que o compartilhamento for com um Terceiro
                localizado fora do Brasil, o Grupo Decio se valerá de uma das
                hipóteses legais de transferência internacional autorizada pela
                legislação.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. POR QUANTO TEMPO MANTEMOS SEUS DADOS PESSOAIS?
              </h2>
              <p className="text-gray-700 mb-4">
                Armazenamos os seus Dados Pessoais pelo tempo que for necessário
                para cumprir a finalidade pela qual foram coletados, a menos que
                um período de retenção mais longo seja necessário para cumprir
                obrigações legais, resolver disputas, proteger nossos ativos ou
                cumprir acordos judiciais/extrajudiciais.
              </p>
              <p className="text-gray-700 mb-4">
                Para determinar o período de retenção de seus Dados Pessoais,
                nos baseamos nos seguintes critérios:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Se temos uma obrigação legal, contratual, previdenciária ou
                  outro tipo de obrigação para reter Dados Pessoais;
                </li>
                <li>
                  Se os Dados Pessoais são necessários para fins de investigação
                  ou exercício regular de direito em processos judiciais,
                  administrativos ou arbitrais;
                </li>
                <li>
                  Se os Dados Pessoais são necessários para mantermos registros
                  comerciais e financeiros precisos.
                </li>
              </ul>

              <p className="text-gray-700 mb-4">
                Mantemos somente os dados necessários para finalidades
                específicas, legítimas e informadas a você.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. QUAIS SÃO OS SEUS DIREITOS E COMO EXERCÊ-LOS?
              </h2>
              <p className="text-gray-700 mb-4">
                Você, nosso colaborador, tem os direitos conferidos em lei
                relativos aos seus Dados Pessoais, em especial:
              </p>

              <div className="grid gap-2">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-blue-800">
                    <strong>a)</strong> Saber se tratamos algum Dado Pessoal seu
                    e quais dados são tratados por nós;
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-green-800">
                    <strong>b)</strong> Saber com quem compartilhamos os seus
                    dados;
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="text-yellow-800">
                    <strong>c)</strong> Corrigir dados incompletos, inexatos ou
                    desatualizados;
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-red-800">
                    <strong>d)</strong> Requerer a anonimização, bloqueio ou
                    eliminação de dados desnecessários, excessivos ou que,
                    porventura, tenham sido tratados em desconformidade com a
                    lei;
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-purple-800">
                    <strong>e)</strong> Saber se tratamos algum Dado Pessoal seu
                    e quais dados são tratados por nós;
                  </p>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="text-indigo-800">
                    <strong>f)</strong> Saber com quem compartilhamos os seus
                    dados;
                  </p>
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <p className="text-pink-800">
                    <strong>g)</strong> Corrigir dados incompletos, inexatos ou
                    desatualizados;
                  </p>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-orange-800">
                    <strong>h)</strong> Requerer a anonimização, bloqueio ou
                    eliminação de dados desnecessários, excessivos ou que,
                    porventura, tenham sido tratados em desconformidade com a
                    lei;
                  </p>
                </div>
                <div className="bg-teal-50 p-3 rounded">
                  <p className="text-teal-800">
                    <strong>i)</strong> Solicitar a portabilidade dos seus dados
                    a outro fornecedor de serviço ou produto;
                  </p>
                </div>
                <div className="bg-cyan-50 p-3 rounded">
                  <p className="text-cyan-800">
                    <strong>j)</strong> Requerer a revisão de decisões
                    automatizadas tratadas com o seu consentimento;
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-gray-800">
                    <strong>k)</strong> Obter informações sobre as entidades
                    públicas ou privadas com as quais compartilhamos os seus
                    dados; e
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <p className="text-slate-800">
                    <strong>l)</strong> Quando a atividade de Tratamento
                    necessitar do seu consentimento, você pode se negar a
                    consentir. Nesse caso, lhe informaremos sobre as
                    consequências da não realização de tal atividade. Caso você
                    consinta, a qualquer momento você poderá revogá-lo.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p className="text-gray-700 mb-2">
                  <strong>Como exercer os seus direitos:</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Para exercer os seus direitos, você poderá contatar nosso
                  Encarregado pelo Tratamento de Dados Pessoais através do
                  e-mail{" "}
                  <Link
                    href="mailto:encarregado.dpo@grupodecio.com.br"
                    className="text-blue-600 hover:underline"
                  >
                    encarregado.dpo@grupodecio.com.br
                  </Link>
                  .
                </p>
                <p className="text-gray-700 mb-2">
                  Em casos específicos, é possível que a sua requisição não seja
                  atendida. Nestes casos, nós explicaremos os motivos que
                  justificaram o não atendimento.
                </p>
                <p className="text-gray-700">
                  Requisições que envolvam Dados Pessoais e/ou documentos de
                  outros Titulares não serão atendidas, exceto mediante
                  procuração, poder parental ou outra hipótese que autorize o
                  exercício do direito de outro titular por você.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. COMO PROTEGEMOS OS SEUS DADOS?
              </h2>
              <p className="text-gray-700 mb-4">
                Nós adotamos políticas e procedimentos internos que determinam
                como os Dados Pessoais devem ser tratados, incluindo os seus.
                Tais normas têm como objetivo garantir o Tratamento adequado e
                lícito de Dados Pessoais pelo Grupo Decio.
              </p>
              <p className="text-gray-700 mb-4">
                Nesse contexto, adotamos medidas técnicas aptas a manter os seus
                Dados Pessoais seguros e protegidos de acessos não autorizados e
                de situações acidentais ou ilícitas de destruição, perda,
                alteração, comunicação ou qualquer outra forma de Tratamento
                inadequado ou ilícito, sempre à luz das regras aplicáveis de
                proteção de dados e segurança da informação.
              </p>
              <p className="text-gray-700 mb-4">
                Como exemplo de algumas medidas que tomamos, estão:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>A realização de segregação de acesso a Dados Pessoais;</li>
                <li>Segurança em acesso remoto; e</li>
                <li>Acesso a serviços, exclusivamente, por redes seguras.</li>
              </ul>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <p className="text-orange-800">
                  <strong>Importante:</strong> Contudo, é responsabilidade de
                  cada Colaborador proteger e manter a confidencialidade de seus
                  logins, senhas e demais informações de acesso aos sistemas do
                  Grupo Decio. Caso o Colaborador suspeite de roubo de seu login
                  e/ou senha de acesso, ou tenha razões para acreditar que tais
                  informações sejam de conhecimento de outras pessoas, deverá
                  comunicar o Departamento de TI do Grupo Decio imediatamente e
                  realizar a alteração de sua senha o mais rápido possível.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. CONTATO E DÚVIDAS
              </h2>
              <p className="text-gray-700 mb-4">
                Caso você tenha qualquer dúvida relativa ao Tratamento de seus
                Dados Pessoais, entre em contato com nosso Encarregado através
                do endereço de e-mail{" "}
                <Link
                  href="mailto:encarregado.dpo@grupodecio.com.br"
                  className="text-blue-600 hover:underline"
                >
                  encarregado.dpo@grupodecio.com.br
                </Link>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. ATUALIZAÇÃO
              </h2>
              <p className="text-gray-700 mb-4">
                É possível que algumas das informações aqui disponibilizadas
                sejam atualizadas ou alteradas. Por isso, aconselhamos que você
                consulte esse Aviso de Privacidade periodicamente, o qual estará
                disponível no repositório de políticas do Grupo Decio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                VERSÃO
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        VERSÃO
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        DESCRIÇÃO
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        ELABORAÇÃO
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        APROVAÇÃO
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">0</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Emissão inicial
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Opice Blum 08/08/2023
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Comitê de Privacidade de Dados 08/08/2023
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Revisão
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Jurídico 13/08/2024
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Comitê de Privacidade de Dados
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Revisão
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Jurídico 20/01/2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Comitê de Privacidade de Dados 20/01/2025
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                Este aviso de privacidade interno é parte integrante das
                políticas internas do Grupo Decio e está disponível no
                repositório de políticas da empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
