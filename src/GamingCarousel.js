import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from "./images/angle-left.png";
import right from "./images/angle-right.png";
import axios from "axios";
import Trending from "./Trending";
import TrendingGrid from "./TrendingGrid";
import Card from "./Card";

const GamingCarousel = ({ videos }) => {

  const [gamingData, setGamingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crudcrud.com/api/c256a569ed104c9abc93f11366fcd9a9/mydata');
        setGamingData(response.data[0].Gaming[0]);
        console.log(response,"res")
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-5 transform -translate-y-1/3 z-10 bg-white rounded-full px-2 py-2"
      onClick={onClick}
    >
      <img src={left} className='w-5'/>
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-5 transform -translate-y-1/3 z-10 bg-white rounded-full px-2 py-2"
      onClick={onClick}
    >
      <img src={right} className='w-5'/>
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="mx-5 relative h-1/2">
  <Slider {...settings} className="h-1/3">
    {videos.map((video, index) => (
      <div key={index} className="flex justify-center items-center">
        <img src={video} alt={`Carousel ${index + 1}`} className="h-64 rounded-3xl mx-auto w-10/12 mt-5 mb-1 hover:-translate-x-1 hover:scale-105 transition-all duration-300" />
      </div>
    ))}
  </Slider>
  <Trending/>
  <TrendingGrid data={gamingData}/>
  <Card image={gamingData}/>
</div>
  );
};

export default GamingCarousel;
