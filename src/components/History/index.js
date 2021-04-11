import React, { useEffect, useState } from "react";
import Orders from "./Orders";
import "./History.css";
import { BASE_URL, SET_HISTORY } from "../../constant/properties";
import { useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

const useStylesBackdrop = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  spinner: {
    color: "#34ed35",
  },
}));
function HistoryIndex() {
  const dispatch = useDispatch();
  const [showOrders, setShowOrders] = useState(false);
  const classesBackdrop = useStylesBackdrop();

  useEffect(() => {
    fetch(`${BASE_URL}/order/history`)
      .then((res) => res.json())
      .then((result) => {
        dispatch({ type: SET_HISTORY, data: result.data.orderHistory });

        setShowOrders(true);
      });
  }, [dispatch]);
  return (
    <div className="history">
      {showOrders && <Orders />}
      {!showOrders && (
        <Backdrop
          className={classesBackdrop.backdrop}
          open={!showOrders}
          invisible={true}
        >
          <CircularProgress />
        </Backdrop>
      )}
    </div>
  );
}

export default HistoryIndex;
