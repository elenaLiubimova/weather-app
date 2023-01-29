import React from 'react';
import { AppContext } from './contexts/AppContext';
import Home from './pages/Home/Home';

function App() {
  const [data, setData] = React.useState();
  const [dailyForecast, setDailyForecast] = React.useState();
  const [loading, setLoading] = React.useState(true);

  function fetchCurrentData() {
    return fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru'
    ).then((res) => {
      return res.json();
    });
  }

  function fetchDailyForecast() {
    return fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru'
    ).then((res) => {
      return res.json();
    });
  }

  React.useEffect(() => {
    Promise.all([fetchCurrentData(), fetchDailyForecast()])
      .then(([data, dailyForecast]) => {
        setData(data);
        setDailyForecast(dailyForecast);
        console.log(data)
      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  // !loading && changeDefaultIcons(dailyForecast.list[0].weather[0].icon);

  return (
    <AppContext.Provider value={{ data, loading, dailyForecast }}>
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
