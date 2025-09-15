"use client";

import { usePathname } from "next/navigation";
import Footer from "../Footer";
import Header from "../Header";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.includes("aplicacao")) {
    return <div>{children}</div>;
  }

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
