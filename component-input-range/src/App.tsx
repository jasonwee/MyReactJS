import React from 'react';
import logo from './logo.svg';
import './App.scss';
import DoubleRangeSlider from './DoubleRangeSlider';

function App() {

  const [state, setState] = React.useState({
    lowLevelValue: 5,
    highLevelValue: 10,
    changed: false
  });


  const setCurrentMinHandler = (min: number) => {
    setState(prevState => {
        const newState = {...prevState}
        newState.lowLevelValue = min;
        newState.changed = true
        return newState;
    })
  }

  const setCurrentMaxHandler = (max: number) => {
    setState(prevState => {
      const newState = {...prevState}
      newState.highLevelValue = max;
      newState.changed = true
      return newState;
      })
  }


  return (
    <div className="App">
      <header className="App-header">
          <DoubleRangeSlider
              min={3}
              max={20}
              currentMax={state.highLevelValue}
              currentMin={state.lowLevelValue}
              setCurrentMinHandler={setCurrentMinHandler}
              setCurrentMaxHandler={setCurrentMaxHandler}
              defaultMin={5}
              defaultMax={10}
          />
      </header>
    </div>
  );
}

export default App;
