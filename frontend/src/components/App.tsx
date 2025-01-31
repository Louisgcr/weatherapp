import { useEffect, useState } from 'react';
import axios from 'axios';

import { IForecast } from 'interface';

import Forecast from './forecast';
import { getWeatherIcon } from 'utils/getIcon';
import MapWidget from './widgets/mapWidget';
import SearchBar from './navigation/SearchBar';
import VisibilityWidget from './widgets/visibilityWidget';
import WindSpeedChartWidget from './widgets/windSpeedChartWidget';
import WindSpeedWidget from './widgets/windSpeedWidget';

import Celsius from 'assets/icons/weather-icons/celsius.svg?react';
import Thermometer from 'assets/icons/weather-icons/thermometer.svg?react';
import ThermometerColder from 'assets/icons/weather-icons/thermometer-colder.svg?react';


const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for user's theme preference
    return localStorage.getItem('theme') === 'dark' || false;
  });

  const [backgroundImageUrl, setBackgroundImageUrl] = useState('/sunny.webp');
  const [weather, setWeather] = useState<IForecast['list'][0] | null>(null);
  const [forecast, setForecast] = useState<IForecast | null>(null);
  const [latLong, setLatLong] = useState({ description: "", lat: 0, lon: 0 });

  //Insert script tag for Google Maps API
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=places&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  //Fetch initial location from browser
  useEffect(() => {
    const fetchLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              const weatherResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
              );

              if (!weatherResponse.ok) {
                throw new Error("Failed to fetch weather data");
              }

              const data = await weatherResponse.json();

              setWeather(data);
              setLatLong({
                description: data.name, // City name
                lat: latitude,
                lon: longitude
              });
            } catch (err) {
              if (err instanceof Error) {
                console.log(err.message);
              } else {
                console.log("An unknown error occurred");
              }
            }
          },
          (error) => {
            console.log(error);
            if (error.message === "User denied Geolocation") {
              setLatLong({
                description: "Singapore", // City name
                lat: 1.3503767624777325,
                lon: 103.81403003145931
              });
            } else {
              console.log("An unknown error occurred");
            }
          }
        );
      }
    };

    fetchLocation();
  }, []);


  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {

    const fetchWeather = async () => {
      //Get Weather
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLong.lat}&lon=${latLong.lon}&appid=${OPENWEATHER_API_KEY}&units=metric `);
      const data = await weatherResponse.json();
      setWeather(data);

      //Get Forecast
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong.lat}&lon=${latLong.lon}&appid=${OPENWEATHER_API_KEY}&units=metric `);
      const forecastdata = forecastResponse.data;
      forecastdata.list = (forecastdata as IForecast).list.filter((item) => {
        // Filter out past data base on current date -3h
        return new Date(item.dt_txt) > new Date();
      });
      setForecast(forecastResponse.data)
    }

    fetchWeather();

  }, [latLong]);

  return (
    <div className={`relative overflow-auto text-white `} >
      {/* Background image */}
      <div
        className={`fixed inset-0 min-h-screen bg-cover bg-center blur-sm opacity-50 -z-10`}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />

      <div className={`h-screen flex filter-none `}>
        <div className="relative max-w-7xl pl-4 sm:static sm:pl-6 lg:pl-8">
          <div className="sm:max-w-lg gap-4">
            <div className='my-4'>
              <SearchBar onSelect={setLatLong} />
            </div>
            {
              weather &&
              <div className='flex bg-blue-600 bg-opacity-30 rounded-lg p-4'>
                <div className='flex flex-col items-center justify-center text-center'>
                  <div className='flex capitalize text-lg'>{latLong.description}</div>
                  <div className='flex text-6xl'>
                    {getWeatherIcon(weather.weather[0].icon, 'w-16 h-16')}
                    <div>{weather.main.temp.toString().split('.')[0]}</div>
                    <Celsius className='w-10 h-10' />
                  </div>
                  <div className='flex'>
                    Feels like {weather.main.feels_like.toString().split('.')[0]}
                  </div>
                  <div className='capitalize'>{weather.weather[0].description}</div>
                  <div className=' flex items-center justify-center'>
                    <div className='flex items-center justify-center'>
                      <>H </>
                      <>{weather.main.temp_max.toString().split('.')[0]}</>
                      <Thermometer className='w-10 h-10' />
                    </div>

                    <div className='flex items-center justify-center'>
                      <>L </>
                      <>{weather.main.temp_min.toString().split('.')[0]}</>
                      <ThermometerColder className='w-10 h-10' />
                    </div>
                  </div>

                </div>

                <div className='flex flex-col'>
                  <div className='flex justify-center items-center gap-1'>
                    <img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/humidity.svg" alt="Humidity" className="w-10 h-19" />
                    <a>Humidity</a>
                    <a>{weather.main.humidity}%</a>
                  </div>

                  <div className='flex justify-center items-center gap-1'>
                    <img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/wind.svg" alt="wind" className="w-10 h-19" />
                    <a>Wind</a>
                    <a>{weather.wind.speed}m/s</a>
                  </div>
                </div>
              </div>
            }

            {
              forecast &&
              <div className='mt-4 flex flex-col bg-blue-600 bg-opacity-30 rounded-lg p-4'>
                <Forecast forecast={forecast} />
              </div>
            }

            {
              weather &&
              <WindSpeedWidget data={weather.wind} />
            }

            {
              weather &&
              <VisibilityWidget data={weather.visibility} description={weather.weather[0].description} />
            }

          </div>
        </div>

        {/* <div className="w-full h-full px-4 rounded-lg">
          <MapWidget />
        </div> */}
        {forecast && <div className='m-4 bg-blue-600 bg-opacity-30 rounded-lg p-4'>
          <WindSpeedChartWidget data={forecast} />
        </div>
        }
      </div>
    </div>
  )
}

export default App
