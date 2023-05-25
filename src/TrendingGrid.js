import React from "react";

const TrendingGrid = (props) => {
    return (
        <div className="grid grid-flow-col">
            <div>
                <div className="flex gap-12 mt-4 mb-4">
                    <div className="flex gap-4">
                        <h1 className="ml-4 text-sm">#</h1>
                        <h2 className="text-sm">Collection</h2>
                    </div>
                    <div>
                        <h1 className="text-sm text-right">Volume</h1>
                    </div>
                </div>
                <div className="flex-row gap-5">
                        {props.data.Trending.slice(0, 5).map((item, index) => (
                            <button key={index} className="flex gap-4">
                            <div className="flex gap-24 mt-2 mb-4">
                                <div className="flex gap-4">
                                    <h1 className="ml-4">{item.id}</h1>
                                    <img src={item.image} alt={index} className="w-14" />
                                </div>
                                <div>
                                    <div>
                                        <h1>{item.id}</h1>
                                        <h2>Floor</h2>
                                    </div>
                                </div>
                                <div>
                                    <h1>ETH</h1>
                                </div>
                            </div>
                            </button>
                        ))}
                </div>
            </div>
            <div>
                <div className="flex gap-12 mt-4 mb-4">
                    <div className="flex gap-4">
                        <h1 className="ml-4 text-sm">#</h1>
                        <h2 className="text-sm">Collection</h2>
                    </div>
                    <div>
                        <h1 className="text-sm text-right">Volume</h1>
                    </div>
                </div>
                <div className="flex-row">
                        {props.data.Trending.slice(5, 10).map((item, index) => (
                            <button key={index} className="flex">
                            <div className="flex gap-12">
                                <div className="flex gap-4">
                                    <h1 className="ml-4">{item.id}</h1>
                                    <img src={item.image} alt={index+6} className="w-14" />
                                </div>
                                <div>
                                    <div>
                                        <h1>{item.id}</h1>
                                        <h2>Floor</h2>
                                    </div>
                                </div>
                                <div>
                                    <h1>ETH</h1>
                                </div>
                            </div>
                            </button>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingGrid;