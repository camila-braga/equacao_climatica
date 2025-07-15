'use client';
import { Iceberg } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import Latex from "react-latex";
import 'katex/dist/katex.min.css';
import { CustomLink } from "@/components/CustomLink";


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
      <div className="relative h-95 ${iceberg.className}">
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
      <div className="relative h-30 mb-3">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-normal gap-6">
          <a href="https://github.com/IanGabriel12/calc-num-u3" className="underline text-[1.1em] text-[#89212F] mb-6 mt-12">
            LINK PARA OS CÓDIGOS DOS MÉTODOS
          </a>
          <p className="text-[1.5em] text-[#C63230]">
            ANÁLISE DO CRESCIMENTO DA CONCENTRAÇÃO DE GÁS CARBÔNICO NA ATMOSFERA
          </p>
        </div>
      </div>

      {/* Parte do conteúdo */}
      <div className="relative w-full p-8 flex justify-center">
        <div
          className="max-w-4xl text-[1.2em] leading-relaxed space-y-4 "
          style={{ textAlign: "justify" }}
        >
          {/*indent é a tabulação da primeira linha */}
          <p className="indent-18"> 
           	Para este trabalho, faremos uma análise dos dados coletados pela Nasa da evolução da concentração de gás carbônico na atmosfera.
            A base de dados utilizada se encontra neste <a href="https://climate.nasa.gov/vital-signs/" className="underline">Link</a>. 
            Nesta base, encontramos a medição da concentração de CO2 mês a mês do ano de 1958 até 2025.
          </p>
          <p className="indent-18"> 
            Observando os dados da Nasa, é nítido que há uma tendência de crescimento na concentração de CO2 na atmosfera.
            Caso isto não seja controlado, este aumento terá consequências catastróficas para todo o planeta. Portanto, é preciso
            alertar para a urgência deste problema, antes que seja tarde demais. 
          </p>
          <p className="indent-18"> 
           	A partir dos Métodos de Mínimos Quadrados vistos na disciplina de Cálculo numérico, podemos calcular as funções que melhor
            se ajustam ao comportamento dos dados. Desta forma, conseguimos predizer da melhor maneira quais serão os níveis de gás 
            carbônico nos próximos anos, caso a tendência não mude. Consequentemente, podemos ter uma melhor compreensão do tempo que
            nos resta para mudar a situação do planeta.
          </p>
          <p className="indent-18"> 
            Existem vários tipos de métodos que podem ser usados para predizer os valores futuros. Os métodos diferem 
            no tipo de função que é ajustada aos dados (linear, logaritmica, exponencial, etc...). Para a escolha do método
            que vai fornecer a melhor previsão, é necessário um bom entendimento do problema analisado. Para auxiliar na escolha, há
            também o cálculo do <Latex>$r^2$</Latex>, que é maior quando o ajuste é melhor.
          </p>
          <p className="indent-18"> 
           	As páginas seguintes explicam detalhadamente cada um dos métodos calculados pela nossa equipe. Clique em um dos links
            abaixo para saber mais sobre cada método, além de ter acesso às tabelas de dados usadas e as previsões calculadas.
          </p>

          <div className="w-2/3 flex flex-col gap-3 m-auto">
            <CustomLink href="/metodos/linear">
              Ajuste linear
            </CustomLink>
            <CustomLink href="/metodos/exponencial">
              Ajuste Exponencial
            </CustomLink>
            <CustomLink href="/metodos/logaritmica">
              Ajuste Logarítmico
            </CustomLink>
            <CustomLink href="/metodos/potencia">
              Ajuste de Potência
            </CustomLink>
            <CustomLink href="/metodos/geometrica">
              Ajuste Geométrico
            </CustomLink>
            <CustomLink href="/metodos/quadratica">
              Ajuste Quadrático
            </CustomLink>
          </div>
        </div>
      </div>
    </main>
  );
}

