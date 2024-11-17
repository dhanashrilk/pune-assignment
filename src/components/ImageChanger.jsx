import React, { useState, useEffect } from "react";
import firstImage from "../images/1.webp";
import secondImage from "../images/2.webp";
import thirdImage from "../images/4.webp";
import fourthImage from "../images/5.webp";
import fifthImage from "../images/7.webp";
import sixthImage from "../images/8.webp";

const ImageChanger = () => {
  const images = [
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    fifthImage,
    sixthImage,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ height: "300px" }}
      />
    </>
  );
};

export default ImageChanger;
