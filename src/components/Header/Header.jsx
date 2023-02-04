import React from 'react';
import styles from './Header.module.scss';
import logo from '../../img/logo.png';
import sun from '../../img/sun.svg';
import moon from '../../img/moon.svg';
import { AppContext } from '../../contexts/AppContext';
import search from '../../img/search.svg';

const Header = () => {
  const [theme, setTheme] = React.useState('light');
  const { handlePlaceInput, inputValue, setInputValue, handleInputValue } = React.useContext(AppContext);
  const inputRef = React.useRef(null);

  function onClearInput() {
    setInputValue('');
    inputRef.current.focus();
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

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
            <button
            onClick={() => onClearInput()}
            >
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
                <line x1="16" y1="0" x2="0" y2="16" stroke="#E4E4E4"/>
                <line x1="0" y1="0" x2="16" y2="16" stroke="#E4E4E4"/>
              </svg>
            </button>
          )}
        </div>
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
