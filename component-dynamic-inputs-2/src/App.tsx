import React, { useState, ChangeEvent, FormEvent } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

  const [formValues, setFormValues] = useState([{ name: "", email : ""}])

  let handleChange = (i: number, e: ChangeEvent<HTMLInputElement>) => {
    let newFormValues = [...formValues];
    if (e.target.name === 'name' || e.target.name === 'email') {
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
    }
  }
    
  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }])
  }

  let removeFormFields = (i: number) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  let handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  }

  return (
    <div className="App">

      <header className="App-header">
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label>Email</label>
              <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
      </header>

    </div>
  );
}

export default App;
