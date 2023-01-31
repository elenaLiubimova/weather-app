const transformWindToDirection = (wind) => {
  let direction;

  if ((wind > 0 && wind < 22.5) || (wind > 337.5 && wind < 360)) {
    return (direction = 'С');
  } else if (wind > 22.5 && wind < 67.5) {
    return (direction = 'СВ');
  } else if (wind > 67.5 && wind < 112.5) {
    return (direction = 'В');
  } else if (wind > 112.5 && wind < 157.5) {
    return (direction = 'ЮВ');
  } else if (wind > 157.5 && wind < 202.5) {
    return (direction = 'Ю');
  } else if (wind > 202.5 && wind < 247.5) {
    return (direction = 'ЮЗ');
  } else if (wind > 247.5 && wind < 292.5) {
    return (direction = 'З');
  } else if (wind > 292.5 && wind < 337.5) {
    return (direction = 'СЗ');
  }
};

export default transformWindToDirection;
