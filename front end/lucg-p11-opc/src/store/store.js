// store.js
import { configureStore, combineReducers } from "redux";

// Define an initial state for the authentication slice
const initialAuthState = {
  isAuthenticated: false, // Default to not authenticated
};

// Define a reducer for handling authentication state
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true };
    case "LOGOUT":
      return { isAuthenticated: false };
    default:
      return state;
  }
};

// Combine reducers if you have more slices
const rootReducer = combineReducers({
  auth: authReducer, // "auth" is the slice name
  // Add more reducers here if needed
});

// Create the Redux store
const store = configureStore(rootReducer);

export default store;
