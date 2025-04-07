import React, { ChangeEvent, useEffect } from 'react'

import { IRangeSliderProps } from './IRangeSliderProps'
import {
  calcStep,
  calcVertical
} from "./RangeSliderFunctions"
 
import './range-slider.css'

/* https://stackoverflow.com/questions/68969684/in-react-how-to-create-a-bubble-head-on-top-of-the-thumb-of-a-range-slider */
export const RangeSlider = ({
  min,
  max,
  rangeCurrent,
  setRangeCurrent,
  step,
  setStep,
  showSliderValueLabel,
  isVertical,
  upSideDown,
}: IRangeSliderProps) => {

  const ref = React.useRef(null);

  const getRange = (ev: ChangeEvent<HTMLInputElement>) => {
    setRangeCurrent(+ev.target.value);
  };

  useEffect(() => {
    if (ref.current) {
      const steps = isVertical ?
        calcStep({
          offsetWidth: ref.current.offsetHeight,
          min: ref.current.min,
          max: ref.current.max
        }) :
        calcStep({
          offsetWidth: ref.current.offsetWidth,
          min: ref.current.min,
          max: ref.current.max
      });
      setStep(steps);
    }
  }, []);

  return (
    <div className="range-slider">
      <div className={`range-slider__track ${isVertical ? upSideDown ? "range-slider__track--column-reverse" : "range-slider__track--column" : "range-slider__track--row"}`}
      >
        <label className="range-slider__label">{min}</label>
        <input type="range"
               min={min}
               max={max}
               value={rangeCurrent}
               onChange={getRange}
               ref={ref}
               className={`range-slider__input ${isVertical ? "range-slider__input--vertical range-slider__input-writing-mode--vertical" : "range-slider__input-writing-mode--horizontal"}`}
        />
        <label className="range-slider__label">{max}</label>
      </div>
      {showSliderValueLabel &&
        <label htmlFor="range"
               style={{
                  transform: isVertical
                  ? `translateY(${calcVertical({rangeCurrent, step, min, max})}px) translateX(13px) rotate(90deg)`
                  : `translateX(${(rangeCurrent * step) - (step * min)}px) translateY(-3px)`,
                }}
              className="range-slider__value-label">
          <span className={`range-slider__value ${isVertical ? "range-slider__value--vertical range-slider__value--rotate-neg90deg" : ""}`}>
            {isVertical && upSideDown ? (max-rangeCurrent) : rangeCurrent}
          </span>
          <svg viewBox="0 0 15 18" className="range-slider__svg">
            <path d="M14,7a7,7,0,0,1-2,4.87L7.72,16.35a1,1,0,0,1-1.44,0L2,11.87A6.93,6.93,0,0,1,0,7,7,7,0,0,1,14,7Z" />
          </svg>
        </label>
      }
    </div>
  );

};
