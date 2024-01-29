import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  removeFromCart,
  addToCart,
  selectCart,
  CartItem,
} from "../features/cart/cartSlice";

export default function CartItems() {
  const cartItems = useAppSelector(selectCart); // This gets the latest cart items from the store state (state snapshot of the cart slice)
  const dispatch = useAppDispatch();

  function handleRemoveFromCart(itemID: number) {
    dispatch(removeFromCart(itemID));
  }

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  {cartItems.length === 0 && <p>No items in cart</p>}

  return (
    <div id="cart">
      {(cartItems.length > 0) && <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleAddToCart({ ...item, quantity: 1 })}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>}

      <p id="cart-total-price">
        Cart Total: <strong>{totalPrice}</strong>
      </p>
    </div>
  );
}
