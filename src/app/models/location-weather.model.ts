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
