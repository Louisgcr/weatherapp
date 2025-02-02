import { IWeatherAPI3Response } from "interface";

import { getWeatherIcon } from 'utils/getIcon';
import { useEffect, useRef } from "react";
import React from "react";


interface IForecastProps {
  hourlyforecast: IWeatherAPI3Response;
}

export function useHorizontalScroll<T extends HTMLElement>() {
  const elRef = useRef<T>(null);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}

const Forecast = ({ hourlyforecast }: IForecastProps) => {
  const minTemp = Math.min(...hourlyforecast.hourly.map(f => f.temp));
  const maxTemp = Math.max(...hourlyforecast.hourly.map(f => f.temp));

  const [tempOn, setTempOn] = React.useState<boolean>(true);
  const elRef = useHorizontalScroll<HTMLDivElement>();

  const getBarHeight = (pop: number) => {
    const percentage = pop * 100;
    return `${percentage}%`; // Adjust multiplier to control height scale
  };

  const getTempHeight = (temp: number) => {
    const percentage = ((temp - minTemp) / (maxTemp - minTemp)) * 100;
    return percentage * 0.7; // Adjust the scaling factor
  };

  const generatePath = () => {
    const width = 50; // Width of each segment
    const points = hourlyforecast.hourly.map((forecast, index) => {
      const x = index * width; // Spread points evenly
      const y = 100 - getTempHeight(forecast.temp); // Invert for bottom-up scaling
      return `${x},${y}`;
    });

    return `M${points.join(" L")}`;
  };

  return (
    <div className="flex flex-col">
      <div className="text-base pb-2">
        {hourlyforecast.daily[0].summary}
      </div>
      <div className="flex p-3">
        <div className={`${tempOn ? "border-b-2 border-yellow-400 font-bold opacity-100" : "font-normal opacity-70"} cursor-pointer`} onClick={() => setTempOn(true)}>Temperature</div>
        <div className="border-l mx-2"></div>
        <div className={`${!tempOn ? "border-b-2 border-yellow-400 font-bold opacity-100" : "font-normal opacity-70"} cursor-pointer`} onClick={() => setTempOn(false)}>Precipitation</div>

      </div>
      <div ref={elRef} className="flex  scrollbar-hidden overflow-x-scroll">
        {hourlyforecast.hourly?.map(forecast => {
          return (
            //Rain Precipitation
            <div className="flex flex-col  items-center justify-center text-center" key={forecast.dt}>
              {tempOn ?
                <div className="w-full">
                  <div className="flex text-sm mx-1 text-slate-200">
                    {(forecast.temp).toString().split('.')[0]} °C
                  </div>
                  <div className="h-14 w-full relative ">
                    <svg className="absolute bottom-0 left-0 w-full h-full">
                      <path
                        d={generatePath()}
                        stroke="yellow"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
                :
                <div className="w-full">
                  <div className="flex text-sm mx-1 text-slate-200">
                    {(forecast.pop * 100).toString().split('.')[0]} %
                  </div>
                  <div className="h-14 w-full relative ">
                    <div
                      className="w-full bg-gradient-to-b from-blue-500 to-transparent absolute bottom-0"
                      style={{ height: getBarHeight(forecast.pop) }}
                    >
                    </div>
                  </div>
                </div>
              }

              <div className="w-12 mx-1">
                {
                  new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: true })
                }
              </div>

              {getWeatherIcon(forecast.weather[0].icon, 'w-10 h-10')}
              <div className="flex text-sm  text-slate-200">
                {forecast.temp.toString().split('.')[0]}
              </div>
              {/* <div className="h-full mx-2 relative">
                <div
                  className="absolute border-l border-gray-500"
                  style={{
                    top: '20%',
                    bottom: '20%',
                    left: '0',
                    width: '1px',
                  }}
                ></div>
              </div> */}
              {/* <div className="text-slate-500">{forecast.main.temp_min.toString().split('.')[0]}</div> */}


            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default Forecast;