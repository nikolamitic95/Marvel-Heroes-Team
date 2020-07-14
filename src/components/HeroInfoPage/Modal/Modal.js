import React from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.css';

import { convertDate } from '../../../shared/utilities';
import { Container, Col, Row } from 'react-bootstrap';

const DetailedComics = ({ modalIsOpen, openModal, detailsComics }) => {
    return (<Modal

        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => { openModal({}) }}
        style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(86, 186, 237, 0.6)'
            },
            content: {
                position: 'absolute',
                top: '80px',
                left: '80px',
                right: '80px',
                bottom: '80px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
            }
        }}
        contentLabel="modal"

    >
        <Container className={styles.modal}>
            <Row className={styles.content}>
                <Col  lg={{ span: 4, offset: 2 }} md='6' sm='8' xs='12'>
                    <img className={styles.img} src={detailsComics.modalImage}></img>
                </Col>
                <Col lg='4' md='6' sm='4' xs='12'>
                    <p className={styles.name}>Name:</p>
                    <h4 className={styles.subName}>{detailsComics.title}</h4>
                    <p className={styles.name}>Date of Print:</p>
                    <h4 className={styles.subName}>{convertDate(detailsComics.date)}</h4>
                    <p className={styles.name}>Price:</p>
                    <h4 className={styles.subName}>{detailsComics.prices}</h4>
                </Col>
            </Row>
        </Container>

    </Modal>)
}

export { DetailedComics }