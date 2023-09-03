import "../../App.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../../assets/scripts/login";

function Signin() {
  return (
    <div className="App">
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form id="login-form">
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" name="rememberMe" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Signin;
