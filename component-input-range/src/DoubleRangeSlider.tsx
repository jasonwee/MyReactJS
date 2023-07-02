import React, {
  useRef,
  useCallback,
  useEffect,
  ChangeEvent,
} from "react";

// @ts-ignore
import classes from "./DoubleRangeSlider.module.scss";

interface IProps {
    currentMin: number;
    currentMax: number;
    min: number;
    max: number;
    setCurrentMinHandler: (min: number) => void;
    setCurrentMaxHandler: (min: number) => void;
    defaultMin: number;
    defaultMax: number;
  }

/* https://codesandbox.io/s/multi-range-slider-react-ts-b9l0g?file=/src/multiRangeSlider/MultiRangeSlider.tsx */
const DoubleRangeSlider = (props: IProps) => {
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  const range_right = useRef<HTMLDivElement>(null);
  const currentMinRef = useRef<HTMLDivElement>(null);
  const currentMaxRef = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback((value: number) =>
      Math.round(((value - props.min) / (props.max - props.min)) * 100) 
  , [props.min, props.max]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(props.currentMin);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceed with '+' to convert the value from type string to type number
      const newWidth = maxPercent - minPercent;

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${newWidth}%`;
      }

      if (minPercent >= 0 && minPercent < 10) {
        currentMinRef.current.style.left = `${minPercent+3.5}%`;
      } else if (minPercent >= 10 && minPercent < 20) {
        currentMinRef.current.style.left = `${minPercent+3}%`;
      } else if (minPercent >= 20 && minPercent < 30) {
        currentMinRef.current.style.left = `${minPercent+2}%`;
      } else if (minPercent >= 30 && minPercent < 40) {
        currentMinRef.current.style.left = `${minPercent+1.5}%`;
      } else if (minPercent >= 40 && minPercent < 50) {
        currentMinRef.current.style.left = `${minPercent}%`;
      } else if (minPercent >= 50 && minPercent < 60) {
        currentMinRef.current.style.left = `${minPercent-1.5}%`;
      } else if (minPercent >= 60 && minPercent < 70) {
        currentMinRef.current.style.left = `${minPercent-2}%`;
      } else if (minPercent >= 70 && minPercent < 80) {
        currentMinRef.current.style.left = `${minPercent-2.5}%`;
      } else if (minPercent >= 80 && minPercent < 90) {
        currentMinRef.current.style.left = `${minPercent-3.5}%`;
      } else if (minPercent >= 90 && minPercent <= 100) {
        currentMinRef.current.style.left = `${minPercent-4}%`;
      }
    }
  }, [props.currentMin, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(props.currentMax);
      const newWidth = maxPercent - minPercent;

      if (range.current) {
        range.current.style.width = `${newWidth}%`;
        range_right.current.style.left = `${maxPercent}%`;
        range_right.current.style.width = `${100-maxPercent}%`;
      }

      console.log(maxPercent);
      if (maxPercent >= 0 && maxPercent < 10) {
        currentMaxRef.current!.style.right = `${100-maxPercent-8}%`;
      } else if (maxPercent >= 10 && maxPercent < 20) {
        currentMaxRef.current!.style.right = `${100-maxPercent-5.8}%`;
      } else if (maxPercent >= 20 && maxPercent < 30) {
        currentMaxRef.current!.style.right = `${100-maxPercent-5.7}%`;
      } else if (maxPercent >= 30 && maxPercent < 40) {
        currentMaxRef.current!.style.right = `${100-maxPercent-4.9}%`;
      } else if (maxPercent >= 40 && maxPercent < 50) {
        currentMaxRef.current!.style.right = `${100-maxPercent-4.3}%`;
      } else if (maxPercent >= 50 && maxPercent < 60) {
        currentMaxRef.current!.style.right = `${100-maxPercent-2.6}%`;
      } else if (maxPercent >= 60 && maxPercent < 70) {
        currentMaxRef.current!.style.right = `${100-maxPercent-2}%`;
      } else if (maxPercent >= 70 && maxPercent < 80) {
        currentMaxRef.current!.style.right = `${100-maxPercent-1.5}%`;
      } else if (maxPercent >= 80 && maxPercent < 90) {
        currentMaxRef.current!.style.right = `${100-maxPercent-1}%`;
      } else if (maxPercent >= 90 && maxPercent <= 100) {
        currentMaxRef.current!.style.right = `${100-maxPercent}%`;
      }
    }

  }, [props.currentMax, getPercent]);

  const setMinVal = (val: number) => {
    props.setCurrentMinHandler(val);
  }

  const setMaxVal  = (val: number) => {
    props.setCurrentMaxHandler(val);
  }

  return (
    <>
    <div className={classes.container}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.currentMin}
        ref={minValRef}
        title={"low"}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, props.currentMax - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={`${classes.left_thumb} ${classes.thumb} ${
          props.currentMin > props.max - 100
            ? classes.thumb__zindex_5
            : classes.thumb__zindex_3
        }`}
      />
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.currentMax}
        ref={maxValRef}
        title={"high"}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, props.currentMin + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={`${classes.thumb_right} ${classes.thumb} ${classes.thumb__zindex_4}`}
      />

      <div className={classes.slider}>
        <div className={classes.slider__track}></div>
        <div ref={range} className={classes.slider__range}></div>
        <div ref={range_right} className={classes.slider__right}></div>
        <div className={classes.slider__left_most}>{props.min}</div>
        <div className={classes.slider__right_most}>{props.max}</div>
        <div ref={currentMinRef} className={classes.slider__left_value}><div className={classes.labelMin}>{props.currentMin}</div>
        <svg viewBox="0 0 15 18" className={classes.rangeSvgMin}>
          <path d="M14,7a7,7,0,0,1-2,4.87L7.72,16.35a1,1,0,0,1-1.44,0L2,11.87A6.93,6.93,0,0,1,0,7,7,7,0,0,1,14,7Z" />
        </svg>
        </div>
        <div ref={currentMaxRef} className={classes.slider__right_value}><div className={classes.labelMax}>{props.currentMax}</div>
        <svg viewBox="0 0 15 18" className={classes.rangeSvgMax}>
          <path d="M14,7a7,7,0,0,1-2,4.87L7.72,16.35a1,1,0,0,1-1.44,0L2,11.87A6.93,6.93,0,0,1,0,7,7,7,0,0,1,14,7Z" />
        </svg>
        </div>
      </div>
    </div>
    </>
  );

};
export default DoubleRangeSlider;
