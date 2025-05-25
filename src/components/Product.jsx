import React from "react";

export default function Product({ product, onAdd }) {
  return (
    <div className="App-Product-Box">
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
}