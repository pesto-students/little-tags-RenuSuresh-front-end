import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Category.css";
import { Checkbox, FormLabel, FormControl, FormControlLabel, FormGroup, Grid } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_PRODUCT } from "../../constant/properties";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "10px",
    padding: 0,
  },
  formControl: {
    margin: theme.spacing(5),
  },
  container: {},
}));
function CheckBoxesGroup() {
  const [brand, setBrand] = React.useState([]);
  const [price, setPrice] = React.useState([]);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  let url = "https://arrow-shopping-site.herokuapp.com/api/product?";
  if (brand.length != 0) {
    url = `${url}brand=${brand}&`;
  }
  let minPrice = 0,
    maxPrice = 0;

  if (price.length != 0) {
    if (price == "Below500") {
      minPrice = 0;
      maxPrice = 500;
    } else if (price == "500-1000") {
      minPrice = 500;
      maxPrice = 1000;
    } else if (price == "Above1000") {
      minPrice = 1000;
      maxPrice = 100000;
    }

    url = `${url}minPrice=${minPrice}&maxPrice=${maxPrice}&`;
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.data.productList);

        dispatch({ type: SET_PRODUCT, data: result.data.productList });
        setIsLoading(false);
      });
  }, [dispatch]);

  const handlePriceChange = (event) => {
    let target = event.target;

    setPrice((prevPrice) => {
      if (target.checked) return [...prevPrice, event.target.value];
      else {
        let index = price.indexOf(target.value);
        if (index !== -1) {
          prevPrice.splice(index, 1);
          return [...prevPrice];
        }
      }
    });
  };
  const handleChange = (event) => {
    let target = event.target;
    setBrand((prevBrand) => {
      if (target.checked) return [...prevBrand, event.target.value];
      else {
        let index = brand.indexOf(target.value);
        if (index !== -1) {
          prevBrand.splice(index, 1);
          return [...prevBrand];
        }
      }
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item md={3} lg={3}>
        <FormLabel component="legend">Filters</FormLabel>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Brand</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChange} value="nike" />} label="nike" />
            <FormControlLabel control={<Checkbox onChange={handleChange} value="puma" />} label="puma" />
            <FormControlLabel control={<Checkbox onChange={handleChange} value="dressberry" />} label="dressberry" />
            <FormControlLabel control={<Checkbox onChange={handleChange} value="octave" />} label="octave" />
            <FormControlLabel control={<Checkbox onChange={handleChange} value="roadster" />} label="roadster" />
          </FormGroup>

          <FormLabel component="legend">Price</FormLabel>

          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handlePriceChange} value="Below500" />} label="Below 500" />
            <FormControlLabel control={<Checkbox onChange={handlePriceChange} value="500-1000" />} label="500-1000" />
            <FormControlLabel
              control={<Checkbox onChange={handlePriceChange} value="Above1000" />}
              label="Above 1000"
            />
          </FormGroup>
        </FormControl>
      </Grid>
    </div>
  );
}

export default CheckBoxesGroup;
