import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import SyncIcon from "@material-ui/icons/Sync";
import "./History.css";

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
    fontSize: "1.25em",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#0c0351",
    fontSize: "0.9em",
    fontWeight: "600",
    margin: "1em 0em 5em 0em",
    width: "10em",
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
  size: {
    margin: "0.5rem 0.5rem 0.5rem 0rem",
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
    height: 35,
  },
}));

function Product({ products, deliveredOn }) {
  const classes = useStyles();
  const deliveryDate = new Date(deliveredOn);

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const estimatedDelivery = deliveryDate.toLocaleDateString("en-US", options);
  return (
    <div>
      <Grid container xs={12} sm={12} md={12}>
        {products.map((item) => (
          <Grid item md={12} xs={12} key={item.productId}>
            <div className={classes.root}>
              <Paper className={classes.paper} elevation={3}>
                <Grid item xs={12}>
                  <Grid container xs={12} md={8}>
                    <Grid item xs={12} className={classes.deliveredOn}>
                      <Grid item>
                        <Typography
                          component="h6"
                          variant="h6"
                          className={classes.deliveredOnTitle}
                        >
                          Delivered on
                        </Typography>

                        <Typography
                          component="h6"
                          variant="h6"
                          className={classes.deliveredOnDate}
                        >
                          {estimatedDelivery}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.prodContainer}>
                      <Grid item>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.img}
                            alt="complex"
                            src={item.image}
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
                              {item.title}
                            </Typography>
                          </Grid>
                          <Grid item xs className={classes.size}>
                            <Button
                              variant="contained"
                              color="secondary"
                              size="small"
                              className={classes.button}
                              // onClick={goToThankYou}
                            >
                              <span className="product__buyagain">
                                <SyncIcon className={classes.buyAgain} />
                                Buy again
                              </span>
                            </Button>
                          </Grid>
                        </Grid>

                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            className={classes.sellingPrice}
                          ></Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4} className={classes.rightButtons}>
                    <Grid item direction="column" justify="center">
                      <Button
                        variant="contained"
                        className={classes.rightbutton}
                      >
                        Write product review
                      </Button>
                      <Button
                        variant="contained"
                        className={classes.rightbutton}
                      >
                        Seller Feedback
                      </Button>
                      <Button
                        variant="contained"
                        className={classes.rightbutton}
                      >
                        Archive order
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Product;
