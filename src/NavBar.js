import React from "react";
import logo from "./images/opensea-logo.svg";

const NavBar = () => {
    return (
        <div>
            <nav className="bg-blue-800 p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="white logo" className='w-10 mr-2'/>
                    <h1 className="text-white text-xl font-bold">OpenSea</h1>
                </div>
                <div className="flex items-center">
                    <input type="text" placeholder="Search items, collections..." className="p-2 rounded-l-lg"/>
                    <button className="bg-gray-700 text-white p-2 rounded-r-lg">Search</button>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;