import React from 'react';
import styles from './Header.module.scss';
import logo from '../../img/logo.png';
import sun from '../../img/sun.svg';
import moon from '../../img/moon.svg';
import { AppContext } from '../../contexts/AppContext';
// import search from "../../img/search.svg";

const Header = () => {
  const [theme, setTheme] = React.useState('light');
  // const [place, setPlace] = React.useState('pushkino');
  const { handlePlaceInput, inputValue, handleInputValue } = React.useContext(AppContext);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // function onChangeInput(evt) {
  //   if (evt.key === 'Enter') {
  //     setPlace(evt.target.value);
  //   }
  // }

  React.useEffect(() => {
    const root = document.querySelector(':root');
    root.style.setProperty(
      '--background-color',
      `var(--background-color-theme-${theme})`
    );

    root.style.setProperty('--font-color', `var(--font-color-theme-${theme})`);

    root.style.setProperty(
      '--components-text',
      `var(--components-text-theme-${theme})`
    );

    root.style.setProperty(
      '--input-and-toggle',
      `var(--input-and-toggle-theme-${theme})`
    );

    root.style.setProperty('--input-text', `var(--input-text-theme-${theme})`);

    root.style.setProperty(
      '--pressure-icon-fill',
      `var(--pressure-icon-fill-theme-${theme})`
    );
  }, [theme]);

  return (
    <header>
      <div className={styles.logoAndTitle}>
        <img
          className={styles.logo}
          src={logo}
          alt="логотип приложения: солнце с облаком"
        />
        <p className={styles.title}>Погода</p>
        {/* <button className={styles.searchButton}/> */}
        <input
          onChange={handleInputValue}
          value={inputValue}
          placeholder="Населенный пункт"
          onKeyDown={handlePlaceInput}
        />
      </div>
      <div className={styles.toggles}>
        <div className={styles.themeToggleBlock}>
          <img src={sun} />
          <button
            className={
              styles.themeToggle + ' ' + styles[`themeToggle_theme_${theme}`]
            }
            onClick={toggleTheme}
          >
            <div />
          </button>
          <img src={moon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
