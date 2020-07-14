import React from 'react';

import styles from './HeaderInfo.module.css';

import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HeaderInfo = () => {
  return (
    <Navbar className={styles.headerInfo} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className={styles.title} > Marvel Heroes</Navbar.Brand>
        <Link className={styles.link} to='/'> <Navbar.Brand className={styles.home}>Homepage</Navbar.Brand> </Link>
      </Container>
    </Navbar>
  )
}
export { HeaderInfo }