import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./assets/styles/main.css";
import "./assets/styles/main.scss";
import Signin from "./pages/signin/singin-index";
import Home from "./pages/home/home-index";
import User from "./pages/user/user-index";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
//<Route path="*" element={<NotFound />} />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
