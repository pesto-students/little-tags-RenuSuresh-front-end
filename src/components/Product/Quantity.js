import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    "@media (min-width: 319px)": {
      minWidth: "30px",
    },
  },
  buttonIncDec: {
    marginLeft: "1em",
  },
}));
function Quantity() {
  const classes = useStyles();
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div>
      <ButtonGroup size="small" className={classes.buttonIncDec}>
        <Button onClick={handleIncrement} className={classes.buttonGroup}>
          +
        </Button>

        <Button disabled className={classes.buttonGroup}>
          {counter}
        </Button>
        <Button onClick={handleDecrement} className={classes.buttonGroup}>
          -
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Quantity;
