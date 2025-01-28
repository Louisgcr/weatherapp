import { IWind } from "interface";
import Card
  from "./card";
import { NavigationIcon } from "assets/icons/icons";

interface IWindSpeedWidgetProps {
  data: IWind;
}

const WindSpeedWidget = ({ data }: IWindSpeedWidgetProps) => {

  return (
    <Card icon="https://bmcdn.nl/assets/weather-icons/v2.0/line/wind.svg" title="Wind" >
      <div className="flex w-full">
        <div className="flex flex-col w-2/3  pl-4 pr-2 ">
          <div className="flex w-full mx-auto py-2">
            <div className="flex-grow">Wind</div>
            <div className="pr-0.5">{data.speed.toString().split('.')[0]}</div>
            <div>km/h</div>
          </div>
          {data.gust && <div className="flex w-full mx-auto border-t border-slate-200 border-opacity-50 py-2">
            <div className="flex-grow">Gust</div>
            <div className="pr-0.5">{data.gust.toString().split('.')[0]}</div>
            <div>km/h</div>
          </div>}
          <div className="flex w-full mx-auto border-t border-slate-200 border-opacity-50 py-2">
            <div className="flex-grow">Direction</div>
            <div className="pr-0.5">{data.deg.toString().split('.')[0]}</div>
            <div>°N</div>
          </div>
        </div>
        <div className="relative flex w-1/3 transform -translate-y-4">
          <img src="compass.svg" alt={"Compass"} className="w-full p-2" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center" style={{ transform: `rotate(${data.deg}deg)` }}>
            <NavigationIcon className="absolute text-red-700 fill-current w-7 h-7 transform -translate-y-full translate-y-" />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="flex flex-col items-center text-xs font-bold">
              <div className="flex">{data.speed.toString().split('.')[0]}</div>
              <div className="flex font-normal ">km/h</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WindSpeedWidget