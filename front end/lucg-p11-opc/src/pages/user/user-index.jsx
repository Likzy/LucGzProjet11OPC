import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router";
import store from "../../store/store";
import { login } from "../../reducer/authSlice";

function User() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const firstname = useSelector((state) => state.auth.firstname);
  const lastname = useSelector((state) => state.auth.lastname);
  const token = useSelector((state) => state.auth.token);
  const Navigate = useNavigate();
  const newUsernameInput = document.getElementById("newUsername");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          })
        );
        closeModal();
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
      editbutton.addEventListener("click", openModal);
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
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Name Modal"
          className="modal"
        >
          <h2>Edit Name</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="newUsername">New Username:</label>
              <input
                type="text"
                id="newUsername"
                name="newUsername"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <button type="submit">Save</button>
          </form>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            You are not logged in
            <br />
            Please loggin to access user
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
