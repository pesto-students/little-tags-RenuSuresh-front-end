import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Category.css";
import { Checkbox, FormLabel, FormControl, FormControlLabel, FormGroup, Grid } from "@material-ui/core/";

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
        </FormControl>
      </Grid>
    </div>
  );
}

export default CheckBoxesGroup;
