import { React, useState } from "react";

export default function App() {
  var [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
  }

  function decrease() {
    setNumber(number - 1);
  }

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
