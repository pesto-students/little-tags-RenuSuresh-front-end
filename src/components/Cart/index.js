import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import AddressBar from "./AddressBar";
import CartItems from "./CartItems";
import Grid from "@material-ui/core/Grid";
import "./Cart.css";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import noitem from "../../assets/images/img-no-cartitems.png";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  subtotalMain: {
    margin: "2rem 2rem 2rem 2rem",
  },
  button: {
    margin: "2em",
    backgroundColor: "var(--clr-primary)",
    color: "white",
    fontWeight: 600,
    width: "15em",
    "@media (min-width: 600px)": {
      marginBottom: "1rem",
    },
  },
}));

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);

function CartIndex() {
  const classes = useStyles();
  const history = useHistory();
  const [t] = useTranslation("common");

  const cart = useSelector(allSelectors);
  const backToHome = () => history.push("/");
  const EmptyBag = (
    <div className="cart__empty">
      <img src={noitem} alt="no item in cart" className="cart__emptyImage" />
      <p className="cart__emptyBag">{t("cart.noItemInBag")}</p>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        onClick={backToHome}
      >
        <span>{t(`cart.continueShopping`)}</span>
      </Button>
    </div>
  );
  const details = (
    <>
      <Grid container xs={12} sm={12} md={7}>
        <Grid item md={12} xs={12}>
          <AddressBar />
        </Grid>
        <Grid container xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={12}>
            <CartItems />
          </Grid>
        </Grid>
      </Grid>

      <Grid container xs={12} md={5}>
        <Grid item md={12} sm={12} xs={12} className={classes.subtotalMain}>
          <Subtotal />
        </Grid>
      </Grid>
    </>
  );
  return (
    <div className="cart">
      <Grid container justify="center">
        {cart.cartReducer.cart.length > 0 ? details : EmptyBag}
      </Grid>
    </div>
  );
}

export default CartIndex;
