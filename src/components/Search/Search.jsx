import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import search from '../../img/search.svg';
import styles from './Search.module.scss';

const Search = () => {
  const { loading, fetchGeo, place, setPlace, setLatitude, setLongitude, fetchCurrentData, setData } =
    React.useContext(AppContext);
  const inputRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState('');
  const [geo, setGeo] = React.useState(null);

  function handlePlaceInput(evt) {
    if (evt.key === 'Enter') {
      setInputValue('');
      fetchGeo(evt.target.value).then((geo) => {
        setGeo(geo);
        setLatitude(geo[0].lat);
        setLongitude(geo[0].lon);
        return geo;
      })

      .then((geo) => fetchCurrentData(geo[0].lat, geo[0].lon)) //

      .then((data) => {
        setData(data);
        setPlace(data.name);
      })
    }
  }

  function handleInputValue(evt) {
    setInputValue(evt.target.value);
  }

  function onClearInput() {
    setInputValue('');
    inputRef.current.focus();
  }

  // React.useEffect(() => {
  //   fetchGeo().then((geo) => {
  //     setGeo(geo);
  //     setLatitude(geo[0].lat);
  //     setLongitude(geo[0].lon);
  //   });
  //   console.log(geo);
  // }, [place]);

  return !loading ? (
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
  ) : (
    <div></div>
  );
};

export default Search;
