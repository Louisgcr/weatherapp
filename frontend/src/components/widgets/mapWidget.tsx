import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet's default styles
import PrecipitationIcon from 'assets/icons/precipitation.svg?react';

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const MapWidget = () => {

  const precipitationLayerUrl = `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${OPENWEATHER_API_KEY}`;
  const center: LatLngExpression | LatLngTuple = [1.3661490907747917, 103.79885783305902]; // Set the initial map center [latitude, longitude]

  return (
    <div className='w-full h-full p-4 bg-blue-500 bg-opacity-50 flex flex-col rounded-lg'>
      <div className='flex items-center pb-2'>
        <PrecipitationIcon className='w-7 h-7 pr-1' />

        <div className='text-lg'>Precipitation</div>
      </div>
      <div className='flex-grow'>
        <MapContainer
          className="h-full w-full"
          center={center}
          zoom={12} // Set the zoom level
          // style={{ height: '90%', width: '90%' }}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"

            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <TileLayer
            url={precipitationLayerUrl}
            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapWidget