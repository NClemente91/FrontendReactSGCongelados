import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cart/cartSlice";
import { productSlice } from "./slices/products/productSlice";

export const store = configureStore({
  reducer: { products: productSlice.reducer, cart: cartSlice.reducer },
});
