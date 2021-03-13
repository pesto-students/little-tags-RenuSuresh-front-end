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

import Logo from "./Logo";
import { LANG_OPTION } from "../../constant/properties";
import FormControl from "@material-ui/core/FormControl";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import LanguageIcon from "@material-ui/icons/Language";
import Badge from "@material-ui/core/Badge";
import "./Header.css";
import LoginIndex from "../Login";
import Category from "./Category";
import { useSelector } from "react-redux";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
    margin: theme.spacing(1),
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
    margin: theme.spacing(2),
    minWidth: 170,
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

function HeaderIndex() {
  const [t, i18n] = useTranslation("common");
  const [lang, setLang] = useState("english");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useSelector((state) => state);
  const login = t("header.user.login");
  const signup = t("header.user.signup");
  const cart = useSelector((state) => state.cartReducer.cart);

  const changeLang = (event) => {
    const l = LANG_OPTION[event.target.options.selectedIndex].toLowerCase();

    setLang(t(`header.language.${l}`));
    i18n.changeLanguage(l);
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
        <p>
          {user.userReducer.userData
            ? user.userReducer.userData
            : `${login}/${signup}`}
        </p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <LocalMallIcon />
        </IconButton>
        <p>0</p>
      </MenuItem>
      <MenuItem>
        <FormControl className={classes.formControl}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LanguageIcon />
            <select
              defaultValue={lang}
              onChange={(e) => changeLang(e)}
              className="header__translate"
            >
              {LANG_OPTION.map((lan, key) => (
                <option value={lan} key={key}>
                  {t(`header.language.${lan}`)}
                </option>
              ))}
            </select>
          </div>
        </FormControl>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          background: "white",
          height: "4.75rem",
          color: "black",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Toolbar>
          <Logo />
          <Category />
          <Search />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControl variant="filled" className={classes.formControl}>
              <LanguageIcon />

              <select
                defaultValue={lang}
                onChange={(e) => changeLang(e)}
                className="header__translate"
              >
                {LANG_OPTION.map((lan, key) => (
                  <option value={lan} key={key}>
                    {t(`header.language.${lan}`)}
                  </option>
                ))}
              </select>
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
              </span>
            </IconButton>
            <label className="header__user__label">
              {user.userReducer.userData
                ? user.userReducer.userData
                : `${login}/${signup}`}
            </label>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={cart.length} color="primary">
                  <LocalMallIcon />
                </Badge>
              </IconButton>
            </Link>
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
