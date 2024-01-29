import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// Define a type for the slice state
interface CartState {
  items: CartItem[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add methods here...
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

export const selectCart = (state: RootState) => state.cart.items; // Export the selector
export const { addToCart, removeFromCart } = cartSlice.actions; // Export actions to be used in components later
export default cartSlice.reducer; // Export the reducer to be used in store.ts
