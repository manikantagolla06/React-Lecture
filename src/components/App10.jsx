import React, { useState } from "react";
export default function App10() {
  const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 45 },
  ];
  const [cart, setCart] = useState({}); 

  const handleAdd = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };
  const increment = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: prevCart[id] + 1,
    }));
  };
  const decrement = (id) => {
    setCart((prevCart) => {
      const updated = { ...prevCart };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  return (
    <div>
      <h1>App10</h1>
      <h2>Assignment with Cart as Object</h2>

      <h3>Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}{" "}
            <button onClick={() => handleAdd(p.id)}>Add</button>
          </li>
        ))}
      </ul>

      <hr />
      <h3>My Cart</h3>
      <ol>
        {Object.keys(cart).map((id) => {
          const product = products.find((p) => p.id === parseInt(id));
          return (
            <li key={id}>
              {product.name} - ${product.price}{" "}
              <button onClick={() => decrement(product.id)}>-</button>{" "}
              {cart[id]}{" "}
              <button onClick={() => increment(product.id)}>+</button> - $
              {product.price * cart[id]}
            </li>
          );
        })}
      </ol>
    </div>
  );
}