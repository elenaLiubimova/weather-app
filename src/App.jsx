import React from 'react';
import { AppContext } from './contexts/AppContext';
import { useDispatch } from 'react-redux';
import Home from './pages/Home/Home';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { getCurrentData } from './redux/data/slice';
=======
import { getGeo, setPlace } from './redux/place/slice';
>>>>>>> 86b6c6efcaa426d51334170fcd0c87bedf31325c

function App() {
  // const [data, setData] = React.useState(null);
  const [dailyForecast, setDailyForecast] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [latitude, setLatitude] = React.useState(''); //55.745
  const [longitude, setLongitude] = React.useState(''); //37.6183

  // const [place, setPlace] = React.useState('');
  const dispatch = useDispatch();

  function getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  // function fetchCurrentData(lat, lon) { 
  //   return fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
  //   ).then((res) => checkResponse(res));
  // }

  function fetchDailyForecast(lat, lon) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
  }

  function fetchGeo(place) {
    // return fetch(
    //   `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    // ).then((res) => checkResponse(res));
  }

  React.useEffect(() => {
    // dispatch(getCurrentData());

    // getLocation()
    //   .then((position) => {
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    //     return position.coords;
    //   })

<<<<<<< HEAD
    //   .then((res) => dispatch(getCurrentData()))
=======
      .then(([data, dailyForecast]) => {
        setData(data);
        // setPlace(data.name);
        dispatch(setPlace(data.name));
        setDailyForecast(dailyForecast);
      })
>>>>>>> 86b6c6efcaa426d51334170fcd0c87bedf31325c

    //   .then((res) => Promise.all([fetchCurrentData(res.latitude, res.longitude), fetchDailyForecast(res.latitude, res.longitude)]))

    //   .then(([data, dailyForecast]) => {
    //     setData(data);
    //     setPlace(data.name);
    //     setDailyForecast(dailyForecast);
    //   })

    //   .catch((error) => {
    //     console.log(`error ${error}`);
    //   })

    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, []);

  return (
    <AppContext.Provider
      value={{
        // data,
        loading,
        dailyForecast,
        // place,
        fetchGeo,
        // setPlace,
<<<<<<< HEAD
        // setLatitude,
        // setLongitude,
        // fetchCurrentData,
        // setData,
=======
        setLatitude,
        setLongitude,
        fetchCurrentData,
        setData,
>>>>>>> 86b6c6efcaa426d51334170fcd0c87bedf31325c
        fetchDailyForecast,
        setDailyForecast
      }}
    >
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
