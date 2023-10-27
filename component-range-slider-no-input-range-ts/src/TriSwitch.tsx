import React, { useState } from 'react';
import './TriSwitch.css';

interface TriSwitchProps {
  options: string[];
}

const TriSwitch: React.FC<TriSwitchProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="tri-switch">
      {options.map((option, index) => (
        <div
          key={index}
          className={`tri-switch-option ${selectedOption === index ? 'selected' : ''}`}
          onClick={() => handleOptionClick(index)}
        >
          {option}
        </div>
      ))}
      <div className="thumb" style={{ left: `${(selectedOption / (options.length - 1)) * 100}%` }}>
        {options[selectedOption]}
      </div>
    </div>
  );
};

export default TriSwitch;

