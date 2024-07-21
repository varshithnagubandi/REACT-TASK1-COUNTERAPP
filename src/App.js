import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function Increase() {
    setCounter(counter + 1);
  }
  function Reset() {
    setCounter(0);
  }
  function Decrease() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>COUNTER : {counter}</h1>
      <div>
        <button onClick={Increase}>INCREASE</button>
        <button onClick={Reset}>RESET</button>
        <button onClick={Decrease}>DECREASE</button>
      </div>
    </div>
  );
}

export default App;
