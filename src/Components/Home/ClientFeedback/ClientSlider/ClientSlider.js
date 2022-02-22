import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientSlide from './ClientSlide';
import img1 from '../../../../images/customer-1.png'
import img2 from '../../../../images/customer-2.png'
import img3 from '../../../../images/customer-3.png'

const ClientSlider = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data.result));
  },[])
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
          {reviews &&
            reviews.map((review) => (
              <ClientSlide review={review} key={review._id} />
            ))}
        </Slider>
      </div>
    );
};

export default ClientSlider;