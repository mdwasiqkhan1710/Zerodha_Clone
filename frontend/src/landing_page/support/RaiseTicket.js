import React from "react";

function RaiseTicket() {
  return (
    <div>
      <h4 className="mt-3 pt-2 text-muted ms-5 ps-5">
        To create a ticket, select a relevant topic
      </h4>
      <div className="container">
        <div className="row">
          <div className="col-4 mt-3 pt-3 mb-3 ">
            <div>
              <h6 className="mb-3 mt-5">
                <i class="fa-solid fa-circle-plus"></i>&nbsp;Account Opening
              </h6>
              <a className="text-decoration-none " href="/">
                Resident individual
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Minor
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Non Resident Indian (NRI)
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Company, Partnership, HUF and LLP
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Glossary
              </a>
              <br />
            </div>
            <div>
              <h6 className="mb-3 mt-5 pt-3">
                <i class="fa-regular fa-credit-card"></i>&nbsp;Funds
              </h6>
              <a className="text-decoration-none " href="/">
                Add money
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Withdraw money
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Add bank accounts
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                eMandates
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Glossary
              </a>
              <br />
            </div>
          </div>

          <div className="col-4 mt-3 pt-3 mb-3">
            <div>
              <h6 className="mb-3 mt-5">
                <i class="fa-regular fa-user"></i>&nbsp;Your Zerodha Account
              </h6>
              <a className="text-decoration-none " href="/">
                Your Profile
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Account modification
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Nomination
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Transfer and conversion of securities
              </a>
              <br />
            </div>
            <div>
              <h6 className="mb-3 mt-5">
                <i class="fa-solid fa-circle-radiation"></i>&nbsp;Console
              </h6>
              <a className="text-decoration-none " href="/">
                Portfolio
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Corporate actions
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Fund statements
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Report
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Profile
              </a>
              <br />
              <a className="text-decoration-none " href="/">
                Segments
              </a>
              <br />
            </div>
          </div>

          <div className="col-4 mt-3 pt-3 mb-3">
            <div>
              <div>
                <h6 className="mb-3 mt-5">
                  <i class="fa-solid fa-signal"></i>&nbsp;Kite
                </h6>
                <a className="text-decoration-none " href="/">
                  IPO
                </a>
                <br />
                <a className="text-decoration-none " href="/">
                  Trading FAQ's
                </a>
                <br />
                <a className="text-decoration-none " href="/">
                  Margin Trading Facility (MTF) and Margins
                </a>
                <br />
                <a className="text-decoration-none " href="/">
                  Charts and orders
                </a>
                <br />
                <a className="text-decoration-none " href="/">
                  Alerts and Nudges
                </a>
                <br />
                <a className="text-decoration-none " href="/">
                  General
                </a>
                <br />
              </div>
              <div>
                <h6 className="mb-3 mt-5">
                  <i class="fa-solid fa-coins"></i>&nbsp;Coin
                </h6>
                <a className="text-decoration-none " href="/">
                  Understanding mutual funds and Coin
                </a>
                <br />
                <a className="text-decoration-none " href="/">
                  Coin App
                </a>
                <br />
                <a className="text-decoration-none " href="/">
                  Coin web
                </a>
                <br />
                <a className="text-decoration-none " href="/">
                  Transaction and reports
                </a>
                <br />
                <a className="text-decoration-none " href="/">
                  National Pension Scheme (NPS)
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;
