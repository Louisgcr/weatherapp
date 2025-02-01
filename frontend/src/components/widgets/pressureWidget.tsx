import Card from "./card";

interface IPressureWidgetProps {
  pressure: number;
}

const SunRiseSetWidget = ({ pressure }: IPressureWidgetProps) => {

  return (
    <Card icon="https://bmcdn.nl/assets/weather-icons/v2.0/line/wind.svg" title="Pressure" >
      <div className="flex flex-col w-full pl-8 p-4">



      </div>
    </Card>
  );
};

export default SunRiseSetWidget