import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressModalIndex from "../AddressModal";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { SET_SELECTED_ADDRESS } from "../../constant/properties";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "2rem 2rem 2rem 2rem",
    padding: theme.spacing(2),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  addressCard: {
    paddingLeft: 40,
  },
  name: {
    fontWeight: 600,
  },
  deliverTo: {
    marginBottom: "0.6em",
    textTransform: "capitalize",
    fontSize: "2em",
    color: "#0c0351",
    fontWeight: "600",
  },
}));

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);

function AddressBar() {
  const classes = useStyles();
  const [isAddressModal, setAddressModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const commAddress = useSelector(allSelectors);
  const [t] = useTranslation("common");
  const dispatch = useDispatch();

  let cartAddress = {};

  const handleProfileMenuOpen = (event) => {
    setAddressModal(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAddressModal(false);
    setAnchorEl(null);
  };

  cartAddress = commAddress.addressReducer.selectedAddress;

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.addressCard}>
          <Typography variant="h5" component="h2" className={classes.deliverTo}>
            {t(`cart.deliverTo`)}
          </Typography>

          <>
            <Typography variant="body2" component="p">
              <span className={classes.name}>{cartAddress.name}</span>
            </Typography>
            <Typography variant="body2" component="p">
              <span>
                {cartAddress.address1}, {cartAddress.town}, {cartAddress.city},{" "}
                {cartAddress.state}- {cartAddress.pincode}
              </span>
            </Typography>
            <Typography variant="body2" component="p">
              <span>{cartAddress.mobile}</span>
            </Typography>
          </>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={handleProfileMenuOpen}
          >
            Add/ Change Address
          </Button>
        </CardActions>
      </Card>
      {isAddressModal && (
        <AddressModalIndex handleMenuClose={handleMenuClose} />
      )}
    </>
  );
}

export default AddressBar;
