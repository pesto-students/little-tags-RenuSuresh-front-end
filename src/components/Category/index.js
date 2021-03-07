import React from "react";
import { useLocation } from "react-router-dom";
import Row from "./Row";
import "./Category.css";

function CategoryIndex() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("category");

  return (
    <div>
      <Row category={name} />
    </div>
  );
}

export default CategoryIndex;
