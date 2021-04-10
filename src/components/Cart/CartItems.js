import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import Quantity from "../Product/Quantity";
import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import {
  MODIFY_ITEM_QUANTITY,
  MODIFY_ITEM_SIZE,
  REMOVE_FROM_BAG,
  ADD_TO_WISHLIST,
} from "../../constant/properties";
import { useTranslation } from "react-i18next";
import "./Cart.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight: "2rem",
    marginBottom: "2rem",
  },
  paper: {
    marginLeft: "2rem",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "80%",
    maxHeight: "100%",
  },
  sellingPrice: {
    fontSize: "1.25em",
    fontWeight: "600",
  },
  button: {
    width: "100%",
    backgroundColor: "#f8f8f8b3",
    color: "#343232de",
  },
  removeBtnGrid: {
    borderRight: "1px solid #8d8c8c52",
  },
  prodContainer: {
    padding: theme.spacing(2),
  },
  buttonGridContainer: {
    height: "2.75rem",
  },
  size: {
    margin: "0.5rem 0.5rem 0.5rem 0rem",
  },
  title: {
    color: "#0c0351",
    fontFamily: "Open sans",
    fontWeight: 600,
    fontSize: "1.25em",
  },
}));

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);

function CartItems() {
  const classes = useStyles();
  const [t] = useTranslation("common");
  const cart = useSelector(allSelectors);

  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const setQuantityFn = (...arg) => {
    dispatch({
      type: MODIFY_ITEM_QUANTITY,
      data: arg,
    });
  };

  const changeSize = (...arg) => {
    dispatch({
      type: MODIFY_ITEM_SIZE,
      data: [arg[0].target.value, arg[1]],
    });
  };

  const removeFromBag = (productId) => {
    dispatch({
      type: REMOVE_FROM_BAG,
      productId: productId,
    });
  };
  const addToWishlist = (productId) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      productId: productId,
    });
  };
  const deliveryDate = cart.deliveryDateReducer.estimatedDelivery;
  return (
    <>
      <Grid container xs={12} sm={12} md={12}>
        {cart.cartReducer.cart.map((item) => (
          <Grid item md={12} xs={12} key={item.data.productId}>
            <div className={classes.root}>
              <Paper className={classes.paper} elevation={3}>
                <Grid container className={classes.prodContainer}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src={item.data.image}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column">
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          className={classes.title}
                        >
                          {item.data.title}
                        </Typography>
                      </Grid>
                      <Grid item xs className={classes.size}>
                        <label className="cart__size">
                          {t("product.size")}
                        </label>

                        <select
                          name=""
                          id=""
                          className="cart__select"
                          onChange={(e) => changeSize(e, item.data.productId)}
                          value={item.size}
                        >
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      </Grid>
                      <Grid item xs className={classes.size}>
                        <label className="cart__quantity">
                          {t("product.quantity")}
                        </label>

                        <Quantity
                          setQuantityFn={(key) =>
                            setQuantityFn(key, item.data.productId)
                          }
                          key={item.data.productId}
                          quantity={item.quantity}
                        />
                      </Grid>
                      <Grid item xs className={classes.size}>
                        <label className="cart__label">
                          {t("product.freeDelivery")}:
                        </label>
                        <p className="cart__deliverydate">{deliveryDate}</p>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        className={classes.sellingPrice}
                      >
                        {item.data.sellingPrice.toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "INR",
                        })}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.buttonGridContainer}>
                  <Grid item xs={5} className={classes.removeBtnGrid}>
                    <Button
                      className={classes.button}
                      onClick={() => removeFromBag(item.data.productId)}
                    >
                      {t(`cart.remove`)}
                    </Button>
                  </Grid>

                  <Grid item xs={7}>
                    <Button
                      className={classes.button}
                      onClick={() => addToWishlist(item.data.productId)}
                    >
                      {t(`cart.addToWishList`)}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CartItems;
