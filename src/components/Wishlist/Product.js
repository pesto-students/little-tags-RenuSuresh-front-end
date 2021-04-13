import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import SyncIcon from "@material-ui/icons/Sync";
import { Rating } from "@material-ui/lab";
import { useTranslation } from "react-i18next";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import noitem from "../../assets/images/No Wishlist.webp";
import { useHistory } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import "./Wishlist.css";

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
    fontSize: "1.1em",
    fontWeight: "600",
    paddingRight: 10,
    color: "#146e27",
  },
  button: {
    backgroundColor: "#0c0351",
    fontSize: "0.9em",
    fontWeight: "600",
    margin: "0em 0em 0.5em 0.4em",
    borderRadius: 0,
    "@media only screen and (max-width: 770px)": {
      width: "60%",
      marginLeft: "auto",

      margin: "0em 2em 5em 0em",
    },
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

  title: {
    color: "#0c0351",
    fontFamily: "Open sans",
    fontWeight: 600,
    fontSize: "1.25em",
    textAlign: "initial",
  },
  deliveredOn: {
    marginLeft: "1.25em",
    marginTop: "1.25em",
  },
  deliveredOnTitle: {
    fontSize: "1.2em",
    fontWeight: 600,
  },
  deliveredOnDate: {
    fontSize: "1.2em",
    fontWeight: 600,
    marginLeft: "0.5em",
    color: "#3d459b",
  },
  buyAgain: {
    fontSize: "1em",
    margin: 4,
  },
  rightButtons: {
    display: "grid",
  },
  rightbutton: {
    margin: "0.4em",
    textTransform: "Capitalize",
    boxShadow: "none",
    border: "1px solid #a29ea7",
    height: 25,
  },
  actualPrice: {
    textDecorationLine: "line-through",
    color: "#8E8A8A",
    paddingRight: 10,
  },
}));

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);
function Product() {
  const classes = useStyles();
  const [t] = useTranslation("common");
  const cart = useSelector(allSelectors);
  const { cartReducer } = cart;
  const { wishlist } = cartReducer;
  const history = useHistory();

  const backToHome = () => history.push("/");
  console.log("wishlist", wishlist);
  return (
    <div className="wishlist__product">
      <Grid container xs={12} sm={12} md={8}>
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <Grid item md={12} xs={12} key={item.data.productId}>
              <div className={classes.root}>
                <Paper className={classes.paper} elevation={3}>
                  <Grid item xs={12}>
                    <Grid container xs={12} md={8}>
                      <Grid item xs={12} className={classes.prodContainer}>
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
                                {item.data.title}| {item.data.brand}
                              </Typography>
                            </Grid>
                            <Grid item xs className={classes.size}>
                              <Rating
                                name="half-rating-read"
                                size="small"
                                defaultValue={item.data.averageRating}
                                precision={0.5}
                                readOnly
                              />
                            </Grid>
                            <Grid item xs className={classes.size}>
                              <Typography
                                component="body"
                                variant="p"
                                className={classes.actualPrice}
                              >
                                {item.data.actualPrice.toLocaleString("en-IN", {
                                  maximumFractionDigits: 2,
                                  style: "currency",
                                  currency: "INR",
                                })}
                              </Typography>
                              <Typography
                                component="body"
                                variant="p"
                                className={classes.sellingPrice}
                              >
                                {item.data.sellingPrice.toLocaleString(
                                  "en-IN",
                                  {
                                    maximumFractionDigits: 2,
                                    style: "currency",
                                    currency: "INR",
                                  }
                                )}
                              </Typography>
                              <Typography component="body" variant="p">
                                ({item.data.discountPercentage}%)
                              </Typography>
                            </Grid>
                            <Grid item xs className={classes.size}>
                              <label className="wishlist__product__label">
                                {t("product.freeDelivery")}
                              </label>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4} className={classes.rightButtons}>
                      <Grid item direction="column" justify="center">
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          startIcon={<LocalMallIcon />}
                        >
                          <span className="product__buyagain">
                            {/* <SyncIcon className={classes.buyAgain} /> */}
                            Add to Bag
                          </span>
                        </Button>
                        <Button
                          variant="contained"
                          className={classes.rightbutton}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} justify="center">
            <div className="wishlist__empty">
              <img
                src={noitem}
                alt="no item in cart"
                className="cart__emptyImage"
              />

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
          </Grid>
        )}
      </Grid>
      {}
    </div>
  );
}

export default Product;
