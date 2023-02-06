import React from 'react';
import styles from './DayDuration.module.scss';
import sunrise from '../../img/sunrise.svg';
import sunset from '../../img/sunset.svg';
import { AppContext } from '../../contexts/AppContext';
import dayjs from 'dayjs';
import { localTimeZoneOffsetInSeconds } from '../../utils/constants';

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
    sunriseTime = dayjs((data.sys.sunrise + localTimeZoneOffsetInSeconds + data.timezone) * 1000).format('HH:mm');
    sunriseHour = dayjs((data.sys.sunrise + localTimeZoneOffsetInSeconds + data.timezone) * 1000).format('HH');
    sunriseMinutes = dayjs((data.sys.sunrise + localTimeZoneOffsetInSeconds + data.timezone) * 1000).format('mm');
    sunsetTime = dayjs((data.sys.sunset + localTimeZoneOffsetInSeconds + data.timezone) * 1000).format('HH:mm');
    sunsetHour = dayjs((data.sys.sunset + localTimeZoneOffsetInSeconds + data.timezone) * 1000).format('HH');
    sunsetMinutes = dayjs((data.sys.sunset + localTimeZoneOffsetInSeconds + data.timezone) * 1000).format('mm');
  }

  return !loading ? (
    <div className={styles.dayDuration}>
      <p className={styles.sunrise}>
        <img src={sunrise} alt="иконка восхода" /> восход:{' '}
        {sunriseTime}
      </p>
      <p  className={styles.sunset}>
        <img src={sunset} alt="иконка заката" /> закат:{' '}
        {sunsetTime}
      </p>
      <h3 className={styles.title}>Световой день</h3>
      <p className={styles.time}>{sunsetHour - sunriseHour}&nbsp;ч {(sunsetMinutes > sunriseMinutes) ? sunsetMinutes - sunriseMinutes : sunriseMinutes - sunsetMinutes}&nbsp;мин</p>
    </div>
  ) : (
    <div></div>
  );
};

export default DayDuration;
