import React, { useContext } from "react";
import { NatureContext } from "../NatureContext";
import NaturePicture from "../components/NaturePicture";
import "./pages.css";
import FavLogo from "../images/heart.png";
import ConFavLogo from "../images/favourite.png"
import AddCart from "../images/add.png";
import Minus from "../images/minus.png"

function Nature() {
  const { allNatureImages } = useContext(NatureContext);

  const showNatureImages = allNatureImages.map((natureData) => {
    return (
      <NaturePicture
        key={natureData.id}
        naturePic={natureData}
        fav={FavLogo}
        addtocart={AddCart}
        conFav={ConFavLogo}
        addminus={Minus}
      />
    );
  });
  return (
    <div className="nature-container">
      {/* <h1>Nature Container</h1> */}
      {showNatureImages}
    </div>
  );
}
export default Nature;
