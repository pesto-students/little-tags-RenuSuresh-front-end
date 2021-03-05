import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Select from "@material-ui/core/Select";

import Logo from "./Logo";
import { LANG_OPTION } from "../../constant/properties";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import "./Header.css";
import LoginIndex from "../Login";
import Category from "./Category";
import { useSelector } from "react-redux";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    marginLeft: "1.25rem",
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  image: {
    width: "3rem",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
    [theme.breakpoints.up("md")]: {
      display: "contents",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function HeaderIndex() {
  const [t, i18n] = useTranslation("common");
  const [lang, setLang] = useState("en");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useSelector((state) => state);
  const login = t("header.user.login");
  const signup = t("header.user.signup");

  const changeLang = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
    handleMobileMenuClose();
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setIsLoggedIn(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setIsLoggedIn(false);
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      getContentAnchorEl={null}
      anchorEl={anchorEl}
      keepMounted
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <FormControl className={classes.formControl}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <i className="fa fa-globe" style={{ marginRight: "0.5rem" }}></i>

            <NativeSelect
              defaultValue={lang}
              onChange={(e) => changeLang(e)}
              value={lang}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {LANG_OPTION.map((lan, key) => (
                <option value={lan} key={key}>
                  {lan}
                </option>
              ))}
            </NativeSelect>
          </div>
        </FormControl>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ background: "white", height: "4.75rem", color: "black" }}
      >
        <Toolbar>
          <Logo />
          <Category />
          <Search />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <FormControl className={classes.formControl}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <i
                  className="fa fa-globe"
                  style={{ marginRight: "0.5rem" }}
                ></i>

                <NativeSelect
                  defaultValue={lang}
                  onChange={(e) => changeLang(e)}
                  value={lang}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {LANG_OPTION.map((lan, key) => (
                    <option value={lan} key={key}>
                      {lan}
                    </option>
                  ))}
                </NativeSelect>
              </div>
            </FormControl> */}
            <FormControl variant="filled" className={classes.formControl}>
              <i className="fa fa-globe custom-globe"></i>
              <Select
                native
                inputProps={{
                  name: "age",
                  id: "filled-age-native-simple",
                }}
                defaultValue={lang}
                onChange={(e) => changeLang(e)}
                value={lang}
              >
                {LANG_OPTION.map((lan, key) => (
                  <option value={lan} key={key}>
                    {lan}
                  </option>
                ))}
              </Select>
            </FormControl>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <AccountCircle />
                <label className="header__user__label">
                  {user.userReducer.userData
                    ? user.userReducer.userData
                    : `${login}/${signup}`}
                </label>
              </span>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <LocalMallIcon />
            </IconButton>
            <IconButton edge="end" aria-haspopup="true" color="inherit">
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {isLoggedIn && <LoginIndex handleMenuClose={handleMenuClose} />}
      {renderMobileMenu}
      {!isLoggedIn && renderMenu}
    </div>
  );
}

export default HeaderIndex;
