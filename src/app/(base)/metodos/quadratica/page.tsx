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
    <div className="relative h-30 mb-6">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-normal gap-6">
        <p className="text-[1.5em] text-[#C63230]">
          AJUSTE QUADRÁTICO
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
          O ajuste quadrático busca encontrar a parábola <Latex>$g(x) = ax^2 + bx + c$</Latex> que possui o menor erro com os 
          pontos <Latex>$(x_i, y_i)$ retirados da base de dados</Latex>.
          Usando argumento idêntico ao feito na seção do <a href="/metodos/linear" className='underline'>Ajuste linear</a>,
          chegamos a conclusão que devemos calcular o ponto de mínimo da função <Latex>$f(a, b, c) = \sum (y_i - ax_i^2 - bx_i - c)^2$</Latex>
        </p>

        <p className="indent-18">
            O processo para calcular o ponto de mínimo é o mesmo que o feito 
            no <a href="/metodos/linear" className='underline'>Ajuste linear</a>. A diferença é que temos três variáveis. Portanto, também teremos
            três equações.
        </p>

        <p className="indent-18">
            As derivadas parciais são:
        </p>

        <ol>
          <li><Latex>
            {`$
              \\frac{\\delta f(a,b,c)}{\\delta a} = 2\\sum [(y_i - ax_i^2 - bx_i - c) \\cdot (-x_i^2)]
            $`}
          </Latex></li>
          <li><Latex>
            {`$
              \\frac{\\delta f(a,b,c)}{\\delta b} = 2\\sum [(y_i - ax_i^2 - bx_i - c) \\cdot (-x_i)]
            $`}
          </Latex></li>
          <li><Latex>
            {`$
              \\frac{\\delta f(a,b,c)}{\\delta c} = 2\\sum [(y_i - ax_i^2 - bx_i - c) \\cdot (-1)]
            $`}
          </Latex></li>
        </ol>

        <p className="indent-18">
            O sistema de equações se organiza então da seguinte maneira:
        </p>

        <p className="indent-18">
          <Latex>
            {`$$
              \\begin{cases}
                2\\sum [(y_i - ax_i^2 - bx_i - c) \\cdot (-x_i^2) = 0 \\\\
                2\\sum [(y_i - ax_i^2 - bx_i - c) \\cdot (-x_i) = 0 \\\\
                2\\sum [(y_i - ax_i^2 - bx_i - c) \\cdot (-1) = 0
              \\end{cases}
            $$`}
          </Latex>


        </p>

        <p className="indent-18">
          <Latex>
            {`$$
              \\begin{cases}
                a \\sum x_i^4 + b \\sum x_i^3 + c \\sum x_i^2 = \\sum x_i^2y_i \\\\
                a \\sum x_i^3 + b \\sum x_i^2 + c \\sum x_i = \\sum x_iy_i \\\\
                a \\sum x_i^2 + b \\sum x_i + c n = \\sum y_i
              \\end{cases}
            $$`}
          </Latex>
        </p>

        <p className="indent-18">
            Podemos aplicar diversos métodos para resolver este sistema linear. No nosso trabalho, implementamos
            o método da eliminação de Gauss para resolver esse sistema e encontrar os valores de <Latex>$a$, $b$ e $c$</Latex>.
        </p>

        <p className="indent-18">
            A seguir, você pode acessar o nosso dashboard interativo para visualizar os ajustes e obter os coeficientes das 
            funções calculados.
        </p>

        <div className="w-2/3 flex flex-col gap-3 m-auto">
          <CustomLink href="https://docs.google.com/spreadsheets/d/1mosAvcULrJ4WIWvFMuOghjg2q5nN7w5a7gkWbsv5Imo/edit?usp=sharing">
            Tabela de dados - Quadrático
          </CustomLink>
          <CustomLink href="/dashboard">
            Dashboard
          </CustomLink>
        </div>  
      </div>
    </div>
  </main>
  );
}
