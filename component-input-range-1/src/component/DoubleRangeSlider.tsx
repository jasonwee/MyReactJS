import React, {useEffect, useRef, useState, ChangeEvent, MouseEvent, TouchEvent} from "react";

import './DoubleRangeSlider.scss';
import { MouseEventHandler } from "react";
import { EventHandler } from "react";

interface IState {
    sliderWidth: number;
    offsetSliderWidth: number;
    min: number;
    max: number;
    minValueBetween: number;
    currentMin: number;
    inputMin: number;
    currentMax: number;
    inputMax: number;

    minValue: any;
}


export default function DoubleRangeSlider() {

    const initialState: IState = {
       sliderWidth: 0,
       offsetSliderWidth: 0,
       min: 0,
       max: 200,
       minValueBetween: 10,
   
       currentMin: 55,
       inputMin: 55,

       currentMax: 100,
       inputMax: 100,

       minValue: {}
    };

    const [state, setState] = useState(initialState);
    const sliderRef = useRef<HTMLDivElement>(null);
    const minValueRef = useRef<HTMLDivElement>(null);
    const maxValueRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
       // const { currentMin, currentMax, max } = this.state;

       // this.minValue.style.width = (currentMin*100)/max + "%";
       // this.maxValue.style.width = (currentMax*100)/max + "%";
       /*
       this.setState({
          sliderWidth: this.slider.offsetWidth,
          offsetSliderWidth: this.slider.offsetLeft,
       })
       */

       minValueRef.current!.style.width = (state.currentMin * 100)/state.max + "%";
       maxValueRef.current!.style.width = (state.currentMax * 100)/state.max + "%";
       
       setState((prevState) => {
          return {
            ...prevState,
            sliderWidth: sliderRef.current!.offsetWidth,
            offsetSliderWidth: sliderRef.current!.offsetLeft
          }
       })

    // eslint-disable-next-line
    }, []);

    const setMin = (e: ChangeEvent<HTMLInputElement>) => {
       /*
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
      */

      const inputMin = parseInt(e.target.value);

      setState(prevState => ({
         ...prevState,
         inputMin: inputMin
      }));
 
      if ((inputMin >= state.min) && (inputMin <= (state.currentMax - state.minValueBetween))) {
         setState(prevState => ({
            ...prevState,
            currentMin: inputMin
         }));

         minValueRef.current!.style.width = (inputMin * 100) / state.max + "%";
      }

    }

    const changeMinValue = (e:MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
       e.preventDefault();
       console.log("helo");

       /* TODO FIXME
       document.addEventListener('mousemove', onMouseMoveMin);
       document.addEventListener('mouseup', onMouseUpMin);

       document.addEventListener('touchmove', onMouseMoveMin);
       document.addEventListener('touchend', onMouseUpMin);
       */
       
    }

    const onMouseMoveMin = (e:MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {

       /*
        const { min, max, currentMax, minValueBetween, sliderWidth, offsetSliderWidht } = this.state;

    const dragedWidht = e.clientX - offsetSliderWidht;
    const dragedWidhtInPercent = (dragedWidht*100)/sliderWidth;
    const currentMin = parseInt((max * dragedWidhtInPercent)/100);

    console.log(e.pageX, e.clientX, offsetSliderWidht);

    console.log(currentMin , (currentMax-minValueBetween));

    console.log((max * dragedWidhtInPercent)/100);

    if( (currentMin >= min) && (currentMin <= (currentMax-minValueBetween))){
      this.minValue.style.width = dragedWidhtInPercent + "%";
      this.minValue.dataset.content = currentMin;

      this.setState({
        currentMin,
        inputMin: currentMin
      })
      }
      */

      const dragedWidth = e.clientX - state.offsetSliderWidth;
      const dragedWidthInPercent = (dragedWidth * 100) / state.sliderWidth;
      const currentMin = (state.max * dragedWidthInPercent) / 100;
      
      console.log(e.pageX, e.clientX, state.offsetSliderWidth);

      console.log(currentMin , (state.currentMax - state.minValueBetween));

      console.log((state.max * dragedWidthInPercent) / 100);
  
      if ( (currentMin >= state.min) && (currentMin <= (state.currentMax - state.minValueBetween)) ) {
         minValueRef.current!.style.width = dragedWidthInPercent + "%";
         minValueRef.current!.dataset.content = ''+currentMin;

         setState(prevState => ({...prevState, currentMin, inputMin: currentMin}))
      }     
    }

    const onMouseUpMin = () => {
    /*
    document.removeEventListener('mouseup', this.onMouseUpMin);
    document.removeEventListener('mousemove', this.onMouseMoveMin);

    document.removeEventListener('touchend', this.onMouseMoveMin);
    document.removeEventListener('touchmove', this.onMouseUpMin);
    */
    }




    
    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
       /*
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
    */
       const inputMax = parseInt(e.target.value);

       setState(prevState => ({
          ...prevState,
          inputMax
       }));
 
       if ((inputMax >= state.currentMin + state.minValueBetween) && (inputMax <= state.max)) {

          setState(prevState => ({
            ...prevState,
            currentMax: inputMax
          }));

          maxValueRef.current!.style.width = (inputMax * 100) / state.max + "%";
       }
    }

    
    const changeMaxValue = (e:MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
       e.preventDefault();

       /*
       document.addEventListener('mousemove', this.onMouseMoveMax);
       document.addEventListener('mouseup', this.onMouseUpMax);

       document.addEventListener('touchmove', this.onMouseMoveMax);
       document.addEventListener('touchend', this.onMouseUpMax);
       */
    }
    

    const onMouseMoveMax = (e: MouseEvent<HTMLInputElement>) => {
       /*
    const { max, currentMin, minValueBetween, sliderWidth, offsetSliderWidht} = this.state;
    const maxWalueThumb = this.maxValue;
    const dragedWidht = e.clientX - offsetSliderWidht;
    const dragedWidhtInPercent = (dragedWidht*100)/sliderWidth;
    const currentMax = Math.abs(parseInt((max * dragedWidhtInPercent)/100));

    if( (currentMax >= (currentMin + minValueBetween)) && (currentMax <= max)){

      maxWalueThumb.style.width = dragedWidhtInPercent + "%";
      maxWalueThumb.dataset.content = currentMax;
      this.setState({
        currentMax,
        inputMax: currentMax
      })
    }
    */
       //const maxWalueThumb = this.maxValue;
       console.log("hello");
       console.log(e.clientX);
       const dragedWidth = e.clientX - state.offsetSliderWidth;
       const dragedWidthInPercent = (dragedWidth * 100) / state.sliderWidth;
       const currentMax = Math.abs((state.max * dragedWidthInPercent)/100);

       if ( (currentMax >= (state.currentMin + state.minValueBetween)) && (currentMax <= state.max)) {

         maxValueRef.current!.style.width = dragedWidthInPercent + "%";
         maxValueRef.current!.dataset.content = ''+currentMax;

         setState(prevState => ({
            ...prevState,
           inputMax: currentMax
         }))
       }    
    }

    const onMouseUpMax = () => {
       /*
       document.removeEventListener('mouseup', this.onMouseUp);
       document.removeEventListener('mousemove', this.onMouseMoveMax);

       document.removeEventListener('touchend', this.onMouseUp);
       document.removeEventListener('touchmove', this.onMouseMoveMax);
       */
    }

    const maxForMin = () => {
      return state.currentMax - state.minValueBetween;
    }

    const minForMax = () => {
      return state.currentMin + state.minValueBetween;
    }

    return (

        <div className="card">
        <h2>Double range slider</h2>
        <div className="current-value">
          <label htmlFor="min-input">Min: </label>
          <input
            id="min-input"
            type="number"
            onChange={setMin}
            value={state.inputMin}
            min={state.min}
            max={maxForMin()}/>
          <br/>
          <label htmlFor="max-input">Max: </label>
          <input
            id="max-input"
            type="number"
            onChange={setMax}
            value={state.inputMax}
            min={minForMax()}
            max={state.max}/>
        </div>

        <div className="values">
          <div>{ state.min }</div>
          <div>{ state.max }</div>
        </div>

           { /*
        <div ref={ref => this.slider = ref} id="slider">

          <div ref={ref => this.minValue = ref} id="min" data-content={currentMin}>
            <div ref={ref => this.minValueDrag = ref} id="min-drag" onMouseDown ={this.changeMinValue} onTouchStart={this.changeMinValue}></div>
          </div>

          <div ref={ref => this.maxValue = ref} id="max" data-content={currentMax}>
            <div ref={ref => this.maxValueDrag = ref} id="max-drag" onMouseDown={this.changeMaxValue} onTouchStart={this.changeMaxValue}></div>
          </div>

          </div> */ }
          {/*

           */}
       <div ref={sliderRef} id="slider">
          <div ref={minValueRef} id="min" data-content={state.currentMin}>
          <div ref={minValueRef} id="min-drag" 
               onMouseDown={(e: MouseEvent<HTMLDivElement>) => changeMinValue(e)} 
               onTouchStart={(e: TouchEvent<HTMLDivElement>) => changeMinValue(e)}
               onTouchMove={(e: TouchEvent<HTMLDivElement>) => onMouseMoveMin(e)} >
               </div>
          </div>

          <div ref={maxValueRef} id="max" data-content={state.currentMax}>
             <div ref={maxValueRef} id="max-drag" 
                  onMouseDown={(e: MouseEvent<HTMLDivElement>) => changeMaxValue(e)} 
                  onTouchStart={(e: TouchEvent<HTMLDivElement>) => changeMaxValue(e)}>

                  </div>
          </div>
       </div>

      </div>


    )

}
