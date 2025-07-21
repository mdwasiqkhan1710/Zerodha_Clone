import React from "react";

function AccountOptions() {
  return (
    <div className="account-options container py-4">
      <h3 className="text-center mb-5">
        Explore different types of Account types
      </h3>
      <div className="row g-4">
        {/* First Row - 3 Cards */}
        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-2">Individual Account</h5>
              <p className="card-text">
                Invest in equity, mutual funds and derivatives.
              </p>
              <a href="/signup">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-2">HUF Account</h5>
              <p className="card-text">
                Make tax-efficient investments for your family.
              </p>
              <a href="/signup">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-2">NRI account</h5>
              <p className="card-text">
                Invest in equity, mutual funds, debentures and more.
              </p>
              <a href="/signup">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Second Row - 2 Cards */}
        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-2">Minor account</h5>
              <p className="card-text">
                Teach your little ones about money and invest for their future
                with them.
              </p>
              <a href="/signup">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-2">Corporate / LLP / Partnership</h5>
              <p className="card-text">
                Manage your business surplus and investments easily.
              </p>
              <a href="/signup">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOptions;
