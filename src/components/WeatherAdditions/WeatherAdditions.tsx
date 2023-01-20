import React from 'react';
import styles from './WeatherAdditions.module.scss';
import wind from '../../img/wind.svg';
import pressure from '../../img/pressure.svg';
import humidity from '../../img/humidity.svg';
import sunrise from '../../img/sunrise.svg';

const WeatherAdditions = () => {
  return (
    <div className={styles.weatherAdditions}>
      <p>
        <img src={wind} alt="иконка ветра" /> ветер: 4,1 м/с, ЮВ
      </p>
      <p>
        <img src={pressure} alt="иконка атмосферного давления" /> давление: 765 мм рт. ст.
      </p>
      <p>
        <img src={humidity} alt="иконка влажности" /> влажность: 81 %
      </p>
      {/* <p className={styles.sunrise}>
        <img src={sunrise} alt="иконка влажности" /> 81 %
      </p> */}
    </div>
  );
}

export default WeatherAdditions;