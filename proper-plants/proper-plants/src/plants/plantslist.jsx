import Plant from "./plants";

export default function PlantsList({ plants, addToCart }) {
  return (
    <div className="plants-section">
      <h2>Plants</h2>
      <div className="plants-grid">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}