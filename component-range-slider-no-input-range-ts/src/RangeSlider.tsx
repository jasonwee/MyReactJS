import React, { useState, MouseEvent } from 'react';
import './RangeSlider.css';

const RangeSlider: React.FC = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [value, setValue] = useState<number>(1); // Set initial value to 1 (minimum value)
  const minValue = 1;
  const maxValue = 3;

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  /*
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const slider = document.querySelector('.slider') as HTMLElement;
    const rect = slider.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));

    const range = maxValue - minValue;
    const stepSize = rect.width / range;
    const newValue = Math.round(x / stepSize) + minValue;

    setValue(newValue);
  };
  */

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const slider = document.querySelector('.slider') as HTMLElement;
    const rect = slider.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));

    const range = maxValue - minValue;
    const stepSize = rect.width / range;

    // Calculate the new value without exceeding the bounds
    let newValue = Math.round(x / stepSize) + minValue;
    if (newValue < minValue) {
      newValue = minValue;
    } else if (newValue > maxValue) {
      newValue = maxValue;
    }

    setValue(newValue);
};


  return (
    <div className="slider" onMouseMove={handleMouseMove}>
      <div className="slider-track" style={{ width: `${((value - minValue) / (maxValue - minValue)) * 100}%` }}></div>
      <div
        className="slider-thumb"
        style={{ left: `calc(${((value - minValue) / (maxValue - minValue)) * 100}% - 10px)` }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></div>
      <span id="slider-value">{value}</span>
    </div>
  );
};

export default RangeSlider;

