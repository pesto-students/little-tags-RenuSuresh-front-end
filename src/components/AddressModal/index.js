import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";
import { useTranslation } from "react-i18next";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Provider, useSelector, useDispatch } from "react-redux";
import { SET_USER } from "../../constant/properties";
import Radio from "@material-ui/core/Radio";
import { createSelector } from "reselect";
import { SET_SELECTED_ADDRESS } from "../../constant/properties";
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
}));

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);

function AddressModalIndex({ handleMenuClose }) {
  const [t] = useTranslation("common");
  const dispatch = useDispatch();
  const commAddress = useSelector(allSelectors);
  const classes = useStyles();

  const handleClose = () => {
    handleMenuClose();
  };
  const radioButtonChange = (e) => {
    dispatch({
      type: SET_SELECTED_ADDRESS,
      id: e.target.value,
    });
    setTimeout(function () {
      handleClose();
    }, 1000);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={true}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          <span style={{ color: "var(--clr-primary)", fontWeight: "600" }}>
            CHANGE DELIVERY ADDRESS
          </span>

          <Button onClick={handleClose} color="primary">
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <List className={classes.root}>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
              onChange={radioButtonChange}
            >
              {commAddress.addressReducer.addressData.map((address, i) => (
                <>
                  <ListItem alignItems="flex-start">
                    <FormControlLabel
                      value={address.id}
                      control={<Radio color="primary" />}
                    />

                    <ListItemText
                      primary={
                        <span className={classes.name}>{address.name}</span>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {address.address}
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            <br />
                            {address.mobile}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </RadioGroup>
          </List>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
          >
            <span className="address__placeOrder">
              {t(`address.addAddress`)}
            </span>
          </Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default AddressModalIndex;
