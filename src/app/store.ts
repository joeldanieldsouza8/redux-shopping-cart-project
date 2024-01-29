import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // Our redcuers will be here
    cart: cartReducer,
  },
}); 

// export type RootState = typeof store.getState // This gives us the function that returns the state
export type RootState = ReturnType<typeof store.getState>; // This gives us the return value of the function that returns the state
export type AppDispatch = typeof store.dispatch;
