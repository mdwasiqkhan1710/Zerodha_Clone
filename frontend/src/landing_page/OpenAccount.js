import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="text-center mb-5">
        <h1 className="mt-5 mb-4">Open a Zerodha account </h1>
        <p className="mb-4 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary btn-lg ps-3 pe-3 mt-3 mb-4"
          style={{ width: "17%" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
