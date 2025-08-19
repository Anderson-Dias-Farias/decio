"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Squash as Hamburger } from "hamburger-react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  {
    label: "Produtos e Serviços",
    href: "",
    submenu: [
      { label: "Abastecimento", href: "/produtos-e-servicos/abastecimento" },
      { label: "Alimentação", href: "/produtos-e-servicos/alimentacao" },
      { label: "Variedades", href: "/produtos-e-servicos/variedades" },
      { label: "Acessórios", href: "/produtos-e-servicos/acessorios" },
      { label: "Bem-estar", href: "/produtos-e-servicos/bem-estar" },
    ],
  },
  {
    label: "Postos e Estações de Serviço",
    href: "/produtos-e-servicos/postos-estacoes",
  },
  { label: "Institucional", href: "/institucional" },
  { label: "Contato", href: "/contato" },
  { label: "Blog Décio", href: "/blog-decio" },
];

const menuLinks = ({
  isMobile = false,
  isOpen,
  setIsOpen,
  onSelectChange,
  openPopover,
  setOpenPopover,
}: {
  isMobile?: boolean;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  onSelectChange?: (value: string) => void;
  openPopover?: string | null;
  setOpenPopover?: (popover: string | null) => void;
}) => {
  const handleLinkClick = () => {
    if (isMobile && setIsOpen) {
      setIsOpen(false);
    }
    if (setOpenPopover) {
      setOpenPopover(null);
    }
  };

  const handleSelectChange = (value: string) => {
    if (onSelectChange) {
      onSelectChange(value);
    }
    handleLinkClick();
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-center ${
        isMobile ? "space-y-4 lg:space-y-0" : ""
      } lg:space-x-8 w-full justify-between`}
    >
      <div
        className={`flex flex-col lg:flex-row items-center ${
          isMobile ? "space-y-4 lg:space-y-0" : ""
        } lg:space-x-8 text-white text-sm w-full ${
          isMobile ? "" : "justify-evenly"
        }`}
      >
        {menuItems.map((item) => (
          <div key={item.label} className="relative w-full lg:w-auto">
            {/* Desktop - Popover do shadcn/ui */}
            {!isMobile && item.submenu ? (
              <Popover
                open={openPopover === item.label}
                onOpenChange={(open) =>
                  setOpenPopover && setOpenPopover(open ? item.label : null)
                }
              >
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-1 text-white hover:text-[#EFA573] transition-colors duration-200 cursor-pointer">
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openPopover === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-64 p-2 bg-primary border-none "
                  align="start"
                >
                  <div className="space-y-1">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => handleSelectChange(subItem.href)}
                        className="w-full text-left text-white  px-3 cursor-pointer py-2 text-sm rounded-md hover:bg-blue-50 hover:text-[#EFA573] transition-colors duration-200"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            ) : !isMobile && !item.submenu ? (
              <Link
                href={item.href}
                className="hover:text-[#EFA573] transition-colors duration-200"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ) : null}

            {/* Mobile - Submenu sempre expandido */}
            {isMobile && item.submenu ? (
              <div className="w-full">
                <div className="py-3 px-4 text-white font-medium">
                  {item.label}
                </div>
                <div className="pl-4 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block py-2 px-4 text-blue-200 hover:text-[#EFA573] hover:bg-white/10 rounded-md transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : isMobile && !item.submenu ? (
              <Link
                href={item.href}
                className="flex items-center justify-between py-3 px-4 hover:text-[#EFA573] hover:bg-white/10 rounded-md w-full transition-colors duration-200"
                onClick={handleLinkClick}
              >
                <span>{item.label}</span>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
      <div className={isMobile ? "pt-4 border-t border-white/20 w-full" : ""}>
        <Button
          className={`bg-green-500 hover:bg-green-600 text-white rounded-sm px-6 ${
            isMobile ? "py-3" : "py-2"
          } rounded-${isMobile ? "md" : "sm"} transition-colors duration-200 ${
            isMobile ? "w-full" : ""
          }`}
          onClick={handleLinkClick}
        >
          Parceiro Decio
        </Button>
      </div>
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Fechar menu quando URL mudar
  useEffect(() => {
    setIsOpen(false);
    setOpenPopover(null);
  }, [pathname]);

  const handleNavigation = (value: string) => {
    router.push(value);
  };

  return (
    <header className="bg-primary px-4 py-2 md:py-4 sticky top-0 z-50 overflow-x-hidden">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center xl:w-full xl:max-w-[250px]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/assets/decio-logo-1.png"
              alt="Décio"
              width={160}
              height={60}
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>
        </div>
        <div className="hidden lg:block w-full">
          {menuLinks({
            isMobile: false,
            isOpen,
            setIsOpen,
            onSelectChange: handleNavigation,
            openPopover,
            setOpenPopover,
          })}
        </div>
        <div className="block lg:hidden">
          <Hamburger
            color="#ffffff"
            toggled={isOpen}
            toggle={() => setIsOpen(!isOpen)}
          />

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 ${
              isOpen ? "opacity-50 visible" : "opacity-0 invisible"
            }`}
            style={{ top: "85px" }}
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            className={`fixed top-[60px] right-0 w-80 max-w-[90vw] h-full bg-primary shadow-lg transition-all duration-300 ease-in-out transform z-50 ${
              isOpen
                ? "translate-x-0 opacity-100 visible"
                : "translate-x-full opacity-0 invisible"
            }`}
          >
            <div className="px-6 py-8">
              {menuLinks({
                isMobile: true,
                isOpen,
                setIsOpen,
                onSelectChange: handleNavigation,
                openPopover,
                setOpenPopover,
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
