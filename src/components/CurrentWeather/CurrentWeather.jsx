import React from 'react';
import { AppContext } from '../../contexts/AppContext';
// import { WeatherData } from '../../utils/types';
import styles from './CurrentWeather.module.scss';
import { changeDefaultIcons } from '../../utils/changeDefaultIcons';
import { day, year, hours } from '../../utils/constants';
import tramsformMonthToString from '../../utils/tramsformMonthToString';
import transformWeekDayToString from '../../utils/transformWeekDayToString';
import transformMinutes from '../../utils/transformMinutes';

const CurrentWeather = () => {
  //разобраться с типизацией

const { data, loading, place } = React.useContext(AppContext);

  return !loading ? (
    data && (
      <div className={styles.currentWeather}>
        <h2 className={styles.place}>{place}</h2>
        <p className={styles.date}>{day} {tramsformMonthToString()} {year} {transformWeekDayToString()}</p>
        <p className={styles.time}>Время:&nbsp;{hours}:{transformMinutes()}</p>
        <img
          className={styles.icon}
          src={changeDefaultIcons(data.weather[0].icon)}
        />
        <p className={styles.temperature}>{Math.round(data.main.temp)}&nbsp;&deg;C</p>
        <p className={styles.cloudiness}>{data.weather[0].description}</p>
        <p className={styles.feelings}>
          Ощущается как {Math.round(data.main.feels_like)} &nbsp;&deg;C;
        </p>
      </div>
    )
  ) : (
    <div></div>
  );
};

export default CurrentWeather;
