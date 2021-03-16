import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";
import { useTranslation } from "react-i18next";

import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import { createSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import "./AddressModal.css";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#0c0351",
    fontSize: "1.1em",
    fontWeight: "600",
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
  },
  horizontal: {
    minWidth: "-webkit-fill-available",
  },
  horizontalFull: {
    minWidth: "-webkit-fill-available",
    height: "0.6em",
  },
  formRoot: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(2),
      //   width: 200,
    },
  },
  inputForm: {
    width: "-webkit-fill-available",
    fontSize: "1em",
    "& label": {
      fontSize: "0.7em",
    },
    "& legend": {
      fontSize: "0.5em",
    },
  },
  labelAddress: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(3),
    textTransform: "upperCase",
    fontSize: "0.8em",
    fontWeight: "600",
    color: "#515151",
  },
  dialogAddress: {
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);

function AddAddressModal({ handleAddAddressClose }) {
  const [t] = useTranslation("common");
  const dispatch = useDispatch();
  const commAddress = useSelector(allSelectors);
  const classes = useStyles();

  const handleClose = () => {
    handleAddAddressClose();
  };

  return (
    <React.Fragment>
      <Dialog
        maxWidth={"sm"}
        open={true}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          <span
            style={{
              color: "var(--clr-primary)",
              fontWeight: "600",
            }}
          >
            ADD SHIPPING ADDRESS
          </span>

          <Button onClick={handleClose} color="primary">
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <form className={classes.formRoot} noValidate autoComplete="off">
            <Typography
              variant="label"
              component="label"
              className={classes.labelAddress}
            >
              Add Contact Details
            </Typography>
            <TextField
              label="Name*"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              className={classes.inputForm}
            />
            <TextField
              label="Mobile No. *"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              className={classes.inputForm}
            />

            <Typography
              variant="label"
              component="label"
              className={classes.labelAddress}
            >
              Address
            </Typography>
            <TextField
              label="Address (House No., Area)*"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              className={classes.inputForm}
            />
            <TextField
              label="Locality/Town*"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              className={classes.inputForm}
            />
            <TextField
              label="City*"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              className={classes.inputForm}
            />
            <TextField
              label="State*"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              className={classes.inputForm}
            />
            <TextField
              label="Pin Code*"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              className={classes.inputForm}
            />
          </form>
        </DialogContent>
        <DialogActions className={classes.dialogAddress}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
          >
            <span className="address__placeOrder">SAVE</span>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddAddressModal;
