import { useEffect, useState } from "react";
import Card from "./card";
import SunRiseSetIcon from "assets/icons/sun-rise-set.svg?react";

interface ISunRiseSetWidgetProps {
  sunrise: number;
  sunset: number;
}

const SunRiseSetWidget = ({ sunrise, sunset }: ISunRiseSetWidgetProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const getCurvePosition = () => {
    const totalMinutes = (sunset - sunrise) * 60;
    const elapsedMinutes =
      (currentTime.getHours() - sunrise) * 60 + currentTime.getMinutes();
    const progress = Math.max(0, Math.min(1, elapsedMinutes / totalMinutes));

    const startX = -80;
    const endX = 70;
    const peakX = 0;
    const peakY = -80;
    const control1X = -27;
    const control1Y = 0;
    const control2X = -35;
    const control2Y = -80;
    const control3X = 27;
    const control3Y = 0;

    const t = progress;
    const x =
      (1 - t) ** 3 * startX +
      3 * (1 - t) ** 2 * t * control1X +
      3 * (1 - t) * t ** 2 * control2X +
      t ** 3 * endX;
    const y =
      (1 - t) ** 3 * 10 +
      3 * (1 - t) ** 2 * t * control1Y +
      3 * (1 - t) * t ** 2 * control2Y +
      t ** 3 * peakY - 10;

    return { x, y };
  };

  const { x, y } = getCurvePosition();


  return (
    <Card iconComponent={<SunRiseSetIcon className="w-7 h-7 pr-1 fill-current " />} title="Sunrise / Sunset" >
      <div className="flex flex-col w-full ">
        <div className="relative  h-20 mt-4">
          <svg width="100%" height="100%" viewBox="-90 -90 180 100">
            <path
              d="M -80 0 C -27 0 -35 -80 0 -80 S 27 0 70 0"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="4"
            />
            <circle
              cx={x}
              cy={y}
              r="6"
              fill="#f97316"
            />
          </svg>
        </div>
        <div className="flex justify-between w-full text-sm mt-2 px-2">
          <span>{new Date(sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
          <span>{new Date(sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
        </div>


      </div>
    </Card>
  );
};

export default SunRiseSetWidget