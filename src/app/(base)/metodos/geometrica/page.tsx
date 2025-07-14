import { Iceberg } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const iceberg = Iceberg({
  subsets: ["latin"],
  weight: ["400"], // regular do figma
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"], // medium do figma
});

export default function ExponencialMetodos() {
  return (
    <main className={`w-full flex flex-col ${josefinSans.className}`}>
    {/* Cabeçalho*/}
    <div className="relative h-80 ${iceberg.className}">
      <img
        src="/principal_metodos.jpg"
        alt="Cabeçalho da página de métodos exponenciais"
        className="absolute inset-0 w-full h-full object-fill opacity-70 "
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center text-6xl font-normal gap-7">
        <p style={{ letterSpacing: "0.4em", textShadow: "2px 2px 8px #946968"}}>
          OS MÉTODOS
        </p>
        <p style={{ fontSize: '1.2rem', letterSpacing: "0.1em", textShadow: "2px 2px 20px #946968, 0px 0px 12px #C81E1C"}}>
          CALCULO DOS AJUSTES DE MMO
        </p>
      </div>
    </div>

    {/* Texto inicial*/}
    <div className="relative h-60 mb-6">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-normal gap-6">
        <p className="text-[1.1em] text-[#89212F] mb-6 mt-12">
          LINK PARA OS CÓDIGOS: ...........................................................
        </p>
        <p className="text-[1.5em] text-[#C63230]">
          GEOMÉTRICA
        </p>
      </div>
    </div>

    {/* Parte do conteúdo */}
    <div className="relative w-full px-8 py-12 flex justify-center">
      <div
        className="max-w-4xl text-[1.2em] leading-relaxed space-y-4 "
        style={{ textAlign: "justify" }}
      >
        {/*indent é a tabulação da primeira linha */}
        <p className="indent-18"> 
           teste teste teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste testeteste teste teste teste testeteste teste teste teste
          testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
          teste.
        </p>
        <p className="indent-18"> 
          teste teste teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste testeteste teste teste teste testeteste teste teste teste
          testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
          teste.
        </p>
        <p className="indent-18"> 
           teste teste teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste testeteste teste teste teste testeteste teste teste teste
          testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
          teste.
        </p>
        <p className="indent-18"> 
          teste teste teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste testeteste teste teste teste testeteste teste teste teste
          testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
          teste.
        </p>
        <p className="indent-18"> 
           teste teste teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste testeteste teste teste teste testeteste teste teste teste
          testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
          teste.
        </p>
        <p className="indent-18"> 
          teste teste teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste testeteste teste teste teste testeteste teste teste teste
          testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
          teste.
        </p>
        <p className="indent-18"> 
           teste teste teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste testeteste teste teste teste testeteste teste teste teste
          testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
          teste.
        </p>
        <p className="indent-18"> 
          teste teste teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste testeteste teste teste teste testeteste teste teste teste
          testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
          teste.
        </p>
      </div>
    </div>
  </main>
  );
}
