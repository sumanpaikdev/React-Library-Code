import React from "react";

export default function Image({pictureImage}) {
    return(
        <div className="image-container">
            <img src={pictureImage.pictureURL} alt="Items Image" />
        </div>
    )
}