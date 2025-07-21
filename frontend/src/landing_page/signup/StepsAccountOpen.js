import React from "react";

function StepsAccountOpen() {
  return (
    <div className="steps-account">
    <h2 className="m-5 p-5 text-center">Steps to open a demat account with Zerodha</h2>
    <div className="conatiner">
        <div className="row mt-5 ms-5">
          <div className="col-6">
            <img
              className=" text-center ms-5 ps-5 mb-5 pb-5"
              style={{ width: "70%" }}
              src="media/images/steps-acop.svg"
              alt="account-open"
            />
          </div>
          <div className="col-6 fs-5">
            <ol>
                <li className="mb-4">Enter the requested details</li>
                <li className="mb-4">Complete e-sign and verification</li>
                <li className="mb-4">Start investing</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsAccountOpen;
