import { sgCongeladosApi } from "../api/sgCongeladosApi";

export const saveOrder = async (bodyOrder) => {
  try {
    const { data } = await sgCongeladosApi.post(`/order/add`, bodyOrder);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
