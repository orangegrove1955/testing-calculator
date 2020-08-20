import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

const Display = ({ displayValue }) => {
  return (
    <div className="display-container">
      <p className="display-value">{displayValue}</p>
    </div>
  );
};

Display.propTypes = { displayValue: PropTypes.number.isRequired };

export default Display;
