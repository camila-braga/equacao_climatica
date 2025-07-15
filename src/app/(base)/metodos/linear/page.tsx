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
          AJUSTE LINEAR
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
          O ajuste linear encontra a reta <Latex>$g(x) = ax + b$</Latex> que possui o menor erro com os 
          pontos <Latex>$(x_i, y_i)$ retirados da base de dados</Latex>.
          O erro é calculado por <Latex>{`$erro(a, b) = \\sum_1^n |y_i - g(x_i)| = \\sum_1^n |y_i - ax_i - b|$`}</Latex>.
          Para achar os melhores <Latex>$a$ e $b$</Latex>, precisamos achar o ponto mínimo da função erro.
        </p>
        <p className="indent-18"> 
          Primeiramente, podemos notar que o ponto mínimo da função erro é o mesmo ponto de mínimo da função
          <Latex>$f(a, b) = \sum_1^n (y_i - ax_i - b)^2$</Latex>. Esta função agora é diferenciável. Portanto, podemos 
          calcular o ponto de mínimo através das derivadas parciais desta função em relação a <Latex>$a$ e a $b$</Latex>.
        </p>
        <p className="indent-18"> 
          As derivadas parciais se encontram 
          abaixo. <Latex>Lembrando que $(x_i, y_i)$ são conhecidos e retirados da base de dados 
          e $n$ é a quantidade de pontos</Latex>. Por simplicidade, assuma que todos os índices do somatorios vao de 1 até n.
        </p>
        <ol>
          <li><Latex>
            {`$
              \\frac{\\delta f(a,b)}{\\delta a} = 2\\sum [(y_i - ax_i - b) \\cdot (-x_i)]
            $`}
          </Latex></li>
          <li><Latex>
            {`$
              \\frac{\\delta f(a,b)}{\\delta b} = 2\\sum [(y_i - ax_i - b) \\cdot (-1)]
            $`}
          </Latex></li>
        </ol>
        <p className="indent-18"> 
          Sabemos que para esta função o ponto de mínimo ocorre quando ambas as derivadas são iguais a zero.
          Desta maneira, podemos resolver o seguinte sistema de equações:
        </p>
        <p className="indent-18">
          <Latex>
            {`$$
              \\begin{cases}
                2\\sum [(y_i - ax_i - b) \\cdot (-x_i)] = 0 \\\\
                2\\sum [(y_i - ax_i - b) \\cdot (-1)] = 0 \\\\
              \\end{cases}
            $$`}
          </Latex>
        </p>

        <p className="indent-18">
          Aplicando a distributividade e isolando os valores de <Latex>$a$ e $b$</Latex>, o sistema fica da seguinte forma:
        </p>

        <p className="indent-18">
          <Latex>
            {`$$
              \\begin{cases}
                a\\sum x_i^2 +  b \\sum x_i = \\sum x_iy_i \\\\
                a\\sum x_i + b \\cdot n = \\sum y_i \\\\
              \\end{cases}
            $$`}
          </Latex>
        </p>

        <p className="indent-18">
          Pelo método da substituição, temos que a solução deste sistema é:
        </p>

        <p className="indent-18">
          <Latex>
            {`$$
              \\begin{cases}
                a = \\frac{n \\sum x_iy_i - \\sum x_i \\sum y_i}{n \\sum x_i^2 - (\\sum x_i)^2} \\\\
                \\\\
                b = \\frac{\\sum y_i - a \\sum x_i  }{n}
              \\end{cases}
            $$`}
          </Latex>
        </p>

        <p className="indent-18">
          Abaixo, você obtém acesso a tabela de dados usada na análise, contendo nossa base de dados e os calculos
          dos valores auxiliares para o cálculo de <Latex>$a$ e $b$</Latex>.
        </p>

        <div className="w-2/3 flex flex-col gap-3 m-auto">
          <CustomLink href="https://docs.google.com/spreadsheets/d/1mosAvcULrJ4WIWvFMuOghjg2q5nN7w5a7gkWbsv5Imo/edit?usp=sharing">
            Tabela de dados - Linear
          </CustomLink>
          <CustomLink href="/metodos/exponencial">
            Ajuste Exponencial
          </CustomLink>
        </div>  
      </div>
    </div>
  </main>
  );
}
