import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { SET_PRODUCT } from "../../constant/properties";
import "./Product.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "20%",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  gridContainer: {
    width: "100%",
    padding: theme.spacing(2),
  },
  Card: {
    width: "100%",
    height: "100%",
  },
  CardActionArea: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  cardImage: {
    height: "318px",
    width: "300px",
  },
  cardComponentCustom: {
    width: "inherit",
  },
}));

function Category() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const categoryData = useSelector((state) => {
    const data = state.categoryReducer.categoryData;
    return data.slice(0, 8);
  });
  const getProduct = (mapProduct) => {
    dispatch({ type: SET_PRODUCT, data: mapProduct });

    history.push(`/product?=${mapProduct.title}`);
  };
  return (
    <div>
      <h1 className="product__h1">Customer also View</h1>
      <Grid container spacing={3} className={classes.gridContainer}>
        {categoryData.map((category) => (
          <Grid item xs={12} sm={3}>
            <Card className={classes.Card} onClick={() => getProduct(category)}>
              <CardActionArea className={classes.CardActionArea}>
                <CardMedia
                  component="img"
                  alt={category}
                  image={category.image}
                  className={classes.cardImage}
                />
                <CardContent className={classes.cardComponentCustom}>
                  <Typography gutterBottom component="h2">
                    {category.title}
                  </Typography>

                  <Rating
                    name="half-rating-read"
                    size="small"
                    defaultValue={category.averageRating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography>
                    {category.averageRating}/{category.totalRating}
                  </Typography>

                  <CardActions>
                    <text size="small" color="primary">
                      ₹{category.sellingPrice}
                    </text>
                    <text
                      style={{
                        textDecorationLine: "line-through",
                        textDecorationStyle: "solid",
                      }}
                    >
                      ₹{category.actualPrice}
                    </text>
                    <text size="small" color="primary">
                      {category.discountPercentage} % off
                    </text>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Category;
