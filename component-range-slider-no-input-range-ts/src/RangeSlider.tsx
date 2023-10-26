import React, { useState, MouseEvent } from 'react';
import './RangeSlider.css';

const RangeSlider: React.FC = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [value, setValue] = useState<number>(50);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const slider = document.querySelector('.slider') as HTMLElement;
    const rect = slider.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));

    const newValue = Math.round((x / rect.width) * 100);
    setValue(newValue);
  };

  return (
    <div className="slider" onMouseMove={handleMouseMove}>
      <div className="slider-track" style={{ width: `${value}%` }}></div>
      <div
        className="slider-thumb"
        style={{ left: `calc(${value}% - 10px)` }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></div>
      <span id="slider-value">{value}</span>
    </div>
  );
};

export default RangeSlider;
