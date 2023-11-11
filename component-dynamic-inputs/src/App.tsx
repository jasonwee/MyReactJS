import React, {useState, ChangeEvent} from 'react';
//import logo from './logo.svg';
import './App.css';

interface IState {
  firstName: string;
  lastName: string;
}

function App() {

  const initialState: IState = {
      firstName: "",
      lastName: "",
  };
  
  const [inputList, setInputList] = useState([initialState]);

  // handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const list  = [...inputList];
    if (name === 'firstName' || name === 'lastName') {
      list[index][name] = value;
      setInputList(list);
    }
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
  
  return (
    <div className="App">
      <header className="App-header">
      {inputList.map((x, i) => {
        return (
          <div className="box" key={i}>
            <input
              name="firstName"
              placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="lastName"
              placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button className="mr10" onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
      </header>
    </div>
  );
}

export default App;
