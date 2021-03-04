import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "none",
    marginLeft: "1.25rem",
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));
function Category() {
  const [t] = useTranslation("common");
  const classes = useStyles();

  return (
    <>
      <Link to="/search?category=men" className="header__category__link">
        <Typography className={classes.title} noWrap>
          {t("header.category.men")}
        </Typography>
      </Link>
      <Link to="/search?category=women" className="header__category__link">
        <Typography className={classes.title} noWrap>
          {t("header.category.women")}
        </Typography>
      </Link>
      <Link
        to="/search?category=electronics"
        className="header__category__link"
      >
        <Typography className={classes.title} noWrap>
          {t("header.category.electronics")}
        </Typography>
      </Link>
    </>
  );
}

export default Category;
