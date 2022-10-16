import { sgCongeladosApi } from "../api/sgCongeladosApi";

export const saveOrder = async (bodyOrder) => {
  //CAMBIAR
  let order = [];

  try {
    const { data } = await sgCongeladosApi.post(`/order/add`, bodyOrder);

    console.log(data);

    if (data.data.results.length === 0) {
      console.log("No hay resultados");
      return order;
    } else {
      order = data.data.results;
      return order;
    }
  } catch (error) {
    console.log(error.message);
  }
};
