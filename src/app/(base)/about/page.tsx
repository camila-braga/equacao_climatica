import { Iceberg } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const iceberg = Iceberg({
  subsets: ["latin"],
  weight: ["400"],
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export default function About() {
  return (
    <main className={`w-full flex flex-col ${josefinSans.className}`}>
      {/* Cabeçalho */}
      <div className={`relative h-[300px] md:h-[380px] ${iceberg.className}`}>
        <img
          src="/principal_about.png"
          alt="Cabeçalho da página da equipe"
          className="absolute inset-0 w-full h-full object-cover md:object-fill opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center gap-4 px-4">
          <p className="text-4xl md:text-7xl font-normal w-full max-w-[90%] mx-auto"
            style={{ letterSpacing: "0.4em", textShadow: "2px 2px 8px #946968" }}
          >
            QUEM SOMOS
          </p>
        </div>
      </div>

      {/* Texto inicial */}
      <div className="relative w-full flex flex-col items-center text-center font-normal gap-6 px-4 py-18">
        <p className="text-x1 md:text-2xl text-[#89212F] mb-4 px-4">
          SOMOS ALUNOS DA DISCIPLINA DE CÁLCULO NUMÉRICO
        </p>
        <p className="text-x1 md:text-2xl text-[#89212F] mb-4 px-4">
          DO CURSO DE TECNOLOGIA DA INFORMAÇÃO - UFRN
        </p>
      </div>
      {/* Objetivo */}
      <div className="relative w-full flex flex-col items-center text-center font-normal gap-6 px-4 py-18">
        <p className="text-[#C63230] font-bold indent-10 md:text-3xl">
          OBJETIVO DO PROJETO
        </p>
        <p className={`font-bold indent-10 w-2/3 mb-6 md:text-lg text-justify ${josefinSans.className}`}>
              O propósito desse projeto é aplicar o conhecimento técnico e científico adquirido ao longo da graduação,
              mais especificamente na disciplina de Cálculo Numérico, para tratar de uma causa urgente e relevante: as mudanças climáticas.
              esse trabalho representa a interseção entre diferentes áreas do conhecimento, como Meio Ambiente, Estatística, Programação e 
              Matemática.
        </p>
        <p className={`font-bold indent-10 w-2/3 mb-6 md:text-lg text-justify ${josefinSans.className}`}>
              A Equação Climática utiliza dados oficiais da NASA, que registram mês a mês a conscentração de dioxido de carbono (CO2) na atmosfera,
              desde 1958 até os dias atuais. Atravez da análise desses dados, é possível compreender a evolução desse gás estufa e projetar seu comportamento 
              até o ano de 2050.
        </p>
      </div>
      {/* Frase */}
      <div className="relative w-full flex flex-col items-center text-center font-normal gap-6 px-4 py-18">
        <p className="text-base md:text-lg text-[#C63230] px-4">
        “Estamos perdendo a corrida para as mudanças climáticas. Esse é o desafio de nossa geração: ganhar a batalha contra o tempo.”
        </p>
        <p className="text-base md:text-lg text-[#89212F] px-4">Emmanuel Macron</p>
      </div>
      {/* Lista de Tarefas*/}
      <div className="relative w-full flex flex-col items-center text-center font-normal gap-6 px-4 py-18">
        <p className="text-[#C63230] font-bold indent-10 md:text-3xl">
          LISTA DE TAREFAS
        </p>
        <ul className="list-disc pl-8 text-base md:text-lg text-left">
          <li>Site: Camila Braga de Oliveira e Camila de Sousa Teixeira</li>
          <li>Manifesto: Samile Nicoli Ferreira da Conceição</li>
          <li>Pesquisa: Samile Nicoli Ferreira da Conceição</li>
          <li>Métodos: Jeremias Pinheiro de Araujo Andrade e Ramon Cândido Jales de Barros</li>
          <li>Dashboard: Ian Gabriel Silva Dias e José Eduardo Monteiro dos Santos</li>
        </ul>
      </div>

      {/* Logo UFRN */}
      <div className="relative w-full flex justify-center items-center py-6">
        <img
          src="/img_about1.png"
          alt="Logo da UFRN"
          className="relative h-48 md:h-64 object-contain"
        />
      </div>

    </main>
  );
}
