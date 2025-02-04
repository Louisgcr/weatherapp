import Card from "./card";
import HumidityIcon from "assets/icons/humidity.svg?react";

interface IHumidityWidgetProps {
  data: number;
  dewpoint: number;
}

const HumidityWidget = ({ data, dewpoint }: IHumidityWidgetProps) => {

  return (
    <Card iconComponent={<HumidityIcon className="w-7 h-7 pr-1 fill-current" />} title="Humidity" >
      <div className="flex flex-col w-full pl-8 p-4">

        <div className="flex w-full mx-auto text-3xl ">
          <div className="pr-0.5">{(data).toString()}</div>
          <div>%</div>
        </div>

        <div className="capitalize pt-4">
          The dew point is {dewpoint.toString().split('.')[0]}°C right now.
        </div>

      </div>
    </Card>
  );
};

export default HumidityWidget