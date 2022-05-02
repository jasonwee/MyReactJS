import { useState } from "react";

export default function ComponentWithUseState() {

  const [ count, setCount ] = useState(0);
  const [ message, setMessage ] = useState("you're not even close");

  const changeCount = (operation)  => {
     if (operation === "add") {
        if (count < 10) setCount(count+1)
        if (count > 4 && count <= 9) setMessage("You're getting closer");
     } else {
        if (count > 0) setCount(count-1)
     }
  }

  const renderBar = () => {
     const bars = [];

     for (let i = 0; i < count; i++) {
        bars.push(
           <div
           style={{
              backgroundColor: 'rgba(212,113,211, 0.3)',
	      height: '100%',
	      width: '10%',
           }}
           >
           </div>
        );
     }
     return bars;
  }

  return (
    <div>
      <h1>{message}</h1>
      <div
        style={{
          border: '0.1rem solid rgba(0,0,0, 0.3)',
	  height: '100px',
	  width: '80%',
          margin: '2rem auto',
	  display: 'flex',
        }}
      >
        {renderBar()}
      </div>
      <button onClick={ () => changeCount("minus")  }>substract bar</button>
      <button onClick={ () => changeCount("add")  }>add bar</button>
    </div>
  )

}
