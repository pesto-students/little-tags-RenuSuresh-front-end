import React from "react";
import Row from "./Row";
function HomeIndex() {
  return (
    <div>
      <h1>t("header.categorytype.inthespotlight.title")</h1>
      <Row type="spotlight" />
      <Row type="special" />
      <Row type="toptrends" />
    </div>
  );
}

export default HomeIndex;
