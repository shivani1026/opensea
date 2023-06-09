import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from "./images/angle-left.png";
import right from "./images/angle-right.png";

const Carousel = ({ videos }) => {
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 bg-white rounded-full px-2 py-2"
      onClick={onClick}
    >
      <img src={left} alt="Previous" className='w-5'/>
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 bg-white rounded-full px-2 py-2"
      onClick={onClick}
    >
      <img src={right} alt="Previous" className='w-5'/>
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="mx-5">
      <Slider {...settings} className='h-[620px]'>
        {videos.map((video, index) => (
          <div key={index} className="flex justify-center items-center h-[630px]">
              <video src={video} alt={`Carousel ${index + 1}`}
                className="h-[567px] rounded-3xl mx-auto w-[1360px] mt-5 mb-1 hover:-translate-x-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
                autoPlay
                loop
                muted
                playsInline
              />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
