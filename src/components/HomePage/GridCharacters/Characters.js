import React from 'react';

import { Character } from './Character';
import { Row } from 'react-materialize'


const Characters = ({ filteredHeroes, myTeamAdd }) => {

  return (
 
      filteredHeroes.map((hero) => (
        <Character
          myTeamAdd={myTeamAdd}
          key={hero.id}
          name={hero.name}
          img={hero.image}
          id={hero.id} />
      ))
  
  )

}
export { Characters };