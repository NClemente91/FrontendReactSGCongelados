import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingOrder: false,
  savedOrder: [],
  message: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    startLoadingOrder: (state) => {
      state.isLoadingOrder = true;
    },

    finishLoadingOrder: (state) => {
      state.isLoadingOrder = false;
    },

    setOrder: (state, action) => {
      state.savedOrder = action.payload.order;
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { startLoadingOrder, finishLoadingOrder, setOrder, setMessage } =
  orderSlice.actions;
