export enum WeatherCondition {
  Rain = 'Rain',
  Snow = 'Snow',
  Clear = 'Clear',
  Clouds = 'Clouds',
}

export interface Weather {
  id: number;
  main: WeatherCondition;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface LocationOpenWeather {
  id: string;
  name: string;
  weather: Weather[];
  main: WeatherMain;
}


export interface ForecastList {
  dt: number;
  main: WeatherMain;
  weather: Weather[];
  visibility: number;
  pop: number;
  dt_txt: string;
}

export interface City {
  id: number;
  name: string;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface LocationOpenForecast {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastList[];
  city: City;
}
