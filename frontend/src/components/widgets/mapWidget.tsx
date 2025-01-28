import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet's default styles

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const MapWidget = () => {

  const precipitationLayerUrl = `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${OPENWEATHER_API_KEY}`;
  const center: LatLngExpression | LatLngTuple = [1.3661490907747917, 103.79885783305902]; // Set the initial map center [latitude, longitude]

  return (
    <MapContainer
      center={center}
      zoom={12} // Set the zoom level
      style={{ height: '75vh', width: '75%' }} // Full-screen map
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
  );
};

export default MapWidget