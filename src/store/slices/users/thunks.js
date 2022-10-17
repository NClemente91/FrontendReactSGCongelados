import { login, register } from "../../../services/userService";

import { startLoadingUser, setUserLogged } from "./userSlice";

export const loginUser = (userToLogin) => {
  return async (dispatch) => {
    dispatch(startLoadingUser());

    const userLogged = await login(userToLogin);

    dispatch(setUserLogged({ user: userLogged }));
  };
};

export const registerUser = (userToRegister) => {
  return async (dispatch) => {
    dispatch(startLoadingUser());

    const userRegistered = await register(userToRegister);

    console.log(userRegistered);
  };
};
