'use client';
import { CustomLink } from '@/components/CustomLink';
import 'katex/dist/katex.min.css';
import { Iceberg } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import Latex from 'react-latex';

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
    <div className={`relative h-[300px] md:h-[380px] ${iceberg.className}`}>
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
          CALCULO DOS AJUSTES DE MMQ
        </p>
      </div>
    </div>

    {/* Texto inicial*/}
    <div className="relative h-30 mb-6">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-normal gap-6">
        <p className="text-[1.5em] text-[#C63230]">
          AJUSTE POTENCIAL
        </p>
      </div>
    </div>

    {/* Parte do conteúdo */}
    <div className="relative w-full px-8 pb-8 flex justify-center">
      <div
        className="max-w-4xl text-[1.2em] leading-relaxed space-y-4 "
        style={{ textAlign: "justify" }}
      >
        {/*indent é a tabulação da primeira linha */}
        <p className="indent-18"> 
          O ajuste potencial é caracterizado pela função: <Latex>{`$g(x) = bx^a$`}</Latex>.
        </p>

        <p className="indent-18">
            A forma linearizada dessa função é: <Latex>{`$\\ln (y) = a\\ln(x) + \\ln(b)$`}</Latex>.
            Usando o <a href="linear" className='underline'>ajuste linear</a>, podemos calcular os valores de <Latex>$a$ e $\ln(b)$</Latex> ao
            substituir os valores de <Latex>$x$ e $y$ por $\ln(x)$ e $\ln(y)$, respectivamente</Latex>.
            Por fim, para calcular o valor real de <Latex>{`$b$, é preciso calcular $e^{\\ln(b)}$`}</Latex>.
        </p>

        <div className="w-2/3 flex flex-col gap-3 m-auto">
          <CustomLink target="_blank" href="https://docs.google.com/spreadsheets/d/1mosAvcULrJ4WIWvFMuOghjg2q5nN7w5a7gkWbsv5Imo/edit?usp=sharing#gid=1217047238">
            Tabela de dados - Potencial
          </CustomLink>
          <CustomLink href="geometrica">
            Ajuste Geométrico
          </CustomLink>
        </div>
      </div>
    </div>
  </main>
  );
}
