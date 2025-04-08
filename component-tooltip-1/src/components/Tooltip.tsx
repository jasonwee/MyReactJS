import React from "react";
import PropTypes from "prop-types";
import { ITooltip } from "../configuration";
import "./Tooltip.css";

const Tooltip = ({ content, disabled, children }: ITooltip) => {
  return (
    <div className="tooltipContainer">
      <div className={`tooltip ${disabled ? " disabled" : ""}`} >
        {content}
      </div>
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  tooltipRef: PropTypes.object,
  disabled: PropTypes.bool.isRequired
};

export default Tooltip;

