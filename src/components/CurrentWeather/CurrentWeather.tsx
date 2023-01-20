import React from 'react';
import snow from '../../img/snow.svg';
import styles from './CurrentWeather.module.scss';

const CurrentWeather = () => {
  return (
    <div className={styles.currentWeather}>
      <h2 className={styles.place}>Пушкино</h2>
      <p className={styles.date}>20.01.2023 пт</p>
      <p className={styles.time}>Время: 20:25</p>
      <img className={styles.icon} src={snow} />
      <p className={styles.temperature}>+1 &deg;</p>
      <p className={styles.cloudiness}>Пасмурно</p>
      <p className={styles.feelings}>Ощущается как 0 &deg;</p>
    </div>
  );
};

export default CurrentWeather;
