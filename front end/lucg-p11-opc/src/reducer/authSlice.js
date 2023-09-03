// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Create an authentication slice using createSlice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    firstname: null,
    lastname: null,
    username: null,
    id: null,
  },
  reducers: {
    login: (state, firstname, lastname, username, id) => {
      state.isAuthenticated = true;
      state.username = username;
      state.firstname = firstname;
      state.lastname = lastname;
      state.id = id;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
      state.firstname = null;
      state.lastname = null;
      state.id = null;
    },
  },
});

// Export actions and reducer from the slice
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
