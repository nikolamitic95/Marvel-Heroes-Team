import React from 'react';
import {Navbar, Icon} from 'react-materialize'; 
import './Search.css';


const Search = ({searchedCharacters}) =>{

  const  onSearch=(e) =>{
        const value = e.target.value;
        searchedCharacters(value)

    }

    return(
        <Navbar className="white  light-blue darken-1 search"
        alignLinks="right"  
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
        search onChange={onSearch}
      >
      </Navbar>
    )
}

export {Search}