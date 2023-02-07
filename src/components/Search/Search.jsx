import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import search from '../../img/search.svg';
import styles from './Search.module.scss';

const Search = () => {
  const { place, setPlace, checkResponse } = React.useContext(AppContext);
  const inputRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState('');
  const [geo, setGeo] = React.useState(null);

  function fetchGeo() {
    return fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    ).then((res) => checkResponse(res));
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

  function onClearInput() {
    setInputValue('');
    inputRef.current.focus();
  }

  React.useEffect(() => {
    console.log(place)
    
    fetchGeo();
    setGeo(geo);
    console.log(geo)
  }, [place]);

  return (
    <div className={styles.searchField}>
      <input
        onChange={handleInputValue}
        ref={inputRef}
        value={inputValue}
        placeholder="Населенный пункт"
        onKeyDown={handlePlaceInput}
      />
      {!inputValue && <img src={search} alt="иконка поиска" />}
      {inputValue && (
        <button onClick={() => onClearInput()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="16" y1="0" x2="0" y2="16" stroke="#E4E4E4" />
            <line x1="0" y1="0" x2="16" y2="16" stroke="#E4E4E4" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Search;
