import React from 'react';
import styles from './DayDuration.module.scss';
import sunrise from '../../img/sunrise.svg';
import sunset from '../../img/sunset.svg';

const DayDuration = () => {
  return (
    <div className={styles.dayDuration}>
      <p>
        <img src={sunrise} alt="иконка восхода" /> восход: 08.44
      </p>
      <p>
        <img src={sunset} alt="иконка заката" /> закат: 16.35
      </p>
      <h3>Световой день</h3>
      <p>7 ч 51 мин</p>
    </div>
  );
}

export default DayDuration;