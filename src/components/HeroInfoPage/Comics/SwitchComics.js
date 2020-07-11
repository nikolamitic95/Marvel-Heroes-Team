import React from 'react';

import { Col } from 'react-bootstrap';
import { Comic } from './Comic';
import { DetailedComics } from '../Modal/Modal'


const SwitchComics = ({ comics, display, openModal, modalIsOpen, detailsComics}) => {
  return (
    <>
      <DetailedComics
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        detailsComics={detailsComics}
      />
      {comics.map(com => (
        <Comic
          key={com.id}
          display={display}
          title={com.name}
          image={com.image}
          modalImage={com.modalImage}
          prices={com.prices}
          date={com.date}
          openModal={openModal}
          modalIsOpen={modalIsOpen}
        />
      ))}
    </>
  )
}

export { SwitchComics };