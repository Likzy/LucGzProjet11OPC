import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function User() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const firstname = useSelector((state) => state.auth.firstname);
  const lastname = useSelector((state) => state.auth.lastname);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    closeModal();
  };

  useEffect(() => {
    if (isAuthenticated) {
      const editbutton = document.querySelector(".edit-button");
      editbutton.addEventListener("click", openModal);
    }
  }, [isAuthenticated]);

  // const id = useSelector((state) => state.auth.id);
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
              <input type="text" id="newUsername" name="newUsername" />
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
