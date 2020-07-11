import React from 'react';
import style from './MyTeam.module.css';

import { Col, Button } from 'react-bootstrap';
import {MdDeleteForever} from 'react-icons/md'



const MyTeamCard = ({ name, img, id, removeHero }) => {
  return (

    <Col lg='12'>
      <div className={style.card}>
        <img src={img}></img>
        <p className={style.name}>{name}</p>
        <MdDeleteForever onClick={()=>{removeHero(id)}} className={style.remove}/>
      </div>
    </Col>
  )
}

export { MyTeamCard };