import "./App.css";

function App() {
  // [0, 100, 200, 300, 50, 1000]
  return (
    <div className="App">
      <h1>Debounce API call</h1>
      <input value={input} type="text" onChange={handleInputChange} />

      {list && list.length > 0 && (
        <div className="list">
          {list && list.map((item, index) => <div key={index}>{item}</div>)}
        </div>
      )}
    </div>
  );
}

export default App;
