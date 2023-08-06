import React from "react";
import "./tooltip.css";
export const Tooltip = ({ text }) => {
   return (
      <div className="tooltip">
         Hover over me 1
         <span className="tooltiptext">{text}</span>
      </div>
   );
};
