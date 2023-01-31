import sun from '../img/sun.svg';
import nt_clear from '../img/nt_clear.svg';
import mostlysunny from '../img/mostlysunny.svg';
import nt_mostlysunny from '../img/nt_mostlysunny.svg';
import cloudy from '../img/cloudy.svg';
import rain from '../img/rain.svg';
import chancerain from '../img/chancerain.svg';
import chancetstorms from '../img/chancetstorms.svg';
import snow from '../img/snow.svg';
import fog from '../img/fog.svg';

let weatherIcon;

export function changeDefaultIcons(icon) {
  switch (icon) {
    case '01d':
      return (weatherIcon = sun);

    case '01n':
      return (weatherIcon = nt_clear);

    case '02d':
      return (weatherIcon = mostlysunny);

    case '02n':
      return (weatherIcon = nt_mostlysunny);

    case '03d':
      return (weatherIcon = cloudy);

    case '03n':
      return (weatherIcon = cloudy);

    case '04d':
      return (weatherIcon = cloudy);

    case '04n':
      return (weatherIcon = cloudy);

    case '09d':
      return (weatherIcon = rain);

    case '09n':
      return (weatherIcon = rain);

    case '10d':
      return (weatherIcon = chancerain);

    case '10n':
      return (weatherIcon = chancerain);

    case '11d':
      return (weatherIcon = chancetstorms);

    case '11n':
      return (weatherIcon = chancetstorms);

    case '13d':
      return (weatherIcon = snow);

    case '13n':
      return (weatherIcon = snow);

    case '50d':
      return (weatherIcon = fog);

    case '50n':
      return (weatherIcon = fog);

    default:
      return (weatherIcon = cloudy);
  }
}
