import React from "react";
import "./History.css";

function Address() {
  return (
    <div className="address">
      <div className="address__header">
        <div className="address__col">
          <label className="address__label">ORDER PLACED</label>
          <p className="address__p">1 February</p>
        </div>

        <div className="address__col">
          <label className="address__label">Total</label>
          <p className="address__p">1000</p>
        </div>

        <div className="address__col">
          <label className="address__label">SHIPPED TO</label>
          <p className="address__p">Mr. Sumit</p>
        </div>
      </div>
    </div>
  );
}

export default Address;
