import React from 'react';
import { AppContext } from './contexts/AppContext';
import Home from './pages/Home/Home';

function App() {
  const [data, setData] = React.useState(null);
  const [dailyForecast, setDailyForecast] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [latitude, setLatitude] = React.useState(''); //55.745
  const [longitude, setLongitude] = React.useState(''); //37.6183

  const [place, setPlace] = React.useState('');

  function getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  function fetchCurrentData(lat, lon) { 
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
  }

  // function fetchDailyForecast(lat, lon) {
  //   return fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
  //   ).then((res) => checkResponse(res));
  // }

  function fetchGeo(place) {
    return fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
  }

  React.useEffect(() => {
    getLocation()
      .then((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        return position.coords;
      })

      .then((res) => fetchCurrentData(res.latitude, res.longitude))

      .then((data) => {
        setData(data);
        setPlace(data.name);
      })

      .catch((error) => {
        console.log(`error ${error}`);
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        dailyForecast,
        place,
        fetchGeo,
        setPlace,
        setLatitude,
        setLongitude,
        fetchCurrentData,
        setData
      }}
    >
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
