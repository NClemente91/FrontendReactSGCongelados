import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogged: {},
  isLogged: false,
  isLoadingUser: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoadingUser: (state) => {
      state.isLoadingUser = true;
    },

    setUserLogged: (state, action) => {
      state.isLoadingUser = false;
      state.userLogged = action.payload.user;
      state.isLogged = true;
    },

    isLogout: (state) => {
      state.isLoadingUser = false;
      state.userLogged = {};
      state.isLogged = false;
    },
  },
});

export const { startLoadingUser, setUserLogged, isLogout } = userSlice.actions;
