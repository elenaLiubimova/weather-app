import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import styles from './ForecastCard.module.scss'
import { changeDefaultIcons } from '../../utils/changeDefaultIcons';
import moment from 'moment';
import localization from 'moment/locale/ru';

const ForecastCard = ({ id, newArr }) => {
  const { dailyForecast } = React.useContext(AppContext);
  const { loading } = React.useContext(AppContext);

  return !loading ? (
    <div className={styles.forecastCard}>
      <h4>{moment(newArr[id].dt_txt).locale('ru', localization).format('LL')}</h4>
      <p>{moment(newArr[id].dt_txt).format('HH:mm')}</p>
      <img
        src={changeDefaultIcons(newArr[id].weather[0].icon)}
        alt="иконка погоды на день"
      />
      <p>
        {Math.round(newArr[id].main.temp)}&nbsp;&deg; |{' '}
        <span className={styles.feelings}>
          {Math.round(newArr[id].main.feels_like)}&nbsp;&deg;
        </span>
      </p>
      <p>{newArr[id].weather[0].description}</p>
    </div>
  ) : (
    <div></div>
  );
};

export default ForecastCard;
