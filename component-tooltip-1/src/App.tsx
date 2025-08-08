import {useState} from "react";
import Tooltip from "./components/Tooltip";
import "./App.css";

const App = () => {

  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => setShowTooltip((prev) => !prev);

  return (
    <div className="container">
      <Tooltip disabled={true} content={"Unexpand the sidebar"} visible={showTooltip}>
        <div className="label" onClick={handleClick}>
          Hover on me (Up tootip)
        </div>
      </Tooltip>
    </div>
  );
};

export default App;
