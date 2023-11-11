import React, {useState, ChangeEvent} from 'react';
import './App.css';

interface IState {
  type: string;
  id?: number;
  value: string;
}

function App() {

  const initialState: IState = 
    {
      type: "text",
      id: 1,
      value: ""
    };

  const [arr, setArr] = useState([initialState]);

  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const index = parseInt(e.target.id, 10);
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={addInput}>+</button>
      {arr.map((item, i) => {
        return (
          <>
          <input
            onChange={handleChange}
            value={item.value}
            id={i+""}
            type={item.type}
            size={40}
            key={i}
          />
          </>
        );
      })}
      </header>
    </div>
  );
}

export default App;
