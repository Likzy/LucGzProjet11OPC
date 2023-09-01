import argenBanklogo from "../assets/img/argentBankLogo.png";

function Navbar() {
  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="#">
          <img
            className="main-nav-logo-image"
            src={argenBanklogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
