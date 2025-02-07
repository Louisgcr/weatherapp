
import Card
  from "./card";
import { NavigationIcon } from "assets/icons/icons";

interface IWindSpeedWidgetProps {
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
}

const WindSpeedWidget = ({ wind_speed, wind_deg, wind_gust }: IWindSpeedWidgetProps) => {

  return (
    <Card icon={<img src={"https://bmcdn.nl/assets/weather-icons/v2.0/line/wind.svg"} alt={"Wind"} className="w-7 h-7" />} title="Wind" link="/wind-speed">
      <div className="flex w-full">
        <div className="flex flex-col w-2/3 pl-8 pr-4 ">
          <div className="flex w-full mx-auto items-center ">
            <div className="text-3xl pr-2 w-1/4 ">{wind_speed.toString().split('.')[0]}</div>
            <div className="flex flex-col text-sm mb-1">
              <div className="flex-grow mt-1">m/s</div>
              <div className="flex-grow mb-1 text-slate-200 opacity-70">Wind</div>
            </div>
          </div>

          {wind_gust &&
            <div className="flex w-full mx-auto border-t border-slate-200 border-opacity-50  items-center ">
              <div className="text-3xl pr-2 w-1/4 ">{wind_gust.toString().split('.')[0]}</div>
              <div className="flex flex-col text-sm mb-1">
                <div className="flex-grow mt-1">m/s</div>
                <div className="flex-grow mb-1 text-slate-200 opacity-70">Gust</div>
              </div>
            </div>
          }

          <div className="flex w-full mx-auto border-t border-slate-200 border-opacity-50 ">
            <div className="text-3xl pr-2 w-1/4">{wind_deg.toString().split('.')[0]}</div>
            <div className="flex flex-col text-sm mb-1">
              <div className="flex-grow mt-1">°N</div>
              <div className="flex-grow mb-1 text-slate-200 opacity-70">Direction</div>
            </div>
          </div>


        </div>
        <div className="relative flex w-1/3 transform -translate-y-4">
          <img src="compass.svg" alt={"Compass"} className="w-full p-2" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center" style={{ transform: `rotate(${wind_deg}deg)` }}>
            <NavigationIcon className="absolute text-red-700 fill-current w-7 h-7 transform -translate-y-full translate-y-" />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="flex flex-col items-center text-xs font-bold">
              <div className="flex">{wind_speed.toString().split('.')[0]}</div>
              <div className="flex font-normal ">m/s</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WindSpeedWidget