'use client';
import {AllSeriesType, ChartContainer, ChartsGrid, ChartsTooltip, ChartsXAxis, ChartsYAxis, LinePlot, ScatterPlot, ScatterSeriesType} from "@mui/x-charts"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Papa from "papaparse";

type Point = {
  x: number;
  y: number;
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
export default function IntroDashboard() {
  const [scatterData, setScatterData] = useState<Point[]>([]);
  const [lineData, setLineData] = useState<Point[]>([]);
  const [linePredictionData, setLinePredicionData] = useState<Point[]>([]);


  useEffect(() => {
    fetchPointsFromCsv(
      "/dashboard/data/co2_monthly_average.csv", "decimal_date", "monthly_average", setScatterData
    );

    fetchPointsFromCsv(
      "/dashboard/adjusts/ajuste_1958_2025_linear.csv", "decimal_date", "adjusted_prediction", setLineData
    );

    fetchPointsFromCsv(
      "/dashboard/predictions/previsoes_2025_2050_linear.csv", "decimal_date", "monthly_prediction", setLinePredicionData
    );
  }, [])

  const chartSeries: AllSeriesType[] = [
    {
      type: 'scatter',
      markerSize: 1,
      label: 'CSV Points',
      data: scatterData,
    },
    {
      type: 'scatter',
      label: 'Adjustment',
      markerSize: 1,
      color: 'black',
      data: lineData
    },
    {
      type: 'scatter',
      label: 'Prediction',
      markerSize: 1,
      color: 'red',
      data: linePredictionData
    },
  ];


  return (
    <main className="p-4">
      <h1>Esta é a página principal do dashboard</h1>
      <p>O menu deve aparecer acima.</p>
      <p>O rodapé deve aparecer abaixo.</p>

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
            tickMaxStep: 5,
          }
        ]}
      >
        <ScatterPlot/>

        <ChartsXAxis />
        <ChartsYAxis />
        <ChartsTooltip trigger="item"/>
        <ChartsGrid vertical horizontal/>
      </ChartContainer>
    </main>
  );
}
