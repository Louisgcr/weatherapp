import Card from "./card";
import VisibilityIcon from "assets/icons/visibility.svg?react"

interface IVisibilityWidgetProps {
  data: number;
  description: string;
}

const VisibilityWidget = ({ data, description }: IVisibilityWidgetProps) => {

  return (
    <Card iconComponent={<VisibilityIcon className="w-7 h-7 pr-1 fill-current" />} title="Visibility" >
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