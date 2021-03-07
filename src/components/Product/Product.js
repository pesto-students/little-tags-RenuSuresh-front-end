import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Rating } from "@material-ui/lab";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import "./Product.css";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      height: "35ch",
      minWidth: "25ch",
    },
    button: {
      margin: theme.spacing(3),
    },
  },
}));

function Product() {
  const product = useSelector((state) => state);
  const [productDetails, setProductDetails] = useState({});
  const [image, setImage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const classes = useStyles();
  const [t] = useTranslation("common");

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

    setProductDetails(product.productReducer.productData);
    setImage(product.productReducer.productData.image);
  }, []);

  const changeImage = (image) => {
    setImage(image);
  };
  return (
    <div className="product__container">
      <div>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <div className="product__subimages">
              {productDetails.subImages &&
                productDetails.subImages.map((subimage) => (
                  <div
                    style={{ gridColumnEnd: "span 3", marginBottom: "1rem" }}
                    onClick={() => changeImage(subimage)}
                  >
                    <img
                      src={subimage}
                      alt={productDetails.title}
                      style={{
                        objectFit: "contain",
                        height: "2.75rem",
                      }}
                    />
                  </div>
                ))}
            </div>
            <Paper className={classes.paper} elevation={3}>
              <img
                src={image}
                alt={productDetails.title}
                className="product__image"
              />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <div style={{ width: "100%" }}>
              <div>
                <Typography gutterBottom variant="h3">
                  {productDetails.title}
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <Rating
                  name="half-rating-read"
                  size="small"
                  defaultValue={productDetails.averageRating}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="h6">
                  {productDetails.averageRating}/{productDetails.totalRating}
                </Typography>
              </div>
              <div>
                <CardActions>
                  <text style={{ color: "#8E8A8A", fontSize: "1.25rem" }}>
                    MRP:
                  </text>
                  <text
                    style={{
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                      color: "#8E8A8A",
                      fontSize: "1.25rem",
                    }}
                  >
                    ₹{productDetails.actualPrice}
                  </text>
                  <text
                    size="small"
                    style={{
                      color: "#c70000",
                      fontSize: "2rem",
                      fontWeight: "700",
                    }}
                  >
                    ₹{productDetails.sellingPrice}
                  </text>
                </CardActions>
              </div>
              <div className="product__div">
                <label className="product__div">
                  {t("product.yourSavings")}:
                </label>
                <text>
                  ₹{productDetails.actualPrice - productDetails.sellingPrice} (
                  {productDetails.discountPercentage} % {t()})
                </text>
              </div>
              <div className="product__div">
                <label className="product__label">
                  {t("product.freeDelivery")}:
                </label>
                <text className="product__deliverydate">{deliveryDate}</text>
              </div>
              <div className="product__div">
                <label className="product__label">
                  {t("product.fastestDelivery")}:
                </label>
                <text>{t("product.tomorrow")} 3pm</text>
              </div>
              <div className="product__div">
                <label className="product__size">{t("product.size")}</label>
                <select name="" id="" className="product__select">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
                <label className="product__quantity">
                  {t("product.quantity")}
                </label>
                <select name="" id="" className="product__select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="product__div">
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={classes.button}
                  startIcon={<LocalMallIcon />}
                >
                  <span>{t("product.addToBag")}</span>
                </Button>
                <Button variant="contained" className={classes.button}>
                  <span>{t("product.addToWishlist")}</span>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Product;
