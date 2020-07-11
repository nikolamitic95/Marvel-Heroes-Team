import React from 'react';

import styles from './SwitchComics.module.css';

import { Col } from 'react-bootstrap';


const Comic = ({ image, modalImage, title, display, openModal, prices, date }) => {

    const detailsComics = { modalImage, title, prices, date }

    return (
        <Col lg="2" md='3' sm='4' xs='4'>
            <div onClick={() => { openModal(detailsComics) }} className={display ? styles.displayComics : styles.hideComics}>
                <div>
                    <img src={image}></img>
                </div>
                <div>
                    <h6 className={styles.comic}>{title}</h6>
                </div>
            </div>
        </Col>

    )
}

export { Comic };