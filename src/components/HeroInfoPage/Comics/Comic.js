import React from 'react';

import styles from './SwitchComics.module.css';

import { Col } from 'react-bootstrap';


const Comic = ({ image, title, display, openModal, prices, date }) => {

    const detailsComic = { image, title, prices, date }

    return (
        <Col lg="2">
            <div onClick={() => { openModal(detailsComic) }} className={display ? styles.displayComics : styles.hideComics}>
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