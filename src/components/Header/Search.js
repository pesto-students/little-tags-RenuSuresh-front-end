import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import "./Header.css";
import option from "./searchOption.json";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    height: "2.25rem",
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      height: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "50rem",
      minWidth: "25rem",
    },
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
  iconColor: {
    color: "#3c6787",
  },
}));
function Search({ getSearch, initialSearch }) {
  const classes = useStyles();
  const history = useHistory();
  const [search, setSearch] = useState(initialSearch);
  const [display, setDisplay] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  const handleSearch = () => {
    history.push(`/search?category=${search}`);
    setSearch("");
  };

  const inputSearch = ({ target: { value } }) => {
    setSearch(value);
    getSearch(value);
  };

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="search">
      <div
        className={classes.search}
        style={{
          background: "#e0e4e5",
          // boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
        }}
      >
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={inputSearch}
          value={search}
          onKeyPress={(event) => {
            if (event.keyCode === 13 || event.which === 13) {
              setDisplay(false);

              handleSearch();
            }
          }}
        />
        <span onClick={handleSearch} className="header__search__button">
          <SearchIcon className={classes.iconColor} fontSize="small" />
        </span>
      </div>
    </div>
  );
}

export default Search;
