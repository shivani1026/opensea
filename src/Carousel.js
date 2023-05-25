import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className='flex justify-center mt-4'>
          <img src={image} alt={`Carousel ${index + 1}`} className='pl-5 pr-5 h-96 w-10/12' />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
