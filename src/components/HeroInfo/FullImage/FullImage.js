import React from 'react';
import './FullImage.css'

const FullImage=({fullImage, removeImage})=>{
    return(
        <div className="fullImage">
        <img src={fullImage} />
        <button className="button" onClick={removeImage}>x</button>
    </div>
    )
}

export {FullImage}