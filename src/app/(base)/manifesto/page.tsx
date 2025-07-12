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

export default function () {
  return (
    <main className={`w-full flex flex-col ${josefinSans.className}`}>
      {/* Cabeçalho*/}
      <div className="relative h-120 ${iceberg.className}">
        <img
          src="/principal_home.jpg"
          alt="Cabeçalho da página principal"
          className="absolute inset-0 w-full h-full object-fill opacity-70 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center text-7xl font-normal gap-7">
          <p style={{ letterSpacing: "0.4em", textShadow: "2px 2px 8px #946968"}}>
            EQUAÇÃO
          </p>
          <p style={{ letterSpacing: "0.18em", textShadow: "2px 2px 8px #946968"}}>
            CLIMÁTICA
          </p>
          <p style={{ fontSize: '1.3rem', letterSpacing: "0.1em", textShadow: "2px 2px 20px #946968, 0px 0px 12px #C81E1C"}}>
            O PLANETA PRECISA DA SUA AJUDA!
          </p>
        </div>
      </div>

      {/* Texto inicial*/}
      <div className="relative h-110 mb-6">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-normal gap-6">
          <p className="text-[1.5em] text-[#89212F] mb-6 mt-12">
            NÃO HÁ RIQUEZA EM UM PLANETA MORTO
          </p>
          <p className="text-[1.1em] px-24 mb-6">
            As emissões de CO₂ não são apenas números — são alertas sobre o nosso futuro. Para conscientizar o máximo de pessoas, foi criado o projeto Equação Climática que reúne dados científicos e projeções cuidadosamente executadas para mostrar como as emissões de CO₂ impactam o planeta ao longo das próximas décadas. Aqui, você encontrará análises, gráficos e informações essenciais que ajudam a compreender os riscos, antecipar cenários, exigir medidas preventivas e corretivas eficientes do Governo e agir com responsabilidade diante da crise climática.
          </p>
          <p className="text-[1.1em] text-[#C63230]">
            “Estamos numa situação de emergência planetária, ponto.”
          </p>
          <p className="text-[1.1em] text-[#C63230]">
            Paulo Artaxo
          </p>
        </div>
      </div>

      {/* Parte manifesto*/}
      <div className="relative h-120 flex flex-row gap-6 mb-22">
        <div className="w-2/3 h-full">
          <img
            src="/img_home1.jpg"
            alt="Imagem de veado em floresta queimada"
            className="w-full h-full object-fill opacity-80"
          />
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center items-center text-center gap-4">
          <div className="max-w-[400px] flex flex-col gap-5">
            <p className={`text-[1.5em] text-[#89212F] font-bold ${iceberg.className}`}>
              O MANIFESTO
            </p>
            <p className="text-[1.1em]">
              Precisamos RESPIRAR. Precisamos VIVER. Este manifesto é um chamado à consciência: se continuarmos no ritmo atual, enfrentaremos eventos climáticos extremos, perda de biodiversidade e crises humanitárias sem precedentes.
            </p>
            <p className="text-[1.1em] text-[#C63230] mb-6">
              Ainda há tempo para agir, mas tem que ser agora. O tempo é cruel e não espera.
            </p>
            <CustomButton label="Acessar" href="/manifesto" />
          </div>
        </div>
      </div>

      {/* Parte métodos*/}
      <div className="relative h-120 flex flex-row gap-6 mb-22">
        <div className="w-1/3 h-full flex flex-col justify-center items-center text-center gap-4">
          <div className="max-w-[400px] flex flex-col gap-5">
            <p className={`text-[1.5em] text-[#89212F] font-bold ${iceberg.className}`}>
              OS MÉTODOS
            </p>
            <p className="text-[1.1em]">
              Por trás de cada projeção climática, há modelos matemáticos que traduzem dados em futuros possíveis e imediatos. Nesta seção, explore como são feitas as análises que nos mostram para onde nossas ações irão nos levar.
            </p>
            <p className="text-[1.1em] text-[#C63230] mb-6">
              Cada método é um alerta. Cada gráfico, um chamado à ação.
            </p>
            <CustomButton label="Acessar" href="/metodos" />
          </div>
        </div>
        <div className="w-2/3 h-full">
          <img
            src="/img_home2.jpg"
            alt="Terra desértica"
            className="w-full h-full object-fill opacity-80"
          />
        </div>
      </div>

      {/* Parte dashboard*/}
      <div className="relative h-120 flex flex-row gap-6 mb-22">
        <div className="w-2/3 h-full">
          <img
            src="/img_home3.png"
            alt="Homem andando numa rua alagada por enchentes"
            className="w-full h-full object-fill opacity-80"
          />
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center items-center text-center gap-4">
          <div className="max-w-[400px] flex flex-col gap-5">
            <p className={`text-[1.5em] text-[#89212F] font-bold ${iceberg.className}`}>
              O DASHBOARD
            </p>
            <p className="text-[1.1em]">
              Os números contam a história que a humanidade ainda insiste em ignorar. Explore, nesta seção, dados reais que revelam o aumento das emissões de CO₂ e seus impactos. Visualize o futuro. Questione o presente.
            </p>
            <p className="text-[1.1em] text-[#C63230] mb-6">
              O futuro está em cada linha que sobe e o momento de agir é agora.
            </p>
            <CustomButton label="Acessar" href="/dashboard" />
          </div>
        </div>
      </div>

      {/* Parte equipe*/}
      <div className="relative h-120 flex flex-row gap-6 mb-22">
        <div className="w-1/3 h-full flex flex-col justify-center items-center text-center gap-4">
          <div className="max-w-[400px] flex flex-col gap-5">
            <p className={`text-[1.5em] text-[#89212F] font-bold ${iceberg.className}`}>
              A EQUIPE
            </p>
            <p className="text-[1.1em]">
              Somos desenvolvedores e cidadãos comprometidos com a verdade climática. Trabalhamos para transformar dados em alertas e conhecimento em esperança. Juntos, podemos fazer a diferença.
            </p>
            <p className="text-[1.1em] text-[#C63230] mb-6">
              Porque enfrentar a crise climática é uma tarefa coletiva — e começa com quem se importa.
              
            </p>
            <CustomButton label="Acessar" href="/equipe" />
          </div>
        </div>
        <div className="w-2/3 h-full">
          <img
            src="/img_home4.jpg"
            alt="Furacão"
            className="w-full h-full object-fill opacity-80"
          />
        </div>
      </div>

      {/* Imagem final*/}
      <div className="relative h-160">
        <img
          src="/img_home5.jpg"
          alt="Urso polar num bloco de gelo derretendo no oceano"
          className="w-full h-full object-fill opacity-80 mask-t-from-80%"
        />
        <div className="absolute inset-0 bg-orange-200 opacity-40 mix-blend-multiply mask-t-from-60% "></div>
      </div>
    </main>
  );
}
