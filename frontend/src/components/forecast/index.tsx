import { IForecast } from "interface";

import { getWeatherIcon } from 'utils/getIcon';
import Celsius from 'assets/icons/weather-icons/celsius.svg?react';
interface IForecastProps {
  forecast: IForecast;
}

const Forecast = ({ forecast }: IForecastProps) => {

  return (
    <div>
      <div className="grid grid-cols-8">
        {forecast.list?.slice(0, 8).map(forecast => {
          // console.log(forecast);
          return (
            <div className="flex flex-col" key={forecast.dt}>
              <div className="flex">
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