import React, {ChangeEvent, } from 'react';
import logo from './logo.svg';
import './App.scss';
import DoubleRangeSlider from './DoubleRangeSlider';
import DoubleRangeSlider1 from './DoubleRangeSlider1';

function App() {

  const toRenderDoubleRangeSlider : boolean = false;
  const toRenderDoubleRangeSlider1 : boolean = true;

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

  const renderDoubleRangeSlider = () => {
    return (
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
    )
  }


  const setMin = (e: ChangeEvent<HTMLInputElement>) => {
    const { min, max, currentMax, minValueBetween } = this.state;
    const inputMin = e.target.value;
    
    this.setState({
        inputMin
    });
    
    if((inputMin >= min) && (inputMin <= (currentMax-minValueBetween))){
      this.setState({
        currentMin: parseInt(inputMin)
      }); 

      this.minValue.style.width = (inputMin*100)/max + "%";
    }
  }

  const setMax = (e: ChangeEvent<HTMLInputElement>) => {
    const { min, max, currentMin, currentMax, minValueBetween } = this.state;

    const inputMax = e.target.value;
    
    this.setState({
        inputMax
    });

    if((inputMax >= currentMin + minValueBetween) && (inputMax <= max)){
      
      this.setState({
        currentMax: parseInt(inputMax)
      });
      this.maxValue.style.width = (inputMax*100)/max + "%";
    }
      
  }

  const renderDoubleRangeSlider1 = () => {
    return (
      <DoubleRangeSlider1/>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {toRenderDoubleRangeSlider && renderDoubleRangeSlider()}
        {toRenderDoubleRangeSlider1 && renderDoubleRangeSlider1()}
      </header>
    </div>
  );
}

export default App;
