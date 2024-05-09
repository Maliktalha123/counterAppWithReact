import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="heading">Counter App</h1>
      <div className="App">
        <h1 style={{ fontSize: "70px",marginBottom:"20px",color:"white" }}>{count}</h1>
        <div className="buttonDiv">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increement
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decreement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
