import CartItem from "./cartitem";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <div className="cart-section">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </div>
  );
}