import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Address from "./Address";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,

    backgroundColor: "#efefef",
  },
}));

export default function Orders() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Address />
            <Product />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
