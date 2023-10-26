import React, { useState } from 'react';
import './TriSwitch.css';

const TriSwitch = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="tri-switch">
      {[1, 2, 3].map((option) => (
        <div
          key={option}
          className={`tri-switch-option ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option)}
        >
        </div>
      ))}
    </div>
  );
};

export default TriSwitch;
