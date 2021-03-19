import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Address from "./Address";
import "./Payment.css";
import CheckoutDetails from "./CheckoutDetails";
import PaymentOption from "./PaymentOption";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "3rem 12rem 0rem 12rem",
    minHeight: "calc(70vh)",
    "@media only screen and (max-width: 770px)": {
      margin: "0rem 0rem 0rem 0rem",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  forMobile: {
    "@media only screen and (max-width: 770px)": {
      flexDirection: "column-reverse",
    },
  },
}));

export default function PaymentIndex() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.forMobile}>
        <Grid item xs={12} md={6} direction="column">
          <Grid container>
            <Address />
          </Grid>
          <Grid container>
            <PaymentOption />
          </Grid>
        </Grid>
        <Grid item xs={6} md={5}>
          <CheckoutDetails />
        </Grid>
      </Grid>
    </div>
  );
}
