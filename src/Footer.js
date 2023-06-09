import React from 'react';
import logo from './images/opensea-white.svg';
import twitter from "./images/twitter.png";
import fb from "./images/facebook.png";
import yt from "./images/youtube.png";
import mail from "./images/envelope.png";
import insta from "./images/instagram.png";
import linked from "./images/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-4 mt-14">
      <div className="flex-row justify-between mt-3">
        <center>
          <h1 className='text-xl font-bold p-2'>Stay in the loop</h1>
          <p className='text-lg'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
          </center>
      </div>
      <div className='flex justify-center items-center'>
        <input type="text" placeholder='your email address' className='p-2 mt-4 w-auto rounded-xl'></input>
        <button className='bg-blue-500 mt-4 w-24 rounded-xl h-10 ml-3 font-bold'>Sign up</button>
      </div>
     
      <div className='flex justify-center mt-5'>
        <h1 className='text-xl text-black font-bold'>Join the community</h1>
      </div>
      <div className='flex justify-center items-center gap-5 mb-6 mt-3'>
          <img src={twitter} className='w-10 h-10 bg-white rounded-lg'></img>
          <img src={fb} className='w-10 h-10 bg-white rounded-full'></img>
          <img src={yt} className='w-10 h-10 bg-white rounded-lg'></img>
          <img src={mail} className='w-10 h-10 bg-white rounded-lg'></img>
          <img src={insta} className='w-10 h-10 bg-white rounded-lg'></img>
          <img src={linked} className='w-10 h-10 bg-white rounded-lg'></img>
      </div>
      <hr className='text-slate-50'></hr>
      <div className='flex flex-col justify-center'>
        <center><img src={logo} alt="white logo" className='w-10 mt-5'></img>
        <button className='text-xl font-bold'>OpenSea</button>
        <p className='text-base mt-2 mb-5'>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p></center>
      </div>
      <hr className='text-slate-50'></hr>
      <div className='flex justify-center mt-6 mb-3'>
        <p>&copy; 2018 - 2023 Ozone Networks, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
