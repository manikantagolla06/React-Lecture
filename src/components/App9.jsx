// components/App9.jsx
import React, { useState } from "react";

function App9() {
  const [count, setCount] = useState(10); 

  return (
    <div>
      <h1>App9</h1>
      <h2>Assignment</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App9;