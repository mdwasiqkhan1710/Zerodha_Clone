import React from "react";

function Hero() {
  return (
    <div>
      <h1 className="text-center m-4 pt-5">Charges</h1>
      <p className="text-center text-muted fs-3 pb-3 mb-5">
        List of all charges and taxes
      </p>
      <div className="container d-flex ms-4 ps-4 pe-4">
        <div className="col p-3 m-4" style={{ width: "10%" }}>
          <img src="media/images/pricing-eq.svg" alt="pricing" />
          <h3 className="text-center">Free equity delivery</h3>
          <p className="text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-3 m-4" style={{ width: "10%" }}>
          <img src="media/images/pricing-eq-3.svg" alt="pricing" />
          <h3 className="text-center">Intraday and F&O trades</h3>
          <p className="text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-3 m-4" style={{ width: "10%" }}>
          <img src="media/images/pricing-eq-2.svg" alt="pricing" />
          <h3 className="text-center">Free direct MF</h3>
          <p className="text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
