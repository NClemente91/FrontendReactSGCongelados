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

export const getProducts = (category) => {
  return async (dispatch) => {
    dispatch(startLoadingProduct());

    let productData = [];

    if (category === "todos") {
      productData = await getAllProducts();
    } else {
      productData = await getProductsByCategory(category);
    }

    dispatch(setProducts({ products: productData }));
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch(startLoadingProduct());

    const productData = await getProductById(id);

    dispatch(setProductDetail({ product: productData }));
  };
};
