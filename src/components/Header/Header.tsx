import React from 'react';
import styles from './Header.module.scss';
import logo from "../../img/logo.png";
import search from "../../img/search.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.logoAndTitle}>
        <img className={styles.logo} src={logo}/>
        <p className={styles.title}>Погода</p>
      </div>
      <div className={styles.searchBlock}>
        <button className={styles.searchButton}/>
        <input placeholder='Населенный пункт'/>
      </div>
    </header>
  );
}

export default Header;