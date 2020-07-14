import React from 'react';

import styles from './HeroInfo.module.css';

import { Col } from 'react-bootstrap';


const HeroInfo = ({ image, title, description, openFullImage }) => {
  return (

    <Col className={styles.padding} lg='12'>
      <div onClick={openFullImage} className={styles.card}>
        <div className={styles.image}>
          <img src={image}></img>
        </div>
        <div>
          <h4 className={styles.title}>{title}</h4>
          <p>{description}</p>
          {description === "" &&
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged</p>
          }
        </div>
      </div>
    </Col>
  )
}

export { HeroInfo }