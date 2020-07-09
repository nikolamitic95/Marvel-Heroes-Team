import React from 'react';
import {MyTeamCard} from './MyTeamCard';

const MyTeam = ({myTeam, removeHero}) => {
  
    return (     
            myTeam.map(hero=>(
            <MyTeamCard
            removeHero={removeHero}
            key={hero.id}
            id={hero.id}
             name={hero.name}
             img={hero.teamImage}
             />
        ))
    )
}

export { MyTeam };