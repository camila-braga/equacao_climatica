// src/app/(base)/layout.tsx

import type { Metadata } from "next";
import MenuHeader from "@/components/Menu";
import CustomFooter from "@/components/Footer";
import { Open_Sans } from "next/font/google";
import "./baseGlobals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Equação Climática - Início",
  description: "Projeto",
};

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className} >
        <MenuHeader />
        {children}
        <CustomFooter label="© 2025 EQUAÇÃO CLIMÁTICA. Todos os direitos reservados." />
      </body>
    </html>
  );
}
