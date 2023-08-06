import React, { useState } from "react";
import { Modal } from "./components/Modal/Modal";
const App = () => {
  const [open, setOpen] = useState(false);
  return (
   <div>
    <button onClick={() => setOpen(true)}> Click to Open Modal</button>
{open ? <Modal text="Hello there!" closeModal={() => setOpen(false)} /> : null}
   </div>
 );
};

export default App;
