import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressModalIndex from "../AddressModal";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

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
  },
}));

const allSelectors = createSelector(
  (state) => state,
  (state) => state
);

function AddressBar() {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const commAddress = useSelector(allSelectors);
  let cartAddress = {};

  const handleProfileMenuOpen = (event) => {
    setIsLoggedIn(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsLoggedIn(false);
    setAnchorEl(null);
  };

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
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.addressCard}>
          <Typography variant="h5" component="h2" className={classes.deliverTo}>
            Deliver To
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
      {isLoggedIn && <AddressModalIndex handleMenuClose={handleMenuClose} />}
    </>
  );
}

export default AddressBar;
