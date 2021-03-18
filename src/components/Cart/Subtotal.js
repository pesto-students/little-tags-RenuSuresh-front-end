import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    height: "fit-content",
    width: "100%",
    padding: "0em 2em 1.5em 2em",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  subtotalText: {
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#0c0351",
    marginBottom: "1.5em",
  },
  qty: {
    fontWeight: "600",
    fontSize: "1.1em",
    marginBottom: "1.5em",
    "@media only screen and (max-width: 769px)": {
      fontSize: "0.8em",
    },
  },
  totalAmount: {
    fontSize: "1.5em",
    color: "#0c0351",
    fontWeight: "600",
    "@media only screen and (max-width: 769px)": {
      fontSize: "1.2em",
    },
  },
  button: {
    backgroundColor: "#0c0351",
    fontSize: "1.1em",
    fontWeight: "600",
  },
});

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);
export default function Subtotal() {
  const classes = useStyles();
  const cart = useSelector(allSelectors);
  const [totalItems, setTotalItems] = useState(0);
  const [totalMrp, setTotalMrp] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [t] = useTranslation("common");
  const history = useHistory();

  useEffect(() => {
    let count = 0;
    let totalmrp = 0;
    let sellingPrice = 0;
    cart.cartReducer.cart.map((item) => {
      count += item.quantity;
      totalmrp += item.data.actualPrice * item.quantity;
      sellingPrice += item.data.sellingPrice * item.quantity;
    });
    setTotalItems(count);
    setTotalMrp(totalmrp);
    setTotalDiscount(totalmrp - sellingPrice);
    setTotalAmount(sellingPrice);
  }, [cart]);

  const goToPayment = () => {
    history.push("/payment");
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          className={classes.subtotalText}
        >
          {t("cart.subtotal")}
        </Typography>

        <Typography variant="body2" component="p" className={classes.qty}>
          {t(`cart.bagTotalQty`)} ({totalItems})
        </Typography>
        <Typography variant="body2" component="p" className={classes.qty}>
          <label>{t(`cart.totalMrp`)}</label>
          <p>
            {totalMrp.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </p>
        </Typography>
        <Typography variant="body2" component="p" className={classes.qty}>
          <label>{t(`cart.totalDiscount`)}</label>
          <p>
            -
            {totalDiscount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </p>
        </Typography>
        <Typography variant="body2" component="p" className={classes.qty}>
          <label>{t(`cart.convenienceFee`)}</label>
          <p>{t("cart.free")}</p>
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.totalAmount}
        >
          <label>{t(`cart.totalAmount`)}</label>
          <p>
            {totalAmount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.button}
          onClick={goToPayment}
        >
          <span className="cart__placeOrder">{t(`cart.placeOrder`)}</span>
        </Button>
      </CardActions>
    </Card>
  );
}
