import React from "react";
import Radio from "@material-ui/core/Radio";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { useSelector } from "react-redux";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import { createSelector } from "reselect";
import { PAY_WITH_UPI } from "../../constant/properties";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#0c0351",
    fontSize: "1.1em",
    fontWeight: "600",
    marginTop: "3em",
  },
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  name: {
    fontWeight: 600,
    fontSize: "0.85em",
    color: "#184f80",
  },
  horizontal: {
    minWidth: "-webkit-fill-available",
  },
  horizontalFull: {
    minWidth: "-webkit-fill-available",
    height: "0.6em",
  },
  image: {
    width: 80,
    height: 80,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "50%",
    maxHeight: "4em",
  },
  radioBtn: {
    marginRight: 0,
  },
}));

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);

function Upi() {
  const classes = useStyles();
  const commAddress = useSelector(allSelectors);

  return (
    <div>
      <List className={classes.root}>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
        >
          {PAY_WITH_UPI.map((method, i) => (
            <>
              <ListItem alignItems="flex-start">
                <FormControlLabel
                  value={method.type}
                  className={classes.radioBtn}
                  control={<Radio color="primary" size="small" />}
                />
                <ListItemAvatar>
                  <img
                    className={classes.img}
                    alt={method.type}
                    src={method.image}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={<span className={classes.name}>{method.type}</span>}
                />
              </ListItem>
            </>
          ))}
        </RadioGroup>
      </List>
    </div>
  );
}

export default Upi;
