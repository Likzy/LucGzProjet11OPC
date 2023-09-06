import argenBanklogo from "../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import store from "../store/store";
import { logout } from "../reducer/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  useEffect(() => {
    if (isAuthenticated) {
      const signout = document.getElementById("signout");
      signout.addEventListener("click", async (e) => {
        e.preventDefault();
        store.dispatch(
          logout({
            isAuthenticated: false,
          })
        );
      });
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <div>
        <nav className="main-nav">
          <NavLink className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src={argenBanklogo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </NavLink>
          <div>
            <NavLink className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {username}
            </NavLink>
            <NavLink id="signout" className="main-nav-item" to="/">
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argenBanklogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="main-nav-item" to="/signin">
            <FontAwesomeIcon icon={faRightToBracket} />
            Sign In
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
