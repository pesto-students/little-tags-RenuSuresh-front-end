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
import Login from "../Login/Login";

import Category from "./Category";
import { useSelector } from "react-redux";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import option from "./searchOption.json";
import { useHistory } from "react-router-dom";
import MenuItems from "./MenuItems";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HistoryIcon from "@material-ui/icons/History";
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
    marginRight: "7em",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  iconColor: {
    color: "#03045e",
    fontSize: "0.8em",
  },
  overlap: {
    zIndex: 1,
  },
}));

function HeaderIndex() {
  const [t, i18n] = useTranslation("common");
  const [lang, setLang] = useState("english");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [showLang, setShowLang] = useState(false);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const user = useSelector((state) => state);
  const login = t("header.user.login");
  const signup = t("header.user.signup");
  const cart = useSelector((state) => state.cartReducer.cart);
  const history = useHistory();

  const changeLang = (event) => {
    const l =
      event.target != undefined
        ? LANG_OPTION[event.target.options.selectedIndex].toLowerCase()
        : LANG_OPTION[event].toLowerCase();
    setLang(t(`header.language.${l}`));
    i18n.changeLanguage(l);
    handleMobileMenuClose();
  };

  const updateSearchDropDown = (value) => {
    setSearch(value);
    setDisplay(false);
    history.push(`/search?category=${value}`);
    setSearch("");
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

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const handleLang = (key) => {
    changeLang(key);
    setOpen(false);
  };

  const searchDropDown = (
    <div className="header__searchdropdown">
      {option
        .filter(
          ({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1
        )
        .map((value, i) => {
          if (i > 2) {
            return null;
          }
          return (
            <div
              onClick={() => updateSearchDropDown(value.name)}
              className="option"
              key={i}
              tabIndex="0"
              onKeyPress={(event) => {
                if (event.keyCode === 13 || event.which === 13) {
                  updateSearchDropDown(value.name);
                }
              }}
            >
              <span>{value.name}</span>
            </div>
          );
        })}
    </div>
  );
  const getSearch = (data) => {
    if (data.length > 2) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
    setSearch(data);
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
          <AccountCircle className={classes.iconColor} />
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
          <LocalMallIcon className={classes.iconColor} />
        </IconButton>
        <p>{cart.length}</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <FavoriteIcon className={classes.iconColor} />
        </IconButton>
        <p>{t(`header.wishlist`)}</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <HistoryIcon className={classes.iconColor} />
        </IconButton>
        <p>{t(`header.orderHistory`)}</p>
      </MenuItem>
      <MenuItem>
        <div className={classes.formControl}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LanguageIcon className={classes.iconColor} />
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
        </div>
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
          <Search getSearch={getSearch} initialSearch={search} />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Tooltip title="Change Language">
                <LanguageIcon className={classes.iconColor} />
              </Tooltip>
            </IconButton>

            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={cart.length} color="primary">
                  <LocalMallIcon className={classes.iconColor} />
                </Badge>
              </IconButton>
            </Link>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Tooltip
                title={
                  user.userReducer.userData
                    ? user.userReducer.userData
                    : `${login}/ ${signup}`
                }
              >
                <AccountCircle className={classes.iconColor} />
              </Tooltip>
            </IconButton>

            <MenuItems />

            {/* popper start */}

            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              className={classes.overlap}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        {LANG_OPTION.map((lan, key) => (
                          <MenuItem
                            value={lan}
                            key={key}
                            onClick={() => handleLang(key)}
                          >
                            {t(`header.language.${lan}`)}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            {/* popper  end */}
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
      <div
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        {display && searchDropDown}
      </div>
    </div>
  );
}

export default HeaderIndex;
