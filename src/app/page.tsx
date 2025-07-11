//página de abertura

import { Open_Sans } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import CustomButton from "../components/CustomButton"; //para usar o botão

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"], // medium do figma
});

export default function Abertura() {
  return (
    <main className={`w-screen h-screen p-4 ${openSans.className}`}>

      {/* Logo da equipe no canto superior esquerdo */}
      <div className="flex-1/5 w-24 flex m-4 items-center">
        <img
          src="/logo_abertura.png"
          alt="Logo da Equação Climática"
          className="object-contain"
        />
      </div>

      {/* Container sobre a imagem de fundo */}
      <div className="flex-4/5 w-full flex justify-end pt-24">
        <div className="max-w-[90%] text-[clamp(2rem,6vw,5rem)] leading-tight text-black font-bold text-left flex flex-col gap-6 pr-4 sm:pr-10 bg-white p-4 rounded-xl">
          <div>
            O{" "}
            <span style={{ color: "#C63230", fontWeight: "700" }}>
              Perigo
            </span>
          </div>
          <div>Não é Piada</div>

          {/* Chamada do componente do botão*/}
          <CustomButton label="Acessar" href="/home" />

        </div>
      </div>

    </main>
  );
}
