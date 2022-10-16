import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{ items: {}, quantities: 0 }],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload.item;
      const quantity = action.payload.quantity;

      if (state.cart[0].quantities === 0) {
        state.cart = [{ items: item, quantities: quantity }];
        state.totalQuantity = quantity;
        state.totalPrice = item.unitPrice * quantity;
      } else {
        const cartProductsId = state.cart.findIndex(
          (i) => item.productId === i.items.productId
        );
        if (cartProductsId === -1) {
          state.cart = [...state.cart, { items: item, quantities: quantity }];
          state.totalQuantity += quantity;
          state.totalPrice += item.unitPrice * quantity;
        } else {
          const cartModify = [...state.cart];
          cartModify[cartProductsId].quantities += quantity;
          state.cart = cartModify;
          state.totalQuantity += quantity;
          state.totalPrice += item.unitPrice * quantity;
        }
      }
    },

    removeItem: (state, action) => {
      const cartStateElement = state.cart.find(
        (e) => e.items.productId === action.payload
      );
      const cartStateFilter = state.cart.filter(
        (x) => x.items.productId !== action.payload
      );
      if (cartStateFilter.length !== 0) {
        state.cart = cartStateFilter;
        state.totalQuantity -= cartStateElement.quantities;
        state.totalPrice -=
          cartStateElement.items.unitPrice * cartStateElement.quantities;
      } else {
        clearCart();
      }
    },

    clearCart: (state) => {
      state.cart = [{ items: {}, quantities: 0 }];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
