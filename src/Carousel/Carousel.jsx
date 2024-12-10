import React from "react";
import { useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const images = [
    "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
  ];

  return (
    <div className="componentContainer">
      <div className="imageContainer">
        <img src={images[activeIndex]} />
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
