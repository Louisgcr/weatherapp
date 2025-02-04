
import Forecast from 'components/forecast';
import MapWidget from 'components/widgets/mapWidget';
import SearchBar from 'components/navigation/SearchBar';
import VisibilityWidget from 'components/widgets/visibilityWidget';
import WindSpeedChartWidget from 'components/charts/windSpeedChartWidget';
import WindSpeedWidget from 'components/widgets/windSpeedWidget';
import HumidityWidget from 'components/widgets/humidityWidget';
import SunRiseSetWidget from 'components/widgets/sunRiseSetWidget';
import PressureWidget from 'components/widgets/pressureWidget';

import { getWeatherIcon } from 'utils/getIcon';
import HumidityIcon from "assets/icons/humidity.svg?react";
import PressureIcon from "assets/icons/pressure-guage.svg?react"
import { IPageProps } from 'interface';



function Home({ setLatLong, latLong, weatherV3, backgroundImageUrl }: IPageProps) {

  return (
    <div className={`relative overflow-auto text-white `} >
      {/* Background image */}
      <div
        className={`fixed inset-0 min-h-screen bg-cover bg-center blur-sm opacity-50 -z-10`}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />

      <div className={`h-screen flex filter-none w-full`}>
        <div className="relative pl-36 pr-8 py-8">
          <div className="sm:max-w-lg gap-4">
            <div className='my-4'>
              <SearchBar onSelect={setLatLong} />
            </div>
            {
              weatherV3 &&
              <div className='flex bg-blue-600 bg-opacity-30 rounded-lg p-4 w-full'>
                <div className='flex flex-col items-center justify-center text-center w-1/2'>
                  <div className='flex capitalize text-lg'>{latLong.description}</div>
                  <div className='flex text-6xl'>
                    {getWeatherIcon(weatherV3.current.weather[0].icon, 'w-16 h-16')}
                    <div>{weatherV3.current.temp.toString().split('.')[0]}</div>
                    <div className='text-base pl-2 py-2'>°C </div>
                    <div className='text-base  p-2'>| </div>
                    <div className='text-base py-2'> °F </div>
                  </div>
                  <div className='flex'>
                    Feels like {weatherV3.current.feels_like.toString().split('.')[0]}°C
                  </div>
                  <div className='capitalize'>{weatherV3.current.weather[0].description}</div>
                  <div className=' flex items-center justify-center'>
                  </div>
                </div>

                <div className='w-1/2 grid grid-cols-5 items-center justify-center gap-1'>
                  <HumidityIcon className="w-10 h-7 pr-1 text-blue-600 fill-current" />
                  <a className='col-span-2'>Humidity</a>
                  <a className='col-span-2'>{weatherV3.current.humidity}%</a>

                  <img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/wind.svg" alt="wind" className="w-10 h-19" />
                  <a className='col-span-2'>Wind</a>
                  <a className='col-span-2'>{weatherV3.current.wind_speed}m/s</a>

                  <img src={`https://bmcdn.nl/assets/weather-icons/v2.0/line/uv-index-${Math.ceil(weatherV3.current.uvi)}.svg`} alt="pressure" className="w-10 h-19" />
                  <a className='col-span-2'>UV</a>
                  <a className='col-span-2'>{weatherV3.current.uvi}</a>

                  <PressureIcon className="w-10 h-7 pr-1 fill-current" />
                  <a className='col-span-2'>Press</a>
                  <a className='col-span-2'>{weatherV3.current.pressure}Ha</a>

                </div>
              </div>
            }

            {
              weatherV3 &&
              <div className='mt-4 flex flex-col bg-blue-600 bg-opacity-30 rounded-lg p-4 w-full'>
                <Forecast hourlyforecast={weatherV3} />
              </div>
            }



            {weatherV3 && <WindSpeedWidget wind_speed={weatherV3.current.wind_speed} wind_deg={weatherV3.current.wind_deg} wind_gust={weatherV3.hourly[0].wind_gust} />}

            <div className='grid grid-cols-2 gap-4 py-4'>
              {weatherV3 && <VisibilityWidget data={weatherV3.current.visibility} description={weatherV3.current.weather[0].description} />}
              {weatherV3 && <HumidityWidget data={weatherV3.current.humidity} dewpoint={weatherV3.current.dew_point} />}
              {weatherV3 && <SunRiseSetWidget sunrise={weatherV3.current.sunrise} sunset={weatherV3.current.sunset} />}
              {weatherV3 && <PressureWidget pressure={weatherV3.current.pressure} />}
            </div>

          </div>
        </div>

        <div className="w-full h-full py-12 pr-36 rounded-lg ">
          <MapWidget />
        </div>

      </div>
    </div>
  )
}

export default Home
