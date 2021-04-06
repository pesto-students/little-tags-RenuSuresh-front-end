import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Product from "./Product";
import "./Wishlist.css";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 600,
    color: "#0a228d",
    fontSize: "1.5em",
    marginLeft: "1.5em",
    marginBottom: "1.5em",
  },
}));
function WishlistIndex() {
  const classes = useStyles();
  return (
    <div className="wishlist">
      <div className="wishlist__title">
        <Grid container md={8}>
          <Grid item>
            <Typography component="body" variant="h5" className={classes.title}>
              Your Wishlist
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Product />
    </div>
  );
}

export default WishlistIndex;
