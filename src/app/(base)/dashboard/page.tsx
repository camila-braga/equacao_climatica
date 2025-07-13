'use client';
import "./page.css"
import {AllSeriesType, ChartContainer, ChartsGrid, ChartsTooltip, ChartsXAxis, ChartsYAxis, LinePlot, ScatterPlot, ScatterSeriesType} from "@mui/x-charts"
import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react";
import Papa from "papaparse";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Iceberg, Josefin_Sans } from "next/font/google";


const iceberg = Iceberg({
  subsets: ["latin"],
  weight: ["400"], // regular do figma
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"], // medium do figma
});

type Point = {
  x: number;
  y: number;
};

type AdjustType = {
  title: string;
  description: ReactElement,
  adjustDataPath: string,
  predictionDataPath: string
};

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
    description: <p>O que vai ser redenrizado na descrição do ajuste, bom para LaTeX</p>,
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_linear.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_linear.csv"
  },
  "log": {
    title: "Ajuste logaritmico",
    description: <p>O que vai ser redenrizado na descrição do ajuste, bom para LaTeX</p>,
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_logaritmico.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_logaritmica.csv"
  },
  "pot": {
    title: "Ajuste de potência",
    description: <p>O que vai ser redenrizado na descrição do ajuste, bom para LaTeX</p>,
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_potencial.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_potencial.csv"
  },
  "quad": {
    title: "Ajuste quadrático",
    description: <p>O que vai ser redenrizado na descrição do ajuste, bom para LaTeX</p>,
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_quadratico.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_quadratica.csv"
  },
  "geo": {
    title: "Ajuste geométrico",
    description: <p>O que vai ser redenrizado na descrição do ajuste, bom para LaTeX</p>,
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_geometrica.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_geometrica.csv"
  },
  "exp": {
    title: "Ajuste exponencial",
    description: <p>O que vai ser redenrizado na descrição do ajuste, bom para LaTeX</p>,
    adjustDataPath: "/dashboard/adjusts/ajuste_1958_2025_exponencial.csv",
    predictionDataPath: "/dashboard/predictions/previsoes_2025_2050_exponencial.csv"
  }
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
    <main className="p-4 fillScreen">
      <div className="w-full flex flex-col items-center">
        <h1 className={`w-1/3 text-center text-[2em] text-[#89212F] font-bold ${iceberg.className}`}>DASHBOARD</h1>
        <p className={`w-2/3 lg:w-1/3 text-center mb-6 ${josefinSans.className}`}>
            No dashboard você obtém uma visualização dinâmica dos crescimento da concentração de CO2 na atmosfera.
            Os dados oficiais foram coletados do site da <a href="https://climate.nasa.gov/vital-signs/" className="text-red-900 underline">Nasa</a>.
            Abaixo, é possível selecionar o tipo de ajuste dos dados e observar as predições da concentração de CO2 na atmosfera até o ano de 2050, de acordo com o ajuste escolhido. 
        </p>
      </div>
      <div className="md:grid md:grid-rows-3 md:grid-cols-3 border-t gap-3">
        <div className="md:row-span-3 md:col-span-2 pt-6 md:border-r">
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
            </Select>
          </FormControl>
        </div>
          
        <div className="md:row-span-2 mt-6 mb-6">
          <h3 className="text-[1.25em] text-[#89212F] mb-6">{currAdjustType.title}</h3>
          <div>
            {currAdjustType.description}
          </div>
        </div>
      </div>

      
    </main>
  );
}
