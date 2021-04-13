import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Category.css";
import {
  Checkbox,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { SET_FILTER } from "../../constant/properties";

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
  inputCheckbox: {
    color: "#0c0351",
    "&:hover": {
      color: "#0c0351",
      backgroundColor: "#07156633",
    },
    "&:checked": {
      color: "#0c0351",
    },
  },
}));
function CheckBoxesGroup() {
  const [brand, setBrand] = React.useState([]);
  const dispatch = useDispatch();

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
  dispatch({ type: SET_FILTER, data: brand });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item md={3} lg={3}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Brand</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value="nike"
                  className={classes.inputCheckbox}
                />
              }
              label="nike"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value="puma"
                  className={classes.inputCheckbox}
                />
              }
              label="puma"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value="dressberry"
                  className={classes.inputCheckbox}
                />
              }
              label="dressberry"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value="octave"
                  className={classes.inputCheckbox}
                />
              }
              label="octave"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value="roadster"
                  className={classes.inputCheckbox}
                />
              }
              label="roadster"
            />
          </FormGroup>
        </FormControl>
      </Grid>
    </div>
  );
}

export default CheckBoxesGroup;
