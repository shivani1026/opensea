import React from 'react';
import logo from './images/opensea-white.svg';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-4">
        <div className="flex-row justify-between mt-3">
            <center>
            <h1 className='text-xl font-bold p-2'>Stay in the loop</h1>
            <p className='text-lg'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
            </center>
       </div>
        <div className=' gap-3'>
            <input type="text" placeholder='your email address' className='p-2 mt-4 w-auto rounded-xl'></input>
            <button className='bg-blue-500 mt-4 w-24 rounded-xl h-10 ml-3 font-bold'>Sign up</button>
        </div>
     
      <div className='flex justify-center mt-5'>
        <h1 className='text-xl font-bold'>Join the community</h1>
      </div>
      <hr></hr>
      <div className='flex flex-col justify-center'>
        <center><img src={logo} alt="white logo" className='w-10 mt-5'></img>
        <button className='text-xl font-bold'>OpenSea</button>
        <p className='text-base mt-2 mb-5'>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p></center>
      </div>
      <hr></hr>
      <div className='flex justify-center mt-4'>
        <p>&copy; 2018 - 2023 Ozone Networks, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
