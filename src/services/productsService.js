import { sgCongeladosApi } from "../api/sgCongeladosApi";

export const getAllProducts = async (page) => {
  let products = [];

  try {
    const { data } = await sgCongeladosApi.get(
      `/product/all?page=${page - 1}&size=6`
    );

    if (data.data.results.length === 0) {
      console.log("No hay resultados");
      return products;
    } else {
      products = data.data;
      return products;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductsByCategory = async (category, page) => {
  let products = [];

  try {
    const { data } = await sgCongeladosApi.get(
      `/product/category/${category}?page=${page - 1}&size=6`
    );

    if (data.data.results.length === 0) {
      console.log("No hay resultados");
      return products;
    } else {
      products = data.data;
      return products;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async (id) => {
  let product = [];

  try {
    const { data } = await sgCongeladosApi.get(`/product/${id}`);

    if (data.data === null) {
      console.log("No hay resultados");
      return product;
    } else {
      product.push(data.data);
      return product[0];
    }
  } catch (error) {
    console.log(error.message);
  }
};
