import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { ListItemSecondaryAction } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    margin: "2rem 2rem 2rem 2rem",
    paddingTop: "0px",
    "@media only screen and (max-width: 770px)": {
      marginLeft: "1.5em",
      margin: "0.5rem 2rem 0rem 2rem",
    },
  },

  addressCard: {
    paddingLeft: 40,
  },
  name: {
    fontWeight: 600,
  },
  deliverTo: {
    marginBottom: "0.6em",
    textTransform: "capitalize",
    fontSize: "2em",
    color: "#0c0351",
    fontWeight: "600",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "50%",
    maxHeight: "8em",
  },
  inline: {
    display: "inline",
    fontSize: "0.8em",
  },
  deliveryDate: {
    fontSize: "0.8em",
    fontWeight: "600",
    color: "green",
    display: "inline",
  },

  priceSection: {
    margin: "0rem 0rem 0rem 2rem",
    padding: "0rem 0rem 0rem 16px",
  },
  priceDetails: {
    margin: "1rem 2rem 0rem 2rem",
  },
  priceDetailsText: {
    fontSize: "0.9em",
    fontWeight: "600",
    color: "#184f80",
  },
  priceSectionText: {
    fontSize: "0.89em",
    color: "#535559",
  },

  totalAmount: {
    margin: "0rem 2rem 0rem 2rem",
  },
  totalAmountText: {
    fontSize: "0.9em",
    fontWeight: "600",
    color: "#184f80",
  },
  totalAmountAction: {
    fontSize: "0.89em",
    color: "#535559",
    fontWeight: "600",
  },
  titleText: {
    fontSize: "0.8em",
  },
}));

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);
function CheckoutDetails() {
  const classes = useStyles();
  const [deliveryDate, setDeliveryDate] = useState("");
  const cart = useSelector(allSelectors);

  const [totalItems, setTotalItems] = useState(0);
  const [totalMrp, setTotalMrp] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [t] = useTranslation("common");
  const history = useHistory();
  useEffect(() => {
    var t = new Date();
    t.setDate(t.getDate() + 2);
    var month = "0" + (t.getMonth() + 1);
    var date = "0" + t.getDate();
    month = month.slice(-2) - 1;
    date = date.slice(-2);
    var d = new Date(t.getFullYear(), month, date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    setDeliveryDate(d);
  }, []);

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
  return (
    <div>
      <Grid>
        <List className={classes.root}>
          <ListItem alignItems="flex-start" className={classes.priceDetails}>
            <ListItemText
              primary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.priceDetailsText}
                  >
                    IN BAG
                  </Typography>
                </>
              }
            />
          </ListItem>
          {cart.cartReducer.cart.map((item) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={item.data.image}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      component="body1"
                      variant="span"
                      className={classes.titleText}
                    >
                      {item.data.title}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        ESTIMATED DELIVERY
                      </Typography>{" "}
                      <Typography
                        component="span"
                        className={classes.deliveryDate}
                      >
                        {deliveryDate}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
          <ListItem alignItems="flex-start" className={classes.priceDetails}>
            <ListItemText
              primary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.priceDetailsText}
                  >
                    PRICE DETAILS ({totalItems})
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start" className={classes.priceSection}>
            <ListItemText
              primary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.priceSectionText}
                  >
                    Total MRP
                  </Typography>
                </>
              }
            />
            <ListItemSecondaryAction className={classes.priceSectionText}>
              {totalMrp.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })}
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem alignItems="flex-start" className={classes.priceSection}>
            <ListItemText
              primary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.priceSectionText}
                  >
                    Discount on MRP
                  </Typography>
                </>
              }
            />
            <ListItemSecondaryAction className={classes.priceSectionText}>
              -
              {totalDiscount.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })}
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem alignItems="flex-start" className={classes.priceSection}>
            <ListItemText
              primary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.priceSectionText}
                  >
                    Convenience Fee
                  </Typography>
                </>
              }
            />
            <ListItemSecondaryAction className={classes.priceSectionText}>
              Free
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start" className={classes.totalAmount}>
            <ListItemText
              primary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.totalAmountText}
                  >
                    Total Amount
                  </Typography>
                </>
              }
            />
            <ListItemSecondaryAction className={classes.totalAmountAction}>
              {totalAmount.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })}
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Grid>
    </div>
  );
}

export default CheckoutDetails;
