import React from 'react';

import styles from './FullImage.module.css';

const FullImage = ({ fullImage, removeImage }) => {
    return (
        <div onClick={removeImage} className={styles.fullImage}>
            <img src={fullImage} />
        </div>
    )
}

export { FullImage }