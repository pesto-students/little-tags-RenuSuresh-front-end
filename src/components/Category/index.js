import React from "react";
import { useLocation } from "react-router-dom";
import Row from "./Row";
import "./Category.css";
import CheckBoxesGroup from "./CheckBoxGroup";
import Grid from "@material-ui/core/Grid";

function CategoryIndex() {
  const search = useLocation().search;

  let name = new URLSearchParams(search).get("category");

  return (
    <div className="category">
      <Grid container>
        <Row category={name.toLowerCase()} />
      </Grid>
    </div>
  );
}

export default CategoryIndex;
