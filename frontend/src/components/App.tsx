import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';

import { ILatLongDescription, IWeatherAPI3Response } from 'interface';

import Home from 'pages/Home';
import WindSpeedPage from 'pages/WindSpeedChart';
import SideBar from './navigation/SideBar';

import { getBackgroundColor, getBackgroundImageUrl } from 'utils/getBackgroundImageUrl';
import { useBackground } from 'context/BackgroundColorContext';


const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for user's theme preference
    return localStorage.getItem('theme') === 'dark' || false;
  });

  const [backgroundImageUrl, setBackgroundImageUrl] = useState('/sunny.webp');
  const { setBackgroundColor } = useBackground();
  const [weatherV3, setWeatherV3] = useState<IWeatherAPI3Response | null>(null);
  const [latLong, setLatLong] = useState<ILatLongDescription>({ description: "", lat: 0, long: 0 });

  const [locations, setLocations] = useState<ILatLongDescription[]>([]);
  const [locationData, setLocationData] = useState<IWeatherAPI3Response[]>([]);

  const getAllLocationFrom = async () => {
    try {
      const response = await axios.get("http://localhost:5174/api/locations");
      const formatedData = response.data.map((location: { name: string, latitude: number, longitude: number }) => {
        return {
          description: location.name,
          lat: location.latitude,
          long: location.longitude
        }
      });
      setLocations(formatedData);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  }

  const fetchWeatherFromLatLonV3 = async (lat: number, lon: number) => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`
      );

      if (!weatherResponse.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await weatherResponse.json();
      setWeatherV3(data);
      setBackgroundImageUrl(getBackgroundImageUrl(data.current.weather[0].id));
      setBackgroundColor(getBackgroundColor(data.current.weather[0].id));

    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  }

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
              const data = await fetchWeatherFromLatLonV3(position.coords.latitude, position.coords.longitude);
              setLatLong({
                description: "Your Location", // City name
                lat: position.coords.latitude,
                long: position.coords.longitude
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
            if (error.message === "User denied Geolocation") {
              setLatLong({
                description: "Singapore", // City name
                lat: 1.3503767624777325,
                long: 103.81403003145931
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
    if (locations.length > 0) {
      //Fetch weather data for all locations, append it to list and store the final list in locationData
      const fetchData = async () => {
        const data = await Promise.all(locations.map(async (location) => {
          const response = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.long}&appid=${OPENWEATHER_API_KEY}&units=metric`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch weather data");
          }
          return response.json();
        }));
        setLocationData(data);
      }

      fetchData();
    }
  }, [JSON.stringify(locations)]);

  //Fetch weather data when user searches for a location
  useEffect(() => {
    getAllLocationFrom();
    fetchWeatherFromLatLonV3(latLong.lat, latLong.long);
  }, [JSON.stringify(latLong)]);

  return (
    <Router>
      <div className='relative'>
        {/* Background image */}
        <div
          className={`fixed inset-0 min-h-screen bg-cover bg-center blur-sm opacity-50 -z-10`}
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        />

        {/* Sidebar */}
        <SideBar setLatLong={setLatLong} locations={locations} locationData={locationData} />


        <Routes>
          <Route path="/"
            element={
              <Home latLong={latLong} weatherV3={weatherV3} />
            }
          />
          <Route path="/wind-speed"
            element={
              <WindSpeedPage latLong={latLong} weatherV3={weatherV3} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App





// const fetchWeatherFromLatLon = async (lat: number, lon: number) => {
//   try {
//     const weatherResponse = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`
//     );

//     if (!weatherResponse.ok) {
//       throw new Error("Failed to fetch weather data");
//     }

//     const data = await weatherResponse.json();
//     setWeather(data);

//     return { lat: lat, lon: lon, name: data.name as string };

//   } catch (err) {
//     if (err instanceof Error) {
//       console.log(err.message);
//     } else {
//       console.log("An unknown error occurred");
//     }
//   }
// }

// const fetchForecastFromLatLon = async (lat: number, lon: number) => {
//   try {
//     const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric `);
//     const forecastdata = forecastResponse.data;
//     forecastdata.list = (forecastdata as IForecast).list.filter((item) => {
//       // Filter out past data base on current date -3h
//       return new Date(item.dt_txt) > new Date();
//     });
//     setForecast(forecastResponse.data)
//   } catch (err) {
//     if (err instanceof Error) {
//       console.log(err.message);
//     } else {
//       console.log("An unknown error occurred");
//     }
//   }
// }