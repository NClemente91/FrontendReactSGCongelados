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

export const getProducts = (category, page = 1) => {
  return async (dispatch) => {
    dispatch(startLoadingProduct());

    let productData = [];

    //SI CAMBIA LA CATEGORIA RESETEAR, PAGE = 1

    if (category === "todos") {
      productData = await getAllProducts(page);
    } else {
      productData = await getProductsByCategory(category, page);
    }

    dispatch(
      setProducts({
        products: productData.results,
        page,
        totalPages: productData.totalPages,
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
