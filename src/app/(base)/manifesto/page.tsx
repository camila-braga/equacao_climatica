import { Iceberg } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import CarrosselImagens from "@/components/Carousel";

const iceberg = Iceberg({
  subsets: ["latin"],
  weight: ["400"],
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

const imagensDoCarrossel = [
  { src: "/img_manifesto1.jpg", alt: "Imagem 1" },
  { src: "/img_manifesto2.jpeg", alt: "Imagem 2" },
  { src: "/img_manifesto3.png", alt: "Imagem 3" },
  { src: "/img_manifesto4.jpg", alt: "Imagem 4" },
];
export default function Manifesto() {
  return (
    <main className={`w-full flex flex-col ${josefinSans.className}`}>
      {/* Cabeçalho */}
      <div className={`relative h-95 ${iceberg.className}`}>
        <img
          src="/principal_manifesto.webp"
          alt="Cabeçalho da página do manifesto"
          className="absolute inset-0 w-full h-full object-fill opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center text-7xl font-normal gap-7">
          <p style={{ letterSpacing: "0.4em", textShadow: "2px 2px 8px #946968" }}>
            O MANIFESTO
          </p>
        </div>
      </div>

      {/* Texto inicial */}
      <div className="relative h-60 mb-6">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-normal gap-6">
          <p className="text-[1.5em] text-[#89212F] mb-6 mt-12">
            O PLANETA PEDE SOCORRO
          </p>
          <p className="text-[1.1em] text-[#C63230]">
            “Não há Plano B, porque não temos um planeta B.”
          </p>
          <p className="text-[1.1em] text-[#C63230]">Ban Ki Moon</p>
        </div>
      </div>

      {/* Carrossel */}
      <div className="relative h-65 opacity-80">
        <CarrosselImagens imagens={imagensDoCarrossel} />
      </div>

      {/* Texto do manifesto justificado */}
      <div className="relative w-full px-8 py-12 flex justify-center">
        <div
          className="max-w-4xl text-[1.15em] leading-relaxed space-y-4 "
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
