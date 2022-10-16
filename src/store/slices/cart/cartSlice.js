import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{ items: {}, quantities: 0 }],
  isItemInCart: -1,
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
      } else {
        //Ver que se setee el valor en el estado
        isInCart(item.productId);
        if (state.isItemInCart === -1) {
          state.cart = [...state.cart, { items: item, quantities: quantity }];
        } else {
          const cartModify = [...state.cart];
          cartModify[state.isItemInCart].quantities += quantity;
          state.cart = cartModify;
          state.isItemInCart = -1;
        }
      }
    },

    removeItem: (state, action) => {
      const cartStateFilter = state.cart.filter(
        (x) => x.items.productId !== action.payload.itemID
      );
      cartStateFilter.length !== 0
        ? (state.cart = cartStateFilter)
        : clearCart();
    },

    clearCart: (state) => {
      state.cart = [{ items: {}, quantities: 0 }];
    },

    isInCart: (state, action) => {
      const cartProductsId = state.cart.findIndex(
        (i) => action.payload.identify === i.items.productId
      );
      state.isItemInCart = cartProductsId;
    },

    getTotalQuantity: (state) => {
      let cartQuantity = 0;
      if (state.cart.length !== 0) {
        state.cart.map((c) => (cartQuantity += c.quantities));
      }
      state.totalPrice = cartQuantity;
    },

    getTotalPrice: (state) => {
      let cartPrice = 0;
      if (state.cart.length !== 0) {
        state.cart.map((c) => (cartPrice += c.items.unitPrice * c.quantities));
      }
      state.totalPrice = cartPrice;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  isInCart,
  getTotalQuantity,
  getTotalPrice,
} = cartSlice.actions;
