import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import { shallowEqual, useSelector } from "react-redux";
import Quantity from "../Product/Quantity";
import { useDispatch } from "react-redux";
// import { CartContext } from "./index";
import { createSelector } from "reselect";
import {
  MODIFY_ITEM_QUANTITY,
  MODIFY_ITEM_SIZE,
} from "../../constant/properties";
import { useTranslation } from "react-i18next";
import "./Cart.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
    marginRight: "2rem",
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
    maxWidth: "100%",
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
    margin: "0.5em",
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
  const [deliveryDate, setDeliveryDate] = useState("");
  const [size, setSize] = useState(null);
  //   const cart = useSelector((state) => state.cartReducer.cart, shallowEqual);
  const cart = useSelector(allSelectors);
  console.log("cartItem>>>", cart);
  //   const [cart] = useContext(ContextValue)
  //   const [changeqty, setChangeqty] = useContext(CartContext);

  const dispatch = useDispatch();
  useEffect(() => {
    var t = new Date();
    t.setDate(t.getDate() + 2);
    var month = "0" + (t.getMonth() + 1);
    var date = "0" + t.getDate();
    month = month.slice(-2) - 1;
    date = date.slice(-2);
    var d = new Date(t.getFullYear(), month, date).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    setDeliveryDate(d);
  }, []);
  const setQuantityFn = (...arg) => {
    dispatch({
      type: MODIFY_ITEM_QUANTITY,
      data: arg,
    });
    // setChangeqty(arg[0]);
  };
  //   console.log(" use context is >>>", changeqty);
  const changeSize = (...arg) => {
    dispatch({
      type: MODIFY_ITEM_SIZE,
      data: [arg[0].target.value, arg[1]],
    });
  };

  return (
    <>
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
                      <label className="product__size">
                        {t("product.size")}
                      </label>

                      <select
                        name=""
                        id=""
                        className="product__select"
                        onChange={(e) => changeSize(e, item.data.productId)}
                        value={item.size}
                      >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                      </select>
                    </Grid>
                    <Grid item xs className={classes.size}>
                      <label className="product__quantity">
                        {t("product.quantity")}
                      </label>

                      <Quantity
                        setQuantityFn={(key) =>
                          setQuantityFn(key, item.data.productId)
                        }
                        key={item.data.productId}
                      />
                    </Grid>
                    <Grid item xs className={classes.size}>
                      <label className="product__label">
                        {t("product.freeDelivery")}:
                      </label>
                      <p className="product__deliverydate">{deliveryDate}</p>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.sellingPrice}
                    >
                      ₹{item.data.sellingPrice}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container className={classes.buttonGridContainer}>
                <Grid item xs={5} className={classes.removeBtnGrid}>
                  <Button className={classes.button}>Remove</Button>
                </Grid>

                <Grid item xs={7}>
                  <Button className={classes.button}>Add to wish list</Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      ))}
    </>
  );
}

export default CartItems;
