import logo from './logo.svg';
import useCopyToClipboard from './AppFunctions.ts';
import './App.css';

function App() {
  const [value, copy] = useCopyToClipboard();
  return (
    <div className="App">
        <header className="App-header">
         <h1>Click to copy:</h1>
        <div style={{ display: 'flex' }}>
          <button onClick={() => copy('A')}>A</button>
          <button onClick={() => copy('B')}>B</button>
          <button onClick={() => copy('C')}>C</button>
        </div>
        <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>

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
