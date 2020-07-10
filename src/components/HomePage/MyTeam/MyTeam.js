import React from 'react';

import { MyTeamCard } from './MyTeamCard';
import { Row } from 'react-bootstrap';

const MyTeam = ({ myTeam, removeHero }) => {

    return (
        <Row>
            {myTeam.map(hero => (
                <MyTeamCard
                    removeHero={removeHero}
                    key={hero.id}
                    id={hero.id}
                    name={hero.name}
                    img={hero.teamImage}
                />
            ))}
        </Row>
    )
}

export { MyTeam };