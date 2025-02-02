
import WindSpeedChartWidget from 'components/charts/windSpeedChartWidget';
import { IPageProps } from 'interface';


function WindSpeedPage({ setLatLong, latLong, weatherV3, backgroundImageUrl }: IPageProps) {

  return (
    <div className={`relative overflow-auto text-white `} >
      {/* Background image */}
      <div
        className={`fixed inset-0 min-h-screen bg-cover bg-center blur-sm opacity-50 -z-10`}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />
      {weatherV3 && <div className='m-4 bg-blue-600 bg-opacity-30 rounded-lg p-4'>
        <WindSpeedChartWidget hourlyforecast={weatherV3} />
      </div>
      }
    </div>
  )
}

export default WindSpeedPage
