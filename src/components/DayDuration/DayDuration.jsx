import React from 'react';
import styles from './DayDuration.module.scss';
import sunrise from '../../img/sunrise.svg';
import sunset from '../../img/sunset.svg';
import { AppContext } from '../../contexts/AppContext';
import moment from 'moment';

const DayDuration = () => {
  const { data } = React.useContext(AppContext);
  const { loading } = React.useContext(AppContext);
  let sunriseTime;
  let sunriseHour;
  let sunriseMinutes;
  let sunsetTime;
  let sunsetHour;
  let sunsetMinutes;

  if (!loading) {
    sunriseTime = moment(data.sys.sunrise * 1000).format('HH:mm');
    sunriseHour = moment(data.sys.sunrise * 1000).format('HH');
    sunriseMinutes = moment(data.sys.sunrise * 1000).format('mm');
    sunsetTime = moment(data.sys.sunset * 1000).format('HH:mm');
    sunsetHour = moment(data.sys.sunset * 1000).format('HH');
    sunsetMinutes = moment(data.sys.sunset * 1000).format('mm');
  }

  return !loading ? (
    <div className={styles.dayDuration}>
      <p>
        <img src={sunrise} alt="иконка восхода" /> восход:{' '}
        {sunriseTime}
      </p>
      <p>
        <img src={sunset} alt="иконка заката" /> закат:{' '}
        {sunsetTime}
      </p>
      <h3>Световой день</h3>
      <p>{sunsetHour - sunriseHour}&nbsp;ч {sunsetMinutes - sunriseMinutes}&nbsp;мин</p>
    </div>
  ) : (
    <div></div>
  );
};

export default DayDuration;
