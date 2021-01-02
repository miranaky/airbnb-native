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
      data: { token },
      status,
    } = await api.login(form);
    if (status === 200 && token) {
      ///dispatch login
      dispatch(logIn({ token }));
    }
  } catch (e) {
    alert("Wrong email or password.");
  }
};

export default userSlice.reducer;
