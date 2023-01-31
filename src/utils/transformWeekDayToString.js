import { date } from './constants.js';

const transformWeekDayToString = () => {
  const weekDay = date.getDay();

  let weekDayString;

  switch (weekDay) {
    case 0: {
      return (weekDayString = 'вс');
    }
    
    case 1: {
      return (weekDayString = 'пн');
    }

    case 2: {
      return (weekDayString = 'вт');
    }

    case 3: {
      return (weekDayString = 'ср');
    }

    case 4: {
      return (weekDayString = 'чт');
    }

    case 5: {
      return (weekDayString = 'пт');
    }

    case 6: {
      return (weekDayString = 'сб');
    }
  }
};

export default transformWeekDayToString;