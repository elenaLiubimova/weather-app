import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import styles from './ForecastCard.module.scss'
import { changeDefaultIcons } from '../../utils/changeDefaultIcons';
import moment from 'moment';
import dayjs from 'dayjs';
import localization from 'moment/locale/ru';
import { localTimeZoneOffsetInHours } from '../../utils/constants';

const ForecastCard = ({ id, array }) => {
  const { data } = React.useContext(AppContext);
  const { loading } = React.useContext(AppContext);

  const timezoneOffset = data.timezone / 3600;

  return !loading ? (
    <div className={styles.forecastCard}>
      <h4>{moment(array[id].dt_txt).locale('ru', localization).format('LL')}</h4>
      <p>{Number(dayjs(array[id].dt_txt).format('HH')) + localTimeZoneOffsetInHours + timezoneOffset}:{dayjs(array[id].dt_txt).format('mm')}</p>
      <img
        src={changeDefaultIcons(array[id].weather[0].icon)}
        alt="иконка погоды на день"
      />
      <p>
        {Math.round(array[id].main.temp)}&nbsp;&deg; |{' '}
        <span className={styles.feelings}>
          {Math.round(array[id].main.feels_like)}&nbsp;&deg;
        </span>
      </p>
      <p>{array[id].weather[0].description}</p>
    </div>
  ) : (
    <div></div>
  );
};

export default ForecastCard;
