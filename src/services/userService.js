import { sgCongeladosApi } from "../api/sgCongeladosApi";

export const login = async (bodyUserLogin) => {
  let userLogged = [];

  try {
    const { data } = await sgCongeladosApi.post(`/user/login`, bodyUserLogin);

    if (data.data === null) {
      console.log("No hay resultados");
      return userLogged;
    } else {
      userLogged = data.data;
      return userLogged;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async (bodyUserRegister) => {
  let userRegistered = [];

  try {
    const { data } = await sgCongeladosApi.post(
      `/user/register`,
      bodyUserRegister
    );

    if (data.data.results === null) {
      console.log("No hay resultados");
      return userRegistered;
    } else {
      userRegistered = data.data.results;
      return userRegistered;
    }
  } catch (error) {
    console.log(error.message);
  }
};
