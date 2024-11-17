import React from "react";
import Slider from "react-slick";
import firstSlide from "../images/1.webp";
import secondSlide from "../images/10.webp";
import thirdSlide from "../images/11.webp";
import fourthSlide from "../images/12.webp";
import fifthSlide from "../images/2.webp";
import sixthSlide from "../images/4.webp";
import seventhSlide from "../images/5.webp";
import eightSlide from "../images/7.webp";
import ninethSlide from "../images/8.webp";

const images = [
  firstSlide,
  secondSlide,
  thirdSlide,
  fourthSlide,
  fifthSlide,
  sixthSlide,
  seventhSlide,
  eightSlide,
  ninethSlide,
];

export default function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    touchThreshold: 100,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slick-carousel">
      <Slider {...settings}>
        {images.map((slide) => (
          <div key={slide.id} className="item">
            <div
              key={slide.image}
              className="bg"
              style={{
                backgroundImage: `url(${slide})`,
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
