import React from 'react';
import{Navbar, Icon} from 'react-materialize';
import './Header.css'


const Header =()=>{
    return(
      <Navbar className="grey darken-3 header"
      alignLinks="left"
  brand={<a className="brand-logo">Hero Team</a>}
  centerLogo
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

export{Header}