import { getWeatherIcon } from 'utils/getIcon';
import HumidityIcon from "assets/icons/humidity.svg?react";
import PressureIcon from "assets/icons/pressure-guage.svg?react"
import UVIndex from "assets/icons/uv-index.svg?react"
import CloseIcon from "assets/icons/closeIcon.svg?react"

import { useBackground } from "context/BackgroundColorContext";
import { ILatLongDescription, IWeatherAPI3Response } from "interface";
import { getBackgroundImageUrl } from 'utils/getBackgroundImageUrl';
import axios from 'axios';
interface IWeatherSummaryWidget {
  latLong: ILatLongDescription;
  weatherV3: IWeatherAPI3Response;
}

const SidebarWeatherWidget = ({ latLong, weatherV3 }: IWeatherSummaryWidget) => {
  const { backgroundColor } = useBackground();
  const backgroundImageUrl = getBackgroundImageUrl(weatherV3.current.weather[0].id)

  const deleteSidebarWeatherWidget = async () => {
    if (latLong.id) {
      await axios.delete(`http://localhost:5174/api/locations/${latLong.id}`);
    }
  }
  if (!weatherV3 || !latLong) {
    return <div></div>;
  }

  return (
    <div className={`relative flex ${backgroundColor} rounded-lg p-4 w-full`}>
      {/* Background image */}
      <div
        className={`absolute inset-0 bg-cover bg-center  rounded-lg opacity-100 -z-10`}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />

      {/* Delete button */}

      <button className="flex items-center justify-center w-8 h-8 bg-gray-600 rounded-full hover:bg-gray-800 absolute top-2 right-2"
        onClick={deleteSidebarWeatherWidget}>
        <CloseIcon className="w-5 h-5 fill-current" />
      </button>

      <div className='flex flex-col items-center justify-center text-center w-1/2'>
        <div className='flex capitalize text-lg'>{latLong.description}</div>
        <div className='flex text-6xl'>
          {getWeatherIcon(weatherV3.current.weather[0].icon, 'w-16 h-16')}
          <div>{weatherV3.current.temp.toString().split('.')[0]}</div>
          <div className='text-base pl-2 py-2'>°C </div>
        </div>
        <div className='flex'>
          Feels like {weatherV3.current.feels_like.toString().split('.')[0]}°C
        </div>
        <div className='capitalize'>{weatherV3.current.weather[0].description}</div>
        <div className=' flex items-center justify-center'>
        </div>
      </div>

      <div className='w-1/2 grid grid-cols-5 items-center justify-center gap-1'>
        <HumidityIcon className="w-10 h-7 pr-1 fill-current" />
        <a className='col-span-2'>Humidity</a>
        <a className='col-span-2'>{weatherV3.current.humidity}%</a>

        <img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/wind.svg" alt="wind" className="w-10 h-19" />
        <a className='col-span-2'>Wind</a>
        <a className='col-span-2'>{weatherV3.current.wind_speed}m/s</a>

        <UVIndex className="w-10 h-7 pr-1 fill-current" />
        <a className='col-span-2'>UV</a>
        <a className='col-span-2'>{weatherV3.current.uvi}</a>

        <PressureIcon className="w-10 h-7 pr-1 fill-current" />
        <a className='col-span-2'>Press</a>
        <a className='col-span-2'>{weatherV3.current.pressure}Ha</a>

      </div>
    </div>
  );
};

export default SidebarWeatherWidget