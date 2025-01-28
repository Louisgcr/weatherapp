export interface ICity {
  coord: ICoord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface ICoord {
  lat: number;
  lon: number;
}

export interface IForecast {
  city: ICity;
  cnt: number;
  cod: string;
  list: {
    clouds: {
      all: number;
    };
    dt: number;
    dt_txt: string;
    main: IMain;
    pop: number;
    sys: {
      pod: string;
    };
    visibility: number;
    weather: IWeather[];
    wind: IWind;
  }[];
  message: number;
}

export interface IMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface IWeather {
  description: string;
  icon: string;
  id: string;
  main: string;
}

export interface IWind {
  deg: number;
  gust: number;
  speed: number;
}