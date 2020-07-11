import React from 'react';

import styles from './Characters.module.css'

import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Character = ({ name, img, myTeamAdd, id }) => {

    return (
        <Col lg='4' md='6' sm='12'>
            <Card className={styles.card} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className={styles.name}>{name}</Card.Title>
                    <Link to={`/hero-info/${id}`}>
                        <Button className={styles.info} variant="primary">Info</Button>
                    </Link>
                    <Button onClick={() => myTeamAdd(id)} variant="primary">Add</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { Character };