
import WindSpeedChartWidget from 'components/charts/windSpeedChartWidget';
import { IPageProps } from 'interface';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from 'assets/icons/arrowBackIcon.svg?react';


function WindSpeedPage({ weatherV3 }: IPageProps) {
  const navigate = useNavigate();

  // const maxWindSpeedIndex = weatherV3?.hourly.reduce((maxIndex, current, index, array) =>
  //   current.wind_speed > array[maxIndex].wind_speed ? index : maxIndex, 0);

  // const minWindSpeedIndex = weatherV3?.hourly.reduce((minIndex, current, index, array) =>
  //   current.wind_speed < array[minIndex].wind_speed ? index : minIndex, 0);

  const maxWindGustIndex = weatherV3?.hourly.reduce((maxIndex, current, index, array) =>
    current.wind_gust > array[maxIndex].wind_gust ? index : maxIndex, 0);

  const minWindGustIndex = weatherV3?.hourly.reduce((minIndex, current, index, array) =>
    current.wind_gust < array[minIndex].wind_gust ? index : minIndex, 0);

  return (
    <div className={`relative overflow-auto text-white h-screen`} >
      <div className='mx-12 mt-8 flex items-center justify-between'>
        <div className='flex items-center '>
          <img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/wind.svg" className='w-18 h-18' />
          <div className=' text-3xl '>Wind</div>
        </div>
        <button className='flex rounded-full bg-slate-400 bg-opacity-50 w-12 h-12 cursor-pointer items-center justify-center hover:bg-opacity-100'
          onClick={() => navigate(-1)}>
          <ArrowBackIcon className='flex fill-current w-8 h-8'></ArrowBackIcon>
        </button>
      </div>

      {maxWindGustIndex && minWindGustIndex && weatherV3 &&
        <div className='mx-12 p-4 bg-blue-500 bg-opacity-50 rounded-t-lg' >
          Expect gust speed to be at a high of <b>{weatherV3?.hourly[maxWindGustIndex].wind_speed}m/s</b> at <b>{new Date(weatherV3?.hourly[maxWindGustIndex].dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</b>  and a low of <b>{weatherV3?.hourly[minWindGustIndex].wind_speed}m/s</b> at <b>{new Date(weatherV3?.hourly[minWindGustIndex].dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</b>
        </div>
      }
      {weatherV3 && <div className='mx-12 bg-blue-500 bg-opacity-50 rounded-b-lg p-4 h-2/3'>
        <WindSpeedChartWidget hourlyforecast={weatherV3} />
      </div>
      }
    </div>
  )
}

export default WindSpeedPage
