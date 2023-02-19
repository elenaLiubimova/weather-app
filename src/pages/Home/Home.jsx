import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import DayDuration from '../../components/DayDuration/DayDuration';
import Footer from '../../components/Footer/Footer';
import Forecast from '../../components/Forecast/Forecast';
import ForecastHourly from '../../components/ForecastHourly/ForecastHourly';
import Header from '../../components/Header/Header';
import WeatherAdditions from '../../components/WeatherAdditions/WeatherAdditions';
import styles from './Home.module.scss';
import { arrayOfDailyWeatherData, arrayOfHourlyWeatherData } from '../../hooks/useWeatherDataArrays';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <CurrentWeather />
        {/* <WeatherAdditions />
        <DayDuration />
        <Routes>
          <Route path="/" element={<Forecast kind="daily" />} />
          <Route
            path="/forecasthourly"
            element={<Forecast kind="hourly" />}
          />
        </Routes> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
