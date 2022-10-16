import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{ items: {}, quantities: 0 }],
  totalQuantity: 0,
  totalPrice: 0,
  isLoadingOrder: false,
  savedOrder: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    startLoadingOrder: (state) => {
      state.isLoadingOrder = true;
    },

    setOrder: (state, action) => {
      state.isLoadingOrder = false;
      state.savedOrder = action.payload.order;
    },

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

    addOrRemoveOneOfItem: (state, action) => {
      const item = action.payload.item;
      const operation = action.payload.operation;

      const cartProductsId = state.cart.findIndex(
        (i) => item.productId === i.items.productId
      );

      if (cartProductsId !== -1 && operation === "suma") {
        const cartModify = [...state.cart];
        cartModify[cartProductsId].quantities += 1;
        state.cart = cartModify;
        state.totalQuantity += 1;
        state.totalPrice += item.unitPrice;
      }
      if (cartProductsId !== -1 && operation === "resta") {
        const cartModify = [...state.cart];
        cartModify[cartProductsId].quantities -= 1;
        state.cart = cartModify;
        state.totalQuantity -= 1;
        state.totalPrice -= item.unitPrice;
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
        state.cart = [{ items: {}, quantities: 0 }];
        state.totalQuantity = 0;
        state.totalPrice = 0;
      }
    },

    clearCart: (state) => {
      state.cart = [{ items: {}, quantities: 0 }];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  startLoadingOrder,
  setOrder,
  addItem,
  addOrRemoveOneOfItem,
  removeItem,
  clearCart,
} = cartSlice.actions;
