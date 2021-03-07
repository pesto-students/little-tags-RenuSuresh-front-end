import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Rating } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";

function Row({ category }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://arrow-shopping-site.herokuapp.com/api/product")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.data.productList);
      });
  }, []);

  const categoryRow = product.filter((Product) => Product.category === category);
  const useStyles = makeStyles({
    root: {
      paddingLeft: "20%",
      paddingTop: "5%",
      paddingBottom: "5%",
    },
    Card: {
      width: "100%",
      height: "100%",
    },
    CardActionArea: {
      height: "100%",
    },
  });

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} className={classes.root} justify="center">
        {categoryRow.map((mapProduct) => (
          <Grid spacing={3} item xs={12} sm={6} md={4}>
            <Card className={classes.Card}>
              <CardActionArea className={classes.CardActionArea}>
                <CardMedia component="img" alt={category} image={mapProduct.image} />
                <CardContent>
                  <Typography gutterBottom component="h2">
                    {mapProduct.title}
                  </Typography>

                  <Rating
                    name="half-rating-read"
                    size="small"
                    defaultValue={mapProduct.averageRating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography>
                    {mapProduct.averageRating}/{mapProduct.totalRating}
                  </Typography>

                  <CardActions>
                    <text size="small" color="primary">
                      ₹{mapProduct.sellingPrice}
                    </text>
                    <text style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>
                      ₹{mapProduct.actualPrice}
                    </text>
                    <text size="small" color="primary">
                      {mapProduct.discountPercentage} % off
                    </text>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Row;
