import React from "react";

const Trending = () => {
    return (
        <div className="ml-3 mr-3">
        <div className="flex mt-8 justify-between">
            <div className="flex gap-10 ml-4">
                <button className="text-3xl font-bold">Trending</button>
                <button className="text-3xl font-bold">Top</button>
            </div>
            <div className="flex float-right ml-1/2 gap-5 mr-4">
                <div className="flex border-2 rounded-xl gap-3 px-4 font-medium text-lg text-gray-600">
                    <button className="p-1 hover:bg-gray-100 w-1/4">1h</button>
                    <button className="p-1 hover:bg-gray-100 w-1/4">6h</button>
                    <button className="p-1 hover:bg-gray-100 w-1/4">24h</button>
                    <button className="p-1 hover:bg-gray-100 w-1/4">7d</button>
                </div>
                <div className="flex">
                    <select className="p-2 rounded-xl border-2 bg-white font-medium px-5">
                        <option>All chains</option>
                        <option>Arbitrum</option>
                        <option>Avalanche</option>
                        <option>BNB Chain</option>
                        <option>Ethereum</option>
                        <option>Klaytn</option>
                        <option>Optimism</option>
                        <option>Polygon</option>
                        <option>Solana</option>
                    </select>
                </div>
                <div>
                    <button className="border-2 p-2 px-8 rounded-xl font-medium">View all</button>
                </div>
            </div>
        </div>
            <hr className="w-screen mt-2"/>
        </div>
    )
}
export default Trending;