import {
  getAllProducts,
  getProductsByCategory,
  getProductById,
} from "../../../services/productsService";

import {
  startLoadingProduct,
  setProducts,
  setProductDetail,
} from "./productSlice";

export const getProducts = (category, page = 1, lastCategory) => {
  return async (dispatch) => {
    dispatch(startLoadingProduct());

    let productData = [];

    if (category === "todos" && category !== lastCategory) {
      productData = await getAllProducts(1);
    } else if (category !== "todos" && category !== lastCategory) {
      productData = await getProductsByCategory(category, 1);
    } else if (category === "todos" && category === lastCategory) {
      productData = await getAllProducts(page);
    } else {
      productData = await getProductsByCategory(category, page);
    }

    dispatch(
      setProducts({
        productsData: productData,
        category,
      })
    );
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch(startLoadingProduct());

    const productData = await getProductById(id);

    dispatch(setProductDetail({ product: productData }));
  };
};
