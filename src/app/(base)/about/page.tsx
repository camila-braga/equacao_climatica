import Image from "next/image";
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


export default function About() {
  return (
	<main className={`w-full flex-1 flex flex-col ${josefinSans.className}`}>
		{/* Cabeçalho */}
		<div className={`relative h-95 ${iceberg.className} flex-shrink-0`}>
			<img
				src="/principal_about.png"
				alt="Cabeçalho da página da equipe"
				className="absolute inset-0 w-full h-full object-fill opacity-70"
			/>
			<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center text-6xl font-normal gap-7">
				<h2 style={{ letterSpacing: "0.4em", textShadow: "2px 2px 8px #946968" }}>
					Quem Somos
				</h2>
			</div>
		</div>
		<div className="container mb-auto mx-auto space-y-8 flex-1 overflow-auto py-8">
			<div className="font-bold w-2xl p-8 text-center mx-auto">
				<p className="text-2xl text-[#C63230]">
					SOMOS ALUNOS DA DISCIPLINA DE CÁLCULO NUMÉRICO DO CURSO DE TECNOLOGIA DA INFORMAÇÃO - UFRN
				</p>
			</div>
			<div className="mx-auto text-center text-base space-y-4">
				<h3 className="text-center text-[#C63230] text-lg font-bold">Objetivos</h3>
				<p>
				In Space Xplorer, we believe space shouldn't be kept behind closed gates. It is far too beautiful and mesmerising to be locked away, and everyone, especially students, should be able to enjoy its beauty. Our goal is to make those industries more accessible, through numerous interviews, conferences, interactive workshops with leading-edge partners, and hands-on experiences. Space Xplorer is the tool to connect you to your biggest and wildest dreams. 
				</p>
			</div>
			<div className="text-center text-base mx-auto text-[#C63230] space-y-2">
				<p>"Estamos perdendo a corrida para as mudanças climáticas..."</p>
				<h5 className="font-bold">Emmanuel Macron</h5>
			</div>
			<div className="mx-auto text-center space-y-4">
				<h3 className="text-center font-bold text-[#C63230] text-lg">Lista de tarefas</h3>
				<ul className="space-y-1">
					<li>Site: Camila Braga de Oliveira e Camila de Sousa Teixeira</li>
					<li>Manifesto: Samile Nicoli Ferreira da Conceição</li>
					<li>Pesquisa: Samile Nicoli Ferreira da Conceição</li>
					<li>Métodos: Jeremias Pinheiro, Ramon Jales</li>
					<li>Dashboard: Ian Gabriel, José Eduardo</li>
				</ul>
			</div>
		</div>
	</main>
  );
}
