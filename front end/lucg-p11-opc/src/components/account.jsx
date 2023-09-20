function Account({ AccountId, Balance }) {
  function Showpayments() {}
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking {AccountId}</h3>
        <p className="account-amount">{Balance}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={Showpayments}>
          View transactions
        </button>
      </div>
    </section>
  );
}

export default Account;
