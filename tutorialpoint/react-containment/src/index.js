import React from 'react';
import ReactDOM from 'react-dom';
import RichTextMessage from './components/RichTextMessage';

ReactDOM.render(
   <React.StrictMode>
      <RichTextMessage>
         <h1>Containment is really a excellent feature.</h1>
      </RichTextMessage>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
