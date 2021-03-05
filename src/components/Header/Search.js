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
      width: "40rem",
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
}));
function Search() {
  const classes = useStyles();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);

  const handleSearch = () => {
    history.push(`/search?title=${search}`);
    setSearch("");
  };

  const inputSearch = ({ target: { value } }) => {
    setSearch(value);

    if (value.length > 1) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateSearchDropDown = (value) => {
    setSearch(value);
    setDisplay(false);
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
            >
              <span>{value.name}</span>
            </div>
          );
        })}
    </div>
  );
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
          background: "#f4f1f1",
          boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
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
        />
        <span onClick={handleSearch} className="header__search__button">
          <SearchIcon />
        </span>
      </div>
      {display && searchDropDown}
    </div>
  );
}

export default Search;
