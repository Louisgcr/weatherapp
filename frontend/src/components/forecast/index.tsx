import { IForecast } from "interface";

import { getWeatherIcon } from 'utils/getIcon';
import { useEffect, useRef } from "react";


interface IForecastProps {
  forecast: IForecast;
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

const Forecast = ({ forecast }: IForecastProps) => {
  const elRef = useHorizontalScroll<HTMLDivElement>();

  return (
    <div>
      <div ref={elRef} className="flex scrollbar-hidden overflow-x-auto">
        {forecast.list?.map(forecast => {
          return (
            <div className="flex flex-col px-2" key={forecast.dt}>
              <div className=" flex">
                {
                  new Date(forecast.dt_txt).toLocaleTimeString([], { hour: 'numeric', hour12: true })
                }
              </div>

              {getWeatherIcon(forecast.weather[0].icon, 'w-10 h-10')}
              <div className="flex text-sm">
                <div className="text-slate-200">{forecast.main.temp_max.toString().split('.')[0]} </div>
                <div className="h-full mx-2 relative">
                  <div
                    className="absolute border-l border-gray-500"
                    style={{
                      top: '20%',
                      bottom: '20%',
                      left: '0',
                      width: '1px',
                    }}
                  ></div>
                </div>
                <div className="text-slate-500">{forecast.main.temp_min.toString().split('.')[0]}</div>
              </div>

            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default Forecast;