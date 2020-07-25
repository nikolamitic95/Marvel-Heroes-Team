import React from 'react';

import styles from './FullImage.module.css';

const FullImage = ({ fullImage, showFullImage }) => {
    return (
        <div className={styles.fullImage}>
            <img src={fullImage} onClick={showFullImage} />
        </div>
    )
}

export { FullImage }