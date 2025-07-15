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
    <main className={`w-full flex flex-col ${josefinSans.className}`}>
      {/* Cabeçalho*/}
      <div className={`relative h-[400px] md:h-[480px] ${iceberg.className}`}>
        <img
          src="/principal_home.jpg"
          alt="Cabeçalho da página principal"
          className="absolute inset-0 w-full h-full object-cover md:object-fill opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center gap-4 px-4">
          <p
            className="text-5xl md:text-8xl font-normal w-full max-w-[90%] mx-auto"
            style={{ letterSpacing: "0.4em", textShadow: "2px 2px 8px #946968" }}
          >
            EQUAÇÃO
          </p>
          <p
            className="text-4xl md:text-8xl font-normal w-full max-w-[90%] mx-auto"
            style={{ letterSpacing: "0.18em", textShadow: "2px 2px 8px #946968" }}
          >
            CLIMÁTICA
          </p>
          <p
            className="text-lg md:text-2xl font-normal w-full max-w-[90%] mx-auto"
            style={{
              letterSpacing: "0.1em",
              textShadow: "2px 2px 20px #946968, 0px 0px 12px #C81E1C",
            }}
          >
            O PLANETA PRECISA DA SUA AJUDA!
          </p>
        </div>
      </div>

      {/* Texto inicial */}
      <div className="relative w-full flex flex-col items-center text-center font-normal gap-6 px-4 py-18">
        <p className="text-x1 md:text-2xl text-[#89212F] mb-4 px-4">
          NÃO HÁ RIQUEZA EM UM PLANETA MORTO
        </p>
        <p className="text-base md:text-lg max-w-6xl text-justify indent-6 md:indent-12 px-4">
          As emissões de CO₂ não são apenas números — são alertas sobre o nosso futuro. 
          Para conscientizar o máximo de pessoas, foi criado o projeto Equação Climática que reúne 
          dados científicos e projeções cuidadosamente executadas para mostrar como as emissões de 
          CO₂ impactam o planeta ao longo das próximas décadas. Aqui, você encontrará análises, 
          gráficos e informações essenciais que ajudam a compreender os riscos, antecipar cenários, 
          exigir medidas preventivas e corretivas eficientes do Governo e agir com responsabilidade 
          diante da crise climática.
        </p>
        <p className="text-base md:text-lg text-[#C63230] px-4">
          “Estamos numa situação de emergência planetária, ponto.”
        </p>
        <p className="text-base md:text-lg text-[#C63230] px-4">
          Paulo Artaxo
        </p>
      </div>

      {/* Parte manifesto*/}
      <div className="relative flex flex-col md:flex-row gap-6 mb-24">
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
          <img
            src="/img_home1.jpg"
            alt="Imagem de veado em floresta queimada"
            className="w-full h-full object-cover md:object-cover opacity-80"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 py-6 gap-4">
          <div className="max-w-[400px] flex flex-col gap-5">
            <p className={`text-2xl md:text-[1.5em] text-[#89212F] font-bold ${iceberg.className}`}>
              O MANIFESTO
            </p>
            <p className="text-base md:text-[1.1em] indent-6 md:indent-10 text-justify">
              Precisamos RESPIRAR. Precisamos VIVER. Este manifesto é um chamado à consciência: 
              se continuarmos no ritmo atual, enfrentaremos eventos climáticos extremos, perda de biodiversidade 
              e crises humanitárias sem precedentes.
             </p>
            <p className="text-base md:text-[1.1em] text-[#C63230] mb-6 indent-6 md:indent-10 text-justify">
              Ainda há tempo para agir, mas tem que ser agora. O tempo não espera.
            </p>
            <CustomButton label="Acessar" href="/manifesto" />
          </div>
        </div>
      </div>

      {/* Parte métodos*/}
      <div className="relative flex flex-col md:flex-row gap-6 mb-24">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 py-6 gap-4 order-2 md:order-1">
          <div className="max-w-[400px] flex flex-col gap-5">
            <p className={`text-2xl md:text-[1.5em] text-[#89212F] font-bold ${iceberg.className}`}>
              OS MÉTODOS
            </p>
            <p className="text-base md:text-[1.1em] indent-6 md:indent-10 text-justify">
              Por trás de cada projeção climática, há modelos matemáticos que traduzem dados em futuros 
              possíveis e imediatos. Descubra como são feitas as análises que nos mostram para onde nossas 
              ações irão nos levar.
            </p>
            <p className="text-base md:text-[1.1em] text-[#C63230] mb-6 indent-6 md:indent-10 text-justify">
              Cada método é um alerta. Cada gráfico, um chamado à ação.
            </p>
            <CustomButton label="Acessar" href="/metodos" />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] order-1 md:order-2">
          <img
            src="/img_home2.jpg"
            alt="Terra desértica"
            className="w-full h-full object-cover md:object-cover opacity-80"
          />
        </div>
      </div>
       
      {/* Parte dashboard*/}
      <div className="relative flex flex-col md:flex-row gap-6 mb-24">
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
          <img
            src="/img_home3.png"
            alt="Homem andando numa rua alagada por enchentes"
            className="w-full h-full object-cover md:object-cover opacity-80"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 py-6 gap-4">
          <div className="max-w-[400px] flex flex-col gap-5">
            <p className={`text-2xl md:text-[1.5em] text-[#89212F] font-bold ${iceberg.className}`}>
              O DASHBOARD
            </p>
            <p className="text-base md:text-[1.1em] indent-6 md:indent-10 text-justify">
              Os números contam a história que a humanidade ainda insiste em ignorar. 
              Explore dados reais que revelam o aumento das emissões de CO₂ e seus impactos. 
              Visualize o futuro. Questione o presente.
             </p>
            <p className="text-base md:text-[1.1em] text-[#C63230] mb-6 indent-6 md:indent-10 text-justify">
              O futuro está em cada linha que sobe e o momento de agir é agora.
            </p>
            <CustomButton label="Acessar" href="/dashboard" />
          </div>
        </div>
      </div>

      {/* Parte equipe*/}
      <div className="relative flex flex-col md:flex-row gap-6 mb-24">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 py-6 gap-4 order-2 md:order-1">
          <div className="max-w-[400px] flex flex-col gap-5">
            <p className={`text-2xl md:text-[1.5em] text-[#89212F] font-bold ${iceberg.className}`}>
              A EQUIPE
            </p>
            <p className="text-base md:text-[1.1em] indent-6 md:indent-10 text-justify">
              Somos cidadãos comprometidos com a verdade climática e trabalhamos para transformar 
              dados em alertas e conhecimento em esperança. Juntos, podemos fazer a diferença.
            </p>
            <p className="text-base md:text-[1.1em] text-[#C63230] mb-6 indent-6 md:indent-10 text-justify">
              Porque enfrentar a crise climática é uma tarefa coletiva — e começa com quem se importa.
            </p>
            <CustomButton label="Acessar" href="/about" />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] order-1 md:order-2">
          <img
            src="/img_home4.jpg"
            alt="Furacão"
            className="w-full h-full object-cover md:object-cover opacity-80"
          />
        </div>
      </div>

      {/* Imagem final*/}
      <div className="relative w-full h-[400px] md:h-[680px]">
        <img
          src="/img_home5.jpg"
          alt="Urso polar num bloco de gelo derretendo no oceano"
          className="w-full h-full object-fill md:object-cover opacity-80" 
          style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
                   WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-200 via-orange-200/60 to-transparent opacity-55 mix-blend-multiply"></div>
      </div>
    </main>
  );
}
