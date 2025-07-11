import { Iceberg } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import CustomButton from "@/components/CustomButton";

const iceberg = Iceberg({
  subsets: ["latin"],
  weight: ["400"], // regular do figma
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"], // medium do figma
});

export default function Home() {
  return (
    <main className={`w-screen flex flex-col ${iceberg.className}`}>
      {/* Cabeçalho*/}
      <div className="relative h-120">
        <img
          src="/principal_home.jpg"
          alt="Cabeçalho da página principal"
          className="absolute inset-0 w-full h-full object-fill opacity-70"
        />
        {/* Container para os textos */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center text-7xl font-normal gap-7">
          <p style={{ letterSpacing: "0.4em", textShadow: "2px 2px 8px #946968"}}>EQUAÇÃO</p>
          <p style={{ letterSpacing: "0.18em", textShadow: "2px 2px 8px #946968"}}>CLIMÁTICA</p>
          <p style={{ fontSize: '1.3rem', letterSpacing: "0.1em", textShadow: "2px 2px 20px #946968, 0px 0px 12px #C81E1C"}}>O PLANETA PRECISA DA SUA AJUDA!</p>
        </div>
      </div>
      {/* Texto inicial*/}
      <div className="relative h-100">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center  font-normal gap-7">
          <p style={{ color:"#481219" }}>NÃO HÁ RIQUEZA EM UM PLANETA MORTO</p>
          <p style={{ }}>Founded in 2022, Space Xplorer is a non-profit organization that strives to make the aerospace and aeronautics industries more accessible through innovative projects and unique partners. Join us to take part in leading-edge projects, gain hands-on experience, and learn from renowed professionals.</p>
          <p style={{ }}>“Estamos numa situação de emergência planetária, ponto”</p>
          <p style={{ }}>Paulo Artaxo</p>
        </div>
      </div>
      <div className="relative h-120 bg-blue-200">Div 3</div>
      <div className="relative h-120 bg-yellow-200">Div 4</div>
      <div className="relative h-120 bg-purple-200">Div 5</div>
      <div className="relative h-120 bg-pink-200">Div 6</div>
      <div className="relative h-120 bg-gray-200">Div 7</div>
    </main>
  );
}
