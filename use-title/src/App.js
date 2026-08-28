import logo from './logo.svg';
import './App.css';
import useTitle from "./AppFunctions.ts";

function App() {
  const [title, setTitle] = useTitle("Old Title");

  const handleClick = () => setTitle("New Title");

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>{title}</h1>
          <button onClick={handleClick}>Change Title</button>
        </div>
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
