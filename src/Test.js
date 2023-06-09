import React from 'react';
const Test = ( props ) => {
 


  const handleTabClick = () => {
    console.log("hi");
  };


  return (
    <div className="">
      <h1 className="ml-7 mb-6 font-bold text-2xl">Notable Collections</h1>
      <div className="grid grid-cols-5 gap-4 mx-7 my-5">
        
        {props.image.Trending &&
          props.image.Trending.map((item, index) => (
            <a href="http://localhost:3000/" onClick={handleTabClick} key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
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
          ))}
      </div>
    </div>
  );
};

export default Test;
