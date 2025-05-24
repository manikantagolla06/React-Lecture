import React from "react";
export default function App4() {
  const handleSubmit = () => {
    alert("Mern Stack");
  };
  const handleSubmit1 = (name) => {
    alert(name);
  };
  return (
    <div>
      <h1>App4</h1>
      <h2>Event Handling</h2>
      <p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => handleSubmit1("Arjun Sarkaar")}>Submit1</button>
      </p>
    </div>
  );
}