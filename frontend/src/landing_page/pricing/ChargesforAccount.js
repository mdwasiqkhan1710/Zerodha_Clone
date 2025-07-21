import React from "react";

function ChargesforAccount() {
  return (
    <div className="p-5 m-5">
      <h4 className="mb-4">Charges for Account Opening</h4>
      <table className="border" style={{ width: "100%" }}>
        <thead className="border-bottom">
          <tr>
            <th className="m-3 p-2">Type of Account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="m-3 p-2 mb-2">Online Account</td>
            <td className="mb-2">
              <button className="btn btn-success btn-sm">Free</button>
            </td>
          </tr>
          <tr>
            <td className="m-3 p-2 mb-2">Offline Account</td>
            <td className="mb-2">
              <button className="btn btn-success btn-sm">Free</button>
            </td>
          </tr>
          <tr>
            <td className="m-3 p-2 mb-2">NRI Account Offline only</td>
            <td className="mb-2">&#8377;500</td>
          </tr>
          <tr>
            <td className="m-3 p-2 mb-2">
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>
            <td className="mb-2">&#8377;500</td>
          </tr>
        </tbody>
      </table>
      {/* Second Table */}
      <h4 className="mb-4 mt-5 pt-5">
        Charges for optional value added services
      </h4>
      <table className="border mb-2" style={{ width: "100%" }}>
        <thead className="border-bottom">
          <tr>
            <th className="m-3 p-2">Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="m-3 p-2 mb-2">Tickertape</td>
            <td className="mb-2">Monthly / Annual</td>
            <td className="mb-2">Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td className="m-3 p-2 mb-2">Smallcase</td>
            <td className="mb-2">Per Transaction</td>
            <td className="mb-2">Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td className="m-3 p-2 mb-2">Kite Connect</td>
            <td className="mb-2">Monthly</td>
            <td className="mb-2">Connect: 2000 | Historical: 2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ChargesforAccount;
