import React, {useState} from 'react';
//import logo from './logo.svg';
//import './App.css';
import MultiSelectDropdown, {Row} from './component/MultiSelectDropdown';


const rows: Row[] = [
    { id: 1, title: 'option 1' },
    { id: 2, title: 'option 2' },
    { id: 3, title: 'option 3' },
    { id: 4, title: 'option 4' },
    { id: 5, title: 'option 5' }
]

function App() {

  const initial : number[] = [];

  const [selected, setSelected] = useState(initial)

  const toggleOption = (id: number) => {
        setSelected(prevSelected => {
            // if it's in, remove
            const newArray = [...prevSelected]
            if (newArray.includes(id)) {
                return newArray.filter(item => item !== id)
                // else, add
            } else {
                newArray.push(id)
                return newArray;
            }
        })
  }


  return (
         <MultiSelectDropdown rows={rows} selected={selected} toggleOption={toggleOption} />
  );
}

export default App;
