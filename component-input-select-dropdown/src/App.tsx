import React from 'react';
import DropdownMenu from "./component/Select";
//import './App.css';

function App() {

  const [isDropdownVisible, setDropdownVisible] = React.useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button>Dropdown Menu</button>
          {/* <DropdownMenu /> */}
          {isDropdownVisible && <DropdownMenu />}
        </div>
      </header>
    </div>
  );
}

export default App;
