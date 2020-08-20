import React from "react";
import PropTypes from "prop-types";

const Display = ({ displayValue }) => {
  return (
    <div className="display-container">
      <p className="display-value">{displayValue}</p>
    </div>
  );
};

Display.propTypes = { displayValue: PropTypes.number.isRequired };

export default Display;
