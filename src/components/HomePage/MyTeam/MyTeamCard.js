import React from 'react';
import { Col, Button } from 'react-bootstrap';

import style from './MyTeam.module.css';

const MyTeamCard = ({ name, img, id, removeHero }) => {
  return (

    <Col lg='12'>
      <div className={style.card}>
        <img src={img}></img>
        <p className={style.name}>{name}</p>
        <Button onClick={()=>{removeHero(id)}} className={style.btn}>X</Button>
      </div>
    </Col>
  )
}

export { MyTeamCard };