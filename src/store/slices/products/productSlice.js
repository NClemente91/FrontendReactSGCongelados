import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetail: [],
  isLoading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    startLoadingProduct: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
    },
    setProductDetail: (state, action) => {
      state.isLoading = false;
      state.productDetail = [action.payload.product];
    },
  },
});

export const { startLoadingProduct, setProducts, setProductDetail } =
  productSlice.actions;
