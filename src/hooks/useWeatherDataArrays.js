import React from 'react';
import { AppContext } from '../contexts/AppContext';

export function useWeatherDataArrays (typeOfWeatherArray) {
  const { dailyForecast } = React.useContext(AppContext);
  const { loading } = React.useContext(AppContext);
  const arrayOfDailyWeatherData = [];
  const arrayOfHourlyWeatherData = [];

  if (dailyForecast) {
    for (let i = 0; i < dailyForecast.list.length; i += 8) {
      arrayOfDailyWeatherData.push(dailyForecast.list[i]);
    }
  
    for (let i = 0; i < 5; i++) {
      arrayOfHourlyWeatherData.push(dailyForecast.list[i]);
    }
  }

  if (typeOfWeatherArray === 'daily') {
    return !loading ? arrayOfDailyWeatherData : [];
  } else if (typeOfWeatherArray === 'hourly') {
    return !loading ? arrayOfHourlyWeatherData : [];
  }
};
