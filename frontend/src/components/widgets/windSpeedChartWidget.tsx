import { useMemo, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import annotationPlugin from "chartjs-plugin-annotation";
import { IForecast } from "interface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

interface IWindSpeedChartWidgetProps {
  data: IForecast
}

const WindSpeedChartWidget = ({ data }: IWindSpeedChartWidgetProps) => {
  const chartRef = useRef(null);

  // Generate mock data (example)
  const generateData = (gust: boolean) => {
    const windList = data.list.map((item) => {
      return {
        x: new Date(item.dt * 1000),
        y: gust ? item.wind.gust : item.wind.speed,
      }
    });
    return windList
  };

  const graphData = {
    datasets: [
      {
        label: "Wind Speed Graph",
        data: generateData(false),
        fill: true,
        borderColor: "rgba(245, 245, 245, 0.9)",
        backgroundColor: "rgba(245, 245, 245, 0.2)",
        tension: 0.4, // Makes the line smooth
        pointRadius: 3,
      },
      {
        label: "Gust Speed Graph",
        data: generateData(true),
        fill: true,
        borderColor: "rgba(255, 150, 150, 0.9)",
        backgroundColor: "rgba(255, 150, 150, 0.2)",
        tension: 0.4, // Makes the line smooth
        pointRadius: 3,
      },
    ],
  };

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour",
          displayFormats: {
            hour: "HH:mm",
          },
          stepSize: 3, // Label every 3 hours
        },
        title: {
          display: true,
          text: "Time (3-hour intervals)",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Speed m/s",
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        mode: "nearest",
        intersect: false,
      },
    },
  }), []);

  return (
    <div className="w-full h-full ">
      <Line ref={chartRef} data={graphData} options={options} />
    </div>
  );
};

export default WindSpeedChartWidget;
