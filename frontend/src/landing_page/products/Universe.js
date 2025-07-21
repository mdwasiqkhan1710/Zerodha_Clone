import React from "react";

function Universe() {
  return (
    <>
      <div className="text-center">
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p className="text-small text-muted mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="conatiner text-center pt-5 mt-3">
        <div className="row">
          <div className="col-4 ps-3">
            <img
              style={{ width: "150px", height: "60px" }}
              src="media/images/zerodhaFundhouse.png"
              alt="other-image"
            />
            <p className="text-small text-center text-muted p-4">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
            <img
              style={{ width: "150px", height: "60px" }}
              src="media/images/sensibullLogo.svg"
              alt="other-image"
            />
            <p className="text-small text-center text-muted p-4">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              style={{ width: "150px", height: "60px" }}
              src="media/images/tijori.svg"
              alt="other-image"
            />
            <p className="text-small text-center text-muted p-4">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
            <img
              style={{ width: "150px", height: "60px" }}
              src="media/images/streakLogo.png"
              alt="other-image"
            />
            <p className="text-small text-center text-muted p-4">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              style={{ width: "150px", height: "60px" }}
              src="media/images/smallcaseLogo.png"
              alt="other-image"
            />
            <p className="text-small text-center text-muted p-4">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
            <img
              style={{ width: "150px", height: "60px" }}
              src="media/images/dittoLogo.png"
              alt="other-image"
            />
            <p className="text-small text-center text-muted p-4">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
          <button className="btn btn-primary p-2 fw-bold mb-5 " style={{width: "10%", margin:"0 auto"}}>Sign up for free</button>
        </div>
      </div>
    </>
  );
}

export default Universe;
