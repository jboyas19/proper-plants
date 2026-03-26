export default function Plant({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <div className="plant-image">{plant.image}</div>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </div>
  );
}