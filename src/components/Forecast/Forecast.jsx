import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';
import ForecastCard from '../ForecastCard/ForecastCard';
import styles from './Forecast.module.scss';
import { useWeatherDataArrays } from '../../hooks/useWeatherDataArrays';

const Forecast = ({ kind }) => {
  const { loading } = React.useContext(AppContext);
  const array = useWeatherDataArrays(kind);

  const renderForecast = () => {
    return array.map((card, i) => (
      <ForecastCard id={i} key={i} array={array} />
    ));
  };

  return !loading ? (
    <div className={styles.forecast}>
      <div className={styles.tabs + ' ' + styles[kind]}>
        <h3>
          <Link to="/" className={styles.link}>
            Прогноз на 5 дней
          </Link>
        </h3>
        <h3>
          <Link to="/forecasthourly" className={styles.link}>
            Прогноз на 12 часов
          </Link>
        </h3>
      </div>
      <div className={styles.cards}>{renderForecast()}</div>
    </div>
  ) : (
    <div></div>
  );
};

export default Forecast;
