import React from "react";

function Hero() {
  return (
    <div className="hero-page">
      <div className="heading m-5 p-5 text-center">
        <h1>Open a free demat and trading account online</h1>
        <p className=" fs-5 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="conatiner">
        <div className="row mt-5 ms-5">
          <div className="col-6">
            <img
              className="ms-5 ps-5 mb-5 pb-5"
              style={{ width: "90%" }}
              src="media/images/account_open.svg"
              alt="account-open"
            />
          </div>
          <div className="col-4 mb-3">
            <h3 className="mt-3 mb-3">Signup Now</h3>
            <p className="mb-3">Or track your existing application</p>
            <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                +91
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mobile number"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
            <button
              className="btn btn-primary mt-4 p-2 fs-5 mb-3"
              style={{ width: "50%", height: "60px", margin: "0 auto" }}
            >
              Get OTP
            </button>
            <p>
              By proceeding, you agree to the Zerodha terms & privacy policy
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
