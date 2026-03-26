import { useState } from "react";
import data from "./data";
import PlantsList from "./plants/plantslist";
import Cart from "./cart/cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    const foundItem = cart.find((item) => item.id === newItem.id);

    if (!foundItem) {
      const addedItem = { ...newItem, qty: 1 };
      setCart([...cart, addedItem]);
    } else {
      const cartCopy = cart.map((plant) =>
        plant.id === newItem.id
          ? { ...plant, qty: plant.qty + 1 }
          : plant
      );
      setCart(cartCopy);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const foundItem = cart.find((item) => item.id === itemToRemove.id);

    if (foundItem.qty === 1) {
      const filteredCart = cart.filter((item) => item.id !== itemToRemove.id);
      setCart(filteredCart);
    } else {
      const cartCopy = cart.map((item) =>
        item.id === itemToRemove.id
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      setCart(cartCopy);
    }
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <div className="app">
        <PlantsList plants={data} addToCart={addToCart} />
        <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </>
  );
}