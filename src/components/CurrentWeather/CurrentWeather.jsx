import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import { WeatherData } from '../../utils/types';
import styles from './CurrentWeather.module.scss';

const CurrentWeather = () => {
  //разобраться с типизацией

const { data } = React.useContext(AppContext);
const { loading } = React.useContext(AppContext);

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
