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
      <div className={`relative h-[300px] md:h-[380px] ${iceberg.className}`}>
        <img
          src="/principal_manifesto.webp"
          alt="Cabeçalho da página do manifesto"
          className="absolute inset-0 w-full h-full object-cover md:object-fill opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center gap-4 px-4">
          <p className="text-4xl md:text-7xl font-normal w-full max-w-[90%] mx-auto"
            style={{ letterSpacing: "0.4em", textShadow: "2px 2px 8px #946968" }}
          >
            O MANIFESTO
          </p>
        </div>
      </div>

      {/* Texto inicial */}
      <div className="relative w-full flex flex-col items-center text-center font-normal gap-6 px-4 py-18">
        <p className="text-x1 md:text-2xl text-[#89212F] mb-4 px-4">
          O PLANETA PEDE SOCORRO
        </p>
        <p className="text-base md:text-lg text-[#C63230] px-4">
          “Não há Plano B, porque não temos um planeta B.”
        </p>
        <p className="text-base md:text-lg text-[#C63230] px-4">Ban Ki Moon</p>
      </div>

      {/* Carrossel */}
      <div className="relative h-[200px] md:h-[250px] opacity-80">
        <CarrosselImagens imagens={imagensDoCarrossel} />
      </div>

      {/* Texto do manifesto justificado */}
      <div className="relative w-full flex justify-center px-8 md:px-10 py-12">
        <div
          className="max-w-4xl text-base md:text-[1.15em] leading-relaxed space-y-4"
          style={{ textAlign: "justify" }}
        >
          {/*indent é a tabulação da primeira linha */}
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
            teste teste teste teste teste teste teste teste teste teste teste teste teste
		        teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
            teste teste teste teste teste teste teste teste teste teste teste teste teste
		        teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
            teste teste teste teste teste teste teste teste teste teste teste teste teste
		        teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
            teste teste teste teste teste teste teste teste teste teste teste teste teste
		        teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
            teste teste teste teste teste teste teste teste teste teste teste teste teste
		        teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
            teste teste teste teste teste teste teste teste teste teste teste teste teste
		        teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
            teste teste teste teste teste teste teste teste teste teste teste teste teste
		        teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
            teste teste teste teste teste teste teste teste teste teste teste teste teste
		        teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
            teste teste teste teste teste teste teste teste teste teste teste teste teste
		        teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
           	teste teste teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste teste testeteste teste teste teste testeteste teste teste teste
            testeteste teste teste teste teste teste teste teste teste testeteste teste teste 
            teste.
          </p>
          <p className="indent-10"> 
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
