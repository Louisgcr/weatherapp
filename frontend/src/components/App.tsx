import Avatar from 'components/Avatar'
import { useEffect, useState } from 'react';
import SearchBar from './navigation/SearchBar';

import WindIcon from 'assets/icons/weather-icons/wind.svg?react';
import Celsius from 'assets/icons/weather-icons/celsius.svg?react';

import Thermometer from 'assets/icons/weather-icons/thermometer.svg?react';
import ThermometerColder from 'assets/icons/weather-icons/thermometer-colder.svg?react';
import axios from 'axios';
import { IForecast } from 'interface';
import Forecast from './forecast';
import { get } from 'http';
import { getWeatherIcon } from 'utils/getIcon';

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// const randoms = [
//   [1, 2],
//   [3, 4, 5],
//   [6, 7]
// ]

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for user's theme preference
    return localStorage.getItem('theme') === 'dark' || false;
  });

  //Insert script tag for Google Maps API
  // useEffect(() => {
  //   const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
  //   const script = document.createElement('script');
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=places&callback=initMap`;
  //   script.async = true;
  //   document.head.appendChild(script);

  //   // Cleanup the script when the component is unmounted
  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  const [backgroundImageUrl, setBackgroundImageUrl] = useState('/sunny.jpg');
  const [weather, setWeather] = useState({
    "coord": {
      "lon": -74.006,
      "lat": 40.7143
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 22.51,
      "feels_like": 11.75,
      "temp_min": 17.55,
      "temp_max": 24.76,
      "pressure": 1021,
      "humidity": 61,
      "sea_level": 1021,
      "grnd_level": 1019
    },
    "visibility": 10000,
    "wind": {
      "speed": 10.36,
      "deg": 300
    },
    "clouds": {
      "all": 0
    },
    "dt": 1737712385,
    "sys": {
      "type": 1,
      "id": 4610,
      "country": "US",
      "sunrise": 1737720755,
      "sunset": 1737756209
    },
    "timezone": -18000,
    "id": 5128581,
    "name": "New York",
    "cod": 200
  });
  const [forecast, setForecast] = useState<IForecast>({
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1737730800,
        "main": {
          "temp": 26.62,
          "feels_like": 17.6,
          "temp_min": 26.2,
          "temp_max": 26.62,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1021,
          "humidity": 59,
          "temp_kf": 0.23
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.08,
          "deg": 293,
          "gust": 14.05
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-24 15:00:00"
      },
      {
        "dt": 1737741600,
        "main": {
          "temp": 27.72,
          "feels_like": 19.27,
          "temp_min": 27.72,
          "temp_max": 29.89,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1020,
          "humidity": 54,
          "temp_kf": -1.21
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 8.55,
          "deg": 285,
          "gust": 12.21
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-24 18:00:00"
      },
      {
        "dt": 1737752400,
        "main": {
          "temp": 29.93,
          "feels_like": 22.35,
          "temp_min": 29.93,
          "temp_max": 31.59,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1020,
          "humidity": 49,
          "temp_kf": -0.92
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 16
        },
        "wind": {
          "speed": 7.96,
          "deg": 306,
          "gust": 12.21
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-24 21:00:00"
      },
      {
        "dt": 1737763200,
        "main": {
          "temp": 28.71,
          "feels_like": 20.55,
          "temp_min": 28.71,
          "temp_max": 28.71,
          "pressure": 1024,
          "sea_level": 1024,
          "grnd_level": 1022,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 16
        },
        "wind": {
          "speed": 8.46,
          "deg": 299,
          "gust": 15.46
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-25 00:00:00"
      },
      {
        "dt": 1737774000,
        "main": {
          "temp": 26.26,
          "feels_like": 18.45,
          "temp_min": 26.26,
          "temp_max": 26.26,
          "pressure": 1025,
          "sea_level": 1025,
          "grnd_level": 1023,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 11
        },
        "wind": {
          "speed": 7.18,
          "deg": 336,
          "gust": 14.54
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-25 03:00:00"
      },
      {
        "dt": 1737784800,
        "main": {
          "temp": 24.46,
          "feels_like": 17.46,
          "temp_min": 24.46,
          "temp_max": 24.46,
          "pressure": 1026,
          "sea_level": 1026,
          "grnd_level": 1024,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 10
        },
        "wind": {
          "speed": 5.77,
          "deg": 331,
          "gust": 13.02
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-25 06:00:00"
      },
      {
        "dt": 1737795600,
        "main": {
          "temp": 23.07,
          "feels_like": 16.23,
          "temp_min": 23.07,
          "temp_max": 23.07,
          "pressure": 1027,
          "sea_level": 1027,
          "grnd_level": 1025,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 15
        },
        "wind": {
          "speed": 5.35,
          "deg": 317,
          "gust": 12.03
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-25 09:00:00"
      },
      {
        "dt": 1737806400,
        "main": {
          "temp": 21.96,
          "feels_like": 15.69,
          "temp_min": 21.96,
          "temp_max": 21.96,
          "pressure": 1029,
          "sea_level": 1029,
          "grnd_level": 1027,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 11
        },
        "wind": {
          "speed": 4.63,
          "deg": 306,
          "gust": 10.25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-25 12:00:00"
      },
      {
        "dt": 1737817200,
        "main": {
          "temp": 24.67,
          "feels_like": 17.1,
          "temp_min": 24.67,
          "temp_max": 24.67,
          "pressure": 1030,
          "sea_level": 1030,
          "grnd_level": 1028,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 5
        },
        "wind": {
          "speed": 6.46,
          "deg": 260,
          "gust": 9.93
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-25 15:00:00"
      },
      {
        "dt": 1737828000,
        "main": {
          "temp": 28.27,
          "feels_like": 18.75,
          "temp_min": 28.27,
          "temp_max": 28.27,
          "pressure": 1027,
          "sea_level": 1027,
          "grnd_level": 1026,
          "humidity": 43,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 14
        },
        "wind": {
          "speed": 10.67,
          "deg": 253,
          "gust": 14.32
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-25 18:00:00"
      },
      {
        "dt": 1737838800,
        "main": {
          "temp": 29.95,
          "feels_like": 20.28,
          "temp_min": 29.95,
          "temp_max": 29.95,
          "pressure": 1027,
          "sea_level": 1027,
          "grnd_level": 1025,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 62
        },
        "wind": {
          "speed": 11.83,
          "deg": 244,
          "gust": 19.91
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-25 21:00:00"
      },
      {
        "dt": 1737849600,
        "main": {
          "temp": 29.35,
          "feels_like": 19.51,
          "temp_min": 29.35,
          "temp_max": 29.35,
          "pressure": 1027,
          "sea_level": 1027,
          "grnd_level": 1025,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 81
        },
        "wind": {
          "speed": 11.88,
          "deg": 223,
          "gust": 24.65
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-26 00:00:00"
      },
      {
        "dt": 1737860400,
        "main": {
          "temp": 29.48,
          "feels_like": 19.81,
          "temp_min": 29.48,
          "temp_max": 29.48,
          "pressure": 1025,
          "sea_level": 1025,
          "grnd_level": 1024,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 11.59,
          "deg": 218,
          "gust": 30.31
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-26 03:00:00"
      },
      {
        "dt": 1737871200,
        "main": {
          "temp": 29.89,
          "feels_like": 19.81,
          "temp_min": 29.89,
          "temp_max": 29.89,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1021,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 12.73,
          "deg": 230,
          "gust": 34.74
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-26 06:00:00"
      },
      {
        "dt": 1737882000,
        "main": {
          "temp": 30.69,
          "feels_like": 21.33,
          "temp_min": 30.69,
          "temp_max": 30.69,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1020,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 11.56,
          "deg": 232,
          "gust": 33.06
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-26 09:00:00"
      },
      {
        "dt": 1737892800,
        "main": {
          "temp": 31.46,
          "feels_like": 22.6,
          "temp_min": 31.46,
          "temp_max": 31.46,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1019,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 10.92,
          "deg": 239,
          "gust": 31.32
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-26 12:00:00"
      },
      {
        "dt": 1737903600,
        "main": {
          "temp": 34.07,
          "feels_like": 25.11,
          "temp_min": 34.07,
          "temp_max": 34.07,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1019,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 12.66,
          "deg": 250,
          "gust": 30.6
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-26 15:00:00"
      },
      {
        "dt": 1737914400,
        "main": {
          "temp": 37.35,
          "feels_like": 28.67,
          "temp_min": 37.35,
          "temp_max": 37.35,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1018,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 14.27,
          "deg": 265,
          "gust": 27.38
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-26 18:00:00"
      },
      {
        "dt": 1737925200,
        "main": {
          "temp": 36.95,
          "feels_like": 28.71,
          "temp_min": 36.95,
          "temp_max": 36.95,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1019,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 12.77,
          "deg": 277,
          "gust": 23.2
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-26 21:00:00"
      },
      {
        "dt": 1737936000,
        "main": {
          "temp": 32.67,
          "feels_like": 26.06,
          "temp_min": 32.67,
          "temp_max": 32.67,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1020,
          "humidity": 61,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 7.36,
          "deg": 279,
          "gust": 15.21
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-27 00:00:00"
      },
      {
        "dt": 1737946800,
        "main": {
          "temp": 31.06,
          "feels_like": 25.5,
          "temp_min": 31.06,
          "temp_max": 31.06,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1020,
          "humidity": 61,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 90
        },
        "wind": {
          "speed": 5.53,
          "deg": 283,
          "gust": 11.95
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-27 03:00:00"
      },
      {
        "dt": 1737957600,
        "main": {
          "temp": 30.43,
          "feels_like": 22.71,
          "temp_min": 30.43,
          "temp_max": 30.43,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1019,
          "humidity": 61,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 95
        },
        "wind": {
          "speed": 8.37,
          "deg": 264,
          "gust": 17.07
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-27 06:00:00"
      },
      {
        "dt": 1737968400,
        "main": {
          "temp": 28.76,
          "feels_like": 19.06,
          "temp_min": 28.76,
          "temp_max": 28.76,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1017,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 11.25,
          "deg": 262,
          "gust": 22.26
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-27 09:00:00"
      },
      {
        "dt": 1737979200,
        "main": {
          "temp": 27.21,
          "feels_like": 16.54,
          "temp_min": 27.21,
          "temp_max": 27.21,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1017,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 66
        },
        "wind": {
          "speed": 12.46,
          "deg": 265,
          "gust": 27
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-27 12:00:00"
      },
      {
        "dt": 1737990000,
        "main": {
          "temp": 29.91,
          "feels_like": 18.66,
          "temp_min": 29.91,
          "temp_max": 29.91,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1016,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 4
        },
        "wind": {
          "speed": 15.68,
          "deg": 254,
          "gust": 29.04
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-27 15:00:00"
      },
      {
        "dt": 1738000800,
        "main": {
          "temp": 35.17,
          "feels_like": 25.18,
          "temp_min": 35.17,
          "temp_max": 35.17,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1013,
          "humidity": 40,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 2
        },
        "wind": {
          "speed": 16.44,
          "deg": 250,
          "gust": 30.27
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-27 18:00:00"
      },
      {
        "dt": 1738011600,
        "main": {
          "temp": 35.37,
          "feels_like": 24.98,
          "temp_min": 35.37,
          "temp_max": 35.37,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1011,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 17.9,
          "deg": 241,
          "gust": 34
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-27 21:00:00"
      },
      {
        "dt": 1738022400,
        "main": {
          "temp": 34.41,
          "feels_like": 23.81,
          "temp_min": 34.41,
          "temp_max": 34.41,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1009,
          "humidity": 55,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 17.72,
          "deg": 237,
          "gust": 37.65
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-28 00:00:00"
      },
      {
        "dt": 1738033200,
        "main": {
          "temp": 34.83,
          "feels_like": 24.15,
          "temp_min": 34.83,
          "temp_max": 34.83,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1007,
          "humidity": 55,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 18.37,
          "deg": 235,
          "gust": 39.66
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-28 03:00:00"
      },
      {
        "dt": 1738044000,
        "main": {
          "temp": 34.5,
          "feels_like": 23.76,
          "temp_min": 34.5,
          "temp_max": 34.5,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 1004,
          "humidity": 49,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 17
        },
        "wind": {
          "speed": 18.3,
          "deg": 241,
          "gust": 39.88
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-28 06:00:00"
      },
      {
        "dt": 1738054800,
        "main": {
          "temp": 34.54,
          "feels_like": 23.83,
          "temp_min": 34.54,
          "temp_max": 34.54,
          "pressure": 1004,
          "sea_level": 1004,
          "grnd_level": 1003,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 93
        },
        "wind": {
          "speed": 18.19,
          "deg": 250,
          "gust": 38.01
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-28 09:00:00"
      },
      {
        "dt": 1738065600,
        "main": {
          "temp": 33.85,
          "feels_like": 23.41,
          "temp_min": 33.85,
          "temp_max": 33.85,
          "pressure": 1005,
          "sea_level": 1005,
          "grnd_level": 1004,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 16.64,
          "deg": 265,
          "gust": 34.11
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-28 12:00:00"
      },
      {
        "dt": 1738076400,
        "main": {
          "temp": 35.6,
          "feels_like": 25.86,
          "temp_min": 35.6,
          "temp_max": 35.6,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 1005,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 71
        },
        "wind": {
          "speed": 16.04,
          "deg": 261,
          "gust": 29.53
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-28 15:00:00"
      },
      {
        "dt": 1738087200,
        "main": {
          "temp": 38.28,
          "feels_like": 29.97,
          "temp_min": 38.28,
          "temp_max": 38.28,
          "pressure": 1004,
          "sea_level": 1004,
          "grnd_level": 1003,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 41
        },
        "wind": {
          "speed": 14,
          "deg": 264,
          "gust": 23.06
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-28 18:00:00"
      },
      {
        "dt": 1738098000,
        "main": {
          "temp": 39.02,
          "feels_like": 31.87,
          "temp_min": 39.02,
          "temp_max": 39.02,
          "pressure": 1004,
          "sea_level": 1004,
          "grnd_level": 1002,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 15
        },
        "wind": {
          "speed": 11.32,
          "deg": 248,
          "gust": 23.29
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-01-28 21:00:00"
      },
      {
        "dt": 1738108800,
        "main": {
          "temp": 37.2,
          "feels_like": 29.73,
          "temp_min": 37.2,
          "temp_max": 37.2,
          "pressure": 1002,
          "sea_level": 1002,
          "grnd_level": 1001,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 50
        },
        "wind": {
          "speed": 10.98,
          "deg": 212,
          "gust": 30.85
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-29 00:00:00"
      },
      {
        "dt": 1738119600,
        "main": {
          "temp": 37.54,
          "feels_like": 29.1,
          "temp_min": 37.54,
          "temp_max": 37.54,
          "pressure": 1000,
          "sea_level": 1000,
          "grnd_level": 999,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 79
        },
        "wind": {
          "speed": 13.76,
          "deg": 224,
          "gust": 37.69
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-29 03:00:00"
      },
      {
        "dt": 1738130400,
        "main": {
          "temp": 38.62,
          "feels_like": 30.11,
          "temp_min": 38.62,
          "temp_max": 38.62,
          "pressure": 1000,
          "sea_level": 1000,
          "grnd_level": 998,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 85
        },
        "wind": {
          "speed": 14.88,
          "deg": 245,
          "gust": 35.21
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-29 06:00:00"
      },
      {
        "dt": 1738141200,
        "main": {
          "temp": 38.91,
          "feels_like": 31.15,
          "temp_min": 38.91,
          "temp_max": 38.91,
          "pressure": 1000,
          "sea_level": 1000,
          "grnd_level": 999,
          "humidity": 73,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 12.88,
          "deg": 239,
          "gust": 29.59
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-29 09:00:00"
      },
      {
        "dt": 1738152000,
        "main": {
          "temp": 38.86,
          "feels_like": 30.96,
          "temp_min": 38.86,
          "temp_max": 38.86,
          "pressure": 1002,
          "sea_level": 1002,
          "grnd_level": 1000,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 85
        },
        "wind": {
          "speed": 13.22,
          "deg": 250,
          "gust": 28.3
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-01-29 12:00:00"
      }
    ],
    "city": {
      "id": 5128581,
      "name": "New York",
      "coord": {
        "lat": 40.7143,
        "lon": -74.006
      },
      "country": "US",
      "population": 8175133,
      "timezone": -18000,
      "sunrise": 1737720755,
      "sunset": 1737756209
    }
  });
  const [city, setCity] = useState('New York');

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

    //TODO fetch geolocation

    const fetchWeather = async () => {
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=imperial `);
      // const data = await response.json();
      // setWeather(data);
      // console.log(data)
      // setWeather()

      // const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${OPENWEATHER_API_KEY}&units=imperial `);
      // console.log("🚀 ~ fetchWeather ~ response:", response)

    }

    fetchWeather();

  }, [city]);

  const options = {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  // const formatter = new Intl.DateTimeFormat('en-US', options);
  // forecast.list.map((item) => {
  //   console.log(item.dt, formatter.format(new Date(item.dt * 1000)))
  // })

  return (
    <div className={`relative overflow-hidden text-white `} >
      {/* Background image */}
      <div
        className={`absolute inset-0 blur-sm bg-cover opacity-50 bg-center h-screen filter -z-10`}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />

      <div className={`h-screen filter-none sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 `}>
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className='w-1/3'>
            <SearchBar />
          </div>
          <div className="sm:max-w-lg ">

            {
              weather &&
              <div className='flex'>
                <div className='flex flex-col items-center justify-center text-center bg-gray-200 '>

                  <div className='flex capitalize text-lg'>{weather.name}</div>
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
                    <a>{weather.wind.speed}km/h</a>
                  </div>

                </div>
              </div>
            }


            {
              weather &&
              <div className='mt-10 flex flex-col  bg-gray-200'>
                <Forecast forecast={forecast} />
              </div>
            }


          </div>
          {/* <div className="my-10">
            <div
              aria-hidden="true"
              className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  {randoms.map((random, number) => (
                    <div
                      key={`random-${random[number]}`}
                      className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      {random.map((number) => (
                        <div
                          key={`random-${number}`}
                          className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                        >
                          <img
                            src={`https://picsum.photos/600?random=${number}`}
                            alt=""
                            className="size-full bg-indigo-100 object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
