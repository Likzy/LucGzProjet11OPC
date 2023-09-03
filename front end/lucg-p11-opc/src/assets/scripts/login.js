import { login } from "../../reducer/authSlice";
import store from "../../store/store";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  if (form) {
    const mailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const form = document.getElementById("login-form");

    function ResolveUsername(token) {
      const apiUrl = "http://localhost:3001/api/v1/user/profile";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: null,
      };

      fetch(apiUrl, requestOptions)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          console.log("API Response:", data);
          const {
            body: { firstName, lastName, userName, id },
          } = data;

          store.dispatch(
            login({ isAuthenticated: true, firstName, lastName, userName, id })
          );
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    }
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const mail = mailInput.value;
      const password = passwordInput.value;

      const apiUrl = "http://localhost:3001/api/v1/user/login";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
          password: password,
        }),
      };

      try {
        const response = await fetch(apiUrl, requestOptions);
        if (response.ok) {
          const data = await response.json();
          const {
            body: { token },
          } = data;
          ResolveUsername(token);

          console.log("Login successful:", data);
        } else {
          console.error("Login failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});
