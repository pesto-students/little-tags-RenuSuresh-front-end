import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "2rem 2rem 2rem 2rem",
    padding: theme.spacing(2),
    "@media only screen and (max-width: 770px)": {
      width: "80%",
    },
  },

  deliverTo: {
    marginBottom: "0.6em",
    textTransform: "capitalize",
    fontSize: "0.9em",
    color: "#184f80",
    fontWeight: "600",
  },
}));
const allSelectors = createSelector(
  (state) => state,
  (state) => state
);
function Address() {
  const classes = useStyles();
  const [t] = useTranslation("common");
  const commAddress = useSelector(allSelectors);

  let cartAddress = {};

  const addr = commAddress.addressReducer.selectedAddress.id;
  if (addr) {
    cartAddress = commAddress.addressReducer.selectedAddress;
  } else {
    const defaultaddr = commAddress.addressReducer.addressData.filter(
      (add) => add.default
    );
    cartAddress = defaultaddr[0];
  }

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.addressCard}>
          <Typography variant="h5" component="h2" className={classes.deliverTo}>
            SELECTED ADDRESS
          </Typography>

          <>
            <Typography variant="body2" component="p">
              <span className={classes.name}>{cartAddress.name}</span>
            </Typography>
            <Typography variant="body2" component="p">
              <span>{cartAddress.address}</span>
            </Typography>
            <Typography variant="body2" component="p">
              <span>{cartAddress.mobile}</span>
            </Typography>
          </>
        </CardContent>
      </Card>
    </div>
  );
}

export default Address;
