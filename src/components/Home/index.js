import React from "react";
import Row from "./Row";
function HomeIndex() {
  return (
    <div>
      <Row type="spotlight" />
      <Row type="special" />
      <Row type="toptrends" />
    </div>
  );
}

export default HomeIndex;
