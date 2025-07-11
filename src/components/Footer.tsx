"use client";

import { Josefin_Sans } from "next/font/google";
import { CSSProperties } from "react";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"], // medium do figma
});

interface CustomFooterProps {
  label: string;
  width?: number | string;
  fontSize?: number;
  style?: CSSProperties;
}

export default function CustomFooter({
  label,
  width = "100%",
  fontSize = 15,
  style,
}: CustomFooterProps) {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#C63230",
        padding: "16px",
        width,
        letterSpacing: "0.2em", 
        ...style,
      }}
    >
      {/* Logo */}
      <div style={{ flex: "0 0 auto" }}>
        <img
          src="/logo_menu.png"
          alt="Logo"
          style={{ height: 30 }}
        />
      </div>

      {/* Texto */}
      <div
        style={{
          flex: "1 1 auto",
          textAlign: "center",
          fontFamily: josefinSans.style.fontFamily,
          fontWeight: 500,
          fontSize,
          color: "white",
        }}
      >
        {label}
      </div>

      {/* Espaço à direita para equilibrar a logo */}
      <div style={{ flex: "0 0 auto", width: 40 }} />
    </footer>
  );
}
