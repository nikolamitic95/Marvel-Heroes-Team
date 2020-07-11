import React from 'react';

import styles from './HeaderInfo.module.css';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HeaderInfo = () => {
  return (
    <Navbar className={styles.headerInfo} bg="dark" variant="dark">
      <Navbar.Brand className={styles.title} >Marvel Heroes</Navbar.Brand>
      <Link className={styles.link} to='/'> <Navbar.Brand>Homepage</Navbar.Brand> </Link>
    </Navbar>
  )
}
export { HeaderInfo }