import React, { useState } from "react";

export default function App10() {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 45 },
  ]);

  const [cart, setCart] = useState({});

  const addToCart = (id) => {
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
      const updatedQty = prevCart[id] - 1;
      if (updatedQty <= 0) {
        const { [id]: _, ...rest } = prevCart;
        return rest;
      }
      return { ...prevCart, [id]: updatedQty };
    });
  };

  return (
    <div>
      <h1>App10 - Shopping Cart</h1>

      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}{" "}
            <button onClick={() => addToCart(p.id)}>Add</button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>My Cart</h2>
      <ul>
        {Object.keys(cart).map((id) => {
          const product = products.find((p) => p.id === parseInt(id));
          const qty = cart[id];
          return (
            <li key={id}>
              {product.name} - ${product.price} &nbsp;
              <button onClick={() => decrement(product.id)}>-</button>
              &nbsp; {qty} &nbsp;
              <button onClick={() => increment(product.id)}>+</button>
              &nbsp; = ${product.price * qty}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
