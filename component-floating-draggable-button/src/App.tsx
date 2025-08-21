import React from 'react';
import logo from './logo.svg';
import FloatingDraggableButton from "./FloatingDraggableButton";
import './App.css';

function App() {
  return (
    <div className="App">
      <FloatingDraggableButton onClick={() => console.log("click me")} />
    </div>
  );
}

export default App;
