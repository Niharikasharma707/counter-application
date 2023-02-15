import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const counterStyle = {
    fontSize: "72px",
    color: count < 5 ? "green" : count < 10 ? "blue" : "red",
  };


  return (
    <div>
      <h1 style={counterStyle}>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2 textAlign='center'>Done by - Niharika Sharma- 12005467</h2>
    </div>

  );
}

export default CounterApp;