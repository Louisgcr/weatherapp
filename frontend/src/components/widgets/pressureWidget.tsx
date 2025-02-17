import Card from "./card";
import PressureGuageIcon from "assets/icons/pressureGuage.svg?react"
import PressureIcon from "assets/icons/pressure-guage.svg?react"

interface IPressureWidgetProps {
  pressure: number;
}

const PressureWidget = ({ pressure }: IPressureWidgetProps) => {

  return (
    <Card iconComponent={<PressureIcon className="w-7 h-7 pr-1 fill-current " />} title="Pressure" >
      <div className="relative flex flex-col w-full ">
        <PressureGuageIcon className="w-full h-full px-4 pb-4 text-slate-200 fill-current " />
        <div className="absolute inset-0 flex items-center justify-center mb-4 text-xl font-bold text-slate-200">
          {pressure}
          <div className="flex font-normal text-base pl-0.5 pt-1 opacity-70">hPa</div>
        </div>

      </div>
    </Card>
  );
};

export default PressureWidget