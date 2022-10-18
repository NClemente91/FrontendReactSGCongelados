import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogged: {},
  isLogged: false,
  isLoadingUser: false,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoadingUser: (state) => {
      state.isLoadingUser = true;
    },

    finishLoadingUser: (state) => {
      state.isLoadingUser = false;
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

    setMessage: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export const {
  startLoadingUser,
  setUserLogged,
  isLogout,
  setMessage,
  finishLoadingUser,
} = userSlice.actions;
