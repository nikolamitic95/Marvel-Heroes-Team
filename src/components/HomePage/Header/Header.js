import React from 'react';
import styles from './Header.module.css';

import { Navbar } from 'react-bootstrap';



const Header = () => {
  return (
    <Navbar className={`${styles.header} justify-content-center`} bg="dark" variant="dark">
      <Navbar.Brand className={styles.name} href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Hero Team
    </Navbar.Brand>
    </Navbar>
  )
}

export { Header }