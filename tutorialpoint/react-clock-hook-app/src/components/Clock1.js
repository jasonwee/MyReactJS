import React from 'react';


class Clock1 extends React.Component {

   constructor(props) { 
      super(props); 
      console.log("doing constructor");
      this.state = { 
         date: new Date() 
      } 
   }

   componentDidMount() {
      console.log("doing componentDidMount");
      this.setTimeRef = setInterval(() => this.setTime(), 1000); 
   }

   componentWillUnmount() { 
      console.log("doing componentWillUnmount");
      clearInterval(this.setTimeRef) 
   }
   setTime() {
      console.log("doing setTime");
      this.setState((state, props) => {
         console.log(state.date);
         return {
            date: new Date()
         }
      })
   }
   render() {
      return ( <div><p>The current time is {this.state.date.toString()}</p></div> );
   }
}

export default Clock1;
