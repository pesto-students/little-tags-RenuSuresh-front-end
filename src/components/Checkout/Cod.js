import { Card, CardContent, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

const useStyle = makeStyles((theme) => ({
  deliveryDate: {
    fontSize: "1.25em",
    fontWeight: "600",
    color: "gray",
    display: "inline",
    letterSpacing: "2em",
  },
  inputForm: {
    width: "-webkit-fill-available",
    margin: "2em 0em 1em 0em",
    fontSize: "1em",
    "& label": {
      fontSize: "0.7em",
    },
    "& legend": {
      fontSize: "0.5em",
    },
  },
}));
function Cod() {
  const classes = useStyle();
  const random = Math.floor(100000 + Math.random() * 900000);

  return (
    <div>
      <Card>
        <CardContent>
          <Typography component="span" className={classes.deliveryDate}>
            {random}
          </Typography>
        </CardContent>
      </Card>

      <TextField
        placeholder="Enter above text"
        id="outlined-size-small"
        variant="outlined"
        size="small"
        className={classes.inputForm}
      />
    </div>
  );
}

export default Cod;
