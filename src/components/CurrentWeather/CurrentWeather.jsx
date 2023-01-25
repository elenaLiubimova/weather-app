import { useState, useEffect } from 'react';
import snow from '../../img/snow.svg';
import styles from './CurrentWeather.module.scss';

const CurrentWeather = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7aa038d5396a5019e711ebe072511387'
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        return setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    
  return (
    <div className={styles.currentWeather}>
      <h2 className={styles.place}>{data.name}</h2>
      <p className={styles.date}>20.01.2023 пт</p>
      <p className={styles.time}>Время: 20:25</p>
      <img className={styles.icon} src={snow} />
      <p className={styles.temperature}></p>
      <p className={styles.cloudiness}></p>
      <p className={styles.feelings}>Ощущается как </p>
    </div>
  );
};

export default CurrentWeather;
