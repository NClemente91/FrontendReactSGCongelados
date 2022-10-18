import { sgCongeladosApi } from "../api/sgCongeladosApi";

export const login = async (bodyUserLogin) => {
  try {
    const { data } = await sgCongeladosApi.post(`/user/login`, bodyUserLogin);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async (bodyUserRegister) => {
  try {
    const { data } = await sgCongeladosApi.post(
      `/user/register`,
      bodyUserRegister
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
