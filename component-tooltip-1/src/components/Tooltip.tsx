import React from "react";
import PropTypes from "prop-types";
import { ITooltip } from "../configuration";
import "./Tooltip.css";

const Tooltip = ({ content, disabled, children, visible }: ITooltip) => {
  return (
    <div className="tooltipContainer">
      <div className={`tooltip ${disabled ? " disabled" : ""} ${visible ? " visible" : " hidden"} `} >
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

