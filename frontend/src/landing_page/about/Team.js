import React from "react";

function Team() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row mb-5 text-center">
        <h3>People</h3>
      </div>
      <div className="row mb-5">
        <div className=" text-center col-6 pt-5 ps-5 pe-5">
          <img
            className="ps-5 ms-5"
            style={{ borderRadius: "100%", width: "70%" }}
            src="media/images/nithinKamath.jpg"
            alt="founder-pic"
          />
          <p className="mt-4">Nithin Kamath</p>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-6 mt-5 pt-5 pe-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a className="text-decoration-none" href="/">
              Homepage
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="/">
              TradingQnA
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="/">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
