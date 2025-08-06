import React from "react";
import { Tooltip } from "./components/Tooltip/Tooltip";
const App = () => {
  return (
     <div style={{margin: "auto", width: "80%"}}>
<h2>Tooltip</h2>
<p>Move the mouse over the text below:</p>

    <Tooltip text="Hello there!" />

     </div>
 );
};

export default App;
