import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsData: { results: [], currentPage: 1, totalPages: 1 },
  lastCategory: null,
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
      state.productsData = action.payload.productsData;
      state.lastCategory = action.payload.category;
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
  setLastCategory,
} = productSlice.actions;
