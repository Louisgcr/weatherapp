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
import { IWeatherAPI3Response } from "interface";
import { useBackground } from "context/BackgroundColorContext";

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
  hourlyforecast: IWeatherAPI3Response;
}

const UVChartWidget = ({ hourlyforecast }: IWindSpeedChartWidgetProps) => {
  const chartRef = useRef(null);
  const { backgroundColor } = useBackground();
  // Generate mock data (example)
  const generateData = (gust: boolean) => {
    const windList = hourlyforecast.hourly?.map((item) => {
      return {
        x: new Date(item.dt * 1000),
        y: gust ? item.wind_gust : item.wind_speed,
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
          stepSize: 1,
        },
        title: {
          display: true,
          text: "Time (1-hour intervals)",
          color: "rgba(255, 255, 255, 0.9)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.9)",
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Speed m/s",
          color: "rgba(255, 255, 255, 0.9)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.9)",
        }
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
        labels: {
          color: "rgba(255, 255, 255, 0.9)", // 👈 Change legend text color
          font: {
            size: 14, // Adjust font size if needed
          },
        },
      },
      tooltip: {
        mode: "nearest",
        intersect: false,
      },
    },
  }), []);

  return (
    <div className={`w-full h-full ${backgroundColor}`}>
      <Line ref={chartRef} data={graphData} options={options} />
    </div>
  );
};

export default UVChartWidget;
