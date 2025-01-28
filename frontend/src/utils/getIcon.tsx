
// import ClearDay from 'assets/icons/weather-icons/clear-day.svg?react';
// import ClearNight from 'assets/icons/weather-icons/clear-night.svg?react';
// import FewCloudsDay from 'assets/icons/weather-icons/partly-cloudy-day.svg?react';
// import FewCloudsNight from 'assets/icons/weather-icons/partly-cloudy-night.svg?react';
// import Cloudy from 'assets/icons/weather-icons/cloudy.svg?react';
// import OvercastDrizzleDay from 'assets/icons/weather-icons/overcast-day-drizzle.svg?react';
// import OvercastDrizzleNight from 'assets/icons/weather-icons/overcast-night-drizzle.svg?react';
// import OvercastRainDay from 'assets/icons/weather-icons/overcast-day-rain.svg?react';
// import OvercastRainNight from 'assets/icons/weather-icons/overcast-night-rain.svg?react';
// import ExtremeDayRain from 'assets/icons/weather-icons/extreme-day-rain.svg?react';
// import ExtremeNightRain from 'assets/icons/weather-icons/extreme-night-rain.svg?react';
// import Snow from 'assets/icons/weather-icons/snow.svg?react';
// import Mist from 'assets/icons/weather-icons/mist.svg?react';

export const getWeatherIcon = (icon: string, className: string) => {

  switch (icon) {
    case '01d':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/clear-day.svg" alt="Clears Day" className={className} />
    case '01n':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/clear-night.svg" alt="Clears Night" className={className} />
    case '02d':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-day.svg" alt="Few Clouds Day" className={className} />
    case '02n': {
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-night.svg" alt="Few Clouds Night" className={className} />
    }
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/cloudy.svg" alt="Cloudy" className={className} />
    case '09d':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/overcast-day-drizzle.svg" alt="Overcast Drizzle Day" className={className} />
    case '09n':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/overcast-night-drizzle.svg" alt="Overcast Drizzle Night" className={className} />
    case '10d':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/overcast-day-rain.svg" alt="Overcast Rain Day" className={className} />
    case '10n':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/overcast-night-rain.svg" alt="Overcast Rain Night" className={className} />
    case '11d':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/extreme-day-rain.svg" alt="Extreme Day Rain" className={className} />
    case '11n':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/extreme-night-rain.svg" alt="Extreme Night Rain" className={className} />
    case '13d':
    case '13n':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/snow.svg" alt="Snow" className={className} />
    case '50d':
    case '50n':
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/mist.svg" alt="Mist" className={className} />
    default:
      return <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/clear-day.svg" alt="Clears Day" className={className} />
  }
};