import React from "react";
import { useLocation } from "react-router-dom";
import Row from "./Row";
import "./Category.css";

function CategoryIndex() {
  const search = useLocation().search;

  let name = new URLSearchParams(search).get("category");

  return (
    <div className="category">
      <Row category={name.toLowerCase()} />
    </div>
  );
}

export default CategoryIndex;
