import React from 'react';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import DayDuration from '../../components/DayDuration/DayDuration';
import Header from '../../components/Header/Header';
import WeatherAdditions from '../../components/WeatherAdditions/WeatherAdditions';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <CurrentWeather />
        <WeatherAdditions />
        <DayDuration />
      </main>
    </>
  );
};

export default Home;
