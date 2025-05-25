export default function Product({ product, onAdd }) {
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="App-Product-Box">
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
}