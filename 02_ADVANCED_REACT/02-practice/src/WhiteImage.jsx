import React from "react";
import PropTypes from "prop-types";

export default function WhiteImage(props) {
  const imageStyling = {
    borderRadius: 30,
    width: props.width,
    height: props.height
  };
  return (
    <div className="white-container">
      <img src={props.imageSource} style={imageStyling} />
    </div>
  );
}

WhiteImage.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  borderRadius: PropTypes.string,
};

WhiteImage.defaultProps = {
  width: 100,
  height: 200
}
