import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { HOME_CATEGORY } from "../../constant/properties";
import "./Home.css";
import { useTranslation } from "react-i18next";
import FadeInSection from "./FadeInSection";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    [theme.breakpoints.down("md")]: {
      maxWidth: 200,
    },
    flex: 1,
  },

  media: {
    width: "25rem",
    height: "30rem",
    padding: "2rem",
    [theme.breakpoints.down("md")]: {
      height: "20ch",
    },
  },
  card: {
    position: "relative",
    height: "35ch",
    width: "25rem",
    margin: "10px",
    [theme.breakpoints.down("md")]: {
      height: "20ch",
    },
  },
  overlay: {
    position: "relative",
    bottom: "6rem",
    height: "6rem",
    width: "100%",
    color: "white",
    backgroundColor: "#00000061",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
  },

  paper: {
    height: 382,
    width: 300,
    transition: "0.5s ease-in-out",
    "@media (max-width: 780px)": {
      width: 250,
      height: 318,
    },
    "@media (max-width: 1028px)": {
      width: 250,
      height: 318,
    },
    "&:hover": {
      boxShadow: "0px 7px 10px rgba(0,0,0,0.5)",
      transform: "translateY(20px)",
    },
    "&:before": {
      content: "",
      position: "absolute",
      top: 0,
      display: "block",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to bottom, rgba(0,176,155,0.5), rgba(015,201,61,1))",
      zIndex: 2,
      transition: "0.5s all",
      opacity: 1,
    },
    "&:hover:before": {
      opacity: 1,
    },
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function CategoryType({ category, type }) {
  const [t] = useTranslation("common");
  const { tagline, image } = category;
  const classes = useStyles();

  return (
    <>
      <Grid item sm={1}>
        <Link to={() => `/search?category=${tagline}`} className="row__link">
          <Paper className={classes.paper}>
            <img
              src={image}
              alt={tagline}
              style={{ objectFit: "contain", width: "100%" }}
            />
          </Paper>
          {/* <div className="product__description"> */}
          <div className={classes.overlay}>
            <span className="row__category__tag__span">
              {t(`header.categorytype.${type}.${tagline}`)}
            </span>
          </div>
          {/* </div> */}
        </Link>
      </Grid>
    </>
  );
}

function Row({ type }) {
  const [t] = useTranslation("common");

  return (
    <>
      <div className="row__div">
        <FadeInSection>
          <h1 className="row__type">
            {t(`header.categorytype.${type}.title`)}
          </h1>
        </FadeInSection>
      </div>
      <div className="row">
        <Grid container justify="space-evenly" spacing={3}>
          {HOME_CATEGORY[0][type].map((category, i) => (
            <CategoryType
              category={category}
              type={type}
              key={`${category}${i}`}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Row;
