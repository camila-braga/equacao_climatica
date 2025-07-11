"use client";

import { Button } from "@mui/material";
import { Josefin_Sans } from "next/font/google";
import { CSSProperties } from "react";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"], // medium do figma
});

interface CustomButtonProps {
  label: string;
  href?: string;
  width?: number | string;
  fontSize?: number;
  style?: CSSProperties;
}

export default function CustomButton({
  label,
  href = "/",
  width = 200,
  fontSize = 20,
  style,
}: CustomButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      href={href}
      sx={{
        fontWeight: "bold",
        paddingX: 3,
        paddingY: 2,
        width,
        alignSelf: "center", //alinha botão no centro do container
        fontSize,
        fontFamily: josefinSans.style.fontFamily,
        justifyContent: "center", //alinha na horizontal
        textAlign: "center",  //alinha o texto no centro do botão
        letterSpacing: "0.2em", //espaçamento das letras
        backgroundColor: "#C63230",
        boxShadow: "0 4px 8px 0 #721414",
        '&:hover': {
          backgroundColor: "#481219",
          boxShadow: "0 6px 12px 0 #721414",
        },
        ...style, //significa que qualquer style que colocar na pagina quando chamar esse botão, vai sobrescrever o que tiver por igual aqui
      }}
    >
      {label}
    </Button>
  );
}
