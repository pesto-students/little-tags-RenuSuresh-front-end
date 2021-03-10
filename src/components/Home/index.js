import React from "react";
import Row from "./Row";
import CarouselTestIndex from "../CaraouselHome";

function HomeIndex() {
  return (
    <div>
      <CarouselTestIndex />
      <Row type="spotlight" />
      <Row type="special" />
      <Row type="toptrends" />
    </div>
  );
}

export default HomeIndex;
