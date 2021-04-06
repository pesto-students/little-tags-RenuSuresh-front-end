import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Rating } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import "./Product.css";
import { useTranslation } from "react-i18next";
import Quantity from "./Quantity";
import { useDispatch } from "react-redux";
import { SET_CART_ITEM, ERRORS, SELECT_SIZE } from "../../constant/properties";

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
  },
  gridContainer: {
    justifyContent: "center",
  },
  gridItem: {
    display: "flex",
    margin: "2rem 3rem",
    maxWidth: "88%",
    height: "fit-content",
  },
  button: {
    marginBottom: "1rem",
    marginRight: "2rem",
    backgroundColor: "var(--clr-primary)",
    color: "white",
    fontWeight: 600,
    borderRadius: 0,
    "@media (min-width: 600px)": {
      marginBottom: "1rem",
    },
    "&:disabled": {
      backgroundColor: "#969798",
    },
  },
  button_wishlist: {
    marginBottom: "1rem",
    marginRight: "2rem",
    backgroundColor: "#d5d4d4",
    color: "black",
    borderRadius: 0,

    "@media (min-width: 600px)": {
      marginBottom: "1rem",
    },
    "&:disabled": {
      backgroundColor: "#969798",
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
  const dispatch = useDispatch();
  const [size, setSize] = useState(SELECT_SIZE);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [enableAddBtn, setEnableAddBtn] = useState(true);
  const [openSnackBar, setOpenSnackBar] = useState(false);

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
    const productDetails = product.productReducer.productData;
    setProductDetails(productDetails);
    setImage(productDetails.image);
    let cartItem = product.cartReducer.cart;

    const cartItems = cartItem.filter(
      (item) => item.data.productId === productDetails.productId
    );

    if (cartItems.length > 0) {
      setEnableAddBtn(false);
    } else {
      setEnableAddBtn(true);
    }
  }, [product.productReducer.productData, product.cartReducer.cart]);

  const changeImage = (image) => {
    setImage(image);
  };

  const setQuantityFn = (qty) => setQuantity(qty + 1);

  const addToCartHandle = () => {
    const dispatchCartDetails = {
      data: product.productReducer.productData,
      size: size,
      quantity: quantity,
    };

    if (size !== SELECT_SIZE) {
      dispatch({
        type: SET_CART_ITEM,
        data: dispatchCartDetails,
      });
      setOpenSnackBar(true);
      setSize(SELECT_SIZE);
    } else {
      setError(ERRORS.SELECT_SIZE_ERROR);
    }
  };

  const changeSize = (e) => {
    setSize(e.target.value);
    setError(null);
  };
  const productImages = (
    <Grid item xs={6} sm={3} className={classes.gridItem}>
      <div className="product__subimages">
        {productDetails.subImages &&
          productDetails.subImages.map((subimage, i) => (
            <div
              style={{ gridColumnEnd: "span 3", marginBottom: "1rem" }}
              onClick={() => changeImage(subimage)}
              key={i}
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
  );

  const productDesc = (
    <Grid item xs={6} sm={4} className={classes.gridItem}>
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
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <Typography variant="h6">
            {productDetails.averageRating}/{productDetails.totalRating}
          </Typography>
        </div>
        <div>
          <>
            <div className="product__div">
              <p
                style={{
                  color: "#8E8A8A",
                  fontSize: "1.25rem",
                }}
              >
                MRP:
              </p>
              <p
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                  color: "#8E8A8A",
                  fontSize: "1.25rem",
                  marginRight: "1em",
                }}
              >
                ₹{productDetails.actualPrice}
              </p>
              <p
                size="small"
                style={{
                  color: "#c70000",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                ₹{productDetails.sellingPrice}
              </p>
            </div>
          </>
        </div>
        <div className="product__div">
          <label className="product__label">{t("product.yourSavings")}:</label>
          <p>
            {(
              productDetails.actualPrice - productDetails.sellingPrice
            ).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}{" "}
            ({productDetails.discountPercentage} % {t("product.off")})
          </p>
        </div>

        <div
          className="product__div"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "baseline",
          }}
        >
          <label className="product__label" style={{ marginBottom: "0.5em" }}>
            {t("product.description")}:
          </label>
          <p className="product__descr">{productDetails.description}</p>
        </div>
        <div className="product__div">
          <label className="product__label">{t("product.freeDelivery")}:</label>
          <p className="product__deliverydate">{deliveryDate}</p>
        </div>
        <div className="product__div">
          <label className="product__label">
            {t("product.fastestDelivery")}:
          </label>
          <p>{t("product.tomorrow")} 3pm</p>
        </div>
        <div className="product__div">
          <label className="product__size">{t("product.size")}</label>

          <select
            name=""
            id=""
            className="product__select"
            onChange={changeSize}
            value={size}
          >
            <option>Select size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>

          <label className="product__quantity">{t("product.quantity")}</label>
          <Quantity setQuantityFn={setQuantityFn} quantity={quantity} />
        </div>
        {error && <p className="product__error">{error}</p>}

        <div className="product__btn">
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            startIcon={<LocalMallIcon />}
            onClick={addToCartHandle}
            disabled={!enableAddBtn}
          >
            <span>{t("product.addToBag")}</span>
          </Button>
          <Button variant="contained" className={classes.button_wishlist}>
            <span>{t("product.addToWishlist")}</span>
          </Button>
        </div>
      </div>
    </Grid>
  );
  return (
    <div className="product__container">
      <div>
        <Grid container className={classes.gridContainer}>
          {productImages}
          {productDesc}
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openSnackBar}
          onClose={() => setOpenSnackBar(false)}
          autoHideDuration={2000}
        >
          <SnackbarContent
            style={{
              backgroundColor: "green",
            }}
            message={<span id="client-snackbar">Product Added in Bag</span>}
          />
        </Snackbar>
      </div>
    </div>
  );
}

export default Product;
