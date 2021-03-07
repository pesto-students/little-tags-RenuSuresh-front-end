import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { HOME_CATEGORY } from "../../constant/properties";
import "./Home.css";
import { useTranslation } from "react-i18next";

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
    height: 300,
    width: 300,
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
      <Grid item>
        <Link to={() => `/search?category=${tagline}`}>
          <Paper className={classes.paper} elevation={3}>
            <img
              src={image}
              alt={tagline}
              style={{ objectFit: "contain", width: "100%" }}
            />
          </Paper>
          <div className={classes.overlay}>
            <span className="row__category__tag__span">
              {t(`header.categorytype.${type}.${tagline}`)}
            </span>
          </div>
        </Link>
      </Grid>
    </>
  );
}

function Row({ type }) {
  const [t] = useTranslation("common");

  return (
    <>
      <h1 className="row__type">{t(`header.categorytype.${type}.title`)}</h1>
      <div className="row">
        <Grid container justify="space-evenly">
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
