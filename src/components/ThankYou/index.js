import React, { useState } from "react";
import "./ThankYou.css";
import shipping from "../../assets/images/shipping.webp";
import { Grid, Typography, Button } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  thankyouText: {
    margin: "0.5em 3em 0em 3em",

    fontFamily: "Lobster",
    fontSize: "1.5rem",
    justifyContent: "center",
    textAlign: "center",
    color: "#184f80",
  },
  button: {
    backgroundColor: "#0c0351",
    fontSize: "0.9em",
    fontWeight: "600",
    margin: "1em 0em 5em 3em",
    marginLeft: "auto",
    borderRadius: "0em",
  },
  soonText: {
    margin: "0.5em 3em 0em 3em",

    fontFamily: "Lobster",
    fontSize: "1.5rem",
    justifyContent: "center",
    textAlign: "center",
    color: "#187412",
  },
}));
const allSelectors = createSelector(
  (state) => state,
  (state) => state
);
function ThankYouIndex() {
  const classes = useStyles();
  const history = useHistory();
  const commAddress = useSelector(allSelectors);
  console.log("order", commAddress);
  const goToHome = () => {
    history.push("/");
  };
  return (
    <div className="success">
      <Grid container spacing={3} justify="center">
        <Grid item direction="column" justify="center">
          <Typography
            component="body1"
            variant="p"
            className={classes.thankyouText}
          >
            Thank you <br /> for <br />
            shopping with us
          </Typography>
          <img src={shipping} alt="shipping" className="success__image" />
          <Typography
            component="body1"
            variant="p"
            className={classes.soonText}
          >
            Your order will be delivered soon.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            onClick={goToHome}
          >
            <span className="cart__placeOrder">Continue Shopping</span>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ThankYouIndex;
