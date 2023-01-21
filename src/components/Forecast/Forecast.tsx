import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';
import styles from './Forecast.module.scss';

const Forecast = () => {
  return (
    <div className={styles.forecast}>
      <div className={styles.tabs}>
        <h3>Прогноз на неделю</h3>
        <h3>Почасовой прогноз</h3>
      </div>
      <div className={styles.cards}>
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    </div>
  );
};

export default Forecast;
