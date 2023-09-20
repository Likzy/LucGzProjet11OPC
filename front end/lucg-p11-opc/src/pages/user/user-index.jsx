import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router";
import store from "../../store/store";
import { login } from "../../reducer/authSlice";
import Account from "../../components/account";

function User() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const firstname = useSelector((state) => state.auth.firstname);
  const lastname = useSelector((state) => state.auth.lastname);
  const token = useSelector((state) => state.auth.token);
  const Navigate = useNavigate();
  const newUsernameInput = document.getElementById("newUsername");

  const [newUsername, setNewUsername] = useState("");
  const closeEditname = () => {
    const Editdiv = document.getElementById("editnamediv");
    Editdiv.classList.add("displaynone");
    Editdiv.classList.remove("displayeditname");
  };
  const openEditname = () => {
    const Editdiv = document.getElementById("editnamediv");
    Editdiv.classList.remove("displaynone");
    Editdiv.classList.add("displayeditname");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:3001/api/v1/user/profile";
    const submitedname = newUsernameInput.value;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userName: submitedname,
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      if (response.ok) {
        const data = await response.json();
        const {
          body: { firstName, lastName, userName, id },
        } = data;
        store.dispatch(
          login({
            isAuthenticated: true,
            firstName,
            lastName,
            userName,
            id,
            token,
          })
        );
        closeEditname();
        Navigate("/user");
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const editbutton = document.querySelector(".edit-button");
      editbutton.addEventListener("click", openEditname);
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <div className="App">
        <Navbar />
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {firstname} {lastname}!
            </h1>
            <button className="edit-button">Edit Name</button>
            <div className="Editnamecontainer">
              <div className="EditnameDiv displaynone" id="editnamediv">
                <h2 className="black">Edit Name</h2>
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <label className="black" htmlFor="newUsername">
                      New Username:
                    </label>
                    <input
                      type="text"
                      id="newUsername"
                      name="newUsername"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                    />
                  </div>
                </form>
                <div className="editnamebuttoncontainer">
                  <button className="editnamebutton" type="submit">
                    Save
                  </button>
                  <button className="editnamebutton" onClick={closeEditname}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <Account AccountId={"(x8349)"} Balance={"$2,082.79"} />
          <Account AccountId={"(x6712)"} Balance={"$10,928.42"} />
          <Account AccountId={"(x8379)"} Balance={"$184.30"} />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <main className="main bg-dark vh80 paddingtop20px">
        <div className="header">
          <h1>
            You are not logged in
            <br />
            Please loggin to gain access to your account
            <br />
            This page is an example
          </h1>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default User;
