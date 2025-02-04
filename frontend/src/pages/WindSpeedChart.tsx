
import WindSpeedChartWidget from 'components/charts/windSpeedChartWidget';
import { IPageProps } from 'interface';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from 'assets/icons/arrowBackIcon.svg?react';

function WindSpeedPage({ setLatLong, latLong, weatherV3, backgroundImageUrl }: IPageProps) {
  const navigate = useNavigate();
  return (
    <div className={`relative overflow-auto text-white h-screen`} >
      {/* Background image */}
      <div
        className={`fixed inset-0 min-h-screen bg-cover bg-center blur-sm opacity-50 -z-10`}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />

      <div className='mx-12 mt-8 flex items-center justify-between'>
        <div className=' text-3xl '>Wind & Gust Speed Chart</div>
        <button className='flex rounded-full bg-slate-400 bg-opacity-50 w-12 h-12 cursor-pointer items-center justify-center hover:bg-opacity-100'
          onClick={() => navigate(-1)}>
          <ArrowBackIcon className='flex fill-current w-8 h-8'></ArrowBackIcon>
        </button>
      </div>
      {weatherV3 && <div className='m-12 bg-blue-600 bg-opacity-30 rounded-lg p-4 h-2/3'>
        <WindSpeedChartWidget hourlyforecast={weatherV3} />
      </div>
      }
    </div>
  )
}

export default WindSpeedPage
