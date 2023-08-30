import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/main.scss";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/singin-index";
import Home from "./pages/home/home-index";
import User from "./pages/user/user-index";

const root = ReactDOM.createRoot(document.getElementById("root"));
createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
//<Route path="*" element={<NotFound />} />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
