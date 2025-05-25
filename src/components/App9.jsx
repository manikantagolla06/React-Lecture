import React from "react";
import { useState } from "react";
export default function App9() {
  const [count, setCount] = useState(10);
  const increment = () => {
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    //setCount(count + 1);
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h1>App8</h1>
      <h2>useState Revision</h2>
      <h3>{count}</h3>
      <p>
        <button onClick={decrement}>-</button>
         <h3>{count}</h3>
        <button onClick={decrement}>+</button>
        
      </p>
    </div>
  );
}