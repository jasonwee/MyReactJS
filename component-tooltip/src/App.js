import React from "react";
import { Tooltip } from "./components/Tooltip/Tooltip";
const App = () => {
  return (
     <>
<h2>Tooltip</h2>
<p>Move the mouse over the text below:</p>

    <Tooltip text="Hello there!" />

     </>
 );
};

export default App;
