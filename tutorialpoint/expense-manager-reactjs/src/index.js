import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseEntryItem from './components/ExpenseEntryItem'
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import MessageWithEvent from './components/MessageWithEvent'

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

ReactDOM.render(
   <React.StrictMode>
      <ExpenseEntryItem />
      <div>
           <MessageWithEvent name="React" />
           <MessageWithEvent name="React developer" />
      </div>
   </React.StrictMode>,
   document.getElementById('root')
);
