type Clouds = {
  all: number;
};

type Coordinates = {
  lon: number;
  lat: number;
};

type Main = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type Wind = {
  deg: number;
  gust: number;
  speed: number;
};

type Sys = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
};

export type WeatherData = {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coordinates;
  dt: number;
  id: number;
  main: Main;
  sys: Sys;
  timezone: number;
  visibility: number;
  name: string;
  weather: Weather[];
  wind: Wind;
};