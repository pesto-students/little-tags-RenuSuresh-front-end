import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.css";
import { SLIDE_INFO } from "../../constant/properties";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

const dataPerPage = 3;

const durationEnter = 1500;
const durationExit = 500;
function CarouselTestIndex() {
  const [currentSlide, setcurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(Math.ceil(SLIDE_INFO.length / dataPerPage));

  const getChangeOfPage = useCallback(() => {
    if (currentSlide === 0) return 1;

    // If the change comes from the right side, move on to the next page
    if (currentSlide === (dataPerPage - 1) * currentPage) {
      // But if we are already at the last page, then return to the first page
      if (currentPage === totalPages) return 1;
      return setCurrentPage((prev) => prev + 1);
    }

    // If the change comes from the left side, go back to the previous page
    if (
      currentSlide === (dataPerPage - 1) * (currentPage - 1) &&
      currentSlide !== 0
    )
      return setCurrentPage((prev) => prev - 1);

    return currentPage;
  }, [currentSlide, currentPage, totalPages]);
  const handleCarouselTurn = useCallback(() => {
    if (currentSlide + 1 >= SLIDE_INFO.length) {
      setcurrentSlide(0);
    } else {
      setcurrentSlide((prev) => prev + 1);
    }

    setCurrentPage(getChangeOfPage(currentSlide, setCurrentPage));
  }, [currentSlide, getChangeOfPage]);

  useEffect(() => {
    const tId = setInterval(() => handleCarouselTurn(), 5000);

    return () => {
      clearInterval(tId);
    };
  }, [handleCarouselTurn]);

  function handleClick(to) {
    setcurrentSlide(to);
    setCurrentPage((prev) => getChangeOfPage(to, prev));
  }

  function getPointIndexes() {
    return [...Array(dataPerPage).keys()].map(
      (x) => x + (dataPerPage - 1) * (currentPage - 1)
    );
  }
  const indexArray = getPointIndexes();

  return (
    <div>
      <div className="App">
        <Box className="principal">
          <Box className="carousel">
            {SLIDE_INFO.map((d, index) => (
              <Fade
                key={`${d}${index}`}
                className="content"
                in={index === currentSlide}
                timeout={{ enter: durationEnter, exit: durationExit }}
              >
                <Paper elevation={2} className="paper">
                  <img
                    src={d.backgroundImage}
                    alt={d.backgroundImage}
                    className="slide__image"
                  />
                </Paper>
              </Fade>
            ))}
          </Box>

          <Box className="dot">
            {indexArray.map((index) => {
              if (currentPage > totalPages || index >= SLIDE_INFO.length) {
                return null;
              }
              return (
                <span
                  key={`dot-${index}`}
                  onClick={() => handleClick(index)}
                  style={{
                    marginLeft: "5px",
                    cursor: "pointer",
                    fontSize:
                      // Right
                      (index === (dataPerPage - 1) * currentPage &&
                        currentPage < totalPages) ||
                      // Left
                      (index === (dataPerPage - 1) * (currentPage - 1) &&
                        index !== 0)
                        ? "15px"
                        : "20px",
                    color: currentSlide === index ? "salmon" : "pink",
                    textShadow: "0 3px 3px mistyrose",
                  }}
                >
                  &#9679;
                </span>
              );
            })}
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default CarouselTestIndex;
