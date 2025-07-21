import React from "react";

function EquityTable() {
  return (
    <div className="ps-5 ms-5 mb-3 pe-5 me-5">
      <h4 className="mb-3">Equity</h4>
      <table
        style={{ width: "100%", height: "600px" }}
        className="border mb-2 p-4"
      >
        <thead className="border-bottom">
          <tr>
            <th className="m-3 p-2">&nbsp;</th>
            <th>Equity Delivery</th>
            <th>Equity intraday</th>
            <th>F&O - Futures</th>
            <th>F&O - Options</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-bottom">
            <td>Brokerage</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>

          <tr className="border-bottom">
            <td>STT/CTT</td>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.02% on the sell side </td>
            <td>
              <ul>
                <li>
                  0.125% of the intrinsic value on options that are bought and
                  exercised
                </li>
                <li>0.1% on sell side (on premium)</li>
              </ul>
            </td>
          </tr>

          <tr className="border-bottom">
            <td>Transaction charges</td>
            <td>
              NSE: 0.00297% <br /> BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00297% <br /> BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00173% <br />
              BSE: 0
            </td>
            <td>
              NSE: 0.03503% (on premium)
              <br />
              BSE: 0.0325% (on premium)
            </td>
          </tr>

          <tr className="border-bottom">
            <td>GQT</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>

          <tr className="border-bottom">
            <td>SEBI Charges</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>

          <tr className="border-bottom">
            <td>Stamp Charges</td>
            <td>0.015% or ₹1500 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EquityTable;
