import { useState, useEffect } from 'react';
import styles from './CurrentWeather.module.scss';

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

type WeatherData = {
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

const CurrentWeather: any = () => { //разобраться с типизацией 
  const [data, setData] = useState<WeatherData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7aa038d5396a5019e711ebe072511387&units=metric'
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return setData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(data);

  return !loading ? (
    data && (
      <div className={styles.currentWeather}>
        <h2 className={styles.place}>{data.name}</h2>
        <p className={styles.date}>20.01.2023 пт</p>
        <p className={styles.time}>Время: 20:25</p>
        <img
          className={styles.icon}
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        />
        <p className={styles.temperature}>{Math.round(data.main.temp)}</p>
        <p className={styles.cloudiness}>{data.weather[0].description}</p>
        <p className={styles.feelings}>
          Ощущается как {Math.round(data.main.feels_like)}
        </p>
      </div>
    )
  ) : (
    <div></div>
  );
};

export default CurrentWeather;
