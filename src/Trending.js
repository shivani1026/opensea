import React from "react";

const Trending = () => {
    return (
        <div className="">
        <div className="flex mt-8 justify-between">
            <div className="flex gap-2 ml-4">
                <button className="text-xl">Trending</button>
                <button disabled>|</button>
                <button className="text-xl">Top</button>
            </div>
            <div className="flex float-right ml-1/2 gap-5 mr-4">
                <div className="flex border-2 rounded-xl gap-1 pr-2 pl-2">
                    <button className="p-1">1h</button>
                    <button className="p-1">6h</button>
                    <button className="p-1">24h</button>
                    <button className="p-1">7d</button>
                </div>
                <div className="">
                    <select className="p-2 rounded-xl">
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
                    <button className="border-2 p-2 rounded-xl">View all</button>
                </div>
            </div>
        </div>
            <hr className="w-screen mt-2"/>
        </div>
    )
}
export default Trending;