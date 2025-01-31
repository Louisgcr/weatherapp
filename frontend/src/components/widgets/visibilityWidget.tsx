import Card from "./card";

interface IVisibilityWidgetProps {
  data: number;
  description: string;
}

const VisibilityWidget = ({ data, description }: IVisibilityWidgetProps) => {

  return (
    <Card icon="https://bmcdn.nl/assets/weather-icons/v2.0/line/wind.svg" title="Visibility" >
      <div className="flex flex-col w-full pl-8 p-4">

        <div className="flex w-full mx-auto text-3xl ">
          <div className="pr-0.5">{(data / 1000).toString()}</div>
          <div>Km</div>
        </div>

        <div className="capitalize pt-4">
          {description}
        </div>

      </div>
    </Card>
  );
};

export default VisibilityWidget