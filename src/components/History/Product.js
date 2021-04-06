import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import SyncIcon from "@material-ui/icons/Sync";
import "./History.css";

const products = [
  {
    actualPrice: 1300,
    averageRating: 4.5,
    brand: "lenovo",
    category: "electronics",
    description:
      "Lenovo IdeaPad Slim 3i Intel Celeron N4020 15.6-inch HD Thin and Light Laptop (4GB/256GB SSD/Windows 10/Platinum Grey/1.7Kg), 81WQ003LIN",
    discountPercentage: 10,
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7488103/2019/8/22/7142624c-9184-47db-bf67-5610bd756c761566454100661-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-1.jpg",
    productId: 1,
    sellingPrice: 1170,
    subImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/37b78c45-6a06-43fd-8dae-0dafd06b2e3e1612887864214-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/747ff7a8-dbb8-4bb5-9fe7-a7844b55f7d41612887864237-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/358ce63c-4fcc-470c-983c-ec6992fd024f1612887864276-5.jpg",
    ],
    title: "Men Burgundy & Navy Blue Colourblocked Polo Collar T-shirt",
    totalRating: 50,
    deliveredOn: "1st February 2021",
  },
  {
    actualPrice: 1699,
    averageRating: 4.5,
    brand: "dressberry",
    category: "women",
    description: "Women Pink & Orange Floral Printed A-Line Dress from Harpa",
    discountPercentage: 55,
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/16/25f5b6a7-ce25-4e66-8a61-3aa2037b6c741600207614629-1.jpg",
    productId: 15,
    sellingPrice: 764,
    subImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/16/e698b1e1-07d3-446d-987f-bc8a75db18f91600207614701-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/16/b566836e-89c2-4495-b33e-7110d2434c441600207614771-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/16/59f13865-f642-4953-b9e6-7a362cc492031600207614895-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/16/be287303-c021-43ba-b5f4-72750ffb57651600207615024-7.jpg",
    ],
    title: "Women Pink & Orange Floral Printed A-Line Dress",
    totalRating: 50,
    deliveredOn: "1st February 2021",
  },
];

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

function Product() {
  const classes = useStyles();

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
                          {item.deliveredOn}
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
