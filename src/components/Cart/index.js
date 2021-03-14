import React, { useContext, createContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AddressBar from "./AddressBar";
import CartItems from "./CartItems";
import Grid from "@material-ui/core/Grid";
import "./Cart.css";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";

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
    margin: "0rem 2rem 2rem 2rem",
  },
}));
export const CartContext = createContext(null);
function CartIndex() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid container xs={12} sm={12} md={7}>
          <Grid item md={12} xs={12}>
            <AddressBar />
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} md={7}>
          <CartItems />
        </Grid>

        <Grid container xs={12} md={5}>
          <Grid item md={12} sm={12} xs={12} className={classes.subtotalMain}>
            <Subtotal />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CartIndex;
