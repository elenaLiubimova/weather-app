import React from 'react';
import mostlycloudy from '../../img/mostlycloudy.svg';
import styles from './ForecastCard.module.scss';

const ForecastCard = () => {
  return (
    <div className={styles.forecastCard}>
      <h4>Сегодня</h4>
      <p>20 января</p>
      <img src={mostlycloudy} alt='иконка погоды на день' />
      <p>+1&nbsp;&deg; | <span className={styles.feelings}>0&nbsp;&deg;</span></p>
      <p>Переменная облачность</p>
    </div>
  );
}

export default ForecastCard;