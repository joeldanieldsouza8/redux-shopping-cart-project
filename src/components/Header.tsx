import { useState } from "react";
import { useAppSelector } from "../app/hooks.ts";

import Cart from "./Cart.tsx";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState<boolean>(false);

  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
