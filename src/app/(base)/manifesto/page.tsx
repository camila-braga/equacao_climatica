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
      <div className="relative w-full flex justify-center px-8 md:px-10 py-12 font-normal">
        <div
          className="max-w-4xl text-base md:text-[1.15em] leading-relaxed space-y-4 " 
          style={{ textAlign: "justify" }}
        >
          <p className="text-x1 md:text-2xl text-[#89212F] mb-4 px-4 text-center font-bold "> 
            Manifesto pelo Ar que Respiramos: A Atmosfera como Patrimônio da Humanidade
          </p>

          <p className="text-[#C63230] font-bold indent-10">
            Introdução:
          </p>
          {/*indent é a tabulação da primeira linha */}
          <p className="indent-10"> 
           	No alto do vulcão Mauna Loa, no Havaí, cientistas monitoram, desde 1958, 
            a concentração de dióxido de carbono (CO₂) na atmosfera terrestre. O que era 
            inicialmente um exercício de pesquisa se transformou em um registro histórico da 
            degradação ambiental causada pela ação humana. A curva que representa esses dados 
            — sempre ascendente — reflete o avanço de um modelo de desenvolvimento que rompe 
            com os limites ecológicos do planeta.
          </p>
          <p className="indent-10"> 
            Queremos propor aqui, uma reflexão crítica sobre os impactos desse aumento na 
            concentração atmosférica de CO₂, entendendo a atmosfera não apenas como um componente 
            físico da biosfera, mas como um patrimônio comum da humanidade, fundamental para a manutenção 
            da vida no planeta.
          </p>

          <p className="text-[#C63230] indent-10 font-bold">
            O Registro Contínuo do CO₂ em Mauna Loa: Um Alerta Científico e Moral:
          </p>
          <p className="indent-10"> 
           	O observatório de Mauna Loa tornou-se um símbolo emblemático da crise climática. 
            A chamada “curva de Keeling”  — que representa a evolução das concentrações atmosféricas 
            de CO₂ — revela uma trajetória ascendente constante desde o início das medições, 
            sem indicações de estabilização.
          </p>
          <p className="indent-10"> 
            Este registro não é apenas um dado científico; é um documento histórico que revela o desequilíbrio 
            progressivo imposto pelos modos de produção e consumo vigentes. O aumento persistente do CO₂ está 
            correlacionado com o aumento das temperaturas médias globais, a intensificação de eventos climáticos 
            extremos, a acidificação dos oceanos e o comprometimento de ecossistemas essenciais.
          </p>

          <p className="text-[#C63230] indent-10 font-bold">
            A Atmosfera e o Acordo de Paris:
          </p>
          <p className="indent-10"> 
           	A atmosfera, apesar de ser invisível e intangível, é o que nos conecta enquanto espécie. Ela pertence a 
            todos, e sua destruição afeta de forma desigual os mais pobres, os mais jovens e as futuras gerações.
          </p>
          <p className="indent-10"> 
            Em 2015, 196 países assinaram o Acordo de Paris, comprometendo-se a limitar o aquecimento global a bem 
            menos de 2 °C acima dos níveis pré-industriais — com esforços para mantê-lo em até 1,5 °C. O 
            compromisso é claro: reduzir drasticamente as emissões de gases de efeito estufa, entre elas o 
            CO₂, e construir economias neutras em carbono até meados do século.
          </p>
          <p className="indent-10"> 
           	No entanto, os dados de Mauna Loa mostram que, mesmo após o acordo, as concentrações continuam a subir. 
            Isso revela que os compromissos internacionais, por mais importantes que sejam, não são suficientes se 
            não forem acompanhados de ação efetiva e pressão social contínua.
          </p>

          <p className="text-[#C63230] indent-10 font-bold">
            Apelo à Ação e à Responsabilidade Coletiva:
          </p>
          <p className="indent-10"> 
            Diante dessa realidade, torna-se urgente um posicionamento coletivo que transcenda discursos e promessas 
            vazias. A atmosfera deve ser reconhecida e protegida como patrimônio comum da humanidade, com regras 
            claras, acordos vinculantes e ações concretas para reduzir drasticamente as emissões de gases de 
            efeito estufa.
          </p>
          <p className="indent-10"> 
           	Além disso, é necessária uma reorientação profunda dos modelos econômicos e sociais, privilegiando a 
            sustentabilidade, a justiça ambiental e a preservação dos direitos humanos. A transição ecológica deve 
            ser rápida, justa e inclusiva, incorporando tecnologias limpas, políticas públicas eficazes e a 
            mobilização da sociedade civil.
          </p>

          <p className="text-[#C63230] indent-10 font-bold">
            O Papel da Sociedade Civil:
          </p>
          <p className="indent-10"> 
            A crise climática não será resolvida apenas por tratados internacionais. É necessário o envolvimento 
            ativo da sociedade civil, cujas escolhas diárias têm poder de provocar mudanças sistêmicas. Entre as ações 
            individuais e coletivas possíveis, destacam-se:
          </p>
          <ol className="list-disc list-inside space-y-2 indent-10 font-bold">
            <li>
              <strong>Rever padrões de consumo</strong>, priorizando produtos locais, duráveis e com menor impacto ambiental;
            </li>
            <li>
              <strong>Reduzir o uso de combustíveis fósseis</strong>, optando por transporte coletivo, bicicleta ou caronas compartilhadas;
            </li>
            <li>
              <strong>Adotar dietas com menor pegada de carbono</strong>, como a redução do consumo de carne e alimentos ultraprocessados;
            </li>
            <li>
              <strong>Apoiar políticas públicas ambientais</strong>, votando de forma consciente e cobrando de representantes o cumprimento 
              de compromissos climáticos;
            </li>
            <li>
              <strong>Mobilizar-se socialmente</strong>, participando de movimentos, campanhas e ações de educação ambiental em escolas, 
              comunidades e redes sociais.
            </li>
          </ol>

          <p className="indent-10"> 
            Essas atitudes, somadas e multiplicadas, podem contribuir para frear a curva do CO₂ e construir uma cultura de 
            responsabilidade climática.
          </p>

          <p className=" text-[#C63230] indent-10 font-bold">
            Conclusão:
          </p>
          <p className="indent-10"> 
           	A atmosfera é o que respiramos, mas também é o que somos: parte de um sistema interdependente, finito e vivo. 
            O aumento do CO₂ não é um dado técnico isolado — é um sintoma de ruptura entre humanidade e natureza.
          </p>
          <p className="indent-10"> 
            É preciso encarar a crise climática não como uma ameaça futura, mas como uma realidade presente que exige escolhas 
            urgentes. O Acordo de Paris é um marco essencial, mas apenas um ponto de partida. A transformação real depende 
            da ação cotidiana de milhões de pessoas.
          </p>
          <p className="indent-10"> 
           	Este manifesto não é apenas um chamado à ciência ou à política, mas um apelo moral e ético para que possamos garantir 
            um futuro habitável para as próximas gerações. A responsabilidade é de todos: governos, empresas, instituições e 
            cidadãos.
          </p>

          <p className="text-x1 md:text-2xl text-[#C63230] px-8 text-center font-bold">
            Respirar ar limpo e viver em equilíbrio com o planeta é um direito. E protegê-lo é uma responsabilidade coletiva.
          </p>
        </div>
      </div>
    </main>
  );
}
