import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import RangeSlider from './RangeSlider';
//       <RangeSlider />
import TriSwitch from './TriSwitch';

function App() {
  const options = ['', '', ''];

  return (
    <div className="App">
       <header className="App-header">
          <TriSwitch options={options} />
       </header>
    </div>
  );
}

export default App;
