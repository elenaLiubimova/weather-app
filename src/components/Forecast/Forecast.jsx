import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import ForecastCard from '../ForecastCard/ForecastCard';
import styles from './Forecast.module.scss';

const Forecast = () => {
  const { dailyForecast } = React.useContext(AppContext);
  const { loading } = React.useContext(AppContext);

  const renderForecast = () => {
    const newArr = [];

    for (let i = 0; i < dailyForecast.list.length; i += 8) {
      newArr.push(dailyForecast.list[i]);
    }

    return newArr.map((card, i) => <ForecastCard id={i} key={i} newArr={newArr}/>);
  };

  return !loading ? (
    <div className={styles.forecast}>
      <div className={styles.tabs}>
        <h3>Прогноз на 5 дней</h3>
        <h3>Прогноз на день</h3>
      </div>
      <div className={styles.cards}>{renderForecast()}</div>
    </div>
  ) : (
    <div></div>
  );
};

export default Forecast;
