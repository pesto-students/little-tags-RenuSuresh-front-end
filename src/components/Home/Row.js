import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import { HOME_CARD_IMG } from "../../constant/properties";
import "./Home.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 455,
    maxHeight: 300,
  },
});

function Row({ type }) {
  const classes = useStyles();

  return (
    <div className="row">
      {HOME_CARD_IMG[0][type].map((category) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={category.tagline}
              height="340"
              image={category.image}
              title={category.tagline}
            />
            <div className="row__category__tag">{category.tagline}</div>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Row;
