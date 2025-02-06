import Forecast from 'components/forecast';
import MapWidget from 'components/widgets/mapWidget';
import VisibilityWidget from 'components/widgets/visibilityWidget';
import WindSpeedWidget from 'components/widgets/windSpeedWidget';
import HumidityWidget from 'components/widgets/humidityWidget';
import SunRiseSetWidget from 'components/widgets/sunRiseSetWidget';
import PressureWidget from 'components/widgets/pressureWidget';
import WeatherSummaryWidget from 'components/widgets/weatherSummeryWidget';

import SaveIcon from "assets/icons/saveIcon.svg?react";

import { IPageProps } from 'interface';
import { useBackground } from 'context/BackgroundColorContext';
import axios from 'axios';

function Home({ latLong, weatherV3 }: IPageProps) {
  const { backgroundColor } = useBackground();

  // Add a function to save location
  const saveLocation = async () => {
    // Save location to the database
    await axios.post("http://localhost:5174/api/locations", {
      latitude: latLong.lat,
      longitude: latLong.long,
      name: latLong.description
    });
    console.log("Location saved", {
      lat: latLong.lat,
      long: latLong.long,
      description: latLong.description
    });
  }

  return (
    <div className={`relative overflow-auto text-white `} >
      <div className={`h-screen flex filter-none w-full`}>
        {weatherV3 && <div className='grid grid-cols-3 w-full px-36 pb-8 pt-16' >
          <div className="col-span-2 relative pr-4">

            <WeatherSummaryWidget latLong={latLong} weatherV3={weatherV3} />

            <div className={`mt-4 flex flex-col ${backgroundColor} rounded-lg p-4 w-full`}>
              <Forecast hourlyforecast={weatherV3} />
            </div>

            <WindSpeedWidget wind_speed={weatherV3.current.wind_speed} wind_deg={weatherV3.current.wind_deg} wind_gust={weatherV3.hourly[0].wind_gust} />

            <div className='grid grid-cols-2 gap-4 py-4'>
              <VisibilityWidget data={weatherV3.current.visibility} description={weatherV3.current.weather[0].description} />
              <HumidityWidget data={weatherV3.current.humidity} dewpoint={weatherV3.current.dew_point} />
              <SunRiseSetWidget sunrise={weatherV3.current.sunrise} sunset={weatherV3.current.sunset} />
              <PressureWidget pressure={weatherV3.current.pressure} />
            </div>

          </div>

          <div className="col-span-1 w-full h-full rounded-lg ">
            <MapWidget />
          </div>
        </div>
        }
      </div>

      {/* Add a button to save location */}
      {latLong.description !== "Your Location" &&
        <div className='group absolute bottom-0 right-0 m-6' onClick={() => saveLocation()}>
          <button className=' bg-gray-800 hover:bg-gray-700 text-white font-bold p-2.5 rounded-full'>
            <SaveIcon className='fill-current w-8 h-8' />
          </button>
          {/* Hover prompt */}
          <div className='hidden group-hover:flex bg-gray-600 text-white text-center text-xs p-2 rounded-lg absolute top-0 left-0 -translate-y-full '>
            Save location
          </div>
        </div>
      }
    </div>
  )
}

export default Home
