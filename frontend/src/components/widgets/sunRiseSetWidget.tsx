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

    //TODO get time zone of the place
    const currentTime = new Date(); // Get the current time

    // Convert Unix timestamps to Date objects
    const sunriseDate = new Date(sunrise * 1000);
    const sunsetDate = new Date(sunset * 1000);

    // Get total daylight duration in minutes
    const totalMinutes = (sunsetDate.getTime() - sunriseDate.getTime()) / (1000 * 60);

    // Get elapsed minutes since sunrise
    const elapsedMinutes = (currentTime.getTime() - sunriseDate.getTime()) / (1000 * 60);

    // Calculate progress (between 0 and 1)
    const progress = Math.max(0, Math.min(1, elapsedMinutes / totalMinutes));

    const startX = -80;
    const endX = 70;
    const peakX = 0;
    const peakY = -130;
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
      t ** 3 * peakY;

    return { x, y };
  };

  const { x, y } = getCurvePosition();


  return (
    <Card iconComponent={<SunRiseSetIcon className="w-7 h-7 pr-1 fill-current " />} title="Sunrise / Sunset" >
      <div className="flex flex-col w-full ">
        <div className="relative  h-20 mt-4">
          <svg width="100%" height="100%" viewBox="-90 -90 180 100">
            <defs>
              <filter id="circleShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#fbbf24" floodOpacity="0.6" />
              </filter>
            </defs>
            <path
              d="M -80 0 C -27 0 -35 -80 0 -80 S 27 0 70 0"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
            />
            <circle className="shadow-lg shadow-amber-300"
              cx={x}
              cy={y}
              r="6"
              fill="#f97316"
              filter="url(#circleShadow)"
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