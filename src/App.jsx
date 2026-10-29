
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="counter-card">
        <h1>Counter App</h1>
        <p>Manage your value</p>

        <div className="count">{count}</div>

        <div className="buttons">
          <button
            className="minus"
            onClick={() => setCount(count - 1)}
          >
            −
          </button>

          <button
            className="reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            className="plus"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
