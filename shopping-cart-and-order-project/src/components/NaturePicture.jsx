import React, { useState, useContext } from "react";
import "./component.css";
import { NatureContext } from "../NatureContext";
import PropTypes from "prop-types";

function NaturePicture(props) {
  const [onHover, setOnHover] = useState(false);
  const { toggleIsFavourite, addcartitem, allcartitem, removecartitem } =
    useContext(NatureContext);
  const isFavourites = props.naturePic.isFavourite;

  function favouriteNatureItems() {
    if (isFavourites) {
      return (
        <img
          src={isFavourites ? props.conFav : props.fav}
          alt="Favourite"
          className="favourite-logo"
          onClick={() => toggleIsFavourite(props.naturePic.id)}
        />
      );
    } else if (onHover) {
      return (
        <img
          src={isFavourites ? props.conFav : props.fav}
          alt="Favourite"
          className="favourite-logo"
          onClick={() => toggleIsFavourite(props.naturePic.id)}
        />
      );
    }
  }
  function addtocarticon() {
    const alreadyinCart = allcartitem.some(
      (item) => item.id === props.naturePic.id
    );
    if (alreadyinCart) {
      return (
        <img
          src={props.addminus}
          alt="AddCart"
          className="add-to-cart"
          onClick={() => removecartitem(props.naturePic.id)}
        />
      );
    } else if (onHover) {
      return (
        <img
          src={props.addtocart}
          alt="AddCart"
          className="add-to-cart"
          onClick={() => addcartitem(props.naturePic)}
        />
      );
    }
  }

  return (
    <div
      className="nature-picture-container"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <img
        src={props.naturePic.pictureURL}
        alt="Nature-Picture"
        className="nature-picture"
      />
      {favouriteNatureItems()}
      {addtocarticon()}
    </div>
  );
}

NaturePicture.propTypes = {
  naturePic: PropTypes.shape({
    pictureURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isFavourite: PropTypes.bool,
  }),
};
export default NaturePicture;
