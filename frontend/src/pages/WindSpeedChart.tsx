
import WindSpeedChartWidget from 'components/charts/windSpeedChartWidget';
import { IPageProps } from 'interface';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from 'assets/icons/arrowBackIcon.svg?react';
import { useBackground } from 'context/BackgroundColorContext';


function WindSpeedPage({ latLong, weatherV3 }: IPageProps) {
  const navigate = useNavigate();

  const { backgroundColor } = useBackground();

  const maxWindGustIndex = weatherV3?.hourly.reduce((maxIndex, current, index, array) =>
    current.wind_gust > array[maxIndex].wind_gust ? index : maxIndex, 0);

  const minWindGustIndex = weatherV3?.hourly.reduce((minIndex, current, index, array) =>
    current.wind_gust < array[minIndex].wind_gust ? index : minIndex, 0);

  const getDate = (dt: number) => {
    return new Date(dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
  }

  return (
    <div className={`relative overflow-auto text-white h-screen px-4 pt-8`} >

      {weatherV3 &&
        <div className={`flex flex-col ${backgroundColor} rounded-lg`}>

          <div className={`flex items-center justify-between ${backgroundColor} rounded-t-lg p-2`}>
            <div className='flex items-center '>
              <img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/wind.svg" className='w-8 h-8' />
              <div className=' text-lg '>Wind @ {latLong.description}</div>
            </div>
            <button className='flex rounded-full bg-slate-400 bg-opacity-50 w-8 h-8 cursor-pointer items-center justify-center hover:bg-opacity-100'
              onClick={() => navigate(-1)}>
              <ArrowBackIcon className='flex fill-current w-6 h-6'></ArrowBackIcon>
            </button>
          </div>


          <div className='flex' style={{ height: '40vh' }}>
            <WindSpeedChartWidget hourlyforecast={weatherV3} />
          </div>

          {maxWindGustIndex && minWindGustIndex && weatherV3 &&
            <div className={`flex text-left p-2  ${backgroundColor} `} >
              Expect gust speed to be at a high of {weatherV3?.hourly[maxWindGustIndex].wind_speed}m/s at {getDate(weatherV3?.hourly[maxWindGustIndex].dt)} and a low of {weatherV3?.hourly[minWindGustIndex].wind_speed}m/s at {getDate(weatherV3?.hourly[minWindGustIndex].dt)}.
            </div>
          }
        </div>
      }
    </div>
  )
}

export default WindSpeedPage
