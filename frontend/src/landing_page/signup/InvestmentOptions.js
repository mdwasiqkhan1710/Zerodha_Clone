import React from "react";

function InvestmentOptions() {
  return (
    <>
      <h1 className="text-center m-5 p-5 mt-2 pt-2">
        Investment options with Zerodha demat account
      </h1>
      <div className="container">
        <div className="row mx-5 px-5 mb-5">
          <div className="col-6 text-center">
            <div className="investment-options m-3 p-3">
              <img
                className=""
                style={{ width: "30%" }}
                src="media/images/stocks-acop.svg"
                alt="option-1"
              />
              <h3 className="">Stocks</h3>
              <p>Invest in all exchange-listed securities</p>
            </div>
            <div className="investment-options m-3 p-3">
              <img
                style={{ width: "30%" }}
                src="media/images/ipo-acop.svg"
                alt="option-2"
              />
              <h3>IPO</h3>
              <p>Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
          <div className="col-6">
            <div className="investment-options m-3 p-3">
              <img
                style={{ width: "30%" }}
                src="media/images/mf-acop.svg"
                alt="option-3"
              />
              <h3 className="mt-2 pt-3">Mutual funds</h3>
              <p>Invest in commission-free direct mutual funds</p>
            </div>
            <div className="investment-options m-3 p-3">
              <img
                style={{ width: "30%" }}
                src="media/images/fo-acop.svg"
                alt="option-4"
              />
              <h3>Futures & options</h3>
              <p>
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
          <button className="btn btn-primary mt-4 p-2 fw-bold mb-5 " style={{width: "20%", height:"60px", margin:"0 auto"}}>Explore Investments</button>
        </div>
      </div>
    </>
  );
}

export default InvestmentOptions;
