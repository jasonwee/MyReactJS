import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
   switch (action.type) {
      case "counter/incremented":
         return { value: state.value + 1 };
      case "counter/decremented":
         return { value: state.value - 1 };
      default:
         return state;
   }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);
//store.subscribe(() => console.log(store.getState()));

function App() {
   // The only way to mutate the internal state is to dispatch an action.
   // The actions can be serialized, logged or stored and later replayed.
   store.dispatch({ type: "counter/incremented" });
   console.log(store.getState());
   // {value: 1}
   store.dispatch({ type: "counter/incremented" });
   console.log(store.getState());
   // {value: 2}
   store.dispatch({ type: "counter/decremented" });
   console.log(store.getState());
   // {value: 1}

   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
