import React from 'react';
import styles from './Header.module.scss';
import logo from '../../img/logo.png';
import sun from '../../img/sun.svg';
import moon from '../../img/moon.svg';
import Search from '../Search/Search';

const Header = () => {
  const [theme, setTheme] = React.useState('light');

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
      </div>
      <div className={styles.searchContainer}>
        <Search />
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
