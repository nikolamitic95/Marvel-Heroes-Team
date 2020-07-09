import React from 'react';
import {Navbar,NavItem, Icon,} from 'react-materialize';
import './HeaderInfo.css'
import {Link} from 'react-router-dom';


const HeaderInfo = () =>{
    return(
        <Navbar className="grey darken-3 headerInfo"
  alignLinks="right"
  brand={<a className="brand-logo left"> Marvel Heroes</a>}
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
  
 <Link to="/"> <NavItem>
    Homepage
  </NavItem> </Link>
</Navbar>
    )
}
export {HeaderInfo}