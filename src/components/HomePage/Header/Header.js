import React from 'react';

import styles from './Header.module.css';

import { Navbar, Icon } from 'react-materialize';



const Header = () => {
  return (
    <Navbar className={`${styles.header} grey darken-3`}
      alignLinks="center"
      centerChildren
      brand={<a className="brand-logo">Hero Team</a>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >

    </Navbar>
  )
}

export { Header }