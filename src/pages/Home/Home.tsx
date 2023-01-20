import React from 'react';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Header from '../../components/Header/Header';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <CurrentWeather />
      </main>
    </>
  );
};

export default Home;
