import React, { createContext } from "react";
import { useLocation } from "react-router-dom";
import Row from "./Row";
import "./Category.css";
import "./CheckboxGroup";
import Grid from "@material-ui/core/Grid";
import CheckBoxesGroup from "./CheckboxGroup";

function CategoryIndex() {
  const search = useLocation().search;

  let name = new URLSearchParams(search).get("category");

  return (
    <div className="category">
      <Grid container>
        <Grid item xs={2}>
          <CheckBoxesGroup />
        </Grid>
        <Grid item xs={10}>
          <Row category={name.toLowerCase()} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CategoryIndex;
