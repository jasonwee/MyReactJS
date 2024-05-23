import React, { useState, useRef } from 'react';

const DelayedApiCallComponent = () => {
  const [message, setMessage] = useState('');
  const timerRef = useRef(null);

  const handleClick = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setMessage('Waiting to call API...');

    // Set a new timer
    timerRef.current = setTimeout(() => {
      callApi();
    }, 5000);
  };

  const callApi = () => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        console.log('API Data:', data);
        setMessage('API called successfully!');
      })
      .catch(error => {
        console.error('API Error:', error);
        setMessage('API call failed.');
      });

    // Clear the timer reference
    timerRef.current = null;
  };

  return (
    <div>
      <h1>Delayed API Call Component</h1>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  );
};

export default DelayedApiCallComponent;


