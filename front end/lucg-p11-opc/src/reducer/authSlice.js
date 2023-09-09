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
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload.userName;
      state.firstname = action.payload.firstName;
      state.lastname = action.payload.lastName;
      state.id = action.payload.id;
      state.token = action.payload.token
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
      state.firstname = null;
      state.lastname = null;
      state.id = null;
      state.token = null;
    },
  },
});

// Export actions and reducer from the slice
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
