import React from "react";
import "./modal.css";
export const Modal = ({ text, closeModal }) => {
  return (
    <div className="modal-container">
     <div className="modal-body">
      <h1>{text}</h1>
      <button onClick={closeModal}>Close X</button>
     </div>
    </div>
  );
};
