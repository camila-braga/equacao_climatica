'use client';
import "./page.css"
import {AllSeriesType, ChartContainer, ChartsGrid, ChartsTooltip, ChartsXAxis, ChartsYAxis, LinePlot, ScatterPlot, ScatterSeriesType} from "@mui/x-charts"
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Papa from "papaparse";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Iceberg, Josefin_Sans } from "next/font/google";
import Latex from "react-latex";
import 'katex/dist/katex.min.css';
import { parameters } from './parameters';

type Point = {
  x: number;
  y: number;
};

type AdjustType = {
  title: string;
  description: ReactNode,
  adjustDataPath: string,
  predictionDataPath: string
};

const iceberg = Iceberg({
  subsets: ["latin"],
  weight: ["400"], // regular do figma
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"], // medium do figma
});

function fetchPointsFromCsv(csvPath: string, xHeader: string, yHeader: string, setState: Dispatch<SetStateAction<Point[]>>) {
  fetch(csvPath)
    .then(response => response.text())
    .then(text => {
      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const parsed: Point[] = result.data.map((row: any) => ({
            x: row[xHeader],
            y: row[yHeader]
          }))

          setState(parsed)
        }
      })
    })
  }

const adjustTypeInformation: {[key: string] : AdjustType} = {
  "linear": {
    title: "Ajuste linear",
    description: (
      <>
        <p className="mb-3">O ajuste linear encontra a reta <Latex>$g(x) = ax + b$</Latex> que possui o menor erro acumulado com os dados.</p>
        <p><Latex>{`Valor de $a$ encontrado: \$${parameters.linear.a}\$`}</Latex></p>
        <p><Latex>{`Valor de $b$ encontrado: \$${parameters.linear.b}\$`}</Latex></p>
        <p><Latex>{`Valor do $r^2$: \$${parameters.linear.r2}\$`}</Latex></p>
      </>
    ),
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_linear.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_linear.csv"
  },
  "log": {
    title: "Ajuste logaritmico",
    description: (
      <>
        <p className="mb-3">O ajuste logarítmico encontra a função do tipo <Latex>$g(x) = a\ln(x) + b$</Latex> 
        que possui o menor erro acumulado com os dados. 
        Podemos usar o ajuste linear para calcular o logarítmico, substituindo <Latex>$x$ por $\ln(x)$</Latex>.</p>
        <p><Latex>{`Valor de $a$ encontrado: \$${parameters.log.a}\$`}</Latex></p>
        <p><Latex>{`Valor de $b$ encontrado: \$${parameters.log.b}\$`}</Latex></p>
        <p><Latex>{`Valor do $r^2$: \$${parameters.log.r2}\$`}</Latex></p>
      </>
    ),
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_logaritmico.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_logaritmica.csv"
  },
  "pot": {
    title: "Ajuste de potência",
    description: (
      <>
        <p className="mb-3">O ajuste de potência encontra a função <Latex>$g(x)= bx^a$</Latex> que
        possui o menor erro acumulado com os dados. A forma linearizada desta função
        é <Latex>$\ln(y) = a\ln(x) + \ln(b)$</Latex>. Isto nos permite usar o ajuste linear para encontrar valores
        de <Latex>{`$a'$ e $b'$ substituindo $x$ por $\\ln(x)$, $y$ por $\\ln(y)$. Assim, temos $a=a'$ e $b=e^{b'}$`}</Latex></p>
        <p><Latex>{`Valor de $a$ encontrado: \$${parameters.pot.a}\$`}</Latex></p>
        <p><Latex>{`Valor de $b$ encontrado: \$${parameters.pot.b}\$`}</Latex></p>
        <p><Latex>{`Valor do $r^2$: \$${parameters.pot.r2}\$`}</Latex></p>
      </>
    ),
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_potencial.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_potencial.csv"
  },
  "quad": {
    title: "Ajuste quadrático",
    description: (
      <>
        <p className="mb-3">O ajuste quadrático encontra a parábola <Latex>$g(x) = ax^2 + bx + c$</Latex> que 
        melhor se ajusta com os dados. O cálculo do ajuste decorre da solução do sistema de equações abaixo, que é obtido
        através do cálculo das derivadas parciais de <Latex>$a$, $b$ e $c$ da função $f(x) = \sum (y - g(x))^2$</Latex>.</p>
        <p className="mb-3">
        <Latex displayMode>
        {`$$
          \\begin{cases}
            a\\sum x^2 + b\\sum x + nc = \\sum y \\\\
            a\\sum x^3 + b\\sum x^2 + c\\sum x = \\sum xy \\\\
            a\\sum x^4 + b\\sum x^3 + c\\sum x^2 = \\sum x^2y \\\\
          \\end{cases}
        $$`}
        </Latex></p>
        <p className="mb-3">Para resolver o sistema de equações, foi utilizado o método da eliminação de Gauss. Estes foram os parametros encontrados:</p>
        <p><Latex>{`Valor de $a$ encontrado: \$${parameters.quad.a}\$`}</Latex></p>
        <p><Latex>{`Valor de $b$ encontrado: \$${parameters.quad.b}\$`}</Latex></p>
        <p><Latex>{`Valor de $c$ encontrado: \$${parameters.quad.c}\$`}</Latex></p>
        <p><Latex>{`Valor do $r^2$: \$${parameters.quad.r2}\$`}</Latex></p>
      </>
    ),
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_quadratico.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_quadratica.csv"
  },
  "geo": {
    title: "Ajuste geométrico",
    description: (
      <>
        <p className="mb-3"> Ajuste geométrico encontra a função do tipo <Latex>{`$g(x) = b \\cdot a^x$`}</Latex></p>
        <p className="mb-3">Para linearizar o problema, aplicamos logaritmo natural em ambos os lados da equação, obtendo <Latex>{`$\\ln(y) = x \\cdot \\ln(a) + \\ln(b)$`}</Latex>. Isso nos permite usar o ajuste linear tradicional substituindo <Latex>{`$y$ por $\\ln(y)$`}</Latex>, onde o coeficiente angular corresponde a <Latex>{`$\\ln(a)$`}</Latex> e o coeficiente linear a <Latex>{`$\\ln(b)$`}</Latex>. </p>
        <p><Latex>{`Valor de $a$ encontrado: \$${parameters.geo.a}\$`}</Latex></p>
        <p><Latex>{`Valor de $b$ encontrado: \$${parameters.geo.b}\$`}</Latex></p>
        <p><Latex>{`Valor do $r^2$: \$${parameters.geo.r2}\$`}</Latex></p>
      </>
    ),
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_geometrica.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_geometrica.csv"
  },
  "exp": {
    title: "Ajuste exponencial",
    description: (
      <>
      <p className="mb-3">O ajuste exponencial modela a relação através da função <Latex>{`$g(x) = a \\cdot e^{bx}$`}</Latex></p>
     <p className="mb-3">Para linearizar o problema, aplicamos logaritmo natural em ambos os lados, resultando em <Latex>{`$\\ln(y) = bx + \\ln(a)$`}</Latex>. O ajuste linear é então realizado substituindo <Latex>$y$ por $\ln(y)$</Latex>, onde o coeficiente angular corresponde a <Latex>$b$</Latex> e o coeficiente linear a <Latex>$\ln(a)$</Latex></p>
        <p><Latex>{`Valor de $a$ encontrado: \$${parameters.exp.a}\$`}</Latex></p>
        <p><Latex>{`Valor de $b$ encontrado: \$${parameters.exp.b}\$`}</Latex></p>
        <p><Latex>{`Valor do $r^2$: \$${parameters.exp.r2}\$`}</Latex></p>
      </>
    ),
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_exponencial.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_exponencial.csv"
  },
  "paris-linear": {
    title: "Acordo de Paris - AJuste Linear",
    description: "",
    adjustDataPath: "/dashboard/adjusts_paris_agreement/ajuste_2016_2025_linearv2.csv",
    predictionDataPath: "/dashboard/predictions_paris_agreement/previsoes_2025_2035_linearv2.csv"
  },
  "paris-log": {
    title: "Acordo de Paris - AJuste Logarítmico",
    description: "",
    adjustDataPath: "/dashboard/adjusts_paris_agreement/ajuste_2016_2025_logaritmicov2.csv",
    predictionDataPath: "/dashboard/predictions_paris_agreement/previsoes_2025_2035_logaritmicav2.csv"
  },
  "paris-pot": {
    title: "Acordo de Paris - AJuste Potência",
    description: "",
    adjustDataPath: "/dashboard/adjusts_paris_agreement/ajuste_2016_2025_potencialv2.csv",
    predictionDataPath: "/dashboard/predictions_paris_agreement/previsoes_2025_2035_potencialv2.csv"
  },

  "paris-quad": {
    title: "Acordo de Paris - AJuste Quadrático",
    description: "",
    adjustDataPath: "/dashboard/adjusts_paris_agreement/ajuste_2016_2025_quadraticov2.csv",
    predictionDataPath: "/dashboard/predictions_paris_agreement/previsoes_2025_2035_quadraticav2.csv"
  },
	
}

function isParisAgreement(adjustType: string){
  return adjustType.startsWith('paris-');
}


export default function IntroDashboard() {
  const [scatterData, setScatterData] = useState<Point[]>([]);
  const [adjustData, setAdjustData] = useState<Point[]>([]);
  const [linePredictionData, setLinePredicionData] = useState<Point[]>([]);
  const [adjustType, setAdjustType] = useState<string>("linear");

  useEffect(() => {
    fetchPointsFromCsv(
      "/dashboard/data/co2_monthly_average.csv", "decimal_date", "monthly_average", setScatterData
    );
  }, [])

  useEffect(() => {
    const currAdjustType = adjustTypeInformation[adjustType];
		
    const csvPath = isParisAgreement(adjustType) 
      ? "/dashboard/data/co2_monthly_average_since_paris_agreement.csv"
      : "/dashboard/data/co2_monthly_average.csv";


    fetchPointsFromCsv(
      csvPath, "decimal_date", "monthly_average", setScatterData
    );

    fetchPointsFromCsv(
      currAdjustType.adjustDataPath, "decimal_date", "adjusted_prediction", setAdjustData
    );

    fetchPointsFromCsv(
      currAdjustType.predictionDataPath, "decimal_date", "monthly_prediction", setLinePredicionData
    );
  }, [adjustType])

  const chartSeries: AllSeriesType[] = [
    {
      type: 'scatter',
      markerSize: 1,
      label: 'Dados oficiais',
      data: scatterData,
    },
    {
      type: 'scatter',
      label: 'Ajuste',
      markerSize: 1,
      color: 'black',
      data: adjustData
    },
    {
      type: 'scatter',
      label: 'Previsão',
      markerSize: 1,
      color: 'red',
      data: linePredictionData
    },
  ];

  const handleAdjustTypeChange = (event: SelectChangeEvent) => {
    setAdjustType(event.target.value)
  }

  const currAdjustType = adjustTypeInformation[adjustType]

  return (
    <main className="w-full flex flex-col fillScreen">
      {/* Cabeçalho*/}
      <div className={`relative h-[300px] md:h-[380px] ${iceberg.className}`}>
        <img
          src="/principal_dashboard.jpeg"
          alt="Cabeçalho da página de dashboard"
          className="absolute inset-0 w-full h-full object-fill opacity-70 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center text-7xl font-normal gap-7">
          <p style={{ letterSpacing: "0.4em", textShadow: "2px 2px 8px #946968"}}>
            DASHBOARD
          </p>
          <p style={{ fontSize: '1.3rem', letterSpacing: "0.1em", textShadow: "2px 2px 20px #946968, 0px 0px 12px #C81E1C"}}>
            CONCENTRAÇÃO DE CO2 NA ATMOSFERA ATÉ 2050
          </p>
        </div>
      </div>
      <div className="relative h-60 mb-6">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-normal gap-6">
          <p className={`w-2/3 lg:w-1/3 text-center mb-6 ${josefinSans.className}`}>
              No dashboard você obtém uma visualização dinâmica dos crescimento da concentração de CO2 na atmosfera.
              Os dados oficiais foram coletados do site da <a href="https://climate.nasa.gov/vital-signs/" className="text-red-900 underline">Nasa</a>.
              Abaixo, é possível selecionar o tipo de ajuste dos dados e observar as predições da concentração de CO2 na atmosfera até o ano de 2050, de acordo com o ajuste escolhido. 
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-rows-4 md:grid-cols-3 border-t gap-3">
        <div className="md:row-span-4 md:col-span-2 pt-6 md:border-r">
          <h2 className="text-[1.5em] text-[#89212F] pl-6 mt-1" >Concentração de CO2 na atmosfera</h2>
          <ChartContainer
            series={chartSeries}
            height={500}
            xAxis={[
              {
                scaleType: 'linear',
                label: 'Ano',
                tickMinStep: 1,
                tickMaxStep: 5,
              },
            ]}
            yAxis={[
              {
                scaleType: 'linear',
                label: 'Concentração de CO2 (ppm)',
                tickMinStep: 1,
                tickMaxStep: 10,
              }
            ]}
          >
            <ScatterPlot/>

            <ChartsXAxis />
            <ChartsYAxis />
            <ChartsTooltip trigger="item"/>
            <ChartsGrid vertical horizontal/>
          </ChartContainer>
        </div>

        <div className="pb-6 pt-6 md:pb-0 md:pt-0 border-t md:border-t-0 md:row-span-1 col-span-1 border-b md:flex md:flex-col md:justify-center">
          <h2 className="text-[1.5em] text-[#89212F] mb-6">Selecione o tipo de ajuste</h2>
          <FormControl fullWidth>
            <InputLabel id="adjust-type-label">Tipo</InputLabel>
            <Select
              labelId="adjust-type-label"
              id="adjust-type-select"
              value={adjustType}
              label="Age"
              onChange={handleAdjustTypeChange}
            >
              <MenuItem value="linear">Linear</MenuItem>
              <MenuItem value="log">Logarítmico</MenuItem>
              <MenuItem value="pot">Potência</MenuItem>
              <MenuItem value="quad">Quadrático</MenuItem>
              <MenuItem value="exp">Exponencial</MenuItem>
              <MenuItem value="geo">Geométrica</MenuItem>
              <MenuItem value="paris-linear">Paris - Linear</MenuItem>
              <MenuItem value="paris-log">Paris - Logarítmico</MenuItem>
              <MenuItem value="paris-pot">Paris - Potência</MenuItem>
              <MenuItem value="paris-quad">Paris - Quadrático</MenuItem>
            </Select>
          </FormControl>
        </div>
          
        <div className="md:row-span-3 mt-6 mb-6">
          <h3 className="text-[1.25em] text-[#89212F] mb-6">{currAdjustType.title}</h3>
          <div>
            {currAdjustType.description}
          </div>
        </div>
      </div>
    </main>
  );
}
