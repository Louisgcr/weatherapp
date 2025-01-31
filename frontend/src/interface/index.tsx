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
  gust?: number;
  speed: number;
}


{
  "lat": 1.3697,
    "lon": 103.9466,
      "timezone": "Asia/Singapore",
        "timezone_offset": 28800,
          "current": {
    "dt": 1738311299,
      "sunrise": 1738278948,
        "sunset": 1738322359,
          "temp": 29.25,
            "feels_like": 31.97,
              "pressure": 1007,
                "humidity": 63,
                  "dew_point": 21.48,
                    "uvi": 5.44,
                      "clouds": 75,
                        "visibility": 10000,
                          "wind_speed": 6.69,
                            "wind_deg": 360,
                              "weather": [
                                {
                                  "id": 803,
                                  "main": "Clouds",
                                  "description": "broken clouds",
                                  "icon": "04d"
                                }
                              ]
  },
  "minutely": [
    {
      "dt": 1738311300,
      "precipitation": 0
    },
    {
      "dt": 1738311360,
      "precipitation": 0
    },
    {
      "dt": 1738311420,
      "precipitation": 0
    },
    {
      "dt": 1738311480,
      "precipitation": 0
    },
    {
      "dt": 1738311540,
      "precipitation": 0
    },
    {
      "dt": 1738311600,
      "precipitation": 0
    },
    {
      "dt": 1738311660,
      "precipitation": 0
    },
    {
      "dt": 1738311720,
      "precipitation": 0
    },
    {
      "dt": 1738311780,
      "precipitation": 0
    },
    {
      "dt": 1738311840,
      "precipitation": 0
    },
    {
      "dt": 1738311900,
      "precipitation": 0
    },
    {
      "dt": 1738311960,
      "precipitation": 0
    },
    {
      "dt": 1738312020,
      "precipitation": 0
    },
    {
      "dt": 1738312080,
      "precipitation": 0
    },
    {
      "dt": 1738312140,
      "precipitation": 0
    },
    {
      "dt": 1738312200,
      "precipitation": 0
    },
    {
      "dt": 1738312260,
      "precipitation": 0
    },
    {
      "dt": 1738312320,
      "precipitation": 0
    },
    {
      "dt": 1738312380,
      "precipitation": 0
    },
    {
      "dt": 1738312440,
      "precipitation": 0
    },
    {
      "dt": 1738312500,
      "precipitation": 0
    },
    {
      "dt": 1738312560,
      "precipitation": 0
    },
    {
      "dt": 1738312620,
      "precipitation": 0
    },
    {
      "dt": 1738312680,
      "precipitation": 0
    },
    {
      "dt": 1738312740,
      "precipitation": 0
    },
    {
      "dt": 1738312800,
      "precipitation": 0
    },
    {
      "dt": 1738312860,
      "precipitation": 0
    },
    {
      "dt": 1738312920,
      "precipitation": 0
    },
    {
      "dt": 1738312980,
      "precipitation": 0
    },
    {
      "dt": 1738313040,
      "precipitation": 0
    },
    {
      "dt": 1738313100,
      "precipitation": 0
    },
    {
      "dt": 1738313160,
      "precipitation": 0
    },
    {
      "dt": 1738313220,
      "precipitation": 0
    },
    {
      "dt": 1738313280,
      "precipitation": 0
    },
    {
      "dt": 1738313340,
      "precipitation": 0
    },
    {
      "dt": 1738313400,
      "precipitation": 0
    },
    {
      "dt": 1738313460,
      "precipitation": 0
    },
    {
      "dt": 1738313520,
      "precipitation": 0
    },
    {
      "dt": 1738313580,
      "precipitation": 0
    },
    {
      "dt": 1738313640,
      "precipitation": 0
    },
    {
      "dt": 1738313700,
      "precipitation": 0
    },
    {
      "dt": 1738313760,
      "precipitation": 0
    },
    {
      "dt": 1738313820,
      "precipitation": 0
    },
    {
      "dt": 1738313880,
      "precipitation": 0
    },
    {
      "dt": 1738313940,
      "precipitation": 0
    },
    {
      "dt": 1738314000,
      "precipitation": 0
    },
    {
      "dt": 1738314060,
      "precipitation": 0
    },
    {
      "dt": 1738314120,
      "precipitation": 0
    },
    {
      "dt": 1738314180,
      "precipitation": 0
    },
    {
      "dt": 1738314240,
      "precipitation": 0
    },
    {
      "dt": 1738314300,
      "precipitation": 0
    },
    {
      "dt": 1738314360,
      "precipitation": 0
    },
    {
      "dt": 1738314420,
      "precipitation": 0
    },
    {
      "dt": 1738314480,
      "precipitation": 0
    },
    {
      "dt": 1738314540,
      "precipitation": 0
    },
    {
      "dt": 1738314600,
      "precipitation": 0
    },
    {
      "dt": 1738314660,
      "precipitation": 0
    },
    {
      "dt": 1738314720,
      "precipitation": 0
    },
    {
      "dt": 1738314780,
      "precipitation": 0
    },
    {
      "dt": 1738314840,
      "precipitation": 0
    }
  ],
    "hourly": [
      {
        "dt": 1738310400,
        "temp": 29.25,
        "feels_like": 31.97,
        "pressure": 1007,
        "humidity": 63,
        "dew_point": 21.48,
        "uvi": 5.44,
        "clouds": 75,
        "visibility": 10000,
        "wind_speed": 4.61,
        "wind_deg": 12,
        "wind_gust": 5.79,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738314000,
        "temp": 28.68,
        "feels_like": 31.39,
        "pressure": 1007,
        "humidity": 66,
        "dew_point": 21.7,
        "uvi": 1.51,
        "clouds": 74,
        "visibility": 10000,
        "wind_speed": 6.53,
        "wind_deg": 17,
        "wind_gust": 8.04,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.04
      },
      {
        "dt": 1738317600,
        "temp": 27.97,
        "feels_like": 30.48,
        "pressure": 1007,
        "humidity": 69,
        "dew_point": 21.75,
        "uvi": 0.24,
        "clouds": 76,
        "visibility": 10000,
        "wind_speed": 6.98,
        "wind_deg": 12,
        "wind_gust": 8.81,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738321200,
        "temp": 27.17,
        "feels_like": 29.24,
        "pressure": 1007,
        "humidity": 71,
        "dew_point": 21.46,
        "uvi": 0,
        "clouds": 79,
        "visibility": 10000,
        "wind_speed": 7.09,
        "wind_deg": 8,
        "wind_gust": 9.21,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738324800,
        "temp": 26.21,
        "feels_like": 26.21,
        "pressure": 1008,
        "humidity": 74,
        "dew_point": 21.21,
        "uvi": 0,
        "clouds": 83,
        "visibility": 10000,
        "wind_speed": 6.85,
        "wind_deg": 5,
        "wind_gust": 9.77,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738328400,
        "temp": 25.33,
        "feels_like": 25.9,
        "pressure": 1009,
        "humidity": 76,
        "dew_point": 20.81,
        "uvi": 0,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 5.99,
        "wind_deg": 8,
        "wind_gust": 9.23,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738332000,
        "temp": 25,
        "feels_like": 25.59,
        "pressure": 1010,
        "humidity": 78,
        "dew_point": 20.78,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.33,
        "wind_deg": 11,
        "wind_gust": 8.4,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738335600,
        "temp": 24.92,
        "feels_like": 25.5,
        "pressure": 1011,
        "humidity": 78,
        "dew_point": 20.93,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.99,
        "wind_deg": 12,
        "wind_gust": 8.67,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738339200,
        "temp": 24.93,
        "feels_like": 25.54,
        "pressure": 1011,
        "humidity": 79,
        "dew_point": 20.97,
        "uvi": 0,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 4.88,
        "wind_deg": 7,
        "wind_gust": 8.75,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738342800,
        "temp": 24.95,
        "feels_like": 25.56,
        "pressure": 1010,
        "humidity": 79,
        "dew_point": 21.09,
        "uvi": 0,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 5.02,
        "wind_deg": 1,
        "wind_gust": 8.75,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738346400,
        "temp": 24.87,
        "feels_like": 25.5,
        "pressure": 1009,
        "humidity": 80,
        "dew_point": 21.15,
        "uvi": 0,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 5.33,
        "wind_deg": 356,
        "wind_gust": 8.97,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738350000,
        "temp": 24.66,
        "feels_like": 25.32,
        "pressure": 1008,
        "humidity": 82,
        "dew_point": 21.28,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.76,
        "wind_deg": 359,
        "wind_gust": 9.14,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738353600,
        "temp": 24.34,
        "feels_like": 25,
        "pressure": 1008,
        "humidity": 83,
        "dew_point": 21.24,
        "uvi": 0,
        "clouds": 95,
        "visibility": 10000,
        "wind_speed": 5.3,
        "wind_deg": 1,
        "wind_gust": 8.95,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738357200,
        "temp": 24.33,
        "feels_like": 24.99,
        "pressure": 1008,
        "humidity": 83,
        "dew_point": 21.2,
        "uvi": 0,
        "clouds": 96,
        "visibility": 10000,
        "wind_speed": 4.2,
        "wind_deg": 2,
        "wind_gust": 7.79,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738360800,
        "temp": 24.34,
        "feels_like": 25,
        "pressure": 1009,
        "humidity": 83,
        "dew_point": 21.26,
        "uvi": 0,
        "clouds": 97,
        "visibility": 10000,
        "wind_speed": 4.21,
        "wind_deg": 3,
        "wind_gust": 6.82,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738364400,
        "temp": 24.23,
        "feels_like": 24.9,
        "pressure": 1009,
        "humidity": 84,
        "dew_point": 21.34,
        "uvi": 0,
        "clouds": 97,
        "visibility": 10000,
        "wind_speed": 4.86,
        "wind_deg": 358,
        "wind_gust": 8.42,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738368000,
        "temp": 24.35,
        "feels_like": 25.03,
        "pressure": 1009,
        "humidity": 84,
        "dew_point": 21.49,
        "uvi": 0.29,
        "clouds": 96,
        "visibility": 10000,
        "wind_speed": 4.46,
        "wind_deg": 3,
        "wind_gust": 7.72,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738371600,
        "temp": 25.04,
        "feels_like": 25.74,
        "pressure": 1010,
        "humidity": 82,
        "dew_point": 21.84,
        "uvi": 1,
        "clouds": 66,
        "visibility": 10000,
        "wind_speed": 4.16,
        "wind_deg": 357,
        "wind_gust": 6.66,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738375200,
        "temp": 25.85,
        "feels_like": 26.55,
        "pressure": 1011,
        "humidity": 79,
        "dew_point": 21.97,
        "uvi": 3.53,
        "clouds": 82,
        "visibility": 10000,
        "wind_speed": 4.51,
        "wind_deg": 352,
        "wind_gust": 6.09,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738378800,
        "temp": 26.87,
        "feels_like": 28.87,
        "pressure": 1011,
        "humidity": 73,
        "dew_point": 21.74,
        "uvi": 7.61,
        "clouds": 84,
        "visibility": 10000,
        "wind_speed": 3.74,
        "wind_deg": 358,
        "wind_gust": 5.05,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738382400,
        "temp": 27.79,
        "feels_like": 30.14,
        "pressure": 1010,
        "humidity": 69,
        "dew_point": 21.68,
        "uvi": 7.24,
        "clouds": 86,
        "visibility": 10000,
        "wind_speed": 3.18,
        "wind_deg": 337,
        "wind_gust": 4.59,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738386000,
        "temp": 28.76,
        "feels_like": 31.38,
        "pressure": 1009,
        "humidity": 65,
        "dew_point": 21.6,
        "uvi": 6.05,
        "clouds": 79,
        "visibility": 10000,
        "wind_speed": 2.74,
        "wind_deg": 315,
        "wind_gust": 3.88,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738389600,
        "temp": 29.53,
        "feels_like": 32.7,
        "pressure": 1007,
        "humidity": 64,
        "dew_point": 21.95,
        "uvi": 7.82,
        "clouds": 77,
        "visibility": 10000,
        "wind_speed": 2.68,
        "wind_deg": 295,
        "wind_gust": 3.69,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738393200,
        "temp": 29.64,
        "feels_like": 33.12,
        "pressure": 1006,
        "humidity": 65,
        "dew_point": 22.17,
        "uvi": 5.68,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 2.39,
        "wind_deg": 277,
        "wind_gust": 3.21,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738396800,
        "temp": 29.09,
        "feels_like": 32.37,
        "pressure": 1005,
        "humidity": 67,
        "dew_point": 22.31,
        "uvi": 4.44,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 2.1,
        "wind_deg": 274,
        "wind_gust": 3.7,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738400400,
        "temp": 28.58,
        "feels_like": 31.67,
        "pressure": 1006,
        "humidity": 69,
        "dew_point": 22.27,
        "uvi": 1.45,
        "clouds": 93,
        "visibility": 10000,
        "wind_speed": 0.98,
        "wind_deg": 316,
        "wind_gust": 3.63,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.62,
        "rain": {
          "1h": 0.52
        }
      },
      {
        "dt": 1738404000,
        "temp": 27.49,
        "feels_like": 29.93,
        "pressure": 1006,
        "humidity": 72,
        "dew_point": 22.09,
        "uvi": 0.24,
        "clouds": 95,
        "visibility": 10000,
        "wind_speed": 1.88,
        "wind_deg": 14,
        "wind_gust": 4.32,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.8,
        "rain": {
          "1h": 0.4
        }
      },
      {
        "dt": 1738407600,
        "temp": 26.52,
        "feels_like": 26.52,
        "pressure": 1008,
        "humidity": 76,
        "dew_point": 22,
        "uvi": 0,
        "clouds": 96,
        "visibility": 10000,
        "wind_speed": 3.65,
        "wind_deg": 22,
        "wind_gust": 5.26,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.96,
        "rain": {
          "1h": 0.31
        }
      },
      {
        "dt": 1738411200,
        "temp": 25.74,
        "feels_like": 26.41,
        "pressure": 1008,
        "humidity": 78,
        "dew_point": 21.6,
        "uvi": 0,
        "clouds": 96,
        "visibility": 10000,
        "wind_speed": 4.52,
        "wind_deg": 28,
        "wind_gust": 6.62,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.76
      },
      {
        "dt": 1738414800,
        "temp": 25.59,
        "feels_like": 26.24,
        "pressure": 1009,
        "humidity": 78,
        "dew_point": 21.53,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.89,
        "wind_deg": 15,
        "wind_gust": 7.56,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738418400,
        "temp": 25.64,
        "feels_like": 26.32,
        "pressure": 1010,
        "humidity": 79,
        "dew_point": 21.8,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.87,
        "wind_deg": 5,
        "wind_gust": 7.98,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738422000,
        "temp": 25.38,
        "feels_like": 26.09,
        "pressure": 1010,
        "humidity": 81,
        "dew_point": 21.78,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.96,
        "wind_deg": 355,
        "wind_gust": 8.25,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738425600,
        "temp": 25.29,
        "feels_like": 25.96,
        "pressure": 1009,
        "humidity": 80,
        "dew_point": 21.61,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.27,
        "wind_deg": 358,
        "wind_gust": 7.52,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738429200,
        "temp": 25.25,
        "feels_like": 25.92,
        "pressure": 1009,
        "humidity": 80,
        "dew_point": 21.62,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.1,
        "wind_deg": 10,
        "wind_gust": 6.8,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738432800,
        "temp": 25.2,
        "feels_like": 25.86,
        "pressure": 1009,
        "humidity": 80,
        "dew_point": 21.51,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.14,
        "wind_deg": 11,
        "wind_gust": 6.57,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738436400,
        "temp": 25.14,
        "feels_like": 25.8,
        "pressure": 1008,
        "humidity": 80,
        "dew_point": 21.33,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.31,
        "wind_deg": 7,
        "wind_gust": 6.75,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738440000,
        "temp": 25.03,
        "feels_like": 25.68,
        "pressure": 1008,
        "humidity": 80,
        "dew_point": 21.35,
        "uvi": 0,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 3.94,
        "wind_deg": 1,
        "wind_gust": 6.11,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738443600,
        "temp": 24.97,
        "feels_like": 25.64,
        "pressure": 1008,
        "humidity": 81,
        "dew_point": 21.41,
        "uvi": 0,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 4.39,
        "wind_deg": 355,
        "wind_gust": 6.27,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738447200,
        "temp": 24.93,
        "feels_like": 25.59,
        "pressure": 1008,
        "humidity": 81,
        "dew_point": 21.46,
        "uvi": 0,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 4.5,
        "wind_deg": 4,
        "wind_gust": 7.18,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738450800,
        "temp": 24.88,
        "feels_like": 25.56,
        "pressure": 1008,
        "humidity": 82,
        "dew_point": 21.66,
        "uvi": 0,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 5.1,
        "wind_deg": 360,
        "wind_gust": 8.08,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738454400,
        "temp": 24.9,
        "feels_like": 25.61,
        "pressure": 1009,
        "humidity": 83,
        "dew_point": 21.7,
        "uvi": 0.23,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 5.14,
        "wind_deg": 356,
        "wind_gust": 8.03,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738458000,
        "temp": 24.99,
        "feels_like": 25.69,
        "pressure": 1010,
        "humidity": 82,
        "dew_point": 21.81,
        "uvi": 0.93,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.09,
        "wind_deg": 352,
        "wind_gust": 8.07,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738461600,
        "temp": 25.14,
        "feels_like": 25.88,
        "pressure": 1010,
        "humidity": 83,
        "dew_point": 22.04,
        "uvi": 2.4,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.38,
        "wind_deg": 357,
        "wind_gust": 8.48,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738465200,
        "temp": 25.65,
        "feels_like": 26.36,
        "pressure": 1010,
        "humidity": 80,
        "dew_point": 22.05,
        "uvi": 5.66,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.21,
        "wind_deg": 356,
        "wind_gust": 7.55,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738468800,
        "temp": 27.37,
        "feels_like": 29.6,
        "pressure": 1009,
        "humidity": 71,
        "dew_point": 21.64,
        "uvi": 4.63,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.39,
        "wind_deg": 350,
        "wind_gust": 6.54,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738472400,
        "temp": 28.53,
        "feels_like": 31.11,
        "pressure": 1008,
        "humidity": 66,
        "dew_point": 21.54,
        "uvi": 3.31,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.72,
        "wind_deg": 325,
        "wind_gust": 4.25,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738476000,
        "temp": 29.02,
        "feels_like": 32.05,
        "pressure": 1007,
        "humidity": 66,
        "dew_point": 21.88,
        "uvi": 2.63,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.96,
        "wind_deg": 303,
        "wind_gust": 3.48,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1738479600,
        "temp": 28.99,
        "feels_like": 31.99,
        "pressure": 1006,
        "humidity": 66,
        "dew_point": 21.83,
        "uvi": 2.22,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.05,
        "wind_deg": 285,
        "wind_gust": 3.58,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      }
    ],
      "daily": [
        {
          "dt": 1738299600,
          "sunrise": 1738278948,
          "sunset": 1738322359,
          "moonrise": 1738284000,
          "moonset": 1738328520,
          "moon_phase": 0.06,
          "summary": "There will be partly cloudy today",
          "temp": {
            "day": 28.63,
            "min": 23.77,
            "max": 29.25,
            "night": 24.92,
            "eve": 27.17,
            "morn": 23.77
          },
          "feels_like": {
            "day": 31.14,
            "night": 25.5,
            "eve": 29.24,
            "morn": 24.4
          },
          "pressure": 1009,
          "humidity": 65,
          "dew_point": 21.4,
          "wind_speed": 7.09,
          "wind_deg": 8,
          "wind_gust": 9.88,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": 53,
          "pop": 0.04,
          "uvi": 12.53
        },
        {
          "dt": 1738386000,
          "sunrise": 1738365356,
          "sunset": 1738408770,
          "moonrise": 1738373340,
          "moonset": 1738417860,
          "moon_phase": 0.1,
          "summary": "Expect a day of partly cloudy with rain",
          "temp": {
            "day": 28.76,
            "min": 24.23,
            "max": 29.64,
            "night": 25.38,
            "eve": 26.52,
            "morn": 24.23
          },
          "feels_like": {
            "day": 31.38,
            "night": 26.09,
            "eve": 26.52,
            "morn": 24.9
          },
          "pressure": 1009,
          "humidity": 65,
          "dew_point": 21.6,
          "wind_speed": 5.76,
          "wind_deg": 359,
          "wind_gust": 9.14,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 79,
          "pop": 0.96,
          "rain": 1.23,
          "uvi": 7.82
        },
        {
          "dt": 1738472400,
          "sunrise": 1738451763,
          "sunset": 1738495180,
          "moonrise": 1738462560,
          "moonset": 1738507200,
          "moon_phase": 0.13,
          "summary": "Expect a day of partly cloudy with rain",
          "temp": {
            "day": 28.53,
            "min": 24.88,
            "max": 29.02,
            "night": 25.47,
            "eve": 26.77,
            "morn": 24.88
          },
          "feels_like": {
            "day": 31.11,
            "night": 26.11,
            "eve": 28.92,
            "morn": 25.56
          },
          "pressure": 1008,
          "humidity": 66,
          "dew_point": 21.54,
          "wind_speed": 5.38,
          "wind_deg": 357,
          "wind_gust": 8.48,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 100,
          "pop": 0.2,
          "rain": 0.12,
          "uvi": 5.66
        },
        {
          "dt": 1738558800,
          "sunrise": 1738538169,
          "sunset": 1738581589,
          "moonrise": 1738551900,
          "moonset": 1738596600,
          "moon_phase": 0.17,
          "summary": "There will be partly cloudy today",
          "temp": {
            "day": 29.25,
            "min": 24.49,
            "max": 29.55,
            "night": 25.78,
            "eve": 26.65,
            "morn": 24.66
          },
          "feels_like": {
            "day": 31.8,
            "night": 26.48,
            "eve": 26.65,
            "morn": 25.24
          },
          "pressure": 1008,
          "humidity": 62,
          "dew_point": 21.23,
          "wind_speed": 5.76,
          "wind_deg": 358,
          "wind_gust": 9.72,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": 73,
          "pop": 0,
          "uvi": 13.19
        },
        {
          "dt": 1738645200,
          "sunrise": 1738624574,
          "sunset": 1738667998,
          "moonrise": 1738641240,
          "moonset": 0,
          "moon_phase": 0.21,
          "summary": "There will be partly cloudy today",
          "temp": {
            "day": 29.7,
            "min": 25.2,
            "max": 29.7,
            "night": 25.7,
            "eve": 26.41,
            "morn": 25.23
          },
          "feels_like": {
            "day": 33.04,
            "night": 26.52,
            "eve": 26.41,
            "morn": 26.13
          },
          "pressure": 1007,
          "humidity": 64,
          "dew_point": 22.09,
          "wind_speed": 8.09,
          "wind_deg": 25,
          "wind_gust": 10.25,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": 98,
          "pop": 0.1,
          "uvi": 10.81
        },
        {
          "dt": 1738731600,
          "sunrise": 1738710979,
          "sunset": 1738754405,
          "moonrise": 1738730700,
          "moonset": 1738686060,
          "moon_phase": 0.25,
          "summary": "Expect a day of partly cloudy with rain",
          "temp": {
            "day": 27.98,
            "min": 25.05,
            "max": 27.98,
            "night": 25.27,
            "eve": 25.73,
            "morn": 25.05
          },
          "feels_like": {
            "day": 31.03,
            "night": 26.1,
            "eve": 26.53,
            "morn": 25.88
          },
          "pressure": 1007,
          "humidity": 73,
          "dew_point": 22.66,
          "wind_speed": 7.77,
          "wind_deg": 28,
          "wind_gust": 11.07,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 100,
          "pop": 1,
          "rain": 1.38,
          "uvi": 11
        },
        {
          "dt": 1738818000,
          "sunrise": 1738797383,
          "sunset": 1738840812,
          "moonrise": 1738820400,
          "moonset": 1738775760,
          "moon_phase": 0.28,
          "summary": "Expect a day of partly cloudy with rain",
          "temp": {
            "day": 29.16,
            "min": 24.67,
            "max": 29.16,
            "night": 25.31,
            "eve": 26.25,
            "morn": 24.78
          },
          "feels_like": {
            "day": 31.8,
            "night": 26.04,
            "eve": 26.25,
            "morn": 25.59
          },
          "pressure": 1007,
          "humidity": 63,
          "dew_point": 21.33,
          "wind_speed": 6.75,
          "wind_deg": 21,
          "wind_gust": 9.31,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 92,
          "pop": 0.2,
          "rain": 0.21,
          "uvi": 11
        },
        {
          "dt": 1738904400,
          "sunrise": 1738883785,
          "sunset": 1738927218,
          "moonrise": 1738910280,
          "moonset": 1738865580,
          "moon_phase": 0.32,
          "summary": "The day will start with partly cloudy through the late morning hours, transitioning to rain",
          "temp": {
            "day": 29,
            "min": 24.4,
            "max": 29,
            "night": 25.67,
            "eve": 26.46,
            "morn": 24.61
          },
          "feels_like": {
            "day": 32.36,
            "night": 26.54,
            "eve": 26.46,
            "morn": 25.4
          },
          "pressure": 1007,
          "humidity": 68,
          "dew_point": 22.53,
          "wind_speed": 5.38,
          "wind_deg": 4,
          "wind_gust": 9.33,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 85,
          "pop": 1,
          "rain": 4.92,
          "uvi": 11
        }
      ]
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