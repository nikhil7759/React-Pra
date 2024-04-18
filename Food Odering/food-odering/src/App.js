import "./App.css";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Food from "./components/Meals/Food";

import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const cartModalOpenHandler = () => {
    setCartOpen(true);
  };
  const cartModalCloseHandler = () => {
    setCartOpen(false);
  };
  return (
    <CartProvider>
      <Header onOpen={cartModalOpenHandler} />
      {cartOpen && <Cart onClose={cartModalCloseHandler} />}
      <Food />
    </CartProvider>
  );
}

export default App;
