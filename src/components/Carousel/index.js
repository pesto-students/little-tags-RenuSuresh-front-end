import React, { useState } from "react";
import { Card, Hidden, makeStyles } from "@material-ui/core";
export default function CarouselSlide(props) {
  const { backgroundImage, title } = props.content;

  const useStyles = makeStyles(() => ({
    card: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "100% 100%",
      borderRadius: 5,
      height: "400px",
      width: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <h1>{title}</h1>
    </Card>
  );
}
