export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <div className="cart-item">
      <span className="cart-item-image">{item.image}</span>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Quantity: {item.qty}</p>
      </div>
      <div className="cart-item-buttons">
        <button onClick={() => removeFromCart(item)}>-</button>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </div>
  );
}