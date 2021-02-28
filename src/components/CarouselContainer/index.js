import React, { useState } from "react";
import CarouselSlide from "./../Carousel";
import { SLIDE_INFO } from "./../../constant/properties";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === "left" ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;

  return <div onClick={clickFunction}>{icon}</div>;
}

export default function CarouselContainer() {
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;
  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };
  return (
    <div className="carousel">
      <Arrow direction="left" clickFunction={() => onArrowClick("left")} />
      <CarouselSlide content={content} />
      <Arrow direction="right" clickFunction={() => onArrowClick("right")} />
    </div>
  );
}
