import React from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.css';

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
        
    <p></p>

    </Modal>)
}

export { DetailedComics }