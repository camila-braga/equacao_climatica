// src/app/(teste)/layout.tsx

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bem vindo!",
  description: "Páginas do projeto",
};

export default function OpeningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`h-full flex flex-col ${openSans.className}`}>
        {children}
      </body>
    </html>
  );
}
