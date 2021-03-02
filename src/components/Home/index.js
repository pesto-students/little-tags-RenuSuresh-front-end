import React from "react";
import Row from "./Row";
import CarouselContainer from "../CarouselContainer";

function HomeIndex() {
  return (
    <div>
      <CarouselContainer />
      <Row type="spotlight" />
      <Row type="special" />
      <Row type="toptrends" />
    </div>
  );
}

export default HomeIndex;
