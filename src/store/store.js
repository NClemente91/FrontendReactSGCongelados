import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cart/cartSlice";
import { productSlice } from "./slices/products/productSlice";
import { userSlice } from "./slices/users/userSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});
