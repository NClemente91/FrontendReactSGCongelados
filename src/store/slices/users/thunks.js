import { login, register } from "../../../services/userService";

import {
  startLoadingUser,
  setUserLogged,
  setMessage,
  finishLoadingUser,
} from "./userSlice";

export const loginUser = (userToLogin) => {
  return async (dispatch) => {
    dispatch(startLoadingUser());

    const userLogged = await login(userToLogin);

    if (userLogged.responseCode === 200) {
      dispatch(
        setMessage({
          type: "success",
          detail: "Usuario registrado con éxito",
        })
      );
      dispatch(setUserLogged({ user: userLogged.data }));
    } else {
      dispatch(
        setMessage({
          type: "error",
          detail: "Error al iniciar sesion " + userLogged.message,
        })
      );
      dispatch(finishLoadingUser());
    }
  };
};

export const registerUser = (userToRegister) => {
  return async (dispatch) => {
    dispatch(startLoadingUser());

    const userRegistered = await register(userToRegister);

    if (userRegistered.responseCode === 201) {
      dispatch(
        setMessage({
          type: "success",
          detail: "Usuario registrado con éxito",
        })
      );
    } else {
      dispatch(
        setMessage({
          type: "error",
          detail: "Error al registrar el usuario " + userRegistered.message,
        })
      );
    }

    dispatch(finishLoadingUser());
  };
};
