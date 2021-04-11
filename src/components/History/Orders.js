import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Address from "./Address";
import Product from "./Product";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,

    backgroundColor: "#efefef",
    marginTop: "1em",
  },
}));
const allSelectors = createSelector(
  (state) => state,
  (state) => state
);

export default function Orders() {
  const classes = useStyles();
  const reducers = useSelector(allSelectors);

  return (
    <div className={classes.root}>
      {reducers.historyReducer.historyData.map((history) => (
        <Grid container justify="center">
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Address
                address={history.address}
                deliveryDate={history.creationDate}
                totalAmount={history.totalAmount}
              />
              <Product
                products={history.productList}
                deliveredOn={history.estimatedDelivery}
              />
            </Paper>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
