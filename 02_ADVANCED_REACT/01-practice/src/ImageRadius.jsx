import React from "react";
import PropTypes from "prop-types";

export default function ImageRadius(props) {
  return (
    <img
      src={props.src}
      style={{
        borderRadius: props.borderRadius,
        width: props.width,
        height: props.height,
      }}
      className="imageFish"
    />
  );
}

ImageRadius.propTypes = {
  src: PropTypes.string.isRequired,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,  
};

ImageRadius.defaultProps = {
  borderRadius: "50%",
  width: 200,
  height: "300px"
};
