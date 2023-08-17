import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const [sliderImages, setSliderImages] = useState([
    '../../assets/images/7.jpg',
    '../../assets/images/6.jpg',
    '../../assets/images/4.jpg',
    '../../assets/images/5.jpg',
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {sliderImages.map((image, index) => (
        <div key={index}>
          <img src={image} width={1280} height={720} alt={`Slider ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;