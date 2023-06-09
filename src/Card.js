import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from "./images/angle-left.png";
import right from "./images/angle-right.png";

const Card = (props) => {
  
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/5 z-10 bg-white rounded-full px-2 opacity-0 hover:opacity-100 transition-opacity py-2 duration-300"
      onClick={onClick}
    >
      <img src={left} className="w-5" alt="Previous Arrow" />
    </button>
  );
  
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/5 z-10 bg-white rounded-full px-2 py-2 duration-300"
      onClick={onClick}
    >
      <img src={right} className="w-5" alt="Next Arrow" />
    </button>
  );
  

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   draggable: true,
  //   prevArrow: <PrevArrow />,
  //   nextArrow: <NextArrow />,
  // };
  const handleTabClick = () => {
    console.log("hi");
  };

  return (
<div>
  <h1 className="ml-7 mt-7 font-bold text-2xl">Notable Collections</h1>
  
  <Slider
    dots={false}
    infinite={true}
    speed={400}
    slidesToShow={5}
    slidesToScroll={1}
    prevArrow = {<PrevArrow/>}
    nextArrow= {<NextArrow />}
    className="mx-5 mb-5 h-[295px]"
  >
  {props.image.Trending &&
      props.image.Trending.map((item, index) => (
        <div>
        <a href="http://localhost:3000/" onClick={handleTabClick} key={index} className="my-4 mx-4 mr-12">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[273px] mr-12 hover:shadow-xl hover:-translate-x-1 hover:scale-105 transition-all duration-300">
            <img
              className="w-full h-48 object-cover"
              src={item.image2}
              alt="Card"
            />
            <div className="pl-3 pt-3">
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            </div>
            <div className="flex pl-3">
              <div className="w-1/2">
                <h1 className="text-sm text-slate-600">Floor</h1>
                <p className="text-gray-700 font-bold pb-3">{item.floor} ETH</p>
              </div>
              <div className="">
                <h1 className="text-sm text-slate-600">Total Volume</h1>
                <p className="text-gray-700 font-bold pb-3">{item.volume}</p>
              </div>
            </div>
          </div>
        </a>
        </div>
      ))}
  </Slider>

  <Slider
  dots={false}
  infinite={true}
  speed={400}
  slidesToShow={5}
  slidesToScroll={1}
  prevArrow={<PrevArrow />}
  nextArrow={<NextArrow />}
  className="mx-5 my-5 h-[285px]"
>
  {props.image.Trending &&
    props.image.Trending.map((item, index) => (
      <div className="h-[300px]">
        <a href="http://localhost:3000/" onClick={handleTabClick} key={index} className="my-4 mx-4 mr-12">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[273px] mr-12 hover:shadow-lg hover:-translate-x-1 hover:scale-105 transition-all duration-300 shadow-md">
            <img
              className="w-full h-48 object-cover"
              src={item.image2}
              alt="Card"
            />
            <div className="pl-3 pt-3">
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            </div>
            <div className="flex pl-3">
              <div className="w-1/2">
                <h1 className="text-sm text-slate-600">Floor</h1>
                <p className="text-gray-700 font-bold pb-3">{item.floor} ETH</p>
              </div>
              <div className="">
                <h1 className="text-sm text-slate-600">Total Volume</h1>
                <p className="text-gray-700 font-bold pb-3">{item.volume}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    ))}
</Slider>

</div>





//     <div className=" relative h-full gap-9  ">
//       <h1 className="mb-6 font-bold text-2xl">Notable Collections</h1>
//       <div className="flex flex-col gap-12">
//       <Slider {...settings} className="">
//   {props.image.Trending &&
//     props.image.Trending.map((item, index) => (
//       <a href="http://localhost:3000/" onClick={handleTabClick} key={index}>
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
//           <img className="w-full h-48 object-cover" src={item.image2} alt="Card" />
//           <div className="pl-3 pt-3">
//             <h2 className="text-lg font-bold mb-2">{item.title}</h2>
//           </div>
//           <div className="flex pl-3">
//             <div className="w-1/2">
//               <h1 className="text-sm text-slate-600">Floor</h1>
//               <p className="text-gray-700 font-bold pb-3">{item.floor} ETH</p>
//             </div>
//             <div className="">
//               <h1 className="text-sm text-slate-600">Total Volume</h1>
//               <p className="text-gray-700 font-bold pb-3">{item.volume}</p>
//             </div>
//           </div>
//         </div>
//       </a>
//     ))}
// </Slider>

//       <Slider {...settings}>
//       {props.image.Trending &&
//           props.image.Trending.map((item, index) => (
//             <a href="http://localhost:3000/" onClick={handleTabClick} key={index}>
//               <div className="bg-white w-11/12 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-x-1 hover:scale-105 transition-all duration-300">
//                 <img
//                   className="w-full h-44 object-cover"
//                   src={item.image2}
//                   alt="Card"
//                 />
//                 <div className="pl-3 pt-3">
//                   <h2 className="text-lg font-bold mb-2">{item.title}</h2>
//                 </div>
//                 <div className="flex pl-3">
//                   <div className="w-1/2">
//                     <h1 className="text-sm text-slate-600">Floor</h1>
//                     <p className="text-gray-700 font-bold pb-3">{item.floor} ETH</p>
//                   </div>
//                   <div className="">
//                     <h1 className="text-sm text-slate-600">Total Volume</h1>
//                     <p className="text-gray-700 font-bold pb-3">{item.volume}</p>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//       </Slider>
//       </div>
//     </div>
  );
};

export default Card;
