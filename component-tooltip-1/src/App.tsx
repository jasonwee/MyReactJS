import Tooltip from "./components/Tooltip";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Tooltip disabled={true} content={"Unexpand the sidebar"}>
        <div className="label">Hover on me (Up tootip)</div>
      </Tooltip>
    </div>
  );
};

export default App;

