import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [redoList, setRedoList] = useState([]);
  const [history, setHistory] = useState([]);
  const [undoCount, setUndoCount] = useState(0);

  return (
    <div className="App">
      <h1>Undoable Counter</h1>
      <div className="action-btn">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>

      <div className="user-actions">
        {[-100, -10, -1].map((btn) => {
          return <button onClick={() => handleClick(btn)}>{btn}</button>;
        })}
        <div style={{ fontSize: 40 }}>{value}</div>
        {["+1", "+10", "+100"].map((btn) => {
          return <button onClick={() => handleClick(btn)}>{btn}</button>;
        })}
      </div>

      <div className="history">
        {history.map((item) => {
          return (
            <div className="row">
              <div>{item.action}</div>
              <div>{`[ ${item.prev} -> ${item.curr} ]`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
