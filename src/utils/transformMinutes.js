import { date } from './constants.js';

const transformMinutes = () => {
  const minutes = date.getMinutes();

  if (minutes < 10) {
    return '0' + minutes.toString();
  } else return minutes;
};

export default transformMinutes;
