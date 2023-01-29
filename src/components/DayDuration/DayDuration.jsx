import React from 'react';
import styles from './DayDuration.module.scss';
import sunrise from '../../img/sunrise.svg';
import sunset from '../../img/sunset.svg';
import { AppContext } from '../../contexts/AppContext';

const DayDuration = () => {
  const { data } = React.useContext(AppContext);
  const { loading } = React.useContext(AppContext);

  return !loading ? (
    <div className={styles.dayDuration}>
      <p>
        <img src={sunrise} alt="иконка восхода" /> восход: 08.21
      </p>
      <p>
        <img src={sunset} alt="иконка заката" /> закат: 16.35
      </p>
      <h3>Световой день</h3>
      <p>7 ч 51 мин</p>
    </div>
  ) : (
    <div></div>
  );
};

export default DayDuration;
