import React, { useEffect } from "react";
import Orders from "./Orders";
import "./History.css";
import { BASE_URL, SET_HISTORY } from "../../constant/properties";
import { useDispatch, useSelector } from "react-redux";

function HistoryIndex() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in useEffect");
    fetch(`${BASE_URL}/order/history`)
      .then((res) => res.json())
      .then((result) => {
        dispatch({ type: SET_HISTORY, data: result.data.orderHistory });
      });
  }, [dispatch]);
  return (
    <div className="history">
      <Orders />
    </div>
  );
}

export default HistoryIndex;
