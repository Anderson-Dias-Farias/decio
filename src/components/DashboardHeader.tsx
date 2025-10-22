"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface DashboardHeaderProps {
  userName: string;
}

export default function DashboardHeader({ userName }: DashboardHeaderProps) {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <header className="border-b  sticky top-0 z-50 w-full bg-[#234c9c]">
      <div className="container flex h-16 items-center mx-auto max-w-7xl px-4">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/aplicacao">
            <Image
              src="/assets/decio-logo-1.png"
              alt="Decio"
              width={500}
              height={500}
              className="h-10 sm:h-12 md:h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search can be added here later */}
          </div>
          <nav className="flex items-center space-x-2">
            <Badge
              variant="outline"
              className="flex items-center gap-2 text-black bg-white border-black p-2"
            >
              <User className="h-4 w-4" />
              {userName}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-black cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300 hover:border-black"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 text-black" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
