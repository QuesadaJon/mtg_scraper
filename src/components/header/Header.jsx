import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <a className={styles.Header}>
      <figure>
        <h1>Magic the Gathering</h1>
      </figure>
    </a>
  );
};

export default Header;
