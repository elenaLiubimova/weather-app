import React from 'react';
import { AppContext } from '../../contexts/AppContext';
// import { WeatherData } from '../../utils/types';
import styles from './CurrentWeather.module.scss';
import { changeDefaultIcons } from '../../utils/changeDefaultIcons';
import { day, year, hours } from '../../utils/constants';
import tramsformMonthToString from '../../utils/tramsformMonthToString';
import transformWeekDayToString from '../../utils/transformWeekDayToString';
import transformMinutes from '../../utils/transformMinutes';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentData } from '../../redux/data/slice';

const CurrentWeather = () => {
  //разобраться с типизацией
  const data = useSelector(state => state.data.data);
  console.log(data)

  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(getCurrentData());
  // }, []);
  
  const { loading, place } = React.useContext(AppContext);

  const secondsInHour = 3600;
  const timezone = data && data.timezone;
  const timezoneOffset = timezone / secondsInHour;
  let timezoneHour = hours && hours + timezoneOffset;

  function transformHours(hour) {
    hour = (hour > 23 || hour < 0) ? (hour-24) : hour;
    return hour;
  }

  return !loading ? (
    data && (
      <div className={styles.currentWeather}>
        <h2 className={styles.place}>{place}</h2>
        <p className={styles.date}>
          {day}&nbsp;{tramsformMonthToString()}&nbsp;{year}&nbsp;{transformWeekDayToString()}
        </p>
        <p className={styles.time}>
          Время:&nbsp;{transformHours(timezoneHour)}:{transformMinutes()}
        </p>
        <img
          className={styles.icon}
          src={changeDefaultIcons(data.weather[0].icon)}
        />
        <p className={styles.temperature}>
          {Math.round(data.main.temp)}&nbsp;&deg;C
        </p>
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
