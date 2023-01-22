import React from 'react';
import styles from './Header.module.scss';
import logo from "../../img/logo.png";
import sun from "../../img/sun.svg";
import moon from "../../img/moon.svg";
// import search from "../../img/search.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.logoAndTitle}>
        <img className={styles.logo} src={logo} alt="логотип приложения: солнце с облаком"/>
        <p className={styles.title}>Погода</p>
        {/* <button className={styles.searchButton}/> */}
        <input placeholder='Населенный пункт'/>
      </div>
      <div className={styles.toggles}>
        <img src={sun} />
        <button className={styles.themeToggle}>
          <div />
        </button>
      </div>
    </header>
  );
}

export default Header;