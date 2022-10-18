import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  totalPages: 1,
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
    resetPages: (state) => {
      state.page = 1;
      state.totalPages = 1;
    },
    setProducts: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
      state.page = action.payload.page;
      state.totalPages = action.payload.totalPages;
    },
    setProductDetail: (state, action) => {
      state.isLoading = false;
      state.productDetail = [action.payload.product];
    },
  },
});

export const {
  startLoadingProduct,
  setProducts,
  setProductDetail,
  resetPages,
} = productSlice.actions;
