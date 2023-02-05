import React from 'react';
import { AppContext } from './contexts/AppContext';
import Home from './pages/Home/Home';

function App() {
  const [data, setData] = React.useState(null);
  const [dailyForecast, setDailyForecast] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [latitude, setLatitude] = React.useState('55.745');
  const [longitude, setLongitude] = React.useState('37.6183');

  const [geo, setGeo] = React.useState(null);
  const [place, setPlace] = React.useState('Москва');
  const [inputValue, setInputValue] = React.useState('');

  function getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
    
  function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  function handlePlaceInput(evt) {
    if (evt.key === 'Enter') {
      setPlace(evt.target.value);
      setInputValue('');
    }
  }

  function handleInputValue(evt) {
    setInputValue(evt.target.value);
  }

  function fetchGeo() {
    return fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
  }

  function fetchCurrentData() {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
  }

  function fetchDailyForecast() {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
  }
  
  React.useEffect(() => {
    Promise.all([fetchGeo(), fetchCurrentData(), fetchDailyForecast()])
      .then(([geo, data, dailyForecast]) => {
        setGeo(geo);
        setLatitude(geo[0].lat);
        setLongitude(geo[0].lon);
        setData(data);
        setDailyForecast(dailyForecast);
        // console.log(data);
        // console.log(dailyForecast);
        // console.log(latitude);
        // console.log(longitude);
      })

      .catch((error) => {
        console.log(`error ${error}`);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [place, latitude, longitude]);

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        dailyForecast,
        handlePlaceInput,
        place,
        inputValue,
        setInputValue,
        handleInputValue,
      }}
    >
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
