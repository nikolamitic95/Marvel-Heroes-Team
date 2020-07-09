import React from 'react';
import {Row, Col, Icon, Card, CardTitle, Button} from 'react-materialize';
import style from './MyTeam.module.css';

const MyTeamCard = ({name, img, id, removeHero}) => {
    return (

   
    <Card className={style.hvr}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={img}  />}
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
     {name}
     <Button onClick={()=>removeHero(id)} className={style.btn}>X</Button>
    </Card>
    )
}


export { MyTeamCard };