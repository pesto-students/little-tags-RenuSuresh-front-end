import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  iconColor: {
    color: "#03045e",
    fontSize: "0.8em",
  },
}));

export default function MenuItems({ wishlist }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openHistory = () => {
    history.push("/history");
    setAnchorEl(null);
  };

  const openWishlist = () => {
    history.push("/wishlist");
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="end"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon className={classes.iconColor} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={openHistory}>Order History</MenuItem>
        <Badge badgeContent={wishlist} color="default">
          <MenuItem onClick={openWishlist}>Wishlist</MenuItem>
        </Badge>
      </Menu>
    </div>
  );
}
