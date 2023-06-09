import React from "react";

const TrendingGrid = (props) => {
  return (
    <div className="grid grid-flow-col gap-12 items-center justify-center">
      <div className="w-1/2">
        <div className="flex gap-96 mt-4 mb-4 ml-3">
          <div className="flex gap-4 w-1/2">
            <h1 className="ml-4 text-sm text-slate-500">#</h1>
            <h2 className="text-sm text-slate-500">Collection</h2>
          </div>
          <div className="flex gap-24 text-right">
            <h1 className="text-sm text-slate-500">Floor</h1>
            <h1 className="text-sm text-slate-500">Volume</h1>
          </div>
        </div>
        <div className="gap-5">
          {props.data.Trending &&
            props.data.Trending.slice(0, 5).map((item) => (
              <button key={item.id} className="flex hover:bg-gray-100 ml-3 pr-6">
                <div className="flex gap-[365px] mt-2 mb-4">
                  <div className="flex gap-6 w-1/2">
                    <h1 className="ml-4 font-bold w-1/12">{item.id}</h1>
                    <img src={item.image} alt={item.id} className="w-[55px] h-[55px] rounded-lg" />
                    <h1 className="font-bold text-left">{item.title}</h1>
                  </div>
                  <div className="grid grid-cols-2 gap-32">
                    <div className="">
                      <h2>{item.volume}</h2>
                    </div>
                    <div>
                      <h1 className="font-bold">{item.volume}</h1>
                    </div>
                  </div>
                </div>
              </button>
            ))}
        </div>
      </div>

      <div className="w-1/2">
        <div className="flex gap-96 mt-4 mb-4 ml-3">
          <div className="flex gap-4 w-1/2">
            <h1 className="ml-4 text-sm text-slate-500">#</h1>
            <h2 className="text-sm text-slate-500">Collection</h2>
          </div>
          <div className="flex gap-24 text-right">
            <h1 className="text-sm text-slate-500">Floor</h1>
            <h1 className="text-sm text-slate-500">Volume</h1>
          </div>
        </div>
        <div className="gap-5">
          {props.data.Trending &&
            props.data.Trending.slice(5, 10).map((item) => (
              <button key={item.id} className="flex hover:bg-gray-100 ml-3 pr-6">
                <div className="flex gap-[365px] mt-2 mb-4">
                  <div className="flex gap-6 w-1/2">
                    <h1 className="ml-4 font-bold w-1/12">{item.id}</h1>
                    <img src={item.image} alt={item.id} className="w-[55px] h-[55px] rounded-lg" />
                    <h1 className="font-bold text-left">{item.title}</h1>
                  </div>
                  <div className="flex text-left w-1/2 gap-28">
                    <div className="">
                      <h2>{item.volume}</h2>
                    </div>
                    <div>
                      <h1 className="font-bold">{item.volume}</h1>
                    </div>
                  </div>
                </div>
              </button>
            ))}
        </div>
      </div>

    </div>
  );
};

export default TrendingGrid;
