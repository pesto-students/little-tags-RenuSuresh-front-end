import React from "react";
import "./History.css";

function Address({ address, deliveryDate, totalAmount }) {
  const date = new Date(deliveryDate);

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const orderDate = date.toLocaleDateString("en-US", options);
  return (
    <div className="address">
      <div className="address__header">
        <div className="address__col">
          <label className="address__label">ORDER PLACED</label>
          <p className="address__p">{orderDate}</p>
        </div>

        <div className="address__col">
          <label className="address__label">Total</label>
          <p className="address__p">
            {totalAmount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>

        <div className="address__col">
          <label className="address__label">SHIPPED TO</label>
          <p className="address__p">
            {address.name}, {address.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Address;
