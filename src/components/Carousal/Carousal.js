import { useState } from "react";

import classes from "./Carousal.module.css";

const Carousal = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];

  const nextButtonHandler = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevButtonHandler = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h2>Project 1: Image Carousal</h2>
      <div class={classes.slider}>
        <div class={classes["left-arrow"]} onClick={prevButtonHandler}>
          ⬅
        </div>
        <div class={classes.slide}>
          <img
            className={classes["carousal-images"]}
            src={images[imageIndex]}
            alt="images"
          />
        </div>
        <div class={classes["right-arrow"]} onClick={nextButtonHandler}>
          ⮕
        </div>
      </div>
    </>
  );
};

export default Carousal;
