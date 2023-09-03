import { combineReducers } from "redux";
import authSlice from "./authSlice";

const rootReducer = combineReducers({
  auth: authSlice, // Add your reducers as key-value pairs
  // Add more reducers here if needed
});

export default rootReducer;
