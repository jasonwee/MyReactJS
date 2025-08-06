import React from "react";
import "./tooltip.css";

export const Tooltip = ({ text, direction = "right" }) => {
   return (
      <div className={`tooltip tooltip-${direction}`}>
         Hover over me 1
         <span className={`tooltiptext tooltiptext-${direction}`}>{text}</span>
      </div>
   );
};
