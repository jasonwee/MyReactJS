import React, {useState} from "react";

import classes from  './TriStateButton.module.scss';

// https://codepen.io/oakdark/pen/XGbGoY
const TriStateButton = () => {

  const [text, setText] = useState("All");
  const [value, setValue] = useState(2);
  const [stateClasses, setStateClasses] = useState(["customToggle", "tglDef"]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const curValue = parseInt(event.target.value, 10);
    setValue(curValue)
    if (curValue === 1) {
       setText("Disabled");
    } else if (curValue === 2) {
       setText("Undetermined");
    } else if (curValue === 3) {
       setText("Enabled");
    }
  }

  return (
     <>
     <div className={classes.wrapper}>
        <input type="range" name="points" onChange={(e) => onChangeHandler(e)} min="1" step="1" className={`${classes.customToggle} ${value === 1 ? classes.tglOff : ( value === 2 ? classes.tglDef : classes.tglOn)}`} max="3" value={value}/>
     </div>
     <span>{text}</span>
     </>
  );
};

export default TriStateButton;

