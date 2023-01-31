import { date } from './constants.js';

const tramsformMonthToString = () => {
  const month = date.getMonth();

  let monthString;

  switch (month) {
    case 0: {
      return (monthString = 'янв');
    }

    case 1: {
      return (monthString = 'фев');
    }

    case 2: {
      return (monthString = 'мар');
    }

    case 3: {
      return (monthString = 'апр');
    }

    case 4: {
      return (monthString = 'мая');
    }

    case 5: {
      return (monthString = 'июня');
    }

    case 6: {
      return (monthString = 'июля');
    }

    case 7: {
      return (monthString = 'авг');
    }

    case 8: {
      return (monthString = 'сент');
    }

    case 9: {
      return (monthString = 'окт');
    }

    case 10: {
      return (monthString = 'ноя');
    }

    case 11: {
      return (monthString = 'дек');
    }
  }
};

export default tramsformMonthToString;
