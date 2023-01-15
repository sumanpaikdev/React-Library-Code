import React, {useContext} from "react";
import {pictureContext} from "../pictureContext";
import Image from "../components/Image";

function Photos() {
  const {allPhotos} = useContext(pictureContext)
  const showPhotoItems = allPhotos.map(picData => {
    return(
      <Image key={picData.id} pictureImage={picData}/>
    )
  })
  return (
    <div className="photos-container">
      <h1>photos container</h1>
      {showPhotoItems}
    </div>
  );
}
export default Photos;