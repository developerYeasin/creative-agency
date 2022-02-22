import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './SliderItem';
import image from '../../../../images/carousel-1.png'
import image2 from '../../../../images/carousel-2.png'
import image3 from '../../../../images/carousel-7.png'

const OurWorkSlider = () => {
    const slides = [
      {
        img: image,
      },
      {
        img: image2,
      },
      {
        img: image3,
      },
    ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div>
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <SliderItem slide={slide} key={i}/>
          ))}
        </Slider>
      </div>
    );
};

export default OurWorkSlider;