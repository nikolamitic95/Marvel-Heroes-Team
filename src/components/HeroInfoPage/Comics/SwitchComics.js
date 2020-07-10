import React from 'react';

import { Col } from 'react-bootstrap';
import { Comic } from './Comic';
import { DetailedComics } from '../Modal/Modal'


const SwitchComics = ({ comics, display, openModal, modalIsOpen,detailsComic}) => {
  return (
    <>
      <DetailedComics
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        detailsComic={detailsComic}
      />
      {comics.map(com => (
        <Comic
          key={com.id}
          display={display}
          title={com.name}
          image={com.image}
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