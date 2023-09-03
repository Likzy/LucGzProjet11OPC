// store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducer/authSlice";

// Create the Redux store and export it as the default export
const store = configureStore({
  reducer: {
    auth: authSlice,
    // Other reducers if needed
  },
});

export default store;
