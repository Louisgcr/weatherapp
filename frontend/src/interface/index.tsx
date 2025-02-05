export interface ILatLongDescription {
  description: string;
  lat: number;
  long: number;
}

export interface ISidebarProps {
  setLatLong: (data: ILatLongDescription) => void;
}

export interface IPageProps {
  setLatLong: (data: ILatLongDescription) => void;
  latLong: ILatLongDescription;
  weatherV3: IWeatherAPI3Response | null;
  backgroundImageUrl: string;
}

export interface IWeatherAPI3 {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface ICurrentWeatherAPI3 {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: IWeatherAPI3[];
}

export interface IMinutelyWeatherAPI3 {
  dt: number;
  precipitation: number;
}

export interface IRainWeatherAPI3 {
  '1h': number;
}
export interface IHourlyWeatherAPI3 {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeatherAPI3[];
  pop: number;
  rain?: IRainWeatherAPI3;
}

export interface IDailyWeatherAPI3 {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeatherAPI3[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi?: number;
}
export interface IWeatherAPI3Response {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: ICurrentWeatherAPI3;
  minutely: IMinutelyWeatherAPI3[];
  hourly: IHourlyWeatherAPI3[];
  daily: IDailyWeatherAPI3[];
}