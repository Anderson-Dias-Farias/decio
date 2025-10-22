import Image from "next/image";
import Link from "next/link";

const socialMedia = [
  {
    name: "Instagram",
    icon: "/assets/instagran.png",
  },
  {
    name: "Facebook",
    icon: "/assets/facebook.png",
  },

  {
    name: "Linkedin",
    icon: "/assets/linkedin.png",
  },
  {
    name: "Youtube",
    icon: "/assets/youtube.png",
  },
  {
    name: "Tiktok",
    icon: "/assets/tiktok.png",
  },
  {
    name: "Booking",
    icon: "/assets/booking.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e40af] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start lg:gap-24 gap-12 w-full">
          {/* Logo and Social Media */}
          <div className=" lg:max-w-[370px]  w-full">
            <div className="w-full md:max-w-[370px] relative min-h-[150px]">
              <Image
                src="/assets/decio-logo-2.png"
                alt="Grupo Decio"
                priority
                fill
                sizes="100vw"
                className="h-24 w-full mb-6 object-cover  max-w-[370px]"
              />
            </div>
            <p className="text-sm text-blue-200 mb-6 leading-relaxed md:max-w-sm">
              Há quase 40 anos transformando a experiência de quem vive a
              estrada — com qualidade, estrutura e atendimento que fazem a
              diferença.
            </p>
            <div className="flex space-x-3 mb-4">
              {socialMedia.map((item) => (
                <div
                  key={item.name}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-120 hover:shadow-lg transition-colors cursor-pointer"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={39}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-blue-300">
              Ao clicar nos ícones, você será redirecionado para as redes
              sociais e responsabilidades de terceiros, estando sujeito às
              Políticas de Privacidade dessas redes.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:max-w-1/3">
            <ul className="space-y-3 text-[18px] font-semibold">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-200 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos-e-servicos/abastecimento"
                  className="hover:text-blue-200 transition-colors"
                >
                  Abastecimento
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos-e-servicos/variedades"
                  className="hover:text-blue-200 transition-colors"
                >
                  Variedades
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos-e-servicos/acessorios"
                  className="hover:text-blue-200 transition-colors"
                >
                  Acessórios
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos-e-servicos/postos-e-estacoes"
                  className="hover:text-blue-200 transition-colors"
                >
                  Postos e Estações de Serviço
                </Link>
              </li>
              <li>
                <Link
                  href="/institucional"
                  className="hover:text-blue-200 transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col h-auto  w-full relative">
            <div className="absolute lg:-left-22 -left-10 top-10 bottom-0 w-px bg-white max-h-[160px] " />
            <div className="flex h-auto justify-between items-start w-full relative">
              {/* Legal Links 1 */}

              <div className="relative font-semibold text-[16px] gap-4">
                <ul className="space-y-3 text-sm md:max-w-[130px]">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Promoções
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Aviso de Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Termo de Uso do Site
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Divulgações e Documentos
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal Links 2 */}
              <div className="relative font-semibold text-[16px] gap-4 pl-4 max-w-1/2">
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Aviso de Privacidade Externo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Relatório de Transparência Salarial
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Aviso de Privacidade Interno
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 w-full">
              <p className="text-[16px] font-medium mb-2">
                Canal de denúncias:
              </p>
              <p className="text-[16px]">
                Clique{" "}
                <a href="#" className="underline hover:text-blue-200">
                  AQUI
                </a>{" "}
                ou ligue <span className="font-medium">0800 800 1216</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 pt-6 text-center">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Grupo Decio. Todos os direitos
            reservados. Desenvolvimento e comunicação exclusiva.
          </p>
        </div>
      </div>
    </footer>
  );
}
