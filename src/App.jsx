import React from 'react';
import { AppContext } from './contexts/AppContext';
import Home from './pages/Home/Home';

function App() {
  const [data, setData] = React.useState();
  const [dailyForecast, setDailyForecast] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [lattitude, setLattitude] = React.useState('37.6183'); //
  const [longitude, setLongitude] = React.useState('55.745'); //

  const [geo, setGeo] = React.useState();
  const [place, setPlace] = React.useState('Москва'); //
  const [inputValue, setInputValue] = React.useState('');
  
    // function setInitialLocation() {
    //   if (!navigator.geolocation) {
    //     alert('Ваш браузер не дружит с геолокацией...')
    //   } else {
    //     navigator.geolocation.getCurrentPosition(success, error)
    //   }
    
    //   function success(position) {
    //     const { longitude, latitude }  = position.coords;
    //     setLongitude(longitude);
    //     setLattitude(latitude);
    //   }
    
    //   function error() {
    //     console.log('Не получается определить вашу геолокацию :(');
    //   }
    // }

    // setInitialLocation();
  
  function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  function handlePlaceInput(evt) {
    if (evt.key === 'Enter') {
      setPlace(evt.target.value);
    }
  }

  function handleInputValue(evt) {
    setInputValue(evt.target.value);
  }

  function fetchCurrentData() {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
  }

  function fetchDailyForecast() {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lattitude}&lon=${longitude}&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
  }

  function fetchGeo() {
    return fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
  }

  React.useEffect(() => {
    Promise.all([fetchCurrentData(), fetchDailyForecast(), fetchGeo()])
      .then(([data, dailyForecast, geo]) => {
        setData(data);
        setDailyForecast(dailyForecast);
        setGeo(geo);
        setLattitude(geo[0].lat);
        setLongitude(geo[0].lon);
        // console.log(data);
        // console.log(dailyForecast);
        // console.log(lattitude);
        // console.log(longitude);
      })

      .catch((error) => {
        console.log(`error ${error}`);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [place, lattitude, longitude]);

  // !loading && changeDefaultIcons(dailyForecast.list[0].weather[0].icon);
  function getCoordinates() {
    // setLattitude(geo[0].lat);
    // setLongitude(geo[0].lon);
    // lattitude = geo[0].lat;
    // longitude = geo[0].lon;
    console.log(geo[0].lat);
    console.log(geo[0].lon);
  }

  // !loading && getCoordinates();

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        dailyForecast,
        handlePlaceInput,
        place,
        inputValue,
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
