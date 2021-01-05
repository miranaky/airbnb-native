import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: { token, id },
      status,
    } = await api.login(form);
    if (status === 200 && token) {
      ///dispatch login
      dispatch(logIn({ token, id }));
    }
  } catch (e) {
    alert("Wrong email or password.");
  }
};

export const getFavs = () => async (dispatch, getState) => {
  const {
    usersReducer: { id },
  } = getState();
  try {
    const { data } = await api.favs(id);
    console.log(data);
  } catch (e) {
    console.warn(e);
  }
};

export default userSlice.reducer;
