import React from 'react';
import { AppContext } from './contexts/AppContext';
import Home from './pages/Home/Home';
// import { WeatherData } from './utils/types';

function App() {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7aa038d5396a5019e711ebe072511387&units=metric'
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return setData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(data);
  
  return (
    <AppContext.Provider value = {{data, loading}}>
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
