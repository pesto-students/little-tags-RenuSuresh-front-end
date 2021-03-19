import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CreditCardIcon from "@material-ui/icons/CreditCard";
const useStyles = makeStyles((theme) => ({
  cardCreditDebitText: {
    fontSize: "0.9em",
    fontWeight: "600",
    color: "#184f80",
    margin: "0rem 0rem 2rem 0rem",
  },

  inputForm: {
    width: "-webkit-fill-available",
    margin: "0.5em 0em 1em 0em",
    fontSize: "1em",
    "& label": {
      fontSize: "0.7em",
    },
    "& legend": {
      fontSize: "0.5em",
    },
  },
  cardIcon: {
    color: "#bbbfd3",
  },
}));

function Card() {
  const classes = useStyles();

  return (
    <div>
      <Typography
        component="span"
        variant="body2"
        className={classes.cardCreditDebitText}
      >
        CREDIT/ DEBIT CARD
      </Typography>
      <form>
        <TextField
          label="Card Number"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          className={classes.inputForm}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CreditCardIcon className={classes.cardIcon} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Name on Card"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          className={classes.inputForm}
        />

        <TextField
          label="Valid Thru (MM/YY)"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          className={classes.inputForm}
        />
      </form>
    </div>
  );
}

export default Card;
