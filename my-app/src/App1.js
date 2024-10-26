import "./styles.css";
import useToggle from "./useToggle";

export default function App() {
  const [show, toggle, close, open] = useToggle(false);
  return (
    <div className="App">
      <div style={{ display: "flex", gap: "2rem" }}>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={close}>
          Close
        </button>
        <button type="button" onClick={open}>
          Open
        </button>
      </div>
      {show && <div>This is the content to show or not</div>}
    </div>
  );
}

